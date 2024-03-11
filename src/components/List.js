import { useState } from 'react';
import React from 'react';

const List = React.memo(({ id, title, cost, completed, crudData, setCrudData, provided, snapshot, handleClick }) => {

    const [isEditing, setisEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedCost, setEditedCost] = useState(cost);

    const handleCompleteChange = (id) => {
        let newCrudData = crudData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setCrudData(newCrudData);
        localStorage.setItem("crudData", JSON.stringify(newCrudData));
    };

    const handleEditChange = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleEditChangeCost = (event) => {
        setEditedCost(event.target.cost);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newCrudData = crudData.map(data => {
            if (data.id === id) {
                data.title = editedTitle;
                data.cost = editedCost;
            }
            return data;
        })

        setCrudData(newCrudData);
        localStorage.setItem("crudData", JSON.stringify(newCrudData));
        setisEditing(false);
    };


    if(isEditing) {
        return(
            <div className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                <div className="items-center">
                    <form onSubmit={handleSubmit}>
                        <input value={editedTitle}
                            onChange={handleEditChange}
                            className='w-full px-3 py-2 mr-4 text-gray-500 rounded' />{" "}

                        <input value={editedCost}
                            onChange={handleEditChangeCost}
                            className='w-full px-3 py-2 mr-4 text-gray-500 rounded' />{" "}
                    </form>
                </div>
                <div className="items-center">
                    <button className="px-4 py-2 float-right" onClick={() => setisEditing(false)}>x</button>
                    <button className="px-4 py-2 float-right" onClick={handleSubmit} type="submit">save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div 
                key={id} 
                {...provided.draggableProps} 
                ref={provided.innerRef} 
                {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                <div className="items-center">
                    <input type="checkbox"
                        onChange={() => handleCompleteChange(id)}
                        defaultChecked={completed} />{" "}
                    <span className={completed ? "line-through" : undefined}>{title}</span>
                    <span className={completed ? "line-through" : undefined}>{cost}</span>
                </div>
                <div className="items-center">
                    <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                    <button className="px-4 py-2 float-right" onClick={() => setisEditing(true)}>edit</button>
                </div>
            </div>
        )
    }
})

export default List
