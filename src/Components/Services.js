import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Criminal Law",
      desc: "Expert defense and representation in criminal cases to protect your rights."
    },
    {
      title: "Civil Disputes",
      desc: "Resolving property, contract, and individual disputes through legal solutions."
    },
    {
      title: "Corporate Law",
      desc: "Advisory and compliance for businesses, mergers, and company disputes."
    },
    {
      title: "Family Law",
      desc: "Handling divorce, custody, and personal matters with sensitivity and care."
    },
    {
      title: "Property Issues",
      desc: "Legal guidance for ownership disputes, registration, and property transfer."
    },
    {
      title: "Labour Law",
      desc: "Protecting employee rights and resolving workplace conflicts legally."
    },
    {
      title: "Tax Consulting",
      desc: "Helping individuals and businesses with tax planning and legal compliance."
    },
    {
      title: "Intellectual Property",
      desc: "Safeguarding trademarks, copyrights, and patents with legal expertise."
    },
    {
      title: "Cyber Crime Cases",
      desc: "Expert support in online fraud, hacking, and cyber law-related issues."
    },
    {
      title: "Legal Documentation",
      desc: "Drafting agreements, contracts, and official documentation with accuracy."
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Legal Services</h2>
      <div className="service-marquee">
        <div className="service-wrapper">
          {services.concat(services).map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
