import React from "react";
import "./HeroSection.css";
import HeroImage from "@/assets/icons/HeroImage.svg?react"

export const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-container">

                
          {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">Welcome Edunity online courses</span>

          <h1 className="hero-title">
           Achieving Your Dreams
           Through Education
          </h1>

          <p className="hero-text">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Find Courses</button>
        
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <HeroImage className= "Hero-svg"/>
        </div>

      </div>
    </section>
  );
};