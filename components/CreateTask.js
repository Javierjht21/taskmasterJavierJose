import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/tasks', { title, description }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Crear Tarea</button>
        </form>
    );
};

export default CreateTask;
