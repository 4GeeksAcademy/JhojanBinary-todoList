// TodoItem.js
import React from "react";

const TodoItem = ({ item, index, handleDelete }) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            {item}
            <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;
