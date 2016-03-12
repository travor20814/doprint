import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '1000px',
    height:'400px',
    marginTop:'16px',
    display:'flex',
    flexWrap:'no-wrap',
  },
  left:{
    marginLeft:'12px',
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
    marginRight:'12px',
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
        <div style={styles.left}>
          <h3 style={styles.leftTitle}>建立上海新線上服務系統</h3>
          <div style={styles.leftContent}>2016-01-01</div>
        </div>
        <div style={styles.right}>
          <h3 style={styles.rightTitle}>世界博覽會指定合作廠商</h3>
          <div style={styles.rightContent}>2016-01-01</div>
        </div>
      </div>
    );
  }
}

export default Radium(NewsPage);
