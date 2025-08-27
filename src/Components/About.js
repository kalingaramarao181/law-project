import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            <b>Gouthu Latchanna</b> was a freedom fighter from south India. He was born on August 16, 1909 at Barua, Srikakulam, Andhra Pradesh, In 1948, he presided over first Andhra backward classes conference at Guntur and decided to achieve legitimate rights and privileges embodied in the Constitution of India covering reservations and directives for their social, economical, and education development.
          </p>

          <div className="about-extra">
            <div className="about-card">
              <h3>Justice First</h3>
              <p>Every client deserves fair representation and true justice.</p>
            </div>
            <div className="about-card">
              <h3>10+ Years Experience</h3>
              <p>Handled diverse cases with proven results in legal practice.</p>
            </div>
            <div className="about-card">
              <h3>Trusted Advisor</h3>
              <p>Building long-term client relationships with trust & honesty.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="https://us.123rf.com/450wm/zeferli/zeferli1805/zeferli180501084/101923072-the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice-on-a-dark.jpg?ver=6" alt="Lawyer" />
        </div>
      </div>
    </section>
  );
}

export default About;
