import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

  const toDoData = [
    { label: "Выпить кофе", important: false, id: 0 },
    { label: "Кодить", important: true, id: 1 },
    { label: "Спать", important: false, id: 2 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={toDoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));