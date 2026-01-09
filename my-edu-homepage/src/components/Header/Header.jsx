import React from "react";
import "./Header.css";
import Email from "@/assets/icons/Email.svg?react";
import Location from "@/assets/icons/Location.svg?react";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg?react";
import Facebook from "@/assets/icons/Facebook.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import Linkedin from "@/assets/icons/Linkedin.svg?react";
import Youtube from "@/assets/icons/Youtube.svg?react";
import Logo from "@/assets/icons/Logo.svg?react"
import Button from "@/components/Header/HeaderButton"
import Arrow from "@/assets/icons/Arrow.svg?react"


export const Header = () => {
  return (
    <header className="header">

      {/* ================= TOP BLUE BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-container">

          <div className="header-contacts">
            <div className="contact-item">
              <PhoneIcon />
              <span>(00) 875 784 5682</span>
            </div>

            <div className="contact-item">
              <Email />
              <span>pacargoinfo@gmail.com</span>
            </div>

            <div className="contact-item">
              <Location/>
              <span>238, Arimantab, Moska - USA.</span>
            </div>
          </div>

          <div className="header-socials">
             <Facebook className="social-icon facebook" />
             <Instagram className="social-icon instagram" />
             <Linkedin className="social-icon linkedin" />
             <Youtube className="social-icon youtube" />
          </div>


        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="nav-bar">
        <div className="nav-bar-container">

          <div className="nav-logo">
            <Logo />
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <Button>Create Account <Arrow className= "arrow-icon"/></Button>
         
        </div>
      </nav>
    </header>
  );
};
