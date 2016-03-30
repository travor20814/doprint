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
import * as TopicButtonsActions from '../actions/TopicButtons.js';
import * as ArticleContentsActions from '../actions/ArticleContents.js';
import * as ArticleActions from '../actions/Articles.js';
import * as FooterButtonsActions from '../actions/FooterButtons.js';
import * as HeaderButtonsActions from '../actions/HeaderButtons.js';
import * as SomeNamesActions from '../actions/SomeNames.js';


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
  componentDidMount() {
    const {
      fetchTopicButtons,
      fetchArticleContents,
      fetchArticles,
      fetchFooterButtons,
      fetchHeaderButtons,
      fetchSomeNames,
    } = this.props;

    fetchTopicButtons();
    fetchArticleContents();
    fetchArticles();
    fetchFooterButtons();
    fetchHeaderButtons();
    fetchSomeNames();
  }

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
            {Articles.slogan}
          </p>
          <a style={styles.joinUs} href={SomeNames.join.link}>
            {SomeNames.join.content}
            <div style={styles.underLine}></div>
          </a>
          <Topicfooter
              buttons={TopicButtons}
          />
        </div>
        <ArticleIntroduce
          name = {Articles.introduce.name}
          topic = {Articles.introduce.topic}
          content = {Articles.introduce.content}
        />
        <ArticleImages pic='introduce'/>
        <ArticleTech
          articles = {ArticleContents}
        />
        <ArticleImages pic='cooperate'/>
        <ArticleJoin
          contents={Articles.joinContent}
          more={Articles.joinMore}
          latenew={Articles.lateNews}
          othersnew={Articles.othersNews}
        />
        <NewsPage
          lefttopic={Articles.newsTopic.contentLeft}
          righttopic={Articles.newsTopic.contentRight}
          date={Articles.newsDate}
        />
        <PageFooter
          topicAbout={FooterButtons.aboutTopic}
          footerLinks_1 = {FooterButtons.aboutUs}
          topicNews={FooterButtons.newsTopic}
          footerLinks_2 = {FooterButtons.latestNews}
          topicProduct={FooterButtons.productTopic}
          footerLinks_3 = {FooterButtons.products}
          topicStores={FooterButtons.storeTopic}
          footerLinks_4 = {FooterButtons.stores}
          topicPrices={FooterButtons.priceTopic}
          footerLinks_5 = {FooterButtons.prices}
          topicMembers={FooterButtons.memberTopic}
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

  dispatch => bindActionCreators(Object.assign({},
    TopicButtonsActions, ArticleContentsActions, ArticleActions, FooterButtonsActions,
  HeaderButtonsActions, SomeNamesActions), dispatch)

)(Radium(App));
