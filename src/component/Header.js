import React, { Component } from "react";
import { Navbar ,Container} from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://static.wixstatic.com/media/2cd43b_db479dc19bfb463cb7ec52f1b97935d4~mv2_d_2000_2723_s_2.png/v1/fill/w_320,h_435,q_90/2cd43b_db479dc19bfb463cb7ec52f1b97935d4~mv2_d_2000_2723_s_2.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      City Explorer
      </Navbar.Brand>
    </Container>
  </Navbar>
      </>
    );
  }
}

export default Header;
