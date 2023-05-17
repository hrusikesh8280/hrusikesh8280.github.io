import React from 'react'

import { Messo,Amazon,Monday,Myntra,Snapdeal,GameImg,html } from "../../assets/asset";


import "./Proj.css"
import ProjectCard1 from './ProjectCard1';
import ProjectCard2 from './ProjectCard2';
import ProjectCard3 from './ProjectCard3';
import ProjectCard4 from './ProjectCard4';
import ProjectCard5 from './ProjectCard5';
import ProjectCard6 from './ProjectCard6';
import ProjectCard7 from './ProjectCard7';

// const Projects = () => {
//     return (
        
//         <div  id="projects" className='Project'>
//             <div className='project-content'>
//           <div className="project-headline ">
//            <h1>Projects</h1>
//           </div>
          
//           <div className="project-card-grid">
//             <ProjectCard
//               title="SOCIAL MEDIA CLONE"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectOne}
//               techstack="html,css,javascript"
//             />
//             <ProjectCard
//               title="E-commerce Website"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectTwo}
//               techstack="html,css,javascript"
//             />
//             <ProjectCard
//               title="Chatting App"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectThree}
//               techstack="html,css,javascript"
//             />
//             <ProjectCard
//               title="SOCIAL MEDIA CLONE"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectThree}
//               techstack="html,css,javascript"
//             />
//             <ProjectCard
//               title="E-commerce Website"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectOne}
//               techstack="html,css,javascript"
//             />
//             <ProjectCard
//               title="Chatting App"
//               des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//               src={projectTwo}
//               techstack="html,css,javascript"
//             />
//           </div>
//           </div>
//         </div>
//       );
//   }
const Projects = () => {
  return (
    <div className='Project-1'>
    <div
      id="projects"
      className="Project  py-20 border-b-[1px] border-b-black "
    >
      <div className="height: 70vh; width: 70%; margin: auto;">
    <div class="title-about">
        <h1 className="text-white border-b-2 border-gray-400 inline-block pb-2 mb-10 text-4xl">
           Projects
        </h1>
    </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">

        <ProjectCard6 
            title="Clicky Games"
            Tech= "TypeScript | React | Redux | Express JS | Node JS | MongoDB | Mongoose | Tailwind."
            des="Cliky Ball is a fast-paced web-based game that challenges your color-matching skills. the game is easy to use and accessible to everyone. Play it in short bursts for a quick break or to pass the time."
            src={GameImg}
          />
        <ProjectCard1
          title="Shop-Vibes "
          Tech= "React | Redux | Chakra UI | Node JS | MongoDB | Mongoose."
          des="Shopvibes is an e-commerce platform where users can buy handpicked fashion products at affordable prices. It features a search bar and filtering options to make product discovery easy. The website also has an admin panel to manage user data, products, and sales."
          src={Messo}
        />
        <ProjectCard2
          title="Amazon-Clone"
          Tech= "React | Redux | Chakra UI | javaScript | Cyclic | CSS "
          des=" The Amazon clone project is a fully functional e-commerce website that allows users to easily search, filter, and sort products. Users can add items to their cart and proceed to checkout using various payment options. It is designed to mimic the look and feel of the official Amazon website."
          src={Amazon}
        />
        <ProjectCard3
          title="Monday.com"
          Tech= "HTML | javaScript | Cyclic | CSS "
          des=" This project is a clone of monday.com  is a project management tool that helps teams manage their work, track progress, and collaborate effectively. It provides a visual and intuitive platform for managing tasks, projects, and workflows, allowing teams to stay organized and on top of their work. "
          src={Monday}
        />
        <ProjectCard4
          title="Snapdeal Clone"
          Tech= "React | Chakra UI | javaScript | Cyclic | CSS | HTML "
          des="This is a replica of the Snapdeal e-commerce platform, which features comprehensive functionalities like product listings, advanced search and filtering, and user account management. The project was developed to showcase my expertise in web development."
          src={Snapdeal}
        />
        <ProjectCard5
          title="E-commerce Admin-Section"
          Tech= "React | Redux | Chakra UI | javaScript | Cyclic | CSS "
          des=" Developed an intuitive admin dashboard for an e-commerce platform, similar to Myntra's, to facilitate authorized personnel in performing CRUD operations on user accounts, products, and orders. Designed with a user-friendly interface and security features to ensure smooth and secure management."
          src={Myntra}
        />
        <ProjectCard7 
          title="Static-HTML,CSS Website"
          Tech= "javaScript | HTML | CSS "
          des=" This is a two-page project that showcases the skills in HTML, CSS, and JavaScript. The Home Page has a modern design with a logo, Nav bar, and call-to-action button. The Contacts Page offers a simple way for visitors to get in touch with me"
          src={html}
        />
      </div>
    </div>
    </div>
  );
}
  export default Projects
