import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuIcon() {
    setMenuOpen(!menuOpen);
  }

  const data = [
    {
      local: "home",
      name: "Home",
    },
    {
      local: "About",
      name: "About",
    },
    {
      local: "project",
      name: "Project",
    },
    {
      local: "skills",
      name: "Skills",
    },
    {
      local: "contact",
      name: "Contact",
    },
  ];

  return (
    <div id="nav-menu" className="navbar">
      <div className="logo">
        <h1>Hrusikesh</h1>
      </div>
      <div className={`links`}>
        <li className="nav-link home">
          <Link className="link" to="Home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link className="link nav-link about" to="About" smooth>
            About
          </Link>
        </li>

        <li className="nav-link skills">
          <Link className="link" to="Skills" smooth duration={500}>
            Skills
          </Link>
        </li>

        <li className="nav-link projects">
          <Link className="link" to="Project" smooth duration={500}>
            Project
          </Link>
        </li>
        <li className="nav-link contact">
          <Link className="link" to="Contact" smooth duration={500}>
            Contact
          </Link>
        </li>
        <li className="link nav-link resume">
          <a
            className="link"
            id="resume-link-1"
            href="https://drive.google.com/uc?export=download&id=15JIlHxD1rWb0d0OvkdKWurCJRhsWxXcp"
            target="_blank"
            download="hrusikesh-ghadei-resume.pdf"
          >
            Resume
          </a>
        </li>
      </div>
      <div className="menuIcon" onClick={handleMenuIcon}>
        {menuOpen ? (
          <FaTimes style={{ zIndex: 5 }} size={30} />
        ) : (
          <FaBars style={{ zIndex: 5 }} size={30} />
        )}
      </div>

      <div className={`modal ${menuOpen ? "" : "hidden"}`}>
        <ul>
          {data.map((dataItem) => (
            <Link
              smooth
              duration={500}
              to={dataItem.local}
              onClick={handleMenuIcon}
            >
              {dataItem.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
