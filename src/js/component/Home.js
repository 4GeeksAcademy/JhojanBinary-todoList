import React, { useState } from "react";

const Home = () => {
    const [todo, setTodo] = useState("");
    const [todosList, setTodosList] = useState([]);

    const handleKeyPress = event => {
        if (event.key === "Enter") {
            handleAddTodo();
        }
    };

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setTodosList([...todosList, todo]); // Agrego el valor de todo a la lista
            setTodo(""); //limpio mi input
        }
    };

    const handleDelete = index => {
        const newTodosList = [...todosList];
        newTodosList.splice(index, 1);
        setTodosList(newTodosList);
    };

    return (
        <div className="text-center ">
            <h1>TODOS</h1>
            <div className="input-group mb-3 mt-3 container">

                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="Username"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />


                    <label htmlFor="floatingInputGroup1">I N P U T....</label>
                </div>
            </div>

            <div className="container">
                <ul className="list-group">
                    {todosList.map((item, index) => (
                        <li
                            key={index}
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
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
