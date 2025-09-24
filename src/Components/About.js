import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About BAR COUNCIL OF ANDHRA PRADESH :: AMARAVATI</h2>
          <p>
            Under Sec.3 of the Advocates’ Act, 1961 there shall be a Bar Council for each State and accordingly the Bar Council of Andhra Pradesh has been constituted.
Clause (b) Sub-Sec.(2) of Sec.3 of the said Act also lays down that in the case of a State Bar Council with an Electorate exceeding 10,000 Advocates shall consist of 25 members.
At present there are more than 65,000 Advocates on the rolls of the Andhra Pradesh State Bar Council, who elected the Members of the Bar Council.
The A.P. State Bar Council is one of the largest Statutory Bodies of professionals having statutory duties such as Enrollment of Law Graduates as Advocates, Regulating Legal Practice of Advocates and initiating action against erring advocates and also taking up welfare activities/schemes for the benefit of advocates.
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
