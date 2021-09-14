import React, { Component } from "react";
import { Card ,Col } from "react-bootstrap";

export class MovieCard extends Component {
  render() {
    return (
      <>
        {this.props.movie.map((item) => {
          return (
            <Col xl = "4" style={{paddingRight:100}}><Card
              border="primary"
              style={{
                width: "20rem",
                marginLeft: 150,
              }}
            >
              <Card.Header>{item.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>description : {item.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          );
        })}
      </>
    );
  }
}

export default MovieCard;
