import React, { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  { id: 1, text: "Justice For All", image: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg" },
  { id: 2, text: "Your Trusted Legal Partner", image: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg" },
  { id: 3, text: "Expert Legal Advice", image: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg" }
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      <div className="overlay">
        <div className="hero-text">
          <h1>{slides[index].text}</h1>
          <p>Advocate | Legal Consultant | Advisor</p>
          <button>Register Now</button>
        </div>
      </div>  
    </section>
  );
}

export default Hero;
