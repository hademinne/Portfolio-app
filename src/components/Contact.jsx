import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1e1e1e] flex justify-center items-center p-4"
    >
      {/* Form Section - Visible only on large screens */}
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full hidden lg:flex"
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
      </form>

      {/* Social Icons Section - Visible only on small and medium screens */}
      <div className="flex flex-col w-full py-5  lg:hidden">
        <p className="text-1xl font-bold inline border-b-4 border-pink-600 text-gray-300 my-4">
          Socials Contacts
        </p>
        <a
          className="flex justify-between items-center w-[100px] text-gray-300 bg-blue-600 my-2 p-2 rounded hover:bg-blue-700 transition duration-300"
          href="https://www.linkedin.com/in/medlemine/"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
        <a
          className="flex justify-between items-center w-[100px] text-gray-300 bg-[#333333] my-2 p-2 rounded hover:bg-gray-800 transition duration-300"
          href="https://github.com/hademinne"
        >
          Github <FaGithub size={30} />
        </a>
        <a
          className="flex justify-between items-center w-[100px] text-gray-300 bg-[#6fc2b0] my-2 p-2 rounded hover:bg-teal-600 transition duration-300"
          href="https://wa.me/+22246800582"
        >
          Whatsapp <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
