import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import App from './components/App';
import { router } from './routes';

ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  document.getElementById('app')
);
