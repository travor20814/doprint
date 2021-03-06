import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import ArtiTechContent from './ArtiTechContent.js';

const styles = {
  container: {
    width: '1000px',
    height: '485px',
    flexWrap: 'no-wrap',
  },
  topic:{
    width: '400px',
    height: '55px',
    fontSize: '18px',
    letterSpacing: '9px',
    color: '#9b9b9b',
    marginLeft: '323px',
    marginTop: '80px',
  },
  contents:{
    width: '1000px',
    height: '350px',
    display: 'flex',
    flexWrap: 'no-wrap',
    whiteSpace: 'pre',
  },
};

class ArticleTech extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.topic}>技術創新電腦科技整合印務流程</div>
        <div style={styles.contents}>
          {this.props.articles.map((article, idx) => {
            return <ArtiTechContent
            key={idx}
            Slogan={article.slogans}
            Topic={article.topics}
            Content={article.contents} />
          })}
        </div>
      </div>
    );
  }
}

export default Radium(ArticleTech);
