import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/articleList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        {/* Добавьте другие маршруты по мере необходимости */}
      </Switch>
    </Router>
  );
};

export default App;
