import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <h2 className="m-4 heading">Welcome to the Studio</h2>

      <div className="hometext-container">
        <img
          src="/images/devops.png"
          alt="Dev Ops diagram"
          className="img-fluid"
          style={{
            borderRadius: "15px",
            marginTop: "20px",
            margin: "10px",
            width: "300px",
            height: "auto",
            alignItems: "center",
          }}
        />
        <p className="m-4 hometext-left">
          At S Tier Studios, we are committed to excellence in software
          development, and that's why we've embraced the DevOps methodology.
          DevOps isn't just a process; it's a culture that bridges the gap
          between development and operations teams. By automating processes,
          ensuring continuous integration and delivery, and emphasizing
          collaboration, we deliver software faster and with higher quality,
          empowering our clients to succeed.
        </p>
      </div>

      <div className="hometext-container">
        <p className="m-4 hometext-right">
          Our development process is further enhanced by Scrum, an Agile
          framework that empowers us to deliver value to our clients iteratively
          and efficiently. Scrum encourages close collaboration, adaptability,
          and continuous improvement. With well-defined roles, ceremonies, and
          artifacts, we ensure transparent communication, efficient task
          management, and quick response to changes. By embracing Scrum, we
          bring your ideas to life in a way that's flexible, collaborative, and
          tailored to your evolving needs.
        </p>
        <img
          src="/images/scrum.png"
          alt="S Tier Studios Scrum"
          className="img-fluid"
          style={{
            borderRadius: "15px",
            marginTop: "20px",
            margin: "10px",
            width: "300px",
            height: "auto",
            alignItems: "center",
          }}
        />
      </div>
      
        <img
          src="/images/coder.png"
          alt="S Tier Studios Ideals"
          className="img-fluid"
          style={{
            borderRadius: "15px",
            marginTop: "20px",
            margin: "10px",
            width: "300px",
            height: "auto",
            alignItems: "center",
          }}
        />
        <h3>Our Business Promise</h3>
        <div className="hometext-bottom">
        <p className="m-4 hometext">
          We believe in the power of ideals, hard work, and ingenuity. Our team
          is driven by the pursuit of excellence, and we approach every project
          with dedication and innovation. With a focus on creativity and
          problem-solving, we turn challenges into opportunities, delivering
          results that exceed expectations. Join us on a journey where passion
          meets purpose, and together, we'll transform your ideas into
          remarkable solutions.
        </p>
      </div>
  </div>
  );
}

export default Home;
