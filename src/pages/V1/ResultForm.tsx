import React, { useState, useContext } from 'react'
import Header from '../../assets/header-img.png';
import Pass from '../../assets/pass-img.png';
import Fail from '../../assets/fail-img.png';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Footer from '../../shared/Footer/Footer';
import { BASE_API1 } from '../../config';
import useScrollToTop from '../../hooks/useScrollToTop';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { InitializeContext } from '../../App';
import useTitle from '../../hooks/useTitle';

const Fade = require("react-reveal/Fade");

export default function ResultForm() {
          useScrollToTop();
          useTitle('V1 | Individual Result');
          const { theme } = useContext(InitializeContext);
          const [finalResult, setFinalResult] = useState({} as any);
          const [loading, setLoading] = useState<boolean>(false);

          const handleResult = (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    setLoading(true);
                    const form = e.target as typeof e.target & {
                              rollNo: { value: string };
                              semester: { value: string };
                    };

                    const roll = form.rollNo?.value;
                    const semester = form.semester.value.split(' ')[0];

                    if (semester === "Select" || !semester) {
                              setLoading(false);
                              return toast.error("Please select a semester");
                    } else if (!roll) {
                              setLoading(false);
                              return toast.error("Please enter your roll");
                    } else {
                              fetch(`${BASE_API1}/${semester}`, {
                                        method: 'POST',
                                        headers: {
                                                  'Accept': 'application/json',
                                                  'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                                  roll: roll,
                                                  semester: semester
                                        })
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  setLoading(false);
                                                  setFinalResult(data?.data);
                                                  if (data?.data === null) {
                                                            Swal.fire({
                                                                      title: 'Sorry!',
                                                                      text: 'Result not found!',
                                                                      icon: 'error',
                                                                      confirmButtonText: "It's Ok"
                                                            })
                                                  }
                                        }
                                        )
                    }
          }

          const [boardError, setBoardError] = useState("");

          const handleBoardRoll = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const boardRoll = e.target.value;
                    if (boardRoll === "") {
                              setBoardError("Board Roll is required");
                    } else if (!/^[0-9]*$/.test(boardRoll)) {
                              setBoardError("Roll must be a positive integer");
                    } else if (boardRoll.length < 6 || boardRoll.length > 7) {
                              setBoardError("Roll must be 6 to 7 digit");
                    } else {
                              setBoardError("");
                    }
          }

          return (
                    <Fade top distance="20px">
                              <div className='flex flex-col justify-center items-center pb-6 md:h-screen'>
                                        <div className='relative w-full md:w-10/12 max-w-4xl md:shadow-md rounded-xl md:py-6'>
                                                  <figure><img src={Header} alt="header" /></figure>
                                                  <div className="px-3 pt-6 md:card-body">
                                                            <div className="card-actions justify-center">
                                                                      <Link to={"/"} className="btn btn-xs border-[#008000] bg-[#008000] hover:bg-[#008000] hover:border-[#008000] text-white font-bold">Go Home</Link>
                                                            </div>
                                                            {
                                                                      finalResult?.id && (
                                                                                <div className="card-actions justify-end">
                                                                                          <button className="btn btn-xs border-[#008000] bg-[#008000] hover:bg-[#008000] hover:border-[#008000] text-white font-bold" onClick={() => setFinalResult("" as any)}>Search Again</button>
                                                                                </div>
                                                                      )
                                                            }

                                                            <div>
                                                                      {
                                                                                loading ? (
                                                                                          <Loading />
                                                                                ) : (

                                                                                          finalResult?.id ? (
                                                                                                    finalResult?.grade === "F" ? (
                                                                                                              <div className='border-2 p-3 rounded-md mt-6 flex flex-col justify-center items-center'>
                                                                                                                        <figure><img src={Fail} className="w-36" alt="" /></figure>
                                                                                                                        <h1 className='text-xl font-semibold text-center text-error'>Oops, You Failed!</h1>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'} mt-3`}>Your Roll: <span className='font-bold'>{finalResult?.roll}</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Failed Subjects: <span className='font-bold text-error'>{finalResult?.failed_subjects}</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Semester: <span className='font-bold'>{finalResult?.semester}</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Session: <span className='font-bold'>{finalResult?.session}</span></p>
                                                                                                              </div>
                                                                                                    ) : (
                                                                                                              <div className='border-2 p-3 rounded-md mt-6 flex flex-col justify-center items-center'>
                                                                                                                        <figure><img src={Pass} className="w-36" alt="" /></figure>
                                                                                                                        <h1 className={`text-xl font-semibold text-center ${theme ? 'text-primary' : 'text-[#008000]'}`}>Congratulations, You Passed!</h1>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'} mt-3`}>Your Roll: <span className='font-bold'>{finalResult?.roll}</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Your Got: <span className='font-bold'>{finalResult?.point} ({finalResult?.grade})</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Semester: <span className='font-bold'>{finalResult?.semester}</span></p>
                                                                                                                        <p className={`text-center text-semibold ${theme ? 'text-white' : 'text-gray-500'}`}>Session: <span className='font-bold'>{finalResult?.session}</span></p>
                                                                                                              </div>
                                                                                                    )
                                                                                          ) :
                                                                                                    (

                                                                                                              <form onSubmit={handleResult} className='border-2 p-3 rounded-md mt-6'>

                                                                                                                        <div className="name border rounded p-3 relative mt-10 w-full">
                                                                                                                                  <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                            <h3 className={`${theme ? 'text-white' : 'text-black'} text-xs font-poppins`}>Select Semester</h3>
                                                                                                                                  </div>
                                                                                                                                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 overflow-hidden">
                                                                                                                                            <div className="icon">
                                                                                                                                                      <i className={`bx bx-detail ${theme ? 'text-white' : 'text-black'}`}></i>
                                                                                                                                            </div>
                                                                                                                                            <select
                                                                                                                                                      name='semester'
                                                                                                                                                      className={`select focus:outline-none bg-base-100 w-full ${theme ? 'text-white' : 'text-black'}`}
                                                                                                                                                      required
                                                                                                                                            >
                                                                                                                                                      <option disabled selected>
                                                                                                                                                                Select Semester
                                                                                                                                                      </option>
                                                                                                                                                      <option>1st Semester</option>
                                                                                                                                                      <option>2nd Semester</option>
                                                                                                                                                      <option>3rd Semester</option>
                                                                                                                                                      <option>4th Semester</option>
                                                                                                                                                      <option>5th Semester</option>
                                                                                                                                                      <option>6th Semester</option>
                                                                                                                                                      <option>7th Semester</option>
                                                                                                                                            </select>
                                                                                                                                  </div>
                                                                                                                        </div>

                                                                                                                        <div className="name border rounded p-3 relative mt-10">
                                                                                                                                  <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                            <h3 className={`${theme ? 'text-white' : 'text-black'} text-xs font-poppins`}>Roll No</h3>
                                                                                                                                  </div>
                                                                                                                                  <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${boardError && "border-error shadow-error outline-error"}`}>
                                                                                                                                            <div className="icon">
                                                                                                                                                      <i className={`bx bxs-pen ${theme ? 'text-white' : 'text-black'}`}></i>
                                                                                                                                            </div>
                                                                                                                                            <input
                                                                                                                                                      type="number"
                                                                                                                                                      name="rollNo"
                                                                                                                                                      onChange={handleBoardRoll}
                                                                                                                                                      className="form-control outline-none pl-4 w-full bg-transparent"
                                                                                                                                                      placeholder="Type Roll No"
                                                                                                                                                      onKeyPress={(e) => e.currentTarget.value.length === 6 && e.preventDefault()}
                                                                                                                                                      onKeyDown={(e) => { e.key === 'Enter' && boardError && e.preventDefault() }}
                                                                                                                                            />
                                                                                                                                  </div>
                                                                                                                                  {boardError && (
                                                                                                                                            <small className="flex flex-col pt-2 text-error">
                                                                                                                                                      {boardError}
                                                                                                                                            </small>
                                                                                                                                  )}
                                                                                                                        </div>

                                                                                                                        <div className="modal-action">
                                                                                                                                  <button className={`btn btn-sm md:btn-md glass ${theme ? 'text-white' : 'text-black'} flex gap-2 ${boardError && "btn-disabled text-gray-400"}`} type="submit">
                                                                                                                                            <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                                                  </button>
                                                                                                                        </div>

                                                                                                              </form>
                                                                                                    )
                                                                                )
                                                                      }
                                                            </div>

                                                            <div className='mt-6'>
                                                                      <small className={`text-sm select-none ${theme ? 'text-white' : 'text-black'}`}>
                                                                                <span className='font-semibold'>Note:</span> Results are displayed using pdf searching algorithm. The result is shown by searching from the PDF published by "BTEB". <span className='font-semibold'>The developer or this web site is not responsible for any misinformation.</span>
                                                                      </small>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <Footer />
                    </Fade>
          )
}