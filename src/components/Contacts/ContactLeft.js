import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaGithub } from "react-icons/fa";

import Contact from "../../assets/images/contact/contactImg.png"

const ContactLeft = () => {
    return (
      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#5890] to-[#61273b] p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
        <img
          className=" m-auto h-60 object-cover rounded-lg mb-2"
          src={Contact}
          alt="contactImg"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Hrusikesh Ghadei</h3>
          <p className="text-lg font-normal text-gray-400">
            MERN Stack Developer
          </p>
          <p className="text-base text-gray-400 tracking-wide">
          Full Stack Developer with expertise in front-end and back-end development. 
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span id='contact-phone' className="text-lightText">+91 7008675706</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span  id="contact-email" className="text-lightText">hrusikeshviroot@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
          <div className="flex gap-4">
            <a className="bannerIcon">
              <FaFacebookF />
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <a id="contact-linkedin" className="bannerIcon" href='https://www.linkedin.com/in/hrusikesh-ghadei-49371621a/' target='_blanck'>
              <FaLinkedinIn />
            </a>
            <a id='contact-github' href='https://github.com/hrusikesh8280' target='_blanck' className="bannerIcon">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactLeft