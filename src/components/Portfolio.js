import React from "react";
import project1 from "../assets/images/Universal-Electronics.png";
import project2 from "../assets/images/Apex-Warehouse-Management .png";
import project3 from "../assets/images/Heaven-Dental-Home .png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-full mt-10 p-10 lg:py-30 bg-[#EEEEEE]">
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="text-xl lg:text-2xl font-light">Projects</h2>
        <p className="text-4xl lg:text-5xl font-semibold text-center">My Recent Projects</p>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-9 lg:mb-5">
          <div className="flex-1">
            <img src={project1} className="w-full h-[400px]" alt="" />
          </div>
          <div className="flex-1 mx-3 p-3">
            <h2 className="text-xl lg:text-2xl font-semibold pb-3">
              Universal Electronics
            </h2>
            <div className="p-2">
              <p>
                Universal Electronics is a MERN stack project. It's a full
                inventory management web app developed based on single page
                application principles.
              </p>
              <li>Implemented CURD operation for admin role.</li>
              <li>Token base authentication with JSON Web Token.</li>
              <li>
                Payment system integration. Used Stripe for making payments of
                products.
              </li>
            </div>
            <h2 className="text-lg lg:text-xl font-semibold py-2">
              Used Technologies:{" "}
            </h2>
            <div className="p-2">
              <p>
                React JS, React Router, React hook form, React hot toast,
                Firebase, React firebase hooks, Tailwind CSS, DaisyUI, React
                Icons, React Query, Axios, Express.js, MongoDB, DotEnv, Stripe,
                JWT.{" "}
              </p>
            </div>
            <div className="mt-8">
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://product-manufacturer.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              </span>
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://github.com/Shubratokumar/manufacturer-website-client-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Side
                </a>
              </span>
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://github.com/Shubratokumar/manufacturer-website-server-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Side
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-9 lg:mb-5">
          <div className="flex-1 mx-3 p-3">
            <h2 className="text-xl lg:text-2xl font-semibold pb-3">
              Apex Warehouse Management
            </h2>
            <div className="p-2">
              <p>
                Apex Warehouse Management is a MERN stack project. This app
                works for managing smart gadgets as well as electronics.
              </p>
              <li>Token base authentication with JSON Web Token.</li>
              <li>Implemented CURD operation.</li>
              <li>Without verified email user cannot make order.</li>
            </div>
            <h2 className="text-lg lg:text-xl font-semibold py-2">
              Used Technologies:{" "}
            </h2>
            <div className="p-2">
              <p>
                React JS, React Router, React hot toast, Firebase, React
                firebase hooks, Bootstrap, React Bootstrap, React Icons, Axios,
                Express.js, MongoDB, DotEnv, JWT.
              </p>
            </div>
            <div className="mt-8">
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://warehouse-management-df7a0.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              </span>
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://github.com/Shubratokumar/warehouse-management-clinet-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Side
                </a>
              </span>
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://github.com/Shubratokumar/warehouse-management-server-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Side
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1">
            <img src={project2} className="w-full h-[400px]" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto rounded-md  bg-base-100 p-3.5 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 mb-9 lg:mb-5">
          <div className="flex-1">
            <img src={project3} className="w-full h-[400px]" alt="" />
          </div>
          <div className="flex-1 mx-3 p-3">
            <h2 className="text-xl lg:text-2xl font-semibold pb-3">
              Heaven Dental Home
            </h2>
            <div className="p-2">
              <p>
                Heaven Dental Home is a individual service providing project.
                Heaven Dental Home detal service providing web application.
              </p>
              <li>User can make a booking for detal treatment.</li>
              <li>Used firebase authentication for login and sign up.</li>
              <li>User can see other paitents reviews.</li>
            </div>
            <h2 className="text-lg lg:text-xl font-semibold py-2">
              Used Technologies:{" "}
            </h2>
            <div className="p-2">
              <p>
                React JS, React Router, Firebase, React hot toast, React
                firebase hooks, Bootstrap, React Bootstrap, and React Icons.
              </p>
            </div>
            <div className="mt-8">
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://service-provider-with-firebase.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              </span>
              <span className="border border-secondary hover:rounded-lg p-1 m-1">
                <a
                  href="https://github.com/Shubratokumar/Heaven-Dental-Home-with-Firebase-Authentication"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Link
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
