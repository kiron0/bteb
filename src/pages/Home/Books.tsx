import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/books.png";
import { InitializeContext } from '../../App';

const Fade = require("react-reveal/Fade");

export default function Books() {
          const { theme } = useContext(InitializeContext);

          return (
                    <section
                              className="bg-base-100 body-font pb-4 md:pb-16"
                    >
                              <div className={`hero ${theme ? 'bg-gray-800' : 'bg-gray-100'} pb-8 md:pb-0`}>
                                        <div className="hero-content flex-col justify-between lg:flex-row">
                                                  <Fade bottom distance="20px">
                                                            <div className="w-full md:w-2/3 lg:w-1/3 rounded overflow-hidden lg:ml-6">
                                                                      <div className="outline-none h-full">
                                                                                <img
                                                                                          src={bannerImg}
                                                                                          className="md:rounded-lg h-full w-full"
                                                                                          alt=""
                                                                                />
                                                                      </div>
                                                            </div>
                                                  </Fade>
                                                  <Fade bottom distance="30px">
                                                            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
                                                                      <h1 className={`text-3xl md:text-5xl lg:text-5xl font-bold leading-tight ${theme ? 'text-white' : 'text-black'}`}>
                                                                                View your book list with semester wise.
                                                                      </h1>
                                                                      <p className={`py-6 text-lg ${theme ? 'text-white' : 'text-black'}`}>
                                                                                You can see any book list by the semester wise. Just select the semester and see the book list. It's that simple.
                                                                      </p>
                                                                      <div className='flex justify-center md:justify-start items-center'>
                                                                                <Link to="/bookList" className="btn btn-primary text-white">
                                                                                          Check Book List
                                                                                </Link>
                                                                      </div>
                                                            </div>
                                                  </Fade>
                                        </div>
                              </div>
                    </section>
          )
}
