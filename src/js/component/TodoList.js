import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todosList, handleDelete }) => {
    return (
        <ul className="list-group list">
            {todosList.map((item, index) => (
            
            
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    handleDelete={handleDelete}
                />

                
            ))}
        </ul>
    );
};

export default TodoList;