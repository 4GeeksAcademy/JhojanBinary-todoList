// Home.js
import React, { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import DeleteAllButton from "./DeleteAllButton";

const Home = () => {
    const [todo, setTodo] = useState("");
    const [todosList, setTodosList] = useState([]);

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setTodosList([todo, ...todosList]);
            setTodo("");
        } else {
            alert("DEBES DE INGRESAR UN VALOR AL INPUT");
        }
    };

    const handleDelete = index => {
        const newTodosList = [...todosList];
        newTodosList.splice(index, 1);
        setTodosList(newTodosList);
    };

    const deleteTodos = () => {
        if (todosList.length === 0) {
            alert("No hay nada que borrar");
        } else {
            setTodosList([]);
        }
    };

    

    return (
        <div className="text-center ">
            <h1>TODOS</h1>

            <Input
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}/>

            <div className="container">

                <DeleteAllButton deleteTodos={deleteTodos} />
                <TodoList todosList={todosList} handleDelete={handleDelete} />
                
            </div>
        </div>
    );
};

export default Home;
