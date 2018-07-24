import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Carousel from "./components/carousel.js"
import Item from "./components/items.js"

import $ from 'jquery';



class App extends Component {
  
 componentDidMount(){
  window.addEventListener('scroll', this.changeClass);
} 

changeClass=()=>{
    $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });  
}

  render() {
    return (
      <div className="App" >
       <nav class="navbar navbar-default navbar-fixed-top" onScroll={this.changeClass}>
    <div class="container">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">Shopping Website</a>
      </div>
      <div class="collapse navbar-collapse" id="exampleNavComponents">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Footwears</a></li>
          <li><a href="#">Electronics</a></li>
        </ul>
      </div>
    </div>
  </nav>
<Carousel/>
 <Item/>





      </div>
    );
  }
}

export default App;