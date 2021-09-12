import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'

export class LocationForm extends Component {
    render() {
        return (
            <> <form style = {{padding:50}} onSubmit={this.props.submitHandeler}>
                <Row >
                    <Col>
                        <Form.Group as={Col} controlId="formGridEmail" onChange={this.props.getName}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" style={{marginTop:30}}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </form>
            </>
        )
    }
}

export default LocationForm
