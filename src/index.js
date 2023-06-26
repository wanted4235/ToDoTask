import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));