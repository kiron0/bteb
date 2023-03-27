import React from 'react'

type Props = {
          finalResult: any
          date: (date: string) => string
}

export default function GroupResultTab({ finalResult, date }: Props) {
          // console.log(finalResult)
          return (
                    <div>
                              <div className='flex flex-col justify-center items-center'>
                                        <h1 className='text-center font-bold text-2xl'>{finalResult?.exam}</h1>
                                        <p className='text-center text-lg'>{finalResult?.semester}th semester, {finalResult?.regulation} Regulation</p>
                                        <p className='text-center text-lg'>{date(finalResult?.results[0]?.result?.date)}</p>
                                        <p className='text-center text-lg'>{finalResult?.query_rolls}</p>
                              </div>
                              <div className="overflow-x-auto rounded-xl flex flex-col justify-center items-center mx-auto">
                                        <table className="table w-full md:w-3/4 mt-10 glass rounded-lg">
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
                                                                                          {result?.roll && <td>{result?.roll}</td>}
                                                                                          {result?.result?.gpa ? <td>{result?.result.gpa}</td> : result?.result?.reffereds && <td className='text-red-500'>{result?.result?.reffereds?.length} referred</td>}
                                                                                </tr>
                                                                      ))}
                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          )
}
