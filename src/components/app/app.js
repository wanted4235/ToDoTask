import React, { Component } from 'react';

import ToDoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    toDoData: [
      { label: "Выпить кофе", important: false, id: 0 },
      { label: "Кодить", important: true, id: 1 },
      { label: "Спать", important: false, id: 2 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);

      const newArray = [
        ...toDoData.slice(0, idx),
        ...toDoData.slice(idx + 1)
      ];

      return {
        toDoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ toDoData }) => {
      const newArr = [
        ...toDoData,
        newItem
      ]

      return {
        toDoData: newArr
      };
    });
  };

  render() {
    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <ToDoList todos={this.state.toDoData}
          onDeleted={this.deleteItem} />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};