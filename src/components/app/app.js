import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const toDoData = [
    { label: "Выпить кофе", important: false, id: 0 },
    { label: "Кодить", important: true, id: 1 },
    { label: "Спать", important: false, id: 2 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <ToDoList todos={toDoData} />
    </div>
  );
};

export default App;