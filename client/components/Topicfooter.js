import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import Buttons from './Buttons.js'

const styles = {
  container: {
    width: '1000px',
    height: '40px',
    position: 'absolute',
    bottom: '0',
  },
  navs:{
    width: '88px',
    marginLeft: '48px',
    marginRight: '24px',
    fontSize: '14px',
    letterSpacing: '8px',
    textDecoration: 'none',
    color: '#ffffff',
  },
  navActive:{
    width: '80px',
    height: '1px',
    marginLeft: '48px',
    bottom: '50',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
};

class Topicfooter extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.navActive}></div>
        <Buttons style={styles.navs} link="" text="關於我們"/>
        <Buttons style={styles.navs} link="" text="最新消息"/>
        <Buttons style={styles.navs} link="" text="產品型錄"/>
        <Buttons style={styles.navs} link="" text="印刷門市"/>
        <Buttons style={styles.navs} link="" text="報價系統"/>
        <Buttons style={styles.navs} link="" text="會員專區"/>
      </div>
    );
  }
}

export default Radium(Topicfooter);
