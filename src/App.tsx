import React, { useState, useEffect, createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Root from './Layouts/Root';
import NotFound from './shared/NotFound/NotFound';
import GroupResult from './pages/GroupResult/GroupResult';
import Preloader from './shared/Preloader/Preloader';
import Developer from './pages/Developer/Developer';
import CGPACalculator from './pages/CGPACalculator/CGPACalculator';
import ResultForm1 from './pages/V1/ResultForm';
import BookList from './pages/BookList/BookList';
import Department from './pages/BookList/Department';
import Books from './pages/BookList/Books';
import SingleResult from './pages/IndividualResult/SingleResult';
import BottomNav from './shared/Navbar/BottomNav';

export const InitializeContext = createContext(null as any);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/individualResult',
      element: <SingleResult />,
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
          <BottomNav />
          <BookList />
        </>,
    },
    {
      path: '/bookList/:department',
      element:
        <>
          <BottomNav />
          <Department />
        </>,
    },
    {
      path: '/bookList/:department/:semester',
      element:
        <>
          <BottomNav />
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
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("btebResult") || false as any));
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  const toggleTheme = () => {
    setTheme(!theme);
    window.localStorage.setItem("btebResult", !theme as any);
  };

  return (
    <div data-theme={theme ? 'night' : 'emerald'} className="bg-base-100 duration-300">
      <InitializeContext.Provider value={{ toggleTheme, theme }}>
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
      </InitializeContext.Provider>
    </div>
  );
}

export default App;
