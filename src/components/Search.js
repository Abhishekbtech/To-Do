import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import './Search.css';

const Search = () => {
    const [searchTerm, setSearchTermState] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTermState(term);
        dispatch(setSearchTerm(term));
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
