import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/calculator.svg";

const Fade = require("react-reveal/Fade");

export default function CGPA() {
  return (
    <section
      className="bg-base-100 body-font pb-4 md:pb-16"
    >
      <div className="hero bg-base-100">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <Fade bottom distance="20px">
            <div className="w-full md:w-2/3 lg:w-1/3 rounded overflow-hidden lg:ml-6">
              <div className="outline-none h-full">
                <img
                  src={bannerImg}
                  className="md:rounded-lg h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </Fade>
          <Fade bottom distance="30px">
            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Calculate your destinations in CGPA Calculator.
              </h1>
              <p className="py-6 text-lg">
                You can figure out your required GPA for your upcoming semesters to reach your target CGPA.
              </p>
              <div className='flex justify-center md:justify-start items-center'>
                <Link to="/cgpaCalc" className="btn btn-primary text-white">
                  Open Calculator
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
