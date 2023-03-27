import React, { useState } from 'react'
import Header from '../assets/header-img.png';
import Swal from 'sweetalert2';
import moment from 'moment';
import Footer from '../shared/Footer';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading';
import { AUTH_KEY, BASE_API } from '../config';
import IndividualResult from './IndividualResult';
import useScrollToTop from '../hooks/useScrollToTop';

export default function ResultForm() {
          useScrollToTop();
          const [finalResult, setFinalResult] = useState({} as any);
          const [loading, setLoading] = useState<boolean>(false);

          const date = (date: string) => {
                    return moment(date).format('Do MMM YYYY');
          }

          const searchAgain = () => {
                    setFinalResult("" as any);
          }

          const handleResult = (e: React.SyntheticEvent) => {
                    setLoading(true);
                    e.preventDefault();
                    const form = e.target as typeof e.target & {
                              rollNo: { value: string };
                              reg: { value: string };
                    };

                    const roll = form.rollNo?.value;
                    const reg = form.reg.value;

                    if (roll === "" || reg === "") {
                              toast.error('Roll Number is required..!', {
                                        style: {
                                                  padding: '16px',
                                                  color: '#000',
                                                  borderRadius: '10px',
                                                  background: '#fff3cd',
                                        },
                                        duration: 4000,
                              });
                              setLoading(false);
                              return;
                    }

                    fetch(`${BASE_API}/results?roll=${roll}&reg=${reg}&key=${AUTH_KEY}`, {
                              method: 'GET',
                              headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                              },
                    })
                              .then(res => res.json())
                              .then(data => {
                                        if (data.roll === undefined) {
                                                  Swal.fire({
                                                            title: 'Oops!',
                                                            text: 'Result not found',
                                                            icon: 'error',
                                                            confirmButtonText: 'Ok'
                                                  })
                                                  setLoading(false);
                                        } else {
                                                  setFinalResult(data);
                                                  setLoading(false);
                                                  if (data?.warning) {
                                                            toast.error(`Found from ${data?.regulation} regulation`, {
                                                                      icon: '🚨',
                                                                      style: {
                                                                                padding: '16px',
                                                                                color: '#000',
                                                                                borderRadius: '10px',
                                                                                background: '#fff3cd',
                                                                      },
                                                                      duration: 4000,
                                                                      position: 'bottom-center',
                                                            });
                                                  }
                                        }
                              }
                              )
          }

          const [boardError, setBoardError] = useState("");

          const handleBoardRoll = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const boardRoll = e.target.value;
                    if (boardRoll === "") {
                              setBoardError("Board Roll is required");
                    }
                    else if (!/^[0-9]*$/.test(boardRoll)) {
                              setBoardError("Roll must be a positive integer");
                    }
                    else if (boardRoll.length > 6 || boardRoll.length < 6) {
                              setBoardError("Roll must be 6 digit");
                    }
                    else if (boardRoll === "123456" || boardRoll === "654321" || boardRoll === "987654" || boardRoll === "456789" || boardRoll === "000000" || boardRoll === "111111" || boardRoll === "222222" || boardRoll === "333333" || boardRoll === "444444" || boardRoll === "555555" || boardRoll === "666666" || boardRoll === "777777" || boardRoll === "888888" || boardRoll === "999999") {
                              setBoardError("Roll is not valid");
                    }
                    else {
                              setBoardError("");
                    }
          }

          return (
                    <>
                              <div className='flex justify-center items-center py-6 md:py-12 w-full'>
                                        <div className='w-full md:w-10/12 max-w-4xl md:glass rounded-xl py-6 md:py-126'>
                                                  <figure><img src={Header} alt="header" /></figure>
                                                  <div className="card-body p-3 md:p-0">
                                                            <h2 className='text-3xl text-center pt-10 font-semibold'>Individual's Result</h2>
                                                            {
                                                                      finalResult?.roll && (
                                                                                <div className="card-actions justify-center md:justify-end mt-10 md:mr-12 lg:mr-16 mb-0">
                                                                                          <button className="btn btn-sm glass text-black" onClick={searchAgain}>Search Again</button>
                                                                                </div>
                                                                      )
                                                            }

                                                            {
                                                                      loading ? (
                                                                                <Loading />
                                                                      ) : (
                                                                                <>
                                                                                          {
                                                                                                    finalResult?.roll ? (
                                                                                                              <IndividualResult finalResult={finalResult} date={date} />
                                                                                                    ) : (
                                                                                                              <form onSubmit={handleResult} className='mt-6 w-full md:px-6'>

                                                                                                                        <div className="name border rounded p-3 relative mt-10 w-full">
                                                                                                                                  <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                            <h3 className="text-xs font-poppins">Select Regulation</h3>
                                                                                                                                  </div>
                                                                                                                                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                                                                                                                                            <div className="icon">
                                                                                                                                                      <i className="bx bx-detail"></i>
                                                                                                                                            </div>
                                                                                                                                            <select
                                                                                                                                                      name='reg'
                                                                                                                                                      className="select focus:outline-none bg-transparent w-full"
                                                                                                                                                      defaultValue={2022}
                                                                                                                                            >
                                                                                                                                                      <option value={0}>Any</option>
                                                                                                                                                      <option>2010</option>
                                                                                                                                                      <option>2016</option>
                                                                                                                                                      <option>2022</option>
                                                                                                                                            </select>
                                                                                                                                  </div>
                                                                                                                        </div>

                                                                                                                        <div className="name border rounded p-3 relative mt-10">
                                                                                                                                  <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                            <h3 className="text-xs font-poppins">Roll Number</h3>
                                                                                                                                  </div>
                                                                                                                                  <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${boardError && "border-error shadow-error outline-error"}`}>
                                                                                                                                            <div className="icon">
                                                                                                                                                      <i className="bx bxs-pen"></i>
                                                                                                                                            </div>
                                                                                                                                            <input
                                                                                                                                                      type="number"
                                                                                                                                                      name="rollNo"
                                                                                                                                                      onChange={handleBoardRoll}
                                                                                                                                                      className="form-control outline-none pl-4 w-full bg-transparent"
                                                                                                                                                      placeholder="e.g. 971711"
                                                                                                                                            />
                                                                                                                                  </div>
                                                                                                                                  {boardError && (
                                                                                                                                            <small className="flex flex-col pt-2 text-error">
                                                                                                                                                      {boardError}
                                                                                                                                            </small>
                                                                                                                                  )}
                                                                                                                        </div>

                                                                                                                        <div className="modal-action">
                                                                                                                                  <button className={`btn btn-sm md:btn-md btn-primary text-white flex gap-2 ${boardError && "btn-disabled"}`} type="submit">
                                                                                                                                            <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                                                  </button>

                                                                                                                        </div>

                                                                                                              </form>
                                                                                                    )
                                                                                          }
                                                                                </>
                                                                      )
                                                            }

                                                            <div className='mt-6 md:mx-6'>
                                                                      <small className='text-xs'>
                                                                                <span className='font-semibold'>Note:</span> Results are displayed using pdf searching algorithm. The result is shown by searching from the PDF published by "BTEB". <span className='font-semibold'>The developer or this web site is not responsible for any misinformation.</span>
                                                                      </small>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <Footer />
                    </>
          )
}
