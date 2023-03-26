import React, { useState } from 'react'
import Header from '../assets/header-img.png';
import Swal from 'sweetalert2';
import moment from 'moment';
import Footer from '../shared/Footer';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading';
import { AUTH_KEY, BASE_API } from '../config';

export default function ResultForm() {
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
                                                                                border: '1px solid #713200',
                                                                                padding: '16px',
                                                                                color: '#713200',
                                                                                borderRadius: '10px',
                                                                                background: '#fff3cd',
                                                                      },
                                                                      duration: 3000,
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
                                        <div className='w-full md:w-10/12 max-w-4xl md:shadow-md rounded-xl py-6 md:py-126'>
                                                  <figure><img src={Header} alt="header" /></figure>
                                                  <div className="card-body">
                                                            {
                                                                      finalResult?.roll && (
                                                                                <div className="card-actions justify-end">
                                                                                          <button className="btn btn-xs md:btn-sm border-[#008000] bg-[#008000] hover:bg-[#008000] hover:border-[#008000] text-white font-bold" onClick={searchAgain}>Search Again</button>
                                                                                </div>
                                                                      )
                                                            }

                                                            {
                                                                      loading ? (
                                                                                <Loading />
                                                                      ) : (
                                                                                <div>
                                                                                          {
                                                                                                    finalResult?.roll ? (
                                                                                                              <div className='flex flex-col justify-center items-center py-12'>
                                                                                                                        <h1 className='text-center font-bold text-2xl'>{finalResult?.roll}</h1>
                                                                                                                        <p className='text-center text-lg'>{finalResult?.exam} ({finalResult?.regulation})</p>
                                                                                                                        <p className='text-center text-lg'>{finalResult?.institute?.name}, {finalResult?.institute?.district}</p>

                                                                                                                        <div className='rounded-md w-full md:w-1/2 mt-12 gap-6 flex flex-col'>
                                                                                                                                  {
                                                                                                                                            finalResult?.results?.map((result: any, index: number) => (
                                                                                                                                                      <div key={index} className='py-6 glass rounded-xl'>
                                                                                                                                                                <div className='flex justify-between items-between gap-4'>
                                                                                                                                                                          <p className='text-center text-lg'>{result?.semester}th {" "}
                                                                                                                                                                                    {result?.exam_results[0]?.reffereds ? (
                                                                                                                                                                                              result?.exam_results[0]?.reffereds[0]?.passed === false ? `⚠ ${result?.exam_results[0]?.reffereds?.length} subject` : "✅ Passed"
                                                                                                                                                                                    ) : "✅ Passed"
                                                                                                                                                                                    }
                                                                                                                                                                          </p>
                                                                                                                                                                          <p className='text-center text-lg'>{date(result?.exam_results[0]?.date?.slice(0, 10))}</p>
                                                                                                                                                                </div>
                                                                                                                                                                {result?.exam_results[0]?.cgpa &&
                                                                                                                                                                          <span className='flex flex-col justify-center items-center'>
                                                                                                                                                                                    <p className='text-center mt-7'>CGPA</p>
                                                                                                                                                                                    <p className='text-center text-3xl text-[#008000] font-black'>{result?.exam_results[0]?.cgpa}</p>
                                                                                                                                                                          </span>
                                                                                                                                                                }
                                                                                                                                                                {result?.exam_results[0]?.gpa && <p className='text-center text-3xl mt-7 text-[#008000] font-black'>{result?.exam_results[0]?.gpa}</p>}
                                                                                                                                                                <div className='flex flex-col gap-3 mt-4'>
                                                                                                                                                                          {
                                                                                                                                                                                    result?.exam_results[0]?.reffereds?.map((reffered: any, index: number) => (
                                                                                                                                                                                              <div className={`flex justify-between text-sm md:text-md ${reffered?.passed === false && "text-red-500"}`} key={index}>
                                                                                                                                                                                                        <p className='text-center'>{reffered?.subject_code}</p>
                                                                                                                                                                                                        <p className='text-center' >{reffered?.subject_name}</p>
                                                                                                                                                                                                        {reffered?.reffered_type === "T" && <small className='text-center pr-3'><small className="badge badge-outline badge-xs p-2">Theory</small></small>}
                                                                                                                                                                                              </div>
                                                                                                                                                                                    ))
                                                                                                                                                                          }
                                                                                                                                                                </div>
                                                                                                                                                      </div>
                                                                                                                                            ))
                                                                                                                                  }
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    ) : (
                                                                                                              <form onSubmit={handleResult} className='mt-6 w-full'>

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
                                                                                                                                                      required
                                                                                                                                                      defaultValue={2016}
                                                                                                                                            >
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
                                                                                                                                                      placeholder="Type Roll Number"
                                                                                                                                                      required
                                                                                                                                            />
                                                                                                                                  </div>
                                                                                                                                  {boardError && (
                                                                                                                                            <small className="flex flex-col pt-2 text-error">
                                                                                                                                                      {boardError}
                                                                                                                                            </small>
                                                                                                                                  )}
                                                                                                                        </div>

                                                                                                                        <div className="modal-action">
                                                                                                                                  <button className={`btn btn-primary text-white flex gap-2 ${boardError && "btn-disabled"}`} type="submit">
                                                                                                                                            <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                                                  </button>

                                                                                                                        </div>

                                                                                                              </form>
                                                                                                    )
                                                                                          }
                                                                                </div>
                                                                      )
                                                            }

                                                            <div className='mt-6'>
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
