import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Developer() {
          const navigate = useNavigate();
          return (
                    <div className='flex flex-col justify-center items-center h-screen'>
                              <div className='card w-full md:w-2/3 lg:w-1/3 glass'>
                                        <div className='card-body'>
                                                  <h1 className='text-2xl font-bold text-center'>Developer</h1>
                                                  <p className='text-center'>This page is under construction</p>
                                                  <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-1 md:w-1/5 mx-auto glass rounded-xl p-2 px-3 text-black text-xl mt-12"><i className="bx bx-home text-2xl"></i>Home</button>
                                        </div>
                              </div>
                    </div>
          )
}
