import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import './TaskList.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const searchTerm = useSelector((state) => state.searchTerm);
    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    const filteredTasks = tasks.filter(task =>
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentDateTime = new Date();

    return (
        <div className="task-list">
            {filteredTasks.map((task) => {
                const isPastDeadline = new Date(task.deadline) < currentDateTime;
                return (
                    <div key={task.id} className={`task-card ${isPastDeadline ? 'past-deadline' : ''}`}>
                        <p>{task.description}</p>
                        <p>{new Date(task.deadline).toLocaleString()}</p>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
