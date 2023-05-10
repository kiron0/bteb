import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/happy-student.svg";

const Fade = require("react-reveal/Fade");

export default function Individual() {
  return (
    <section
      className="bg-base-100 body-font py-4 md:py-16"
    >
      <div className="hero bg-base-100">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <Fade right distance="20px">
            <div className="w-full md:w-2/3 lg:w-1/3 rounded overflow-hidden lg:ml-6">
              <div className="outline-none h-full">
                <img
                  src={bannerImg}
                  className=" md:rounded-lg h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </Fade>
          <Fade left distance="30px">
            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
              <span className="text-lg">
                This is{" "}
                <strong className="text-primary">BTEB Results Factory</strong>.
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                BTEB Results at your fingertips.
              </h1>
              <p className="py-6 text-lg">
                Does it feel difficult to find BTEB results? Well... Not anymore! Here is the easiest way to find your diploma or polytechnic results.
              </p>
              <div className='flex justify-center md:justify-start items-center'>
                <Link to="/individualResult" className="btn btn-primary text-white">
                  Check Results
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
