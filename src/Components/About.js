import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am <b>Sardhar Sri Gouthu Latchanna</b>, a dedicated lawyer committed
            to providing expert legal advice and representation. With years of
            experience in criminal law, civil disputes, and corporate law, I ensure
            justice for my clients with integrity and precision.
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
