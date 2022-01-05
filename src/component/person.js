import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      Person: "Welcome to my landing Page",
    };
  }

  changeMessage() {
    this.setState({
      Person:  "FullName: Taiwo Tunde   Profession: Full-Stack Javascript Web Developer  Bio: Web Developer, Computer Engineer",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Person} </h1>;
        <button onClick={() => this.changeMessage()}>
          Click to view My Profile
        </button>
      </div>
    );
  }
}
export default Person;
