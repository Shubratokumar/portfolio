import React from "react";
import responsive from "../assets/images/responsive.jpg";
import frontend from "../assets/images/frontend.jpg";
import backend from "../assets/images/backend.jpg";

const Services = () => {
  return (
    <section className="h-full  p-10 lg:py-30 mt-[-300px]">
        <div className="flex flex-col justify-center items-center pb-8 text-white">
          <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              >
            <h2 className="text-xl lg:text-2xl font-light">Services</h2>
          </div>
          <div data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
          >
            <p className="text-4xl lg:text-5xl font-semibold">What I Do</p>
          </div>            
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7">
        <div 
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="card w-full lg:w-96 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300">
          <figure>
            <img
              src={responsive}
              alt="responsive"
               className="h-72"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Resposive Design</h2>
            <p>Make websites full responsive according to devices. Can convert figma design by using plain HTML and CSS.</p>
            <div class="card-actions">
                <span className="border border-primary p-1">HTML5</span>
                <span className="border border-primary p-1">CSS3</span>
                <span className="border border-primary p-1">Bootstrap</span>
                <span className="border border-primary p-1">TailwindCSS</span>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" 
        class="card w-full lg:w-96 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300">
          <figure >
            <img
              src={frontend}
              alt="frontend"
              className="h-72"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Modern Frontend</h2>
            <p>While developing always focused on modern single page application principles.Make UI interact in look and feell.</p>
            <div class="card-actions">
                <span className="border border-primary p-1">JavaScript ES6</span>
                <span className="border border-primary p-1">React JS</span>
                <span className="border border-primary p-1">Firebase</span>
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
         class="card w-full lg:w-96 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300">
          <figure >
            <img
              src={backend}
              alt="backend"
              className="h-72 w-full"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Backend Development</h2>
            <p>Used Nodejs and Expresjs for server of a wev application. For managing data I usually used MongoDB database.React for fornt end development.</p>
            <div class="card-actions">
                <span className="border border-primary p-1">Node JS</span>
                <span className="border border-primary p-1">Express JS</span>
                <span className="border border-primary p-1">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
