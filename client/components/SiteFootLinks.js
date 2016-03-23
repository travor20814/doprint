import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';


const styles = {
  links:{
    width:'100px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  longLinks:{
    width:'130px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  longestLinks:{
    width:'160px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },

};

class SiteFootLinks extends Component {
  render() {
    return (
      <div style={styles[this.props.linkStyle]}>{this.props.text}</div>
    );
  }
}

export default Radium(SiteFootLinks);
