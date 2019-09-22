import React, { useState } from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
      const el = document.querySelector('nav');
      this.setState({top: el.offsetTop, height: el.offsetHeight});
      window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li>
            <a href="https://www.nrdc.org/?_ga=2.260557133.1502811972.1569007614-2068348596.1569007614">
              Climate Change
            </a>
          </li>
          <li>
            <a href="https://globalclimatestrike.net/">
              Strikes Near Me
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;