import React, { Component } from 'react'
import Breakpoint from 'react-socks';
import logo from './react.svg';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </p>
        <Link to="/about">About -></Link>
        <Breakpoint small down>
          <div>I will render only in mobile devices</div>
        </Breakpoint>

        <Breakpoint medium only>
          <div>I will render only in tablets (iPad, etc...)</div>
        </Breakpoint>

        <Breakpoint medium down>
          <div>I will render in tablets (iPad, etc...) and everything below (mobile devices)</div>
        </Breakpoint>

        <Breakpoint medium up>
          <div>I will render in tablets (iPad, etc...) and everything above (laptops, desktops)</div>
        </Breakpoint>

        <Breakpoint large up>
          <div>I will render in laptops, desktops and everything above</div>
        </Breakpoint>
      </div>
    );
  }
}

export default Home;
