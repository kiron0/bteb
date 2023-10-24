import React, { useContext, useEffect, useState } from 'react'
import { InitializeContext } from '../../App';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { AUTH_KEY, BASE_API } from '../../config';
import Loading from '../../components/Loading';
import Navbar from '../../shared/Navbar/Navbar';
import BottomNav from '../../shared/Navbar/BottomNav';
import Footer from '../../shared/Footer/Footer';
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const Fade = require("react-reveal/Fade");

export default function SingleResultFromGroup() {
          const { theme } = useContext(InitializeContext);
          const { roll, regulation: reg, exam } = useParams<{ roll: string, regulation: string, exam: string }>()
          const examValue = exam?.toUpperCase().split(' ').join('+');
          const [finalResult, setFinalResult] = useState<any>(null);
          const [loading, setLoading] = useState<boolean>(false);
          const navigate = useNavigate();

          useEffect(() => {
                    fetch(`${BASE_API}/results?roll=${roll}&reg=${reg}&exam=${examValue}`, {
                              method: 'POST',
                              headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ authKey: AUTH_KEY })
                    })
                              .then(res => res.json())
                              .then(data => {
                                        setFinalResult(data);
                                        setLoading(false);
                              })
          }, [roll, reg, examValue])


          if (!finalResult) {
                    return (
                              <div className='flex flex-col justify-center items-center py-12'>
                                        <h1 className={`text-center font-bold text-2xl ${theme ? 'text-white' : 'text-black'}`}>Result not found</h1>
                                        <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>Please check your roll and registration number</p>
                              </div>
                    )
          }

          const date = (date: string) => {
                    return moment(date).format('Do MMM YYYY');
          }

          const getFailedSubjects = (semester: number) => {
                    const failedSubjects = finalResult?.results?.filter((result: any) => result?.semester === semester)
                              .map((result: any) => result?.exam_results[0]?.reffereds?.filter((reffered: any) => reffered?.passed === false)?.length)
                    return failedSubjects[0]
          }

          const failedSubjects = finalResult?.results?.map((result: any) => result?.exam_results[0]?.reffereds?.filter((reffered: any) => reffered?.passed === false)?.length)
          const totalFailedSubjects = failedSubjects?.reduce((a: number, b: number) => a + b, 0)

          const getRefferedSubjects = finalResult?.results?.map((result: any) => result?.exam_results[0]?.reffereds)

          const rightSerial = (serial: number) => {
                    if (serial === 1) return `${serial}st`
                    if (serial === 2) return `${serial}nd`
                    if (serial === 3) return `${serial}rd`
                    return `${serial}th`
          }

          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <Fade top distance="20px">
                                        <div className='md:py-12 pb-16 md:pb-0'>
                                                  <div className='flex justify-center items-center w-full'>
                                                            <div className={`w-full md:w-10/12 max-w-4xl ${theme ? 'md:border' : 'md:glass'} rounded-xl pb-6`}>
                                                                      <div className="card-body p-3 md:p-0">
                                                                                <h2 className={`text-3xl text-center pt-10 font-semibold ${theme ? 'text-white' : 'text-black'}`}>Individual Result</h2>
                                                                                {
                                                                                          finalResult?.roll && (
                                                                                                    <div className="card-actions justify-center mt-10">
                                                                                                              <button className={`btn btn-sm glass ${theme ? 'text-white' : 'text-black'} flex items-center gap-1`} onClick={() => navigate(-1)}><HiOutlineArrowNarrowLeft className='text-lg' /> Back</button>
                                                                                                    </div>
                                                                                          )
                                                                                }
                                                                                {
                                                                                          loading ? <Loading /> : (
                                                                                                    <div className='flex flex-col justify-center items-center py-12'>
                                                                                                              <h1 className={`text-center font-bold text-2xl ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.roll}</h1>
                                                                                                              <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.exam} ({finalResult?.regulation})</p>
                                                                                                              <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.institute?.name}, {finalResult?.institute?.district}</p>
                                                                                                              {
                                                                                                                        getRefferedSubjects && totalFailedSubjects > 0 && (
                                                                                                                                  <p className={`text-center glass p-3 rounded-xl text-xl ${theme ? 'text-error' : 'text-red-500'} mt-8`}>{totalFailedSubjects} {totalFailedSubjects > 1 ? "subjects" : "subject"} yet to pass</p>
                                                                                                                        )
                                                                                                              }
                                                                                                              {
                                                                                                                        finalResult?.results?.map((result: any, index: number) => (
                                                                                                                                  result?.exam_results[0]?.cgpa &&
                                                                                                                                  <div className='flex flex-col justify-center items-center py-5 pb-8 rounded-md w-full md:w-1/2 my-5 md:mt-12 glass' key={index}>
                                                                                                                                            <p className={`text-center mt-7 font-bold ${theme ? 'text-warning' : 'text-[#037bc0]'}`}>CGPA</p>
                                                                                                                                            <p className={`text-center text-3xl ${theme ? 'text-warning' : 'text-[#037bc0]'} font-black`}>{result?.exam_results[0]?.cgpa}</p>
                                                                                                                                  </div>
                                                                                                                        ))
                                                                                                              }
                                                                                                              <div className='rounded-md w-full md:w-1/2 mt-10 md:mt-16 gap-6 flex flex-col'>
                                                                                                                        {
                                                                                                                                  finalResult?.results?.map((result: any, index: number) => (
                                                                                                                                            <div key={index} className='py-6 glass rounded-xl'>
                                                                                                                                                      <div className='flex justify-between items-between gap-4'>
                                                                                                                                                                <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{rightSerial(result?.semester)} {" "}
                                                                                                                                                                          <span className={`${theme ? 'text-error' : 'text-red-500'}`}>
                                                                                                                                                                                    {result?.exam_results[0]?.reffereds ? (
                                                                                                                                                                                              result?.exam_results[0]?.reffereds[0]?.passed === false ? `⚠ ${getFailedSubjects(result?.semester)} subject yet to pass` : <span className={`${theme ? 'text-white' : 'text-[#333]'}`}>
                                                                                                                                                                                                        ✅ Passed
                                                                                                                                                                                              </span>
                                                                                                                                                                                    ) : (
                                                                                                                                                                                              <span className={`${theme ? 'text-white' : 'text-[#333]'}`}>
                                                                                                                                                                                                        ✅ Passed
                                                                                                                                                                                              </span>
                                                                                                                                                                                    )
                                                                                                                                                                                    }
                                                                                                                                                                          </span>
                                                                                                                                                                </p>
                                                                                                                                                                <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{date(result?.exam_results[0]?.date)}</p>
                                                                                                                                                      </div>
                                                                                                                                                      {result?.exam_results[0]?.cgpa && finalResult?.exam ===
                                                                                                                                                                "DIPLOMA IN ENGINEERING" &&
                                                                                                                                                                <span className='flex flex-col justify-center items-center'>
                                                                                                                                                                          <p className={`text-center mt-7 font-bold ${theme ? 'text-white' : 'text-black'}`}>CGPA</p>
                                                                                                                                                                          <p className={`text-center text-3xl ${theme ? 'text-primary' : 'text-[#008000]'} font-black`}>{result?.exam_results[0]?.cgpa}</p>
                                                                                                                                                                </span>
                                                                                                                                                      }
                                                                                                                                                      {result?.exam_results[0]?.gpa && (
                                                                                                                                                                <span className='flex flex-col justify-center items-center'>
                                                                                                                                                                          <p className={`text-center mt-7 ${theme ? 'text-white' : 'text-black'}`}>GPA</p>
                                                                                                                                                                          <p className={`text-center text-3xl ${theme ? 'text-primary' : 'text-[#008000]'} font-black`}>{result?.exam_results[0]?.gpa}</p>
                                                                                                                                                                </span>
                                                                                                                                                      )}
                                                                                                                                                      <div className='flex flex-col gap-3 mt-4'>
                                                                                                                                                                {
                                                                                                                                                                          result?.exam_results[0]?.reffereds?.map((reffered: any, index: number) => (
                                                                                                                                                                                    <div className={`flex justify-between items-center text-sm md:text-[16px] ${getFailedSubjects(reffered?.subject_semester)} ${reffered?.passed === false ? `${theme ? 'text-error' : 'text-red-500'}` : `${theme ? 'text-white' : 'text-black'}`}`} key={index}>
                                                                                                                                                                                              <p className='text-center'>{reffered?.subject_code}</p>
                                                                                                                                                                                              <p className='text-center'>{reffered?.subject_name}</p>
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
                                                                                          )
                                                                                }
                                                                                <div className='mt-6 md:mx-6'>
                                                                                          <small className={`text-xs select-none ${theme ? 'text-white' : 'text-black'}`}>
                                                                                                    <span className='font-bold text-sm'>Note:</span> Results are displayed using pdf searching algorithm. The result is shown by searching from the PDF published by "BTEB". <span className='font-semibold'>The developer or this web site is not responsible for any misinformation.</span>
                                                                                          </small>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <Footer />
                                        </div>
                              </Fade>
                    </>
          )
}
