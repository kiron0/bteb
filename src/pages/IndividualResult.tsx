import React from 'react'

type Props = {
  finalResult: any
  date: (date: string) => string
}

export default function IndividualResult({ finalResult, date }: Props) {
  const getFailedSubjects = (semester: number) => {
    const failedSubjects = finalResult?.results?.filter((result: any) => result?.semester === semester)
      .map((result: any) => result?.exam_results[0]?.reffereds?.filter((reffered: any) => reffered?.passed === false)?.length)
    return failedSubjects[0]
  }

  const failedSubjects = finalResult?.results?.map((result: any) => result?.exam_results[0]?.reffereds?.filter((reffered: any) => reffered?.passed === false)?.length)
  const totalFailedSubjects = failedSubjects?.reduce((a: number, b: number) => a + b, 0)

  const getRefferedSubjects = finalResult?.results?.map((result: any) => result?.exam_results[0]?.reffereds)

  return (
    <div className='flex flex-col justify-center items-center py-12'>
      <h1 className='text-center font-bold text-2xl'>{finalResult?.roll}</h1>
      <p className='text-center text-lg'>{finalResult?.exam} ({finalResult?.regulation})</p>
      <p className='text-center text-lg'>{finalResult?.institute?.name}, {finalResult?.institute?.district}</p>
      {
        getRefferedSubjects && totalFailedSubjects > 0 && (
          <p className='text-center glass p-3 rounded-xl text-xl text-red-500 mt-8'>{totalFailedSubjects} {totalFailedSubjects > 1 ? "subjects" : "subject"} yet to pass</p>
        )
      }
      <div className='rounded-md w-full md:w-1/2 mt-12 gap-6 flex flex-col'>
        {
          finalResult?.results?.map((result: any, index: number) => (
            <div key={index} className='py-6 glass rounded-xl'>
              <div className='flex justify-between items-between gap-4'>
                <p className='text-center text-lg'>{result?.semester}th {" "}
                  <span className='text-red-500'>
                    {result?.exam_results[0]?.reffereds ? (
                      result?.exam_results[0]?.reffereds[0]?.passed === false ? `⚠ ${getFailedSubjects(result?.semester)} subject yet to pass` : <span className='text-[#333]'>
                        ✅ Passed
                      </span>
                    ) : (
                      <span className='text-[#333]'>
                        ✅ Passed
                      </span>
                    )
                    }
                  </span>
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
                    <div className={`flex justify-between text-md ${getFailedSubjects(reffered?.subject_semester)} ${reffered?.passed === false && "text-red-500"}`} key={index}>
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
  )
}
