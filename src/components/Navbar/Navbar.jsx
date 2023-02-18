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
      local: "about",
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
        <li>
          <Link className="link" to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="project" smooth duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link className="link" to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
        <li class="nav-link resume">
          <a
            className="link"
            id="resume-link-1"
            href="https://drive.google.com/file/d/15JIlHxD1rWb0d0OvkdKWurCJRhsWxXcp/view?usp=share_link"
            target="_blank"
            download
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
