import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';


const styles = {
  topButtons:{
      width: '80px',
      height: '20px',
      fontSize: '14px',
      letterSpacing: '6px',
      float: 'right',
      marginRight: '60px',
      marginTop: '32px',
      textDecoration: 'none',
      color: '#ffffff',
  },
  footButtons:{
    width: '88px',
    marginLeft: '48px',
    marginRight: '24px',
    fontSize: '14px',
    letterSpacing: '8px',
    textDecoration: 'none',
    color: '#ffffff',
  },

};

class Buttons extends Component {
  render() {
    return (
      <a style={styles[this.props.buttonStyle]} href={this.props.link}>{this.props.text}</a>
    );
  }
}

export default Radium(Buttons);
