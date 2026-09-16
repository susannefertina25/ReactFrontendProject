import React, { useState } from 'react';
import axios from 'axios';

function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/api/todos/', {
            title,
            completed: false
        });
        onAdd(response.data);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add todo"
                required
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;
