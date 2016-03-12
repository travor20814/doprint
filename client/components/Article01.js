import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    height: '680px',
    width: '1000px',
    display: 'flex',
    flexWrap:'wrap',
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
  picture:{
    width: '1000px',
    height: '400px',
    backgroundImage: `url(${require('../images/landing_2.jpg')})`,
    backgroundSize: '1000px 400px',
    backgroundRepeat: 'no-repeat',
  },
};

class Article01 extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.littleWords}>凱基印刷</div>
          <h3 style={styles.articleTopic}>十三年領導經驗<br/>持續追求領先</h3>
        </div>
        <div style={styles.right}>
          <div style={styles.articleContent}>
            凱基印刷成立於二零零三年六月，期間積極引進全球領遷的生產技術及設備，
            不斷精進硬體實力，並於成立隔年成立印前設計部門，累積軟實力，並致力於
            在上海及蘇州地區提昇服務水平，目前已累積超過十三年的經驗，也成為上海
            蘇州區域的業界領先品牌，但凱基仍舊持續精進，在二零一六年也將整合雲端
            服務，持續保持業界領先位置
          </div>
        </div>
        <div style={styles.picture}></div>
      </div>
    );
  }
}

export default Radium(Article01);
