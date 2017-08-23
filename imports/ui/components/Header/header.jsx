import React, { Component } from 'react';

export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
      <header>
        <p>I'm the header</p>
        <nav className="ib-nav">
          Nav
        </nav>
      </header>
    )
  }
}
