import React from "react";
import "./Tools.scss";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import visual from "../../assets/Visual-Studio-Logo-2019.png"
import mongo from "../../assets/mongoDb compass.png"
import postman from "../../assets/postman.jpg"
import cyclic from "../../assets/cyclic-logo (1).png"
import netlify from "../../assets/netlify (1).png"

export default function Tools() {
  const techs = [
    {
        id: 1,
        src: github,
        name: "GitHub",
        style: "rgb(226, 226, 226)",
        border: "githubTech",
      },
    {
      id: 2,
      src: visual,
      name: "Visual Studio ",
      style: "rgb(51, 154, 250)",
      border: "cssTech",
    },
    {
        id: 3,
        src: git,
        name: "Git",
        style: "rgb(255, 78, 8)",
        border: "gitTech",
    },
    {
      id: 4,
      src: mongo,
      name: "Compass",
      style: "rgb(252, 239, 53)",
      border: "jsTech",
    },
    {
      id: 5,
      src: postman,
      name: "Postman",
      style: "rgb(11, 244, 252)",
      border: "reactTech",
    },
    {
      id: 6,
      src: cyclic,
      name: "Cyclic-server",
      style: "rgb(87, 194, 60)",
      border: "nodeTech",
    },
    {
      id: 7,
      src: netlify,
      name: "Netlify",
      style: "rgb(80, 182, 146)",
      border: "mongoDBTech",
    },
  ];

  return (
    <div id="Tools" className="tools">
      <div className="tools-content">
        <div className="tools-title">
          <h1>Tools</h1>
        </div>

        <div className="techs">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`skills-card tools toolser ${tech.border}`}
              style={{ color: `${tech.style}` }}
            >
              <img
                className="tools-card-img"
                src={tech.src}
                alt={tech.name}
                loading="lazy"
              />
              <p className="tools-card-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
