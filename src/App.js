import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1500 },
    { id: 2, charge: '교통비', amount: 3000 }
  ]);

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    console.log(id);

    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      if(isEditing) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })

        setExpenses(newExpenses);
        setIsEditing(false);

      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount
        }
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        setAmount(0);
        setCharge('');
      }
    } else {
      alert("Please enter")
    }
  }

  const handleEdit = (id) => {
    const expense = expenses.find(expense => expense.id === id);
    const { charge, amount } = expense;
    setId(id);
    setIsEditing(true);
    setCharge(charge);
    setAmount(amount);
  }

  return (
    <div className="App">
      <main>
        <h1>
          예산 계산기
        </h1>
        <div>
          <ExpenseForm isEditing={isEditing} charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} initialExpenses={expenses} />
        </div>

        <div>
          <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>

        <div>
          <p>
            총 지출:
            <span>{expenses.reduce((acc, curr) => {
              return acc += curr.amount
            }, 0)
            }원</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
