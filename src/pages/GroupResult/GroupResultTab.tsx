import React, { useContext } from 'react'
import { InitializeContext } from '../../App'
import { useNavigate } from 'react-router-dom'

type Props = {
          finalResult: any
          date: (date: string) => string
}

export default function GroupResultTab({ finalResult, date }: Props) {
          const { theme } = useContext(InitializeContext);
          const navigate = useNavigate();

          const showResult = (roll: string, regulation: string, exam: string) => {
                    navigate(`/individualResult/${roll}/${regulation}/${exam}`)
          }

          return (
                    <div>
                              <div className='flex flex-col justify-center items-center'>
                                        <h1 className={`text-center font-bold text-2xl ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.exam}</h1>
                                        <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.semester}th semester, {finalResult?.regulation} Regulation</p>
                                        <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{date(finalResult?.results[0]?.result?.date)}</p>
                                        <p className={`text-center text-lg ${theme ? 'text-white' : 'text-black'}`}>{finalResult?.query_rolls}</p>
                              </div>
                              <div className="overflow-x-auto rounded-xl flex flex-col justify-center items-center mx-auto">
                                        <table className={`table w-full md:w-3/4 mt-10 ${theme ? 'text-white' : 'text-black'}`}>
                                                  <thead className="bg-base-300">
                                                            <tr>
                                                                      <th>Sl</th>
                                                                      <th>Roll</th>
                                                                      <th>Result</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      finalResult?.results?.map((result: any, index: number) => (
                                                                                <tr key={index}>
                                                                                          <td>{index + 1}</td>
                                                                                          {result?.roll && <td className='md:hover:underline duration-300 md:cursor-pointer' onClick={() => showResult(result.roll, result.regulation, finalResult.exam)}>{result?.roll}</td>}
                                                                                          {result?.result?.gpa ? <td>{result?.result.gpa}</td> : result?.result?.reffereds && <td className={`${theme ? 'text-error' : 'text-red-500'}`}>{result?.result?.reffereds?.length} referred</td>}
                                                                                </tr>
                                                                      ))
                                                            }
                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          )
}
