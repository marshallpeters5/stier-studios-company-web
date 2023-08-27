import React from "react";
import { Card } from "react-bootstrap";
import employeesData from "../data/employeesData";

function AboutUs() {
  return (
    <div className="container">
      <h1 className="m-4 heading">Meet the Team</h1>
      <p className="m-4 abouttext">
        At S Tier Studios, our team is made up of talented individuals who are
        passionate about software development and dedicated to delivering
        exceptional results. Get to know some of the key members who bring
        creativity, expertise, and innovation to every project.
      </p>
      <div className="row align-center">
        {employeesData.map((employee, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={employee.image}
                alt={employee.name}
                style={{
                  marginTop: "20px",
                  margin: "10px",
                  width: "200px",
                  height: "auto",
                }}
                className="mx-auto"
              />
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {employee.role}
                </Card.Subtitle>
                <Card.Text>{employee.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
