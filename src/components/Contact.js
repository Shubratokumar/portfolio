import React from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_im0ztqc', 'template_so9kbeo', e.target, 'H5mcxTOHmYvRQBAor')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

  return (
    <div className="h-screen p-10 lg:py-20 ">
      <div className="flex flex-col justify-center items-center">
        <div className="my-10 text-center w-full lg:w-6/12">
          <p className="text-xl">What’s Next? </p>
          <h1 className="font-bold text-4xl lg:text-5xl pb-4">Get In Touch</h1>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={sendEmail}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 mx-auto">
              <input
                type="submit"
                value="send message"
                className="btn btn-outlined btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
