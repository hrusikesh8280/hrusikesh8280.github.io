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
          <Link id="link" class="nav-link home" to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            id="link"
            to="about"
            class="nav-link about"
            smooth
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            id="link"
            to="skills"
            class="nav-link skills"
            smooth
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            id="link"
            to="project"
            class="nav-link projects"
            smooth
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            id="link"
            to="contact"
            class="nav-link contact"
            smooth
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            id="link"
            href="https://drive.google.com/file/d/15JIlHxD1rWb0d0OvkdKWurCJRhsWxXcp/view?usp=share_link"
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
