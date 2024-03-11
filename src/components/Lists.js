import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(({ crudData, setCrudData, handleClick }) => {

    const handleEnd = (result) => {
        console.log(result);

        if (!result.destination) return;

        const newCrudData = [...crudData];

        const [reorderedItem] = newCrudData.splice(result.source.index, 1);

        newCrudData.splice(result.destination.index, 0, reorderedItem);
        setCrudData(newCrudData);
    };

    return (
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="cruds">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {Array.isArray(crudData) && crudData.map((data, index) => (
                            <Draggable
                                key={data.id}
                                draggableId={data.id.toString()}
                                index={index}>
                                    {(provided, snapshot) => (
                                        <List
                                            handleClick={handleClick}
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            cost={data.cost}
                                            completed={data.completed}
                                            crudData={crudData}
                                            setCrudData={setCrudData}
                                            provided={provided}
                                            snapshot={snapshot} />
                                        )}
                                    </Draggable>
                                ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
})

export default Lists