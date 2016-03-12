import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '1000px',
    height: '750px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  picture:{
    width: '1000px',
    height: '400px',
    backgroundImage: `url(${require('../images/landing_3.jpg')})`,
    backgroundSize: '1000px 400px',
    backgroundRepeat: 'no-repeat',
  },
  joinUsBlock:{
    width: '1000px',
    height: '350px',
    position: 'relative',
  },
  joinUs:{
    marginTop: '80px',
    textAlign: 'center',
    fontSize: '18px',
    letterSpacing: '9px',
    lineHeight: '25px',
    color: '#9b9b9b',
  },
  watchMore:{
    width: '97px',
    height: '17px',
    fontSize: '12px',
    letterSpacing: '8px',
    color: '#9b9b9b',
    marginLeft: '450px',
    marginTop:'40px',
  },
  latestNews:{
    width:'890px',
    bottom: '0',
    marginLeft: '60px',
    fontSize: '12px',
    letterSpacing: '8px',
    color: '#9b9b9b',
    position: 'absolute',

  },
  otherNews:{
    width: '80px',
    fontSize: '12px',
    letterSpacing: '8px',
    color: '#9b9b9b',
    float:'right',
  },

};

class Article03 extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.picture}/>
          <div style={styles.joinUsBlock}>
            <div style={styles.joinUs}>
              歡迎成為我們的夥伴<br/><br/>
              加入我們最堅強的陣容<br/>
              我們能協助你晉升世界一流的水平
            </div>
            <button style={styles.watchMore}>了解更多</button>
            <div style={styles.latestNews}>最新消息
              <span style={styles.otherNews}>其他消息</span>
            </div>
          </div>
      </div>
    );
  }
}

export default Radium(Article03);
