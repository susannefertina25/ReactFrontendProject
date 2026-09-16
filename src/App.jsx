import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/')
            .then(res => setTodos(res.data));
    }, []);

    const handleAdd = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo onAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
