import React from 'react';
import axios from 'axios';

function TodoList({ todos, setTodos }) {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/todos/${id}/`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = async (todo) => {
        const response = await axios.put(`http://localhost:8000/api/todos/${todo.id}/`, {
            ...todo,
            completed: !todo.completed
        });
        setTodos(todos.map(t => t.id === todo.id ? response.data : t));
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.title}
                    </span>
                    <button onClick={() => toggleComplete(todo)}>
                        {todo.completed ? 'Undo' : 'Done'}
                    </button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
