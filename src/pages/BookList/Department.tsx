import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BooksList } from './BookListAllSem'
import useScrollToTop from '../../hooks/useScrollToTop';

export default function Department() {
          const { department } = useParams();
          const navigate = useNavigate();
          useScrollToTop();

          return (
                    <div className='pb-32 md:pb-0'>
                              <h1 className='text-center py-10 text-2xl md:text-3xl font-bold px-3 md:w-3/4 mx-auto'>Polytechnic <span className='capitalize text-error'>
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
                                        <button onClick={() => navigate(-1)} className='glass btn btn-sm md:btn-md text-black mb-8 gap-1'><i className='bx bx-arrow-back text-xl'></i>Go Back</button>
                              </div>
                              <p className='text-center py-4 pb-6 font-bold'>
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
                                                                                                              <div className='glass duration-500 md:bg-gray-200 px-5 py-10 rounded-lg cursor-pointer' key={index} onClick={() => {
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
          )
}
