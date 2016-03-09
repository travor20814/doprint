import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '1000px',
    height: '100px',
  },
  logo: {
    width: '60px',
    height: '60px',
    float: 'left',
    marginTop: '32px',
    marginLeft: '48px',
    backgroundColor:'white',
  },
  topicLinks: {
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
};

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.logo} src={require('../images/brand.png')}/>
        <a style={styles.topicLinks} href="">線上客服</a>
        <a style={styles.topicLinks} href="">會員專區</a>
      </div>
    );
  }
}

export default Radium(Header);
