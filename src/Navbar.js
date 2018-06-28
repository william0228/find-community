import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className = "navbar">
        <div className = "left">
          <div>NCTU+</div>
          <div>探索社群</div>
          <div>我的社群</div>
        </div>
        <div className = "image"><img src={this.props.data.image} /></div>  
        <div className = "right">
          <div>{this.props.data.id}</div>
          <div>登出</div>
        </div>
      </div>
    );
  }
}

export default Navbar;