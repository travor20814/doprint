import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import NewsBlocks from './NewsBlocks.js';
const styles = {
  container: {
    width: '1000px',
    height:'400px',
    marginTop:'16px',
    paddingLeft:'12px',
    paddingRight:'12px',
    display:'flex',
    flexWrap:'no-wrap',
  },
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

class NewsPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NewsBlocks
          blockStyle='left'
          Title='leftTitle'
          Content='leftContent'
          topic={this.props.lefttopic}
          date={this.props.date}
          />
        <NewsBlocks 
          blockStyle='right'
          Title='rightTitle'
          Content='rightContent'
          topic={this.props.righttopic}
          date={this.props.date}
          />

      </div>
    );
  }
}

export default Radium(NewsPage);
