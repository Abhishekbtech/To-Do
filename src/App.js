import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);

  const toggleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  return (
    <Provider store={store}>
      <div>
        <Header toggleTaskInput={toggleTaskInput} />
        <Search />
        {showTaskInput && <TaskInput toggleTaskInput={toggleTaskInput} />}
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
