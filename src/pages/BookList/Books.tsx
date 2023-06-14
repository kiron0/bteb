import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BooksList } from './BookListAllSem'
import useScrollToTop from '../../hooks/useScrollToTop';

export default function Books() {
          const { semester, department } = useParams();
          const navigate = useNavigate();
          useScrollToTop();

          return (
                    <div className='pb-10'>
                              <h1 className='text-center py-10 text-2xl md:text-3xl font-bold px-3 md:w-3/4 mx-auto'>Polytechnic <span className='capitalize text-error'>{
                                        BooksList.map(book => {
                                                  return (
                                                            book.slug === department && (
                                                                      book.department
                                                            )
                                                  )
                                        })
                              } {semester}</span> semester Book List</h1>
                              <div className='flex justify-center items-center gap-5'>
                                        <button onClick={() => navigate(-1)} className='glass btn text-black mb-8'>Go Back</button>
                                        <button onClick={() => navigate("/")} className='glass btn text-black mb-8'>Go Home</button>
                              </div>
                              <p className='text-center py-4 pb-6 font-bold'>
                                        Here is your Book List
                              </p>
                              {
                                        BooksList.map(book => {
                                                  return (
                                                            book.slug === department && (
                                                                      book.semesterWiseBooks.map((book, index) => {
                                                                                return (
                                                                                          book.semester.slice(0, 3) === semester && (
                                                                                                    book.bookList.length > 0 ? (
                                                                                                              <div className='flex justify-center items-center mx-auto w-full lg:w-1/2' key={index}>
                                                                                                                        <div className="overflow-x-auto">
                                                                                                                                  <table className="table">
                                                                                                                                            <thead>
                                                                                                                                                      <tr>
                                                                                                                                                                <th>No</th>
                                                                                                                                                                <th>Subject Name</th>
                                                                                                                                                                <th>Subject Code</th>
                                                                                                                                                      </tr>
                                                                                                                                            </thead>
                                                                                                                                            <tbody>
                                                                                                                                                      {
                                                                                                                                                                book.bookList.map((book, index) => {
                                                                                                                                                                          return (
                                                                                                                                                                                    <tr>
                                                                                                                                                                                              <th>{index + 1}</th>
                                                                                                                                                                                              <td>{book.bookName}</td>
                                                                                                                                                                                              <td className='text-center'>{book.bookCode}</td>
                                                                                                                                                                                    </tr>
                                                                                                                                                                          )
                                                                                                                                                                })
                                                                                                                                                      }
                                                                                                                                            </tbody>
                                                                                                                                  </table>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    ) : (
                                                                                                              <div className='px-5 w-full md:w-1/2 lg:w-1/4 mx-auto' key={index}>
                                                                                                                        <div className='glass px-5 py-10 rounded-lg select-none cursor-not-allowed'>
                                                                                                                                  <h1 className='text-lg font-bold text-center capitalize'>No Book Found</h1>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    )
                                                                                          )
                                                                                )
                                                                      })
                                                            )
                                                  )
                                        }
                                        )

                              }
                    </div>
          )
}
