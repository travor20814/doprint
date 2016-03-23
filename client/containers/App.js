import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import Header from '../components/Header.js';
import Topicfooter from '../components/Topicfooter.js';
import ArticleIntroduce from '../components/ArticleIntroduce.js';
import ArticleImages from '../components/ArticleImages.js';
import ArticleTech from '../components/ArticleTech.js';
import ArtiTechContent from '../components/ArtiTechContent.js';
import ArticleJoin from '../components/ArticleJoin.js';
import NewsPage from '../components/NewsPage.js';
import PageFooter from '../components/PageFooter.js';
import Buttons from '../components/Buttons.js';
import Logo from '../components/Logo.js';

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
    whiteSpace: 'pre',
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
    const {
      Articles,
      ArticleContents,
      FooterButtons,
      HeaderButtons,
      SomeNames,
      TopicButtons,
    } = this.props;


    return (
      <div style={styles.container}>
        <div style={styles.slidePic}>
          <Header
            headButtons = {HeaderButtons}
          />
          <p style={styles.topicSlogan}>
            {Articles.slogan.content}
          </p>
          <a style={styles.joinUs} href={SomeNames.join.link}>
            {SomeNames.join.content}
            <div style={styles.underLine}></div>
          </a>
          <Topicfooter
              buttons={TopicButtons}
          />
        </div>
        <ArticleIntroduce/>
        <ArticleImages pic='introduce'/>
        <ArticleTech
          articles = {ArticleContents}
        />
        <ArticleImages pic='cooperate'/>
        <ArticleJoin
          contents={Articles.joinContent.content}
          more={Articles.joinMore.content}
          latenew={Articles.lateNews.content}
          othersnew={Articles.othersNews.content}
        />
        <NewsPage
          lefttopic={Articles.newsTopic.contentLeft}
          righttopic={Articles.newsTopic.contentRight}
          date={Articles.newsDate.content}
        />
        <PageFooter
          topicAbout={SomeNames.about.content}
          footerLinks_1 = {FooterButtons.aboutUs}
          topicNews={SomeNames.news.content}
          footerLinks_2 = {FooterButtons.latestNews}
          topicProduct={SomeNames.menus.content}
          footerLinks_3 = {FooterButtons.products}
          topicStores={SomeNames.stores.content}
          footerLinks_4 = {FooterButtons.stores}
          topicPrices={SomeNames.prices.content}
          footerLinks_5 = {FooterButtons.prices}
          topicMembers={SomeNames.members.content}
          footerLinks_6 = {FooterButtons.members}
        />
      </div>
    );
  }
}
export default connect(
  state => ({
    Articles: state.Articles,
    ArticleContents: state.ArticleContents,
    FooterButtons: state.FooterButtons,
    HeaderButtons: state.HeaderButtons,
    SomeNames: state.SomeNames,
    TopicButtons: state.TopicButtons,
  }),
)(Radium(App));
