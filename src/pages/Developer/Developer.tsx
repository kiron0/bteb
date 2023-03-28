import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../assets/me.jpg';
import styles from './Developer.module.css'

const Fade = require("react-reveal/Fade");

export default function Developer() {
          const navigate = useNavigate();
          return (
                    <Fade top duration={1000} distance="40px">
                              <div className='flex flex-col justify-center items-center h-screen'>
                                        <div className='card w-full md:w-2/3 lg:w-1/3 md:glass'>
                                                  <div className='card-body'>
                                                            <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-1 btn btn-sm mx-auto glass rounded-xl text-black text-md absolute left-2 top-2"><i className="bx bx-arrow-back text-lg"></i>Back</button>
                                                            <Fade top duration={2000} distance="40px">
                                                                      <div className='flex justify-center items-center'>
                                                                                <div className="avatar">
                                                                                          <div className={`w-48 md:w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-not-allowed`}>
                                                                                                    <img src={Avatar} alt='' />
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </Fade>
                                                            <Fade top duration={3000} distance="40px">
                                                                      <div className={`flex flex-col justify-center items-center pt-7 select-none text-black`}>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <h2 className="text-2xl md:text-3xl font-bold">Toufiq Hasan Kiron</h2>
                                                                                </Fade>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <p className='text-md md:text-xl font-semibold py-3'>MERN Stack Developer</p>
                                                                                </Fade>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <p className='text-md md:text-xl font-semibold'>Studies Computer Technology at</p>
                                                                                          <p className='text-md md:text-xl font-semibold pb-3'>Bogura Polytechnic Institute</p>
                                                                                </Fade>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                              <circle cx="12" cy="11" r="3" />
                                                                                                              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                                                                                    </svg>
                                                                                                    <span className='font-semibold'>Bogura, Bangladesh</span>
                                                                                          </div>
                                                                                </Fade>

                                                                                <Fade top duration={5000} distance="40px">
                                                                                          <div className={`flex justify-center items-center flex-wrap ${styles.socialLinks} mt-6`}>
                                                                                                    <a href="https://toufiqhasankiron.me" target="_blank" rel="noreferrer" className={`${styles.website} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip="Portfolio">
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <circle cx="12" cy="12" r="9" />
                                                                                                                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                                                                                                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                                                                                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                                                                                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                                    <a href="https://m.me/toufiqhasankiron" target="_blank" rel="noreferrer" className={`${styles.messenger} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip="Messenger">
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-messenger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                                                                                                        <path d="M8 13l3 -2l2 2l3 -2" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                                    <a href="https://github.com/kiron0" target="_blank" rel="noreferrer" className={`${styles.github} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip="GitHub">
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                                    <a href="https://t.me/toufiqhasankiron" target="_blank" rel="noreferrer" className={`${styles.telegram} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip='Telegram'>
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                          </div>
                                                                                </Fade>
                                                                      </div>
                                                            </Fade>
                                                  </div>
                                        </div>
                              </div>
                    </Fade>
          )
}
