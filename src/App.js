import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/error';
import Home from './routes/home';
import S3 from './routes/s3';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: 's3',
      element: <S3 />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
