import React, { Component } from 'react';

export default class Background extends Component {
  super() {}

  componentDidMount() {
    //Move Background Image
      var movementStrength = 100; //the lower# the faster the movementStrength
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      $(".background-home").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('.background-home h1').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

  }
  render(){

    return(
      <div className="background-home">
        <div id="gray">
          <h1>I.B.</h1>
        </div>
      </div>
    )
  }
}
