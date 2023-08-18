import React, { useContext } from 'react'
import { BooksList } from './BookListAllSem'
import { useNavigate } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop';
import { InitializeContext } from '../../App';
import useTitle from '../../hooks/useTitle';

const Fade = require("react-reveal/Fade");

export default function BookList() {
          useScrollToTop();
          useTitle('Book List');
          const { theme } = useContext(InitializeContext);
          const navigate = useNavigate();

          return (
                    <Fade top distance="20px">
                              <div className='bg-base-100 pb-32 lg:h-screen'>
                                        <h1 className={`text-center py-10 text-2xl md:text-3xl font-bold px-3 ${theme ? 'text-white' : 'text-black'}`}>Polytechnic All Department Book List</h1>
                                        <button onClick={() => navigate("/")} className={`glass btn btn-sm md:btn-md flex justify-center items-center mx-auto ${theme ? 'text-white' : 'text-black'} mb-8 gap-2`}><i className='bx bx-home-heart text-xl'></i>Go Home</button>
                                        <p className={`text-center pb-6 font-bold ${theme ? 'text-white' : 'text-black'}`}>
                                                  Select Your Department to See Your Book List
                                        </p>
                                        <div className='bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 w-full lg:w-3/4 mx-auto'>
                                                  {
                                                            BooksList.map((book, index) => {
                                                                      return (
                                                                                <div className={`glass duration-500 ${theme ? 'md:bg-gray-800 text-white' : 'text-black shadow-md'} w-full md:px-10 py-20 rounded-lg hover:bg-primary hover:text-white cursor-pointer`} key={index} onClick={() => {
                                                                                          navigate(`/bookList/${book.slug}`)
                                                                                }}>
                                                                                          <h1 className='text-lg font-bold text-center capitalize'>{book.department}</h1>
                                                                                </div>
                                                                      )
                                                            })
                                                  }
                                        </div>
                              </div>
                    </Fade>
          )
}
