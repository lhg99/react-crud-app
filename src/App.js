import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

const initialCrudData = localStorage.getItem("crudData") ? JSON.parse(localStorage.getItem("crudData")) : [];

export default function App() {

  const [crudData, setCrudData] = useState(initialCrudData);
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);

  const handleClick = useCallback((id) => {
    let newCrudData = crudData.filter((data) => data.id !== id);
    setCrudData(newCrudData);
    localStorage.setItem("crudData", JSON.stringify(newCrudData));
  }, [crudData]);

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 것 막아줌
    e.preventDefault();

    // 새로운 crud 데이터
    let newCrud = {
        id: Date.now(),
        title: value,
        cost: price,
        completed: false
    };

    // 원래 있던 데이터에 추가하기 인수에 함수를 이용해서 사용
    setCrudData(prev => [...prev, newCrud]);
    localStorage.setItem("crudData", JSON.stringify([...crudData, newCrud]));

    console.log(crudData);

    setValue("");
    setPrice(0);
  };
  
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-yellow-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>예산 계산기</h1>
        </div>
        
        <Lists crudData={crudData} setCrudData={setCrudData} handleClick={handleClick} />
        
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} price={price} setPrice={setPrice} />
      </div>
    </div>
  )
}

