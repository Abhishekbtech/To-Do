import React from 'react';
import './Header.css'

const Header = ({ toggleTaskInput }) => {
    return (
        <header>
            <button onClick={toggleTaskInput} className='btn'>Add New Task</button>
        </header>
    );
};

export default Header;