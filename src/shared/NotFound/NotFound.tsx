import React from "react";
import { useNavigate } from "react-router-dom";
import not_found from "../../assets/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-transparent">
      <img src={not_found} alt="" />
      <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-1 glass rounded-xl p-2 px-3 text-black text-xl"><i className="bx bx-home text-2xl"></i>Home</button>
    </div>
  );
};

export default NotFound;
