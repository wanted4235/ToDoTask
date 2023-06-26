import React, { Component } from 'react';

import ToDoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 0;

  state = {
    toDoData: [
      this.createTodoItem("Выпить кофе"),
      this.createTodoItem("Кодить"),
      this.createTodoItem("Спать")
    ]
  };

  //Инициализация списка задач
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  //Удаление задачи
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

  //Добавление задачи
  addItem = (text) => {
    const newItem = this.createTodoItem(text);

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

  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData : this.toggleProperty(toDoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData : this.toggleProperty(toDoData, id, 'important')
      };
    });
  };

  render() {

    const { toDoData } = this.state;

    const doneCount = toDoData
      .filter((el) => el.done).length;

    const todoCount = toDoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <ToDoList todos={toDoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};