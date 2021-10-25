import React, { FC, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { TodoApp } from './apps/todo-app/TodoApp';
import { Header } from './cmps/header/Header';
import { TrelloApp } from './apps/trello-app/TrelloApp';
const App: FC = () => {
  const [isDarkMode, setDarkMode] = useState(false)


  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={`app ${isDarkMode ? 'app-dark' : 'app-light'}`}>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} />
        <Switch>
          {/* <Route path="/todo" component={TodoApp} /> */}
          <Route path="/trello" component={TrelloApp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
