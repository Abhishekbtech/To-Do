import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskInput.css';

const TaskInput = ({ toggleTaskInput }) => {
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const dispatch = useDispatch();

    const handleSaveTask = () => {
        if (description && deadline) {
            const newTask = {
                id: Date.now(),
                description,
                deadline,
            };
            dispatch(addTask(newTask));
            toggleTaskInput();
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter task..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button className='btn' onClick={handleSaveTask}>Save Task</button>
        </div>
    );
};

export default TaskInput;
