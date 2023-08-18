import React, { useContext } from 'react'
import { InitializeContext } from '../App';

export default function Loading() {
          const { theme } = useContext(InitializeContext);

          return (
                    <div className="flex items-center justify-center py-36 md:py-48">
                              <div
                                        className={`inline-block ${theme ? 'text-white' : 'text-black'} h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                                        role="status">
                                        <span
                                                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                              </div>
                    </div>
          )
}
