import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export class AlertError extends Component {
  render() {
    return (
      <>
        <Alert >
          {this.props.error}
        </Alert>
      </>
    );
  }
}

export default AlertError;
