import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width:'1000px',
    height:'200px',
  },
  listsBlock:{
    width:'940px',
    height:'100px',
    marginLeft:'60px',
    marginTop:'90px',
    fontSize:'14px',
    letterSpacing:'8px',
    display:'flex',
    flexWrap:'no-wrap',
    backgroundImage: `url(${require('../images/logo.png')})`,
    backgroundSize: '60px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'right',
  },
  list:{
    width:'100px',
    height:'100px',
    marginRight:'32px',
  },
  links:{
    width:'100px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  longLists:{
    width:'130px',
    height:'100px',
    marginRight:'32px',
  },
  longLinks:{
    width:'130px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  longestLists:{
    width:'160px',
    height:'100px',
    marginRight:'32px',
  },
  longestLinks:{
    width:'160px',
    marginTop:'12px',
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#9b9b9b',
  },
  topic:{
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#000000',
    marginBottom:'23px',
  },
  topicLine:{
    width:'80px',
    height:'1px',
    backgroundColor:'black',
  },
  copyrights:{
    width:'940px',
    height:'100px',
    marginTop:'150px',
    marginLeft:'60px',
  },
  seperateLine:{
    width:'100%',
    height:'2px',
    backgroundColor:'#c1c1c1',
    marginBottom:'24px',
  },
  foot:{
    width:'930px',
    height:'30px',
    fontSize:'12px',
    letterSpacing:'7px',
    color:'#9b9b9b',
    backgroundImage:`url(${require('../images/wechat.png')})`,
    backgroundSize:'30px 24px',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'right',
  },
  image:{
    weight:'30px',
    height:'30px',
    marginRight:'50px',
    marginTop:'-14px',
    backgroundImage:`url(${require('../images/weibo.png')})`,
    backgroundSize:'30px 24px',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'right',
  },
};

class PageFooter extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.listsBlock}>
          <div style={styles.list}>
            <div style={styles.topicLine}/>
            <h3 style={styles.topic}>關於我們</h3>
            <div style={styles.links}>關於都彼</div>
            <div style={styles.links}>公司團隊</div>
            <div style={styles.links}>各事業處</div>
          </div>
          <div style={styles.list}>
            <h3 style={styles.topic}>最新消息</h3>
            <div style={styles.links}>公司新訊</div>
            <div style={styles.links}>人員招募</div>
            <div style={styles.links}>成功故事</div>
          </div>
          <div style={styles.list}>
            <h3 style={styles.topic}>產品型錄</h3>
            <div style={styles.links}>產品介紹</div>
            <div style={styles.links}>下載中心</div>
          </div>
          <div style={styles.list}>
            <h3 style={styles.topic}>印刷門市</h3>
            <div style={styles.links}>合作夥伴</div>
            <div style={styles.links}>技術諮詢</div>
            <div style={styles.links}>誠邀加盟</div>
          </div>
          <div style={styles.longestLists}>
            <h3 style={styles.topic}>報價系統</h3>
            <div style={styles.longestLinks}>線上報價</div>
            <div style={styles.longestLinks}>自動化名片打印</div>
          </div>
          <div style={styles.longLists}>
            <h3 style={styles.topic}>會員專區</h3>
            <div style={styles.longLinks}>對帳單查詢</div>
            <div style={styles.longLinks}>物流查詢</div>
            <div style={styles.longLinks}>退貨單打印</div>
          </div>
        </div>
        <div style={styles.copyrights}>
          <div style={styles.seperateLine}/>
          <h3 style={styles.foot}>本网站归属于上海凯基印刷附属都彼快印 沪ICP备06009965
            <div style={styles.image}></div>
          </h3>
        </div>
      </div>
    );
  }
}

export default Radium(PageFooter);
