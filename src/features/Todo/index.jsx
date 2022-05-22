import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from '../../components/NotFound'

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeatures;
