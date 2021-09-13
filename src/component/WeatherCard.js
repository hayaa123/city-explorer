import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class WeatherCard extends Component {
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
            top: 250,
            zIndex: 1,
          }}
        >
          <Card.Header>Weather</Card.Header>
          <Card.Body>
            <Card.Text>
              {this.props.weatherData.map(day => {
                  return (
                      <>
                      <p>date :{day.date}</p>
                      <p>describtion :{day.description}</p>
                      </>
                  )
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default WeatherCard;
