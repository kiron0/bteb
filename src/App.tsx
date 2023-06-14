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
import ResultForm1 from './pages/V1/ResultForm';
import BookList from './pages/BookList/BookList';
import Department from './pages/BookList/Department';
import Books from './pages/BookList/Books';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/individualResult',
      element:
        <>
          <Navbar />
          <ResultForm />
        </>,
    },
    {
      path: '/groupResults',
      element: <GroupResult />,
    },
    {
      path: '/cgpaCalc',
      element: <CGPACalculator />,
    },
    {
      path: '/bookList',
      element:
        <>
          {/* <Navbar /> */}
          <BookList />
        </>,
    },
    {
      path: '/bookList/:department',
      element: <>
        {/* <Navbar /> */}
        <Department />
      </>,
    },
    {
      path: '/bookList/:department/:semester',
      element: <>
        {/* <Navbar /> */}
        <Books />
      </>,
    },
    {
      path: '/dev',
      element: <Developer />,
    },
    {
      path: '/v1/individualResult',
      element: <ResultForm1 />,
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
