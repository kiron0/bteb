import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BooksList } from './BookListAllSem'
import useScrollToTop from '../../hooks/useScrollToTop';
import { InitializeContext } from '../../App';
import useTitle from '../../hooks/useTitle';

const Fade = require("react-reveal/Fade");

export default function Department() {
          useScrollToTop();
          const { department } = useParams();
          useTitle(`${department?.toUpperCase()} Department Book List`);
          const navigate = useNavigate();
          const { theme } = useContext(InitializeContext);

          return (
                    <Fade bottom distance="20px">
                              <div className='bg-base-100 pb-32 lg:h-screen'>
                                        <h1 className={`${theme ? 'text-white' : 'text-black'} text-center py-10 text-2xl md:text-3xl font-bold px-3 md:w-3/4 mx-auto`}>Polytechnic <span className='capitalize text-error'>
                                                  {
                                                            BooksList.map(book => {
                                                                      return (
                                                                                book.slug === department && (
                                                                                          book.department
                                                                                )
                                                                      )
                                                            })
                                                  }
                                        </span> Department Book List</h1>
                                        <div className='flex justify-center items-center'>
                                                  <button onClick={() => navigate(-1)} className={`glass btn btn-sm md:btn-md ${theme ? 'text-white' : 'text-black'} mb-8 gap-1`}><i className='bx bx-arrow-back text-xl'></i>Back</button>
                                        </div>
                                        <p className={`text-center pb-6 font-bold ${theme ? 'text-white' : 'text-black'}`}>
                                                  Select Your Semester to See Your Book List
                                        </p>
                                        {
                                                  BooksList.map((book, index) => {
                                                            return (
                                                                      book.slug === department && (
                                                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 w-full lg:w-3/4 mx-auto' key={index}>
                                                                                          {
                                                                                                    book.semesterWiseBooks.map((book, index) => {
                                                                                                              return (
                                                                                                                        <div className={`glass duration-500 ${theme ? 'md:bg-gray-800 text-white' : 'text-black shadow-md'} w-full md:px-10 py-20 rounded-lg hover:bg-primary hover:text-white cursor-pointer`} key={index} onClick={() => {
                                                                                                                                  navigate(`/bookList/${department}/${book.semester.slice(0, 3)}`)
                                                                                                                        }}>
                                                                                                                                  <h1 className='text-lg font-bold text-center capitalize'>{book.semester}</h1>
                                                                                                                        </div>
                                                                                                              )
                                                                                                    })
                                                                                          }
                                                                                </div>
                                                                      )
                                                            )
                                                  })
                                        }
                              </div>
                    </Fade>
          )
}
