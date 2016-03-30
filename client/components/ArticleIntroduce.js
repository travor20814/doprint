import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    height: '280px',
    width: '1000px',
    display: 'flex',
    whiteSpace: 'pre',

  },
  left:{
    height:'280px',
    flex:'1',
  },
  right:{
    height: '280px',
    flex:'2',
  },
  littleWords:{
    marginLeft: '60px',
    marginTop: '80px',
    fontSize:'12px',
    letterSpacing: '8px',
    color: '#9b9b9b',
  },
  articleTopic:{
    fontSize:'24px',
    letterSpacing: '8px',
    marginTop: '32px',
    marginLeft: '60px',
  },
  articleContent:{
    width:'556px',
    fontSize: '12px',
    marginTop: '80px',
    marginLeft: '40px',
    lineHeight: '24px',
    letterSpacing: '4px',
  },
};

class ArticleIntroduce extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.littleWords}>{this.props.name}</div>
          <h3 style={styles.articleTopic}>{this.props.topic}</h3>
        </div>
        <div style={styles.right}>
          <div style={styles.articleContent}>
          {this.props.content}
          </div>
        </div>

      </div>
    );
  }
}

export default Radium(ArticleIntroduce);
