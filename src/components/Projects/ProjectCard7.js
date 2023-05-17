import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard7= ({ title, des, src,Tech }) => {
  return (
    <div className="project-card w-full p-1 xl:px-1  h-auto  rounded-lg  flex flex-col bg-gradient-to-l from-bodyColor to-[#9YCFE3] group hover:bg-gradient-to-b hover:from-red-900 hover:gray-200 transition-colors duration-1000 ">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-80 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="project-title text-base uppercase text-cyan-200 font-bold hover:text-violet-300 duration-300">
              {title}
            </h3>
           
            <div className="flex gap-2">
              <a href='https://github.com/hrusikesh8280/HTML-CSS' target='_blanck' className="project-github-link text-xl w-9 h-9 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href='https://clinquant-pastelito-22f35f.netlify.app/' target='_blanck' className="project-deployed-link text-xl w-9 h-9 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <div className="tech-stack bg-transparent p-4 ">
            <p className="project-description font-bold text-sm text-violet-300 tracking-wide mt-3 hover:text-cyan-400 duration-300">
              Tech Stack:
            </p>
            <div className="tech-items flex flex-wrap gap-1">
              {Tech.split(" | ").map((tech, index) => (
               <div
                 key={index}
                className="tech-item bg-transparent text-white rounded-lg px-2 py-1 shadow-md"
                style={{
                color:"#ffbd69",
                backgroundColor: "#5a37c3"  , // Add your desired color here
                boxShadow: "0px 2px 4px rgba(0, 0, 5, 0.15)", // Adjust shadow as needed
                 fontWeight: "bold", // Add the font weight property
                }}
                >
             {tech}
           </div>
          ))}
          </div>
          </div>

          <p  className=" project-description text-sm text-yellow-500 tracking-wide mt-3 hover:text-cyan-400 duration-300 ">
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard7