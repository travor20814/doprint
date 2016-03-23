import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import SiteFootLinks from './SiteFootLinks.js';
import SiteFootTopic from './SiteFootTopic.js';
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
  longLists:{
    width:'130px',
    height:'100px',
    marginRight:'32px',
  },
  longestLists:{
    width:'160px',
    height:'100px',
    marginRight:'32px',
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
            <SiteFootTopic topic={this.props.topicAbout}/>
            {this.props.footerLinks_1.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='links'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }

          </div>
          <div style={styles.list}>
            <SiteFootTopic topic={this.props.topicNews}/>
            {this.props.footerLinks_2.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='links'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }

          </div>
          <div style={styles.list}>
            <SiteFootTopic topic={this.props.topicProduct}/>
            {this.props.footerLinks_3.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='links'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }

          </div>
          <div style={styles.list}>
            <SiteFootTopic topic={this.props.topicStores}/>
            {this.props.footerLinks_4.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='links'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }
            </div>
          <div style={styles.longestLists}>
            <SiteFootTopic topic={this.props.topicPrices}/>
            {this.props.footerLinks_5.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='longestLinks'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }
            </div>
          <div style={styles.longLists}>
            <SiteFootTopic topic={this.props.topicMembers}/>
            {this.props.footerLinks_6.map((footLinks,idx) => {
              return <SiteFootLinks
              key = {idx}
              linkStyle='longLinks'
              link = {footLinks.path}
              text={footLinks.name}/>
            })
            }
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
