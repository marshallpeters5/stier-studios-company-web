import React from "react";

function Services() {
  const services = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "Software Consulting",
    "Quality Assurance",
    "Maintenance and Support",
  ];

  return (
    <div>
      <h2 className="m-4 heading">What We Offer</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
