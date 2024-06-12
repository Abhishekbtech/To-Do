import React from 'react';

const Header = ({ toggleTaskInput }) => {
    return (
        <header>
            <button onClick={toggleTaskInput} style={{backgroundColor:'green', padding: '10px', margin:"20px", fontSize: '18px', cursor:'pointer', border: '1px solid black', borderRadius: '5px'}}>Add New Task</button>
        </header>
    );
};

export default Header;