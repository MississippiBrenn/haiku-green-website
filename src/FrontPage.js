import React, { Component } from 'react'
import leaf from './images/leaf.png';
import './FrontPage.css';

function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="FrontPageBody">
        <div className="subscribe">
          Subscribe
        </div>
        <div className="FrontPageText">
          <h2 className="Title">Haiku Green</h2>
          <h3 className="SubTitle"> A Mississippi Brennan Company</h3>
        </div>

      </div>
    </div>
  );
}

export default FrontPage;
