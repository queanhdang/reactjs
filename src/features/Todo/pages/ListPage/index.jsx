import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(()=>{
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index].status = todo.status === "new" ? "completed" : "new";
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParam = { status: 'all'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam)
    })
  };

  const handleShowNewClick = () => {
    const queryParam = { status: 'new'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam)
    })
  };

  const handleShowCompletedClick = () => {
    const queryParam = { status: 'completed'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam)
    })
  };

  useEffect(()=>{
    const params = queryString.parse(location.search)
    setFilterStatus(params.status|| 'all')
  }, [location.search])

  const saveTodo = (todo) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      ...todo
    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  // const renderTodoList = useMemo(()=> {
  //   todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
  // }, [todoList, filterStatus]) 
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

export default ListPage;
