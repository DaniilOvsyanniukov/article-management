import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
const TodoList = React.lazy(() => import('./components'));

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Suspense fallback={<div>Завантаження...</div>}>
          <Routes>
            <Route index path="/" element={<TodoList />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  </Provider>
);

export default App;