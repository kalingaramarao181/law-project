import React, { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  { id: 1, text: "Justice For All", image: "https://media.istockphoto.com/id/1414012544/photo/handshake-at-work.jpg?s=612x612&w=0&k=20&c=nvlKDFO8cACiiCSiHRku5PzmnYkDycY0FZWQjAbphO8=" },
  { id: 2, text: "Your Trusted Legal Partner", image: "https://t3.ftcdn.net/jpg/13/89/78/26/360_F_1389782677_wW3P01DEbj1RQSxkjk6o1L5HIy1bkC2A.jpg" },
  { id: 3, text: "Expert Legal Advice", image: "https://media.istockphoto.com/id/1447689207/photo/hammer-judge-lawyer-businessman-scales-god-of-justice-laptop-notebook-on-table-legal-advisor.jpg?s=612x612&w=0&k=20&c=t4-xMzYvaMh0IQXWOvcJ23DzmqH1VM3iidqLrkE165Y=" }
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
          <img src="/images/group-photo.png" alt="Lawyer" className="group-image" />
          <h1>{slides[index].text}</h1>
          <p>Advocate | Legal Consultant | Advisor</p>
          <button>Register Now</button>
        </div>
      </div>  
    </section>
  );
}

export default Hero;
