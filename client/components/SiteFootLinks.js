import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';


const styles = {
  links:{
    width:'100px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    textDecoration: 'none',
    display: 'block',
    color:'#9b9b9b',
  },
  longLinks:{
    width:'130px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    textDecoration: 'none',
    display: 'block',
    color:'#9b9b9b',
  },
  longestLinks:{
    width:'160px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    textDecoration: 'none',
    display: 'block',
    color:'#9b9b9b',
  },
};

class SiteFootLinks extends Component {
  render() {
    return (
      <a style={styles[this.props.linkStyle]} href={this.props.link}>{this.props.text}</a>
    );
  }
}

export default Radium(SiteFootLinks);
