import React, { Component } from 'react';
import '../styles/LandingPage.css';
import Countdown from './Countdown';
import Subscribe from './Subscribe';
import  Logo  from './Logo';
import { Title } from './Title';
import { Description } from './Description';


import logo from '../images/logoTransparent.png'


class LandingPage extends Component {
  state = {
    logo: {
      alt: "symmetric flower on a black background that looks like a vulva by VonFlora on Etsy",
      src: logo,
    },
    title: {
      text:"Haiku Green"
    },
    description: {
      text: "A Mississippi Brennan LLC"
    },
    subscribe:{
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    }
  }
  
  render(){
    const {
      logo,
      title, 
      description,
      subscribe
    } = this.state;

  return (
    <div className="background">
      <Countdown />
    <Logo alt={logo.alt} src={logo.src}/>
    <Title text={title.text} />
    <Description text={description.text}/>
     <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}/>s 
    </div>
  )};
}

export default LandingPage;


