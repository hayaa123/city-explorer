import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Result extends Component {
  render() {
    return (
      <>
        <Card
          border="primary"
          style={{
            width: "18rem",
            marginLeft: 150,
            position: "absolute",
            right: 50,
            top: 50,
            zIndex:1,
          }}
        >
          <Card.Header>{this.props.city_name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>latitude : {this.props.lat}</p>
              <p>longtitude : {this.props.lon}</p>
           
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Result;
