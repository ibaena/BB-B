import React, { Component } from 'react';

export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }


  componentDidMount(){


    let showNav = false;
    $('.activate-nav').on('click', function(){
      showNav = !showNav;

      if(showNav) {
        $('.passing-blue').css({
          'z-index':999,
          height:'600px',
          top:'-100vh',
        });
      } else {
        $('.passing-blue').css({
          'z-index':999,
          height:'600px',
          top:'100vh',
        });
      }
    });
  }


  render() {
    return (
      <header>
        <div className="activate-nav">MENU</div>
        <nav className="ib-nav">

          <div className="passing-blue">
            <div className="overlay-blue"></div>
            <div className="nav-menu">
              <div className="nav-textbox">
                <p><span className="highlight-text">Home</span> is for the experience,
                <span className="highlight-text"> About</span> is for satisfying your curiosity and
                <span className="highlight-text"> Projects</span> are for the ones who are interested!</p>
              </div>
              <ul className="nav-list">
                <li className="nav-list-item"><a href="" className="nav-link"><label>01</label>Home</a></li>
                <li className="nav-list-item"><a href="" className="nav-link"><label>02</label>About</a></li>
                <li className="nav-list-item"><a href="" className="nav-link"><label>03</label>Projects</a></li>
              </ul>
              <p className="nav-copy">Thanks for visiting my development</p>
            </div>
          </div>

        </nav>
      </header>
    )
  }
}
