import React from "react";
import bannerImg from "../../Assets/Banner/solomar.jpg";

const Home = () => {
  //grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3 - assigns grid space on lg and sml mobile view
  //className="w-[300px] provides a fixed size of 300px in mobile view
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img
              src={bannerImg}
              alt="Banner"
              className="hover:border-2 rounded-3xl"
            />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center">
            <h1 className="lg:text-5xl font-bold">
              Hi, I'm Simon - Web Developer
            </h1>
            <p className="py-6 lg:text-lg text-sm">
              {" "}
              Welcome! Thank you for taking the time to visit my corner of the
              internet. My name is Simon, and I enjoy creating user-friendly web
              applications. My interest in programming began in September 2021
              while I was searching for hobbies I could be passionate about
              during my transition out of the military.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
