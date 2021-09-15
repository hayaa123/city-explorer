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
            height:"16rem",
            marginLeft: 150,
            position: "absolute",
            overflow:'scroll',
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
                      <>date :{day.date}</>
                      <>describtion :{day.description}</>
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
