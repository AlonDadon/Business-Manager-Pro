import React, { FC, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { TodoApp } from './apps/todo-app/TodoApp';
import { Header } from './cmps/Header';
const App: FC = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const toogleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'app-dark' : 'app-light'}>
      <Router>
        <Header toogleDarkMode={toogleDarkMode}/>
        <Switch>
          <Route path="/todo" component={TodoApp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
