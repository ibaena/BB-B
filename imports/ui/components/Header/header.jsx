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
              <ul className="nav-list">
                <li class="nav-list-item"><a href="" className="nav-link">Link 1</a></li>
                <li class="nav-list-item"><a href="" className="nav-link">Link 1</a></li>
                <li class="nav-list-item"><a href="" className="nav-link">Link 1</a></li>
                <li class="nav-list-item"><a href="" className="nav-link">Link 1</a></li>
              </ul>
            </div>
          </div>

        </nav>
      </header>
    )
  }
}
