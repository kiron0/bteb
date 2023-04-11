import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Root from './Layouts/Root';
import NotFound from './shared/NotFound/NotFound';
import GroupResult from './pages/GroupResult/GroupResult';
import Preloader from './shared/Preloader/Preloader';
import Developer from './pages/Developer/Developer';
import CGPACalculator from './pages/CGPACalculator/CGPACalculator';
import Navbar from './shared/Navbar/Navbar';
import ResultForm from './pages/IndividualResult/ResultForm';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/results',
      element:
        <>
          <Navbar />
          <ResultForm />
        </>,
    },
    {
      path: '/group-results',
      element: <GroupResult />,
    },
    {
      path: '/cgpaCalc',
      element: <CGPACalculator />,
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
