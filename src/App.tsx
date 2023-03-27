import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Root from './Layouts/Root';
import NotFound from './shared/NotFound';
import GroupResult from './pages/GroupResult';
import Preloader from './shared/Preloader';
import Developer from './pages/Developer';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/group',
      element: <GroupResult />,
    },
    {
      path: '/dev',
      element: <Developer />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
);

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <>
      {
        loading ? (
          <Preloader />
        ) :
          (
            <>
              <RouterProvider router={router} />
              <Toaster />
            </>
          )
      }
    </>
  );
}

export default App;
