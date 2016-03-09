import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

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
        <span style={styles.navs}>關於我們</span>
        <span style={styles.navs}>最新消息</span>
        <span style={styles.navs}>產品型錄</span>
        <span style={styles.navs}>印刷門市</span>
        <span style={styles.navs}>報價系統</span>
        <span style={styles.navs}>會員專區</span>
      </div>
    );
  }
}

export default Radium(Topicfooter);
