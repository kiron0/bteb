import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Developer.module.css'
import { InitializeContext } from '../../App';
import useTitle from '../../hooks/useTitle';

const Fade = require("react-reveal/Fade");

export default function Dev() {
          useTitle('Developer');
          const { theme } = useContext(InitializeContext);
          const navigate = useNavigate();

          return (
                    <Fade top duration={1000} distance="40px">
                              <div className='flex flex-col justify-center items-center h-screen'>
                                        <div className='card w-full md:w-2/3 lg:w-1/3 md:glass'>
                                                  <div className='card-body'>
                                                            <div className='pb-6'>
                                                                      <button onClick={() => navigate("/")} className={`flex justify-center items-center gap-1 glass py-0 md:py-2 px-2 md:px-5 mx-auto rounded-xl ${theme ? 'text-white' : 'text-black'} text-md`}><i className="bx bx-arrow-back text-lg"></i>Back</button>
                                                            </div>
                                                            <Fade top duration={2000} distance="40px">
                                                                      <div className='flex justify-center items-center'>
                                                                                <div className="avatar">
                                                                                          <div className={styles.profile__img}></div>
                                                                                </div>
                                                                      </div>
                                                            </Fade>
                                                            <Fade top duration={3000} distance="40px">
                                                                      <div className={`flex flex-col justify-center items-center pt-7 select-none ${theme ? 'text-white' : 'text-black'}`}>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-1" title='Toufiq Hasan Kiron'>Toufiq Hasan Kiron
                                                                                                    <svg
                                                                                                              width="25"
                                                                                                              height="25"
                                                                                                              viewBox="0 0 48 48"
                                                                                                              fill="none"
                                                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                                                              className="home__hand"
                                                                                                    >
                                                                                                              <path
                                                                                                                        d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                                                                                                                        fill="#FFDD67"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                                                                                                                        fill="#EBA352"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                                                                                                                        fill="#FFDD67"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                                                                                                                        fill="#EBA352"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                                                                                                                        fill="#FFDD67"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                                                                                                                        fill="#EBA352"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                                                                                                                        fill="#FFDD67"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                                                                                                                        fill="#EBA352"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                                                                                                                        fill="#FFDD67"
                                                                                                              ></path>
                                                                                                              <path
                                                                                                                        d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                                                                                                                        fill="#EBA352"
                                                                                                              ></path>
                                                                                                    </svg>
                                                                                          </h2>
                                                                                </Fade>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <p className='text-base md:text-lg'>MERN Stack Developer</p>
                                                                                          <p className='text-sm md:text-md pb-3'>Hellwet Software, India</p>
                                                                                </Fade>
                                                                                <Fade top duration={3000} distance="40px">
                                                                                          <p className='text-md md:text-lg text-center md:px-16'>He is known professionally as MERN Stack Developer, Bangladeshi Author & Musical artist. He is aspiring to be a full stack developer with a full stack of snacks.</p>
                                                                                </Fade>

                                                                                <Fade top duration={5000} distance="40px">
                                                                                          <div className={`flex justify-center items-center flex-wrap ${styles.socialLinks} mt-6`}>
                                                                                                    <a href="https://toufiqhasankiron.com" target="_blank" rel="noreferrer" className={`${styles.website} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip="Portfolio">
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <circle cx="12" cy="12" r="9" />
                                                                                                                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                                                                                                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                                                                                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                                                                                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                                    <a href="https://github.com/kiron0" target="_blank" rel="noreferrer" className={`${styles.github} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1'`} data-tip="GitHub">
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                                                                              </svg>
                                                                                                    </a>
                                                                                                    <a href="https://linkedin.com/in/toufiq-hasan-kiron/" target="_blank" rel="noreferrer" className={`${styles.linkedin} tooltip inline-flex justify-center items-center text-white relative flex-shrink-0 w-12 h-12 m-3 md:m-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1`} data-tip='LinkedIn'>
                                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                                                                                                        <line x1="8" y1="11" x2="8" y2="16" />
                                                                                                                        <line x1="8" y1="8" x2="8" y2="8.01" />
                                                                                                                        <line x1="12" y1="16" x2="12" y2="11" />
                                                                                                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
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
