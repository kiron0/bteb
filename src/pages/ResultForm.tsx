import React, { useState, useRef } from 'react'
import Header from '../assets/header-img.png';
import Pass from '../assets/pass-img.png';
import Fail from '../assets/fail-img.png';
import Swal from 'sweetalert2';
import ReactToPrint from 'react-to-print';
import Footer from '../shared/Footer';
import { toast } from 'react-hot-toast';

export default function ResultForm() {
          const [finalResult, setFinalResult] = useState({} as any);
          // const [groupResult, setGroupResult] = useState({} as any);
          // const [resultType, setResultType] = useState('individual');
          const resultSheet = useRef(null);

          const windowReload = () => {
                    window.location.reload();
          }

          const handleResult = (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const form = e.target as typeof e.target & {
                              rollNo: { value: string };
                              semester: { value: string };

                              roll_from: { value: string };
                              roll_to: { value: string };
                    };

                    const roll = form.rollNo?.value;
                    const semester = form.semester.value.split(' ')[0];

                    if (semester === "Select Semester" || !semester) {
                              return toast.error("Please select a semester");
                    }

                    // const rollFrom = form.roll_from?.value;
                    // const rollTo = form.roll_to?.value;

                    // send a POST request to the server

                    fetch('https://bteb.biplophossain.me/api/bteb/get-result/individual', {
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
                                        setFinalResult(data?.data);
                                        if (data?.data === null) {
                                                  Swal.fire({
                                                            title: 'Oops!',
                                                            text: 'Result is not found!',
                                                            icon: 'error',
                                                            confirmButtonText: 'OK'
                                                  })
                                        }
                              }
                              )

                    // if (resultType === 'individual') {
                    //           fetch('https://bteb.iqbalhasan.dev/api/bteb/get-result/individual', {
                    //                     method: 'POST',
                    //                     headers: {
                    //                               'Accept': 'application/json',
                    //                               'Content-Type': 'application/json'
                    //                     },
                    //                     body: JSON.stringify({
                    //                               roll: roll,
                    //                               semester: semester
                    //                     })
                    //           })
                    //                     .then(res => res.json())
                    //                     .then(data => {
                    //                               setFinalResult(data?.data);
                    //                               if (data?.data === null) {
                    //                                         Swal.fire({
                    //                                                   title: 'Oops!',
                    //                                                   text: 'Result is not published yet!',
                    //                                                   icon: 'error',
                    //                                                   confirmButtonText: 'OK'
                    //                                         })
                    //                               }
                    //                     }
                    //                     )
                    // }

                    // if (resultType === 'group') {
                    //           fetch('https://bteb.biplophossain.me/api/bteb/get-result/group', {
                    //                     method: 'POST',
                    //                     headers: {
                    //                               'Accept': 'application/json',
                    //                               'Content-Type': 'application/json'
                    //                     },
                    //                     body: JSON.stringify({
                    //                               roll_from: rollFrom,
                    //                               roll_to: rollTo,
                    //                               semester: semester
                    //                     })
                    //           })
                    //                     .then(res => res.json())
                    //                     .then(data => {
                    //                               setGroupResult(data?.data);
                    //                               if (data?.data === null) {
                    //                                         Swal.fire({
                    //                                                   title: 'Oops!',
                    //                                                   text: 'Result is not published yet!',
                    //                                                   icon: 'error',
                    //                                                   confirmButtonText: 'OK'
                    //                                         })
                    //                               }
                    //                     }
                    //                     )
                    // }
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
                    <div ref={resultSheet}>
                              <div className='flex flex-col justify-center items-center py-6 md:py-12'>
                                        <div className='relative w-full md:w-10/12 max-w-4xl md:shadow-md rounded-xl md:py-6'>
                                                  <figure><img src={Header} alt="header" /></figure>
                                                  <div className="card-body">
                                                            {/* {
                                                                      finalResult?.id ? (<></>) : (<div className="card-actions justify-end">
                                                                                <button className={`btn text-white font-bold duration-300 ${resultType === 'individual' ? 'btn-primary' : 'btn-primary btn-outline'}`} onClick={e => setResultType("individual")}>Individual Result</button>
                                                                                <button className={`btn text-white font-bold duration-300 ${resultType === 'group' ? 'btn-primary' : 'btn-primary btn-outline'}`} onClick={e => setResultType("group")}>Group Result</button>
                                                                      </div>)
                                                            } */}

                                                            {
                                                                      finalResult?.id && (
                                                                                <div className="card-actions justify-end">
                                                                                          <button className="btn btn-xs border-[#008000] bg-[#008000] hover:bg-[#008000] hover:border-[#008000] text-white font-bold" onClick={windowReload}>Search Again</button>
                                                                                          <ReactToPrint
                                                                                                    trigger={() => (
                                                                                                              <button className="btn btn-xs border-[#008000] bg-[#008000] hover:bg-[#008000] hover:border-[#008000] text-white font-bold">Download as a pdf</button>
                                                                                                    )}
                                                                                                    content={() => resultSheet.current}
                                                                                          />
                                                                                </div>
                                                                      )
                                                            }

                                                            <div>
                                                                      {
                                                                                finalResult?.id ? (
                                                                                          finalResult?.grade === "F" ? (
                                                                                                    <div className='border-2 p-3 rounded-md mt-6 flex flex-col justify-center items-center'>
                                                                                                              <figure><img src={Fail} className="w-36" alt="" /></figure>
                                                                                                              <h1 className='text-xl font-semibold text-center text-error'>Oops, You Failed!</h1>
                                                                                                              <p className='text-center text-semibold text-gray-500 mt-3'>Your Roll: <span className='font-bold'>{finalResult?.roll}</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Failed Subjects: <span className='font-bold'>{finalResult?.failed_subjects}</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Semester: <span className='font-bold'>{finalResult?.semester}</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Session: <span className='font-bold'>{finalResult?.session}</span></p>
                                                                                                    </div>
                                                                                          ) : (
                                                                                                    <div className='border-2 p-3 rounded-md mt-6 flex flex-col justify-center items-center'>
                                                                                                              <figure><img src={Pass} className="w-36" alt="" /></figure>
                                                                                                              <h1 className='text-xl font-semibold text-center text-[#008000]'>Congratulations, You Passed!</h1>
                                                                                                              <p className='text-center text-semibold text-gray-500 mt-3'>Your Roll: <span className='font-bold'>{finalResult?.roll}</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Your Got: <span className='font-bold'>{finalResult?.point} ({finalResult?.grade})</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Semester: <span className='font-bold'>{finalResult?.semester}</span></p>
                                                                                                              <p className='text-center text-semibold text-gray-500'>Session: <span className='font-bold'>{finalResult?.session}</span></p>
                                                                                                    </div>
                                                                                          )
                                                                                ) :
                                                                                          (

                                                                                                    <form onSubmit={handleResult} className='border-2 p-3 rounded-md mt-6'>

                                                                                                              <div className="name border rounded p-3 relative mt-10 w-full">
                                                                                                                        <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                  <h3 className="text-xs font-poppins">Select Semester</h3>
                                                                                                                        </div>
                                                                                                                        <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                                                                                                                                  <div className="icon">
                                                                                                                                            <i className="bx bx-detail"></i>
                                                                                                                                  </div>
                                                                                                                                  <select
                                                                                                                                            name='semester'
                                                                                                                                            className="select outline-none w-full"
                                                                                                                                            required
                                                                                                                                  >
                                                                                                                                            <option disabled selected>
                                                                                                                                                      Select Semester
                                                                                                                                            </option>
                                                                                                                                            <option>1st Semester</option>
                                                                                                                                            <option>5th Semester</option>
                                                                                                                                            <option>7th Semester</option>
                                                                                                                                  </select>
                                                                                                                        </div>
                                                                                                              </div>

                                                                                                              <div className="name border rounded p-3 relative mt-10">
                                                                                                                        <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                                                  <h3 className="text-xs font-poppins">Roll No</h3>
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
                                                                                                                                            placeholder="Type Roll No"
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
                                                                                                                        <button className={`btn btn-primary text-white flex gap-2`} type="submit">
                                                                                                                                  <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                                        </button>

                                                                                                              </div>

                                                                                                    </form>

                                                                                                    // <span>
                                                                                                    //           {
                                                                                                    //                     resultType === "individual" && (
                                                                                                    //                               <form onSubmit={handleResult} className='border-2 p-3 rounded-md mt-6'>

                                                                                                    //                                         <div className="name border rounded p-3 relative mt-10 w-full">
                                                                                                    //                                                   <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                    //                                                             <h3 className="text-xs font-poppins">Select Semester</h3>
                                                                                                    //                                                   </div>
                                                                                                    //                                                   <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                                                                                                    //                                                             <div className="icon">
                                                                                                    //                                                                       <i className="bx bx-detail"></i>
                                                                                                    //                                                             </div>
                                                                                                    //                                                             <select
                                                                                                    //                                                                       name='semester'
                                                                                                    //                                                                       className="select outline-none w-full"
                                                                                                    //                                                                       required
                                                                                                    //                                                             >
                                                                                                    //                                                                       <option disabled selected>
                                                                                                    //                                                                                 Select Semester
                                                                                                    //                                                                       </option>
                                                                                                    //                                                                       <option>5th</option>
                                                                                                    //                                                                       <option>7th</option>
                                                                                                    //                                                             </select>
                                                                                                    //                                                   </div>
                                                                                                    //                                         </div>

                                                                                                    //                                         <div className="name border rounded p-3 relative mt-10">
                                                                                                    //                                                   <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                    //                                                             <h3 className="text-xs font-poppins">Roll No</h3>
                                                                                                    //                                                   </div>
                                                                                                    //                                                   <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${boardError && "border-error shadow-error outline-error"}`}>
                                                                                                    //                                                             <div className="icon">
                                                                                                    //                                                                       <i className="bx bxs-pen"></i>
                                                                                                    //                                                             </div>
                                                                                                    //                                                             <input
                                                                                                    //                                                                       type="number"
                                                                                                    //                                                                       name="rollNo"
                                                                                                    //                                                                       onChange={handleBoardRoll}
                                                                                                    //                                                                       className="form-control outline-none pl-4 w-full bg-transparent"
                                                                                                    //                                                                       placeholder="Type Roll No"
                                                                                                    //                                                                       required
                                                                                                    //                                                             />
                                                                                                    //                                                   </div>
                                                                                                    //                                                   {boardError && (
                                                                                                    //                                                             <small className="flex flex-col pt-2 text-error">
                                                                                                    //                                                                       {boardError}
                                                                                                    //                                                             </small>
                                                                                                    //                                                   )}
                                                                                                    //                                         </div>

                                                                                                    //                                         <div className="modal-action">
                                                                                                    //                                                   <button className={`btn btn-primary text-white flex gap-2`} type="submit">
                                                                                                    //                                                             <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                    //                                                   </button>

                                                                                                    //                                         </div>

                                                                                                    //                               </form>
                                                                                                    //                     )
                                                                                                    //           }

                                                                                                    //           {
                                                                                                    //                     resultType === "group" && (
                                                                                                    //                               <form onSubmit={handleResult} className='border-2 p-3 rounded-md mt-6'>

                                                                                                    //                                         <div className="name border rounded p-3 relative mt-10 w-full">
                                                                                                    //                                                   <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                    //                                                             <h3 className="text-xs font-poppins">Select Semester</h3>
                                                                                                    //                                                   </div>
                                                                                                    //                                                   <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                                                                                                    //                                                             <div className="icon">
                                                                                                    //                                                                       <i className="bx bx-detail"></i>
                                                                                                    //                                                             </div>
                                                                                                    //                                                             <select
                                                                                                    //                                                                       name='semester'
                                                                                                    //                                                                       className="select outline-none w-full"
                                                                                                    //                                                                       required
                                                                                                    //                                                             >
                                                                                                    //                                                                       <option disabled selected>
                                                                                                    //                                                                                 Select Semester
                                                                                                    //                                                                       </option>
                                                                                                    //                                                                       <option>4th</option>
                                                                                                    //                                                                       <option>5th</option>
                                                                                                    //                                                                       <option>7th</option>
                                                                                                    //                                                             </select>
                                                                                                    //                                                   </div>
                                                                                                    //                                         </div>

                                                                                                    //                                         <div className="name border rounded p-3 relative mt-10">
                                                                                                    //                                                   <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                    //                                                             <h3 className="text-xs font-poppins">Roll From</h3>
                                                                                                    //                                                   </div>
                                                                                                    //                                                   <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${boardError && "border-error shadow-error outline-error"}`}>
                                                                                                    //                                                             <div className="icon">
                                                                                                    //                                                                       <i className="bx bxs-pen"></i>
                                                                                                    //                                                             </div>
                                                                                                    //                                                             <input
                                                                                                    //                                                                       type="number"
                                                                                                    //                                                                       name="roll_from"
                                                                                                    //                                                                       onChange={handleBoardRoll}
                                                                                                    //                                                                       className="form-control outline-none pl-4 w-full bg-transparent"
                                                                                                    //                                                                       placeholder="Type Roll No From"
                                                                                                    //                                                                       required
                                                                                                    //                                                             />
                                                                                                    //                                                   </div>
                                                                                                    //                                                   {boardError && (
                                                                                                    //                                                             <small className="flex flex-col pt-2 text-error">
                                                                                                    //                                                                       {boardError}
                                                                                                    //                                                             </small>
                                                                                                    //                                                   )}
                                                                                                    //                                         </div>

                                                                                                    //                                         <div className="name border rounded p-3 relative mt-10">
                                                                                                    //                                                   <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                                                                                                    //                                                             <h3 className="text-xs font-poppins">Roll To</h3>
                                                                                                    //                                                   </div>
                                                                                                    //                                                   <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${boardError && "border-error shadow-error outline-error"}`}>
                                                                                                    //                                                             <div className="icon">
                                                                                                    //                                                                       <i className="bx bxs-pen"></i>
                                                                                                    //                                                             </div>
                                                                                                    //                                                             <input
                                                                                                    //                                                                       type="number"
                                                                                                    //                                                                       name="roll_to"
                                                                                                    //                                                                       onChange={handleBoardRoll}
                                                                                                    //                                                                       className="form-control outline-none pl-4 w-full bg-transparent"
                                                                                                    //                                                                       placeholder="Type Roll No To"
                                                                                                    //                                                                       required
                                                                                                    //                                                             />
                                                                                                    //                                                   </div>
                                                                                                    //                                                   {boardError && (
                                                                                                    //                                                             <small className="flex flex-col pt-2 text-error">
                                                                                                    //                                                                       {boardError}
                                                                                                    //                                                             </small>
                                                                                                    //                                                   )}
                                                                                                    //                                         </div>

                                                                                                    //                                         <div className="modal-action">
                                                                                                    //                                                   <button className={`btn btn-primary text-white flex gap-2`} type="submit">
                                                                                                    //                                                             <i className="bx bx-id-card text-lg"></i> View Result
                                                                                                    //                                                   </button>

                                                                                                    //                                         </div>

                                                                                                    //                               </form>
                                                                                                    //                     )
                                                                                                    //           }
                                                                                                    // </span>
                                                                                          )
                                                                      }
                                                            </div>

                                                            <div className='mt-6'>
                                                                      <small className='text-sm'>
                                                                                <span className='font-semibold'>Note:</span> Results are displayed using pdf searching algorithm. The result is shown by searching from the PDF published by "BTEB". <span className='font-semibold'>The developer or this web site is not responsible for any misinformation.</span>
                                                                      </small>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <Footer />
                    </div>
          )
}
