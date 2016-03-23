import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  left:{
    height:'400px',
    flex:'1',
    backgroundColor: '#f9f9f9',
  },
  leftTitle:{
    fontSize: '24px',
    letterSpacing: '8px',
    marginTop:'48px',
    marginLeft:'48px',
  },
  leftContent:{
    marginLeft: '48px',
    marginTop:'180px',
    fontSize:'12px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  right:{
    height:'400px',
    flex:'1',
    backgroundImage:`url(${require('../images/news_1.jpg')})`,
    backgroundSize:'500px',
  },
  rightTitle:{
    fontSize: '24px',
    letterSpacing: '8px',
    marginTop:'48px',
    marginLeft:'48px',
    color:'#ffffff',
  },
  rightContent:{
    marginLeft: '48px',
    marginTop:'180px',
    fontSize:'12px',
    letterSpacing:'8px',
    color:'#ffffff',
  },
};

class NewsBlocks extends Component {
  render() {
    return (
        <div style={styles[this.props.blockStyle]}>
          <h3 style={styles[this.props.Title]}>{this.props.topic}</h3>
          <div style={styles[this.props.Content]}>{this.props.date}</div>
        </div>
    );
  }
}

export default Radium(NewsBlocks);
