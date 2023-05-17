import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Himage from "../../assets/Himage.png";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Hrusikesh_Ghadei_Resume.pdf";

export default function Home() {
  const Mylink = () => {
    window.open(
      "https://drive.google.com/file/d/1iXXXyajLwueGmmFHde4LhFyyQb1TJLQr/view?usp=share_link",
      "_blank"
    );
  };

  return (
    <div id="home" className="Home">
      <div className="container-home">
        <div className="content">
          <h2>Hey! I Am</h2>
          <h1 id="user-detail-name">Hrusikesh Ghadei</h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "Greetings, and welcome to my portfolio!",
                  "Crafting web solutions that inspire and engage.",
                  "Turning ideas into functional web solutions.",
                  "Focusing on performance and user experience.",
                ],
                autoStart: true,
                loop: true,
                cursor: " ",
                delay: 50,
                deleteSpeed: 40,
              }}
            />
          </div>
          <p id="user-detail-intro">
            Full Stack Developer with expertise in front-end and back-end
            development, committed to producing clean and efficient code to
            enhance user experience.
          </p>
          <a
            id="resume-button-2"
            href={Resume}
            target="_blank"
            download="hrusikesh-ghadei-resume.pdf"
            className="link"
            onClick={Mylink}
          >
            Resume
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </a>
        </div>

        <div className="heroImage">
          <img class="home-img" src={Himage} alt="" />
        </div>
      </div>
    </div>
  );
}
