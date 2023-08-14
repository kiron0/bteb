import React from 'react'
import { BooksList } from './BookListAllSem'
import { useNavigate } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop';

export default function BookList() {
          useScrollToTop();
          const navigate = useNavigate();

          return (
                    <div className='pb-32 md:pb-0'>
                              <h1 className='text-center py-10 text-2xl md:text-3xl font-bold px-3'>Polytechnic All Department Book List</h1>
                              <p className='text-center pb-6 font-bold'>
                                        Select Your Department to See Your Book List
                              </p>
                              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 w-full lg:w-3/4 mx-auto'>
                                        {
                                                  BooksList.map((book, index) => {
                                                            return (
                                                                      <div className='glass duration-500 md:bg-gray-200 px-10 py-10 rounded-lg cursor-pointer' key={index} onClick={() => {
                                                                                navigate(`/bookList/${book.slug}`)
                                                                      }}>
                                                                                <h1 className='text-lg font-bold text-center capitalize'>{book.department}</h1>
                                                                      </div>
                                                            )
                                                  })
                                        }
                              </div>
                    </div>
          )
}
