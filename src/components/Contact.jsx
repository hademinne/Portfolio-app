import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below , shoot me an email - hademinne@gmail.com or
            you are welcome on Whatsapp:
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://wa.me/+22236800582"
            >
              {" "}
              Click here
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>

        {/* Social icons */}
        <div className="flex justify-around w-full m-4 sm:flex md:flex lg:hidden">
          <a
            className="flex justify-between items-center w-[100px] text-gray-300 bg-blue-600 p-2 rounded hover:bg-blue-700 transition duration-300"
            href="https://www.linkedin.com/in/medlemine/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
          <a
            className="flex justify-between items-center w-[100px] text-gray-300 bg-[#333333] p-2 rounded hover:bg-gray-800 transition duration-300"
            href="https://github.com/hademinne"
          >
            Github <FaGithub size={30} />
          </a>
          <a
            className="flex justify-between items-center w-[100px] text-gray-300 bg-[#6fc2b0] p-2 rounded hover:bg-teal-600 transition duration-300"
            href="https://wa.me/+22236800582"
          >
            Whatsapp <FaWhatsapp size={30} />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
