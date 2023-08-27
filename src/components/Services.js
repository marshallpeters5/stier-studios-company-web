import React from "react";
import "../styles/Services.css"

function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We specialize in creating tailored software solutions that address your unique business needs. Our team of experienced developers work closely with you to deliver high-quality software that meets your requirements.",
    },
    {
      title: "Web Application Development",
      description:
        "Our web application development services cover the entire lifecycle of creating web-based solutions. From ideation to design, development, testing, and deployment, we ensure your web applications are robust and user-friendly.",
    },
    {
      title: "Mobile App Development",
      description:
        "Create powerful mobile experiences with our mobile app development services. We build apps for various platforms, ensuring a seamless user experience and optimal performance.",
    },
    {
      title: "UI/UX Design",
      description:
        "User interface (UI) and user experience (UX) design are crucial to creating engaging and user-friendly applications. Our design experts craft visually appealing and intuitive interfaces to enhance user satisfaction.",
    },
    {
      title: "Software Consulting",
      description:
        "Our software consulting services provide expert insights into technology strategies, architecture, and best practices. Whether you need guidance on project planning, technology stack selection, or implementation, we're here to help.",
    },
    {
      title: "Quality Assurance",
      description:
        "Quality assurance is at the heart of delivering reliable software solutions. Our QA team ensures that your software meets the highest standards by conducting thorough testing and validation.",
    },
    {
      title: "Maintenance and Support",
      description:
        "Our support doesn't end with deployment. We offer ongoing maintenance and support services to ensure your software remains up-to-date, secure, and operates smoothly.",
    },
  ];

  return (
    <div>
      <h2 className="m-4 heading" id="offer">What We Offer</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service, index) => (
          <li key={index}>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
