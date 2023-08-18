import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BooksList } from './BookListAllSem'
import useScrollToTop from '../../hooks/useScrollToTop';
import { InitializeContext } from '../../App';
import useTitle from '../../hooks/useTitle';

const Fade = require("react-reveal/Fade");

export default function Books() {
          useScrollToTop();
          const { semester, department } = useParams();
          useTitle(`${semester} | ${department?.toUpperCase()}`);
          const navigate = useNavigate();
          const { theme } = useContext(InitializeContext);

          return (
                    <Fade top distance="20px">
                              <div className='pb-32 md:h-screen'>
                                        <h1 className={`text-center py-10 text-2xl md:text-3xl font-bold px-3 md:w-3/4 mx-auto ${theme ? 'text-white' : 'text-black'}`}>Polytechnic <span className='capitalize text-error'>{
                                                  BooksList.map(book => {
                                                            return (
                                                                      book.slug === department && (
                                                                                <span key={book.id}>{book.department}</span>
                                                                      )
                                                            )
                                                  })
                                        }</span> <span className='text-success'>{semester}</span> Semester Book List</h1>
                                        <div className='flex justify-center items-center'>
                                                  <button onClick={() => navigate(-1)} className={`glass btn btn-sm md:btn-md ${theme ? 'text-white' : 'text-black'} mb-8 gap-1`}><i className='bx bx-arrow-back text-xl'></i>Back</button>
                                        </div>
                                        <p className={`${theme ? 'text-white' : 'text-black'} text-center pb-6 font-bold`}>
                                                  Here is your Book List
                                        </p>
                                        {
                                                  BooksList.map(book => {
                                                            return (
                                                                      book.slug === department && (
                                                                                book.semesterWiseBooks.map(book => {
                                                                                          return (
                                                                                                    <span key={book.id}>
                                                                                                              {
                                                                                                                        book.semester.slice(0, 3) === semester && (
                                                                                                                                  book.bookList.length > 0 ? (
                                                                                                                                            <div className='flex justify-center items-center mx-auto w-full'>
                                                                                                                                                      <div className="overflow-x-auto">
                                                                                                                                                                <table className={`table ${theme ? 'text-white' : 'text-black'}`}>
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
                                                                                                                                                                                                                  <tr key={book.id}>
                                                                                                                                                                                                                            <th className={`${book?.optional && 'text-error'}`}>{index + 1}</th>
                                                                                                                                                                                                                            <td className={`capitalize ${book?.optional && 'text-error'}`}>{book.bookName}</td>
                                                                                                                                                                                                                            <td className={`text-center ${book?.optional && 'text-error'}`}>{book.bookCode}</td>
                                                                                                                                                                                                                  </tr>
                                                                                                                                                                                                        )
                                                                                                                                                                                              })
                                                                                                                                                                                    }
                                                                                                                                                                          </tbody>
                                                                                                                                                                </table>
                                                                                                                                                      </div>
                                                                                                                                            </div>
                                                                                                                                  ) : (
                                                                                                                                            <div className='px-5 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                                                                                                                                                      <div className='glass px-5 py-10 rounded-lg select-none cursor-not-allowed'>
                                                                                                                                                                <h1 className='text-lg font-bold text-center capitalize text-info'>Book List are coming soon..!</h1>
                                                                                                                                                      </div>
                                                                                                                                            </div>
                                                                                                                                  )
                                                                                                                        )
                                                                                                              }
                                                                                                    </span>
                                                                                          )
                                                                                })
                                                                      )
                                                            )
                                                  }
                                                  )

                                        }
                              </div>
                    </Fade>
          )
}
