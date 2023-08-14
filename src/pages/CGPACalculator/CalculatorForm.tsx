import React from 'react'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import useScrollToTop from '../../hooks/useScrollToTop';
import Footer from '../../shared/Footer/Footer';

const Fade = require("react-reveal/Fade");

export default function CalculatorForm() {
  useScrollToTop();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = e.key;
    const currentValue = e.currentTarget.value;
    const newValue = currentValue + pressedKey;

    if (!/^(?!0|\.)(?!0\.)(?!0$)\d*(?:\.\d{0,2})?$/.test(newValue) || currentValue.length > 3) {
      e.preventDefault();
    }
  };

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      reg: { value: string };
      first: { value: string };
      second: { value: string };
      third: { value: string };
      fourth: { value: string };
      fifth: { value: string };
      sixth: { value: string };
      seventh: { value: string };
      eighth: { value: string };
    };

    const reg = form.reg.value;
    const first = form.first.value;
    const second = form.second.value;
    const third = form.third.value;
    const fourth = form.fourth.value;
    const fifth = form.fifth.value;
    const sixth = form.sixth.value;
    const seventh = form.seventh.value;
    const eighth = form.eighth.value;

    if (first === '' || second === '' || third === '' || fourth === '' || fifth === '' || sixth === '' || seventh === '' || eighth === '') {
      return toast.error('Please fill all the fields', {
        style: {
          padding: '16px',
          color: '#000',
          borderRadius: '10px',
          background: '#fff3cd',
        },
        duration: 3000,
      });
    } else if (isNaN(Number(first)) || isNaN(Number(second)) || isNaN(Number(third)) || isNaN(Number(fourth)) || isNaN(Number(fifth)) || isNaN(Number(sixth)) || isNaN(Number(seventh)) || isNaN(Number(eighth))) {
      return toast.error('Please enter a valid gpa', {
        style: {
          padding: '16px',
          color: '#000',
          borderRadius: '10px',
          background: '#fff3cd',
        },
        duration: 3000,
      });
    } else if (Number(first) > 4 || Number(second) > 4 || Number(third) > 4 || Number(fourth) > 4 || Number(fifth) > 4 || Number(sixth) > 4 || Number(seventh) > 4 || Number(eighth) > 4) {
      return toast.error('GPA cannot be more than 4', {
        style: {
          padding: '16px',
          color: '#000',
          borderRadius: '10px',
          background: '#fff3cd',
        },
        duration: 3000,
      });
    } else {
      if (reg === '2010') {
        const total = ((Number(first) / 100) * 5) + ((Number(second) / 100) * 5) + ((Number(third) / 100) * 5) + ((Number(fourth) / 100) * 15) + ((Number(fifth) / 100) * 15) + ((Number(sixth) / 100) * 20) + ((Number(seventh) / 100) * 25) + ((Number(eighth) / 100) * 10);
        Swal.fire({
          title: `Your CGPA is: ${total.toFixed(2)}`,
          text: `This calculation is based on ${reg} regulation.`,
          icon: 'success',
          showConfirmButton: false,
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
      }
      else if (reg === '2016') {
        const total = ((Number(first) / 100) * 5) + ((Number(second) / 100) * 5) + ((Number(third) / 100) * 5) + ((Number(fourth) / 100) * 10) + ((Number(fifth) / 100) * 15) + ((Number(sixth) / 100) * 20) + ((Number(seventh) / 100) * 25) + ((Number(eighth) / 100) * 15);
        Swal.fire({
          title: `Your CGPA is: ${total.toFixed(2)}`,
          text: `This calculation is based on ${reg} regulation.`,
          icon: 'success',
          showConfirmButton: false,
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
      } else if (reg === '2022') {
        const total = ((Number(first) / 100) * 5) + ((Number(second) / 100) * 5) + ((Number(third) / 100) * 10) + ((Number(fourth) / 100) * 10) + ((Number(fifth) / 100) * 20) + ((Number(sixth) / 100) * 20) + ((Number(seventh) / 100) * 20) + ((Number(eighth) / 100) * 10);
        Swal.fire({
          title: `Your CGPA is: ${total.toFixed(2)}`,
          text: `This calculation is based on ${reg} regulation.`,
          icon: 'success',
          showConfirmButton: false,
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
      } else {
        return toast.error('Please select a regulation', {
          style: {
            padding: '16px',
            color: '#000',
            borderRadius: '10px',
            background: '#fff3cd',
          },
          duration: 3000,
        });
      }
    }
  };

  const handleClear = () => {
    const form = document.getElementById('cgpaCalc') as HTMLFormElement;
    form.reset();
  };

  return (
    <Fade top duration={1000} distance="40px">
      <div className='md:py-12 pb-16 md:pb-0'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-16'>
          <div className='card w-full md:w-2/3 lg:w-1/3 md:glass'>
            <div className='px-4 py-10 md:card-body'>
              <div className={`flex flex-col justify-center items-center md:pt-7 select-none text-black`}>
                <h2 className="text-2xl md:text-3xl font-bold">CGPA Calculator</h2>
                <form onSubmit={handleCalculate} id='cgpaCalc' className='mt-2 w-full md:px-6'>
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
                        defaultValue={2016}
                      >
                        <option>2010</option>
                        <option>2016</option>
                        <option>2022</option>
                      </select>
                    </div>
                  </div>
                  <p className='text-center pt-4 font-bold'>
                    Enter your GPA for each semester below
                  </p>
                  <div className='flex justify-center items-center gap-3'>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">1st Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="first"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="1st"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">2nd Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="second"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="2nd"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center items-center gap-3'>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">3rd Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="third"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="3rd"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">4th Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="fourth"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="4th"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center items-center gap-3'>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">5th Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="fifth"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="5th"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">6th Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="sixth"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="6th"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center items-center gap-3'>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">7th Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="seventh"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="7th"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                    <div className="name border rounded p-3 relative mt-10">
                      <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                        <h3 className="text-xs font-poppins font-bold">8th Semester</h3>
                      </div>
                      <div className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 `}>
                        <div className="icon">
                          <i className="bx bxs-pen"></i>
                        </div>
                        <input
                          type="text"
                          name="eighth"
                          className="form-control outline-none pl-4 w-full bg-transparent"
                          placeholder="8th"
                          autoComplete='off'
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="modal-action gap-2">
                    <span className={`btn btn-sm md:btn-md glass text-red-500 flex justify-center items-center gap-2`} onClick={handleClear}>
                      <i className="bx bx-trash-alt text-lg"></i> AC/Clear
                    </span>
                    <button className={`btn btn-sm md:btn-md glass text-black flex gap-2 `} type="submit">
                      <i className="bx bx-calculator text-lg"></i> Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='card w-full md:w-2/3 lg:w-1/3 md:glass'>
            <div className='px-4 pb-10 md:card-body'>
              <div className={`flex flex-col justify-center items-center md:pt-7 select-none text-black`}>
                <h2 className="text-xl md:text-2xl font-bold text-center">Semester Wise GPA Priorities For Regulations</h2>
                <div className="overflow-x-auto mt-6 w-full">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Semester</th>
                        <th>2010</th>
                        <th>2016</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1st</td>
                        <td>5%</td>
                        <td>5%</td>
                        <td>5%</td>
                      </tr>
                      <tr>
                        <td>2nd</td>
                        <td>5%</td>
                        <td>5%</td>
                        <td>5%</td>
                      </tr>
                      <tr>
                        <td>3rd</td>
                        <td>5%</td>
                        <td>5%</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>4th</td>
                        <td>15%</td>
                        <td>10%</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>5th</td>
                        <td>15%</td>
                        <td>15%</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>6th</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>7th</td>
                        <td>25%</td>
                        <td>25%</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>8th</td>
                        <td>10%</td>
                        <td>15%</td>
                        <td>10%</td>
                      </tr>
                      <tr className='font-bold'>
                        <td>Total</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fade>
  )
}