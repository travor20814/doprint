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

var buttonNames = {
  onlineServe:{
    content:'線上客服',
    link:"",
  },
  about:{
    content:'關於我們',
    link:"",
  },
  news:{
    content: "最新消息",
    link:"",
  },
  menus:{
    content: "產品型錄",
    link:"",
  },
  stores:{
    content: "印刷門市",
    link:"",
  },
  prices:{
    content: "報價系統",
    link:"",
  },
  members:{
    content: "會員專區",
    link:"",
  },
  join:{
    content: "+加入我們",
    link:"",
  },
  footlists:{
    list1_1:"關於都彼",
    list1_2:"公司團隊",
    list1_3:"各事業處",
    list2_1:"公司新訊",
    list2_2:"人員招募",
    list2_3:"成功故事",
    list3_1:"產品介紹",
    list3_2:"下載中心",
    list4_1:"合作夥伴",
    list4_2:"技術諮詢",
    list4_3:"誠邀加盟",
    list5_1:"線上報價",
    list5_2:"自動化名片打印",
    list6_1:"對帳單查詢",
    list6_2:"物流查詢",
    list6_3:"退貨單打印",
  },
};

var articles ={
  slogan:{
    content:'都彼快印首創雲平台垂直整合，\n提供快速、經濟、又高質量的列印體驗，\n馬上加入會員更享優惠。'
  },
  techLeftSlogan:{
    content: '创新计算机科技\n整合印务流程',
  },
  techLeftTopic:{
    content: '技术创新',
  },
  techLeftContent:{
    content:'开发专属系统，整合印务流程，每笔订\n单都能全面监控与掌握印件进度，让每\n位同仁的工作都有明确的节奏。拼版全\n面自动化系统，让各式软件制作的上千\n笔稿件在AM12:00内全部处理完毕。\n全自动计算机控制直接出版设备，产能\n高且质量稳定，可达每小时64片版，全\n厂印刷机备有CIP4计算机自动控墨与色\n彩导航设备 透由CIP4色彩导航系统，\n由计算机精准的将印纹计算出印刷控墨\n数据，彻底改成全计算机控墨，实现从\n0~100万张无色差的不可能任务。',
  },
  techMidSlogan:{
    content:'一贯化生产\n满足速度需求',
  },
  techMidTopic:{
    content:'速度精确',
  },
  techMidContent:{
    content:'专属印务系统能精准监控与掌握每笔印\n件进度，达到今日接稿，隔日交货的速\n度。 客制化的印刷品规格标准化，加速\n生产流程。 一贯化的后加工设备，从上\n光／折纸／压线／裁切／书籍装订都能\n在厂内生产并控管质量。 独立版印刷服\n务更能满足客户实时处理的速度需求。\n卡之屋物流车队，大台北区专车配送服\n务，其它外县市也有专员处理货运服\n务。',
  },
  techRightSlogan:{
    content:'系统数据化\n严守质量控管',
  },
  techRightTopic:{
    content:'质量用心',
  },
  techRightContent:{
    content:'Print Control色彩检验报告 我们坚\n持每天量测与检验不同纸张的色彩标\n准，为的就是能够让印品与印版之间的\n色彩结合更密切，精确且真实呈现颜色\n数据。 数字打样数据计算机化 采用高\n阶的数字彩印机并与印刷机同步联机，\n色准度高达95%以上，能在印刷前准确\n预测印刷结果。 12项质量技术。',
  },
  joinContent:{
    content:'歡迎成為我們的夥伴\n\n加入我們最堅強的陣容\n我們能協助你晉升世界一流的水平',
  },
  joinMore:{
    content:'了解更多',
  },
  lateNews:{
    content:'最新消息',
  },
  othersNews:{
    content:'其他消息',
  },
  newsTopic:{
    contentLeft:'建立上海新線上服務系統',
    contentRight:'世界博覽會指定合作廠商',
  },
  newsDate:{
    content:'2016-01-01',
  },
};



class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.slidePic}>
          <Header
            members={buttonNames.members.content}
            memberLink={buttonNames.members.link}
            onlineServe={buttonNames.onlineServe.content}
            onlineLink={buttonNames.onlineServe.link}
          />
          <p style={styles.topicSlogan}>
            {articles.slogan.content}
          </p>
          <a style={styles.joinUs} href={buttonNames.join.link}>
            {buttonNames.join.content}
            <div style={styles.underLine}></div>
          </a>
          <Topicfooter
              about={buttonNames.about.content}
              aboutLink={buttonNames.about.link}
              news={buttonNames.news.content}
              newsLink={buttonNames.news.link}
              menus={buttonNames.menus.content}
              menusLink={buttonNames.menus.link}
              stores={buttonNames.stores.content}
              storesLink={buttonNames.stores.link}
              prices={buttonNames.prices.content}
              priceLink={buttonNames.prices.link}
              members={buttonNames.members.content}
              memberLink={buttonNames.members.link}
          />
        </div>
        <ArticleIntroduce/>
        <ArticleImages pic='introduce'/>
        <ArticleTech
          leftSlogans={articles.techLeftSlogan.content}
          leftTopics={articles.techLeftTopic.content}
          leftContents={articles.techLeftContent.content}
          midSlogans={articles.techMidSlogan.content}
          midTopics={articles.techMidTopic.content}
          midContents={articles.techMidContent.content}
          rightSlogans={articles.techRightSlogan.content}
          rightTopics={articles.techRightTopic.content}
          rightContents={articles.techRightContent.content}
        />
        <ArticleImages pic='cooperate'/>
        <ArticleJoin
          contents={articles.joinContent.content}
          more={articles.joinMore.content}
          latenew={articles.lateNews.content}
          othersnew={articles.othersNews.content}
        />
        <NewsPage
          lefttopic={articles.newsTopic.contentLeft}
          righttopic={articles.newsTopic.contentRight}
          date={articles.newsDate.content}
        />
        <PageFooter
          topicAbout={buttonNames.about.content}
          link1_1={buttonNames.footlists.list1_1}
          link1_2={buttonNames.footlists.list1_2}
          link1_3={buttonNames.footlists.list1_3}
          topicNews={buttonNames.news.content}
          link2_1={buttonNames.footlists.list2_1}
          link2_2={buttonNames.footlists.list2_2}
          link2_3={buttonNames.footlists.list2_3}
          topicProduct={buttonNames.menus.content}
          link3_1={buttonNames.footlists.list3_1}
          link3_2={buttonNames.footlists.list3_2}
          topicStores={buttonNames.stores.content}
          link4_1={buttonNames.footlists.list4_1}
          link4_2={buttonNames.footlists.list4_2}
          link4_3={buttonNames.footlists.list4_3}
          topicPrices={buttonNames.prices.content}
          link5_1={buttonNames.footlists.list5_1}
          link5_2={buttonNames.footlists.list5_2}
          topicMembers={buttonNames.members.content}
          link6_1={buttonNames.footlists.list6_1}
          link6_2={buttonNames.footlists.list6_2}
          link6_3={buttonNames.footlists.list6_3}  
        />
      </div>


    );
  }
}

export default connect(
  state => ({

  }),
)(Radium(App));
