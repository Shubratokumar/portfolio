import React from "react";
import project1 from "../assets/images/Universal-Electronics.png";
import project2 from "../assets/images/Apex-Warehouse-Management .png";
import project3 from "../assets/images/Heaven-Dental-Home .png";

const Portfolio = () => {
  return (
    <section className="h-full  p-10 lg:py-30 bg-[#EEEEEE]">
      <div className="flex flex-col justify-center items-center pb-8">
        <h2 className="text-xl lg:text-2xl font-light">Projects</h2>
        <p className="text-4xl lg:text-5xl font-semibold">My Recent Projects</p>
      </div>
      <div>
          <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-5">
            <div>
              <img src={project1} className="w-full object-fill" alt="" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Universal Electronics
              </h2>
              <p>
                Universal Electronics is a MERN stack project. It's a full
                inventory management web app developed based on single page
                application principles.
              </p>
              <h2>Used Technologies: </h2>
              <div>
                <span className="border border-primary p-1 m-1">HTML5</span>
                <span className="border border-primary p-1 m-1">CSS3</span>
                <span className="border border-primary p-1 m-1">Bootstrap</span>
                <span className="border border-primary p-1 m-1">
                  TailwindCSS
                </span>
              </div>
              <div className="mt-3">
                <span className="border border-primary p-1 m-1">Live site</span>
                <span className="border border-primary p-1 m-1">
                  Client Side
                </span>
                <span className="border border-primary p-1 m-1">
                  Server Side
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-5">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Universal Electronics
              </h2>
              <p>
                Universal Electronics is a MERN stack project. It's a full
                inventory management web app developed based on single page
                application principles.
              </p>
              <h2>Used Technologies: </h2>
              <div>
                <span className="border border-primary p-1 m-1">HTML5</span>
                <span className="border border-primary p-1 m-1">CSS3</span>
                <span className="border border-primary p-1 m-1">Bootstrap</span>
                <span className="border border-primary p-1 m-1">
                  TailwindCSS
                </span>
              </div>
              <div className="mt-3">
                <span className="border border-primary p-1 m-1">Live site</span>
                <span className="border border-primary p-1 m-1">
                  Client Side
                </span>
                <span className="border border-primary p-1 m-1">
                  Server Side
                </span>
              </div>
            </div>
            <div>
              <img src={project2} className="w-full object-fill" alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-5">
            <div>
              <img src={project3} className="w-full object-fill" alt="" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Universal Electronics
              </h2>
              <p>
                Universal Electronics is a MERN stack project. It's a full
                inventory management web app developed based on single page
                application principles.
              </p>
              <h2>Used Technologies: </h2>
              <div>
                <span className="border border-primary p-1 m-1">HTML5</span>
                <span className="border border-primary p-1 m-1">CSS3</span>
                <span className="border border-primary p-1 m-1">Bootstrap</span>
                <span className="border border-primary p-1 m-1">
                  TailwindCSS
                </span>
              </div>
              <div className="mt-3">
                <span className="border border-primary p-1 m-1">Live site</span>
                <span className="border border-primary p-1 m-1">
                  Client Side
                </span>
                <span className="border border-primary p-1 m-1">
                  Server Side
                </span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Portfolio;
