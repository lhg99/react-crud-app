import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({initialExpenses, handleDelete, handleEdit}) => {
    
    return (
        <>
            <ul>
                {
                    initialExpenses.map(expense => {
                        return(
                            <ExpenseItem 
                                key={expense.id} 
                                expense={expense} 
                                handleDelete={handleDelete}
                                handleEdit={handleEdit} />
                        )
                    })
                }
            </ul>
            <button>
                목록 지우기
            </button>
        </>
    )
}

export default ExpenseList