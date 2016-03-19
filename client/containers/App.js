import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';

import Header from '../components/Header.js';
import Topicfooter from '../components/Topicfooter.js';
import Article01 from '../components/Article01.js';
import Article02 from '../components/Article02.js';
import Article03 from '../components/Article03.js';
import NewsPage from '../components/NewsPage.js';
import PageFooter from '../components/PageFooter.js';
import Buttons from '../components/Buttons.js'

const styles = {
  container: {
    width: '1000px',
    height: '3500px',
    flexWrap: 'wrap',
  },
  slidePic: {
    width: '1000px',
    height: '675px',
    flexWrap: 'wrap',
    position: 'relative',
    backgroundImage:`url(${require('../images/landing_1.jpg')})`,
  },
  topicSlogan: {
    width: '1000px',
    height: '200px',
    float: 'left',
    fontSize: '24px',
    letterSpacing: '8px',
    marginTop: '150px',
    marginLeft: '48px',
    color: '#ffffff',
  },
  joinUs: {
    width: '110px',
    height: '40px',
    fontSize: '14px',
    letterSpacing: '8px',
    marginLeft: '48px',
    textDecoration:'none',
    color: '#ffffff',
  },
  underLine: {
    width: '100px',
    height: '1px',
    marginTop: '8px',
    marginLeft: '48px',
    backgroundColor: 'white',
  },

  midArticle:{
    width: '1000px',
    height: '680px',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.slidePic}>
          <Header/>
          <a style={styles.topicSlogan}>都彼快印首創雲平台垂直整合，<br/>
          提供快速、經濟、又高質量的列印體驗，<br/>
          馬上加入會員更享優惠。</a>
          <a style={styles.joinUs} href="">+加入我們<div style={styles.underLine}></div></a>
          <Topicfooter/>
        </div>
        <Article01/>
        <Article02/>
        <Article03/>
        <NewsPage/>
        <PageFooter/>
      </div>


    );
  }
}

export default connect(
  state => ({

  }),
)(Radium(App));
