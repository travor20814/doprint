import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  joinUsBlock:{
    width: '1000px',
    height: '350px',
    position: 'relative',
    whiteSpace: 'pre',
  },
  joinUs:{
    paddingTop: '80px',
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
  underLine: {
    width: '75px',
    height: '1px',
    marginTop: '8px',
    backgroundColor: '#9b9b9b',
  },

};

class ArticleJoin extends Component {
  render() {
    return (
        <div style={styles.joinUsBlock}>
            <div style={styles.joinUs}>{this.props.contents}</div>
            <div style={styles.watchMore}>{this.props.more}
              <div style={styles.underLine}/>
            </div>
            <div style={styles.latestNews}>{this.props.latenew}
              <span style={styles.otherNews}>{this.props.othersnew}</span>
            </div>
        </div>
    );
  }
}

export default Radium(ArticleJoin);
