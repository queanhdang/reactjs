import NotFound from './components/NotFound';
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import ClockFeatures from './features/Clock';
import ColorFeature from './features/Color';
import PostFeatures from './features/Post';
import TodoFeatures from './features/Todo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h2>header</h2>
      <ul className="menu" style={{display: 'flex', justifyContent:'space-evenly'}}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/post-list/123">POST LIST</Link></li>
        <li><Link to="/color">Color</Link></li>
        <li><NavLink to="/post" >Post list</NavLink></li>
        <li><NavLink to="/color">COLOR</NavLink></li>
        <li><NavLink to="/queanhlist">TODO LIST</NavLink></li>
      </ul>
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact/>
        <Route path="/" component={ClockFeatures} exact/>
        <Route path="/posts/:postId" component={PostFeatures} />
        <Route path="/color" component={ColorFeature} />
        <Route path="/queanhlist" component={TodoFeatures} />
        <Route component={NotFound} />
      </Switch>
      <strong>footer</strong>
    </div>
  );
}

export default App;
