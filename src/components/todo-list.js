import React from 'react';
import ReactDOM from 'react-dom';

import ToDoListItem from './todo-list-item';

const ToDoList = ({todos}) => {
  const elements = todos.map((item)=>{

    const {id, ...itemProps} = item

    return (
      <li key={id}>
        <ToDoListItem {...itemProps} />
    </li>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default ToDoList;