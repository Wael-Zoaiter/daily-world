import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component
{
  render() {
    return (
      <footer>
        <Link to="/">Home</Link>
        <span><strong>Email:</strong> wael.syr.95@gmail.com</span>
      </footer>
    );
  }
}

export default Footer;
