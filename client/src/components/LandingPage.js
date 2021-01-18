import React, { Component } from "react";
import "../styles/LandingPage.css";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import Logo from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";

import logo from "../images/logoTransparent.png"
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import exclamation from "../images/exclamation.svg"

class LandingPage extends Component {
  state = {
    logo: {
      alt: "symmetric flower on a black background that looks like a vulva by VonFlora on Etsy",
      src: logo,
    },
    title: {
      text: "Haiku Green"
    },
    description: {
      text: "A Mississippi Brennan LLC"
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
    notification: {
      src: '',
      alt: '',
      message: '',
      level: '',
      visible: false,
    }
  }

  configureNotification = level => {
    const notification = { ...this.state.notification };
    notification.level = level;
    if (level === "success") {
      notification.src = check
      notification.alt = "Check Mark";
      notification.message = "Thank you for subscribing to our mailing list. You will be receiving a welcome email shortly."
    } else if (level === "warning") {
      notification.src = exclamation
      notification.alt = "Exclamation Point";
      notification.message = "The email you entered is already on the mailing list. Thank you for being part of the community."
    } else {
      notification.src = xmark
      notification.alt = "X Mark"
      notification.message = "There was an issue with your email submission. Please check your email and try again."
    }
    this.setState({ notification });
  };


  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000)
    });
  };

  render() {
    const {
      logo,
      title,
      description,
      subscribe,
      notification
    } = this.state;

    return (
      <div className="background">
        <Countdown />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description text={description.text} src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible} />
        <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} configureNotification={this.configureNotification} showNotification={this.showNotification} />
      </div>
    )
  };
}

export default LandingPage;


