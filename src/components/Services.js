import React from "react";
import "../styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicesData from "../data/servicesData";

function Services() {
  return (
    <div>
      <h1 className="m-4 heading bold-text" id="offer">
        What We Offer
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {servicesData.map((service, index) => (
          <li key={index}>
            <div className="service">
              <FontAwesomeIcon
                icon={service.icon}
                className="service-icon m-2"
              />
              <h4 className="service-title bold-text">{service.title}</h4>
              <p className="service-description regular-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <sub className="bold-text">
        * Please contact us to discuss pricing options. Pricing will vary and is
        dependent on the individual agreement between the customer and S Tier
        Studios.
      </sub>
    </div>
  );
}

export default Services;
