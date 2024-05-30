import React from "react";

const DeleteAllButton = ({ deleteTodos }) => {
    return (
        <button
            className="deleteAll btn btn-danger btn-sm"
            onClick={deleteTodos}
        >
            Delete All!
        </button>
    );
};

export default DeleteAllButton;