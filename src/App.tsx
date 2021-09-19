import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { TodoApp } from './apps/todo-app/TodoApp';
import { NavBar } from './cmps/NavBar';
const App: FC = () => {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/todo" component={TodoApp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
