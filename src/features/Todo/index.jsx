import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");
  
  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index].status = todo.status === "new" ? "completed" : "new";
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const saveTodo = (todo) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      ...todo
    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div className="actions">
        <button onClick={handleShowAllClick}> Show all</button>
        <button onClick={handleShowNewClick}> Show New Todo</button>
        <button onClick={handleShowCompletedClick}> Show Completed Todo</button>
      </div>
      <TodoForm onTodoSubmit={saveTodo}/>
    </div>
  );
}

export default TodoFeatures;
