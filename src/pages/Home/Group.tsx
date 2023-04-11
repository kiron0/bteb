import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/group-discussion.png";

const Fade = require("react-reveal/Fade");

export default function Group() {
  return (
    <section
      className="bg-base-100 body-font pb-4 md:pb-16"
    >
      <div className="hero bg-base-200 pb-8 md:pb-0">
        <div className="hero-content flex-col justify-between lg:flex-row">
          <Fade right distance="20px">
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
          <Fade left distance="30px">
            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                View your group results together in a list.
              </h1>
              <p className="py-6 text-lg">
                You can see any group or list of results by the list of the roll numbers. Just enter the roll numbers and see the results. It's that simple.
              </p>
              <div className='flex justify-center md:justify-start items-center'>
                <Link to="/group-results" className="btn btn-primary text-white">
                  Check Group Results
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
