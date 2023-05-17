import React from "react";
import Himage from "../../assets/Himage.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-sub">
          <div className="contact-headline ">
            <h1>Contacts</h1>
          </div>
          <div id="contact" className="Contact">
            <div className="contact-card">
              <img
                className="card-image home-img"
                src={Himage}
                alt="contactImg"
              />
              <div className="card-content">
                <h3 className="card-title">Hrusikesh Ghadei</h3>
                <p className="card-subtitle">MERN Stack Developer</p>
                <p className="card-text">
                  Feel free to get in touch with me for any inquiries or
                  opportunities. I'm always open to connecting with like-minded
                  professionals!
                </p>
                <div className="card-details">
                  <p className="card-details-item" id="contact-phone">
                    <span className="card-details-label">Phone:</span>
                    <span className="card-details-value">+91 7008675706</span>
                  </p>
                  <p className="card-details-item" id="contact-email">
                    <span className="card-details-label">Email:</span>
                    <span className="card-details-value">
                      hrusikeshviroot@gmail.com
                    </span>
                  </p>
                </div>
                <div className="card-social-links">
                  <h2 className="card-social-title">Find me in</h2>
                  <div className="card-social-icons">
                    <span className="card-social-icon">
                      <FaFacebookF />
                    </span>
                    <span className="card-social-icon">
                      <FaTwitter />
                    </span>
                    <a
                      href="https://www.linkedin.com/in/hrusikesh-ghadei-49371621a/"
                      id="contact-linkedin"
                      className="card-social-icon"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://github.com/hrusikesh8280"
                      target="_blank"
                      id="contact-github"
                      className="card-social-icon"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
