import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

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
  },
  contentBlocks:{
    height: '350px',
    flex: '1',
  },
  contentSlogan:{
    height: '34px',
    fontSize:'12px',
    letterSpacing:'8px',
    color: '#9b9b9b',
    marginLeft: '120px',
  },
  contentTopic:{
    height:'33px',
    fontSize: '24px',
    letterSpacing: '8px',
    marginLeft: '118px',
    marginTop: '20px',
    color: '#000000',
  },
  contentContent:{
    height: '288px',
    fontSize: '12px',
    letterSpacing: '4px',
    lineHeight: '24px',
    marginLeft: '48px',
    marginTop: '10px',
  },
};

class Article02 extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.topic}>技術創新電腦科技整合印務流程</div>
        <div style={styles.contents}>
          <div style={styles.contentBlocks}>
            <div style={styles.contentSlogan}>创新计算机科技<br/>整合印务流程</div>
            <div style={styles.contentTopic}>技术创新</div>
            <div style={styles.contentContent}>
              开发专属系统，整合印务流程，每笔订<br/>
              单都能全面监控与掌握印件进度，让每<br/>
              位同仁的工作都有明确的节奏。拼版全<br/>
              面自动化系统，让各式软件制作的上千<br/>
              笔稿件在AM12:00内全部处理完毕。<br/>
              全自动计算机控制直接出版设备，产能<br/>
              高且质量稳定，可达每小时64片版，全<br/>
              厂印刷机备有CIP4计算机自动控墨与色<br/>
              彩导航设备 透由CIP4色彩导航系统，<br/>
              由计算机精准的将印纹计算出印刷控墨<br/>
              数据，彻底改成全计算机控墨，实现从<br/>
              0~100万张无色差的不可能任务。
            </div>
          </div>
          <div style={styles.contentBlocks}>
            <div style={styles.contentSlogan}>一贯化生产<br/>满足速度需求</div>
            <div style={styles.contentTopic}>速度精确</div>
            <div style={styles.contentContent}>
              专属印务系统能精准监控与掌握每笔印<br/>
              件进度，达到今日接稿，隔日交货的速<br/>
              度。 客制化的印刷品规格标准化，加速<br/>
              生产流程。 一贯化的后加工设备，从上<br/>
              光／折纸／压线／裁切／书籍装订都能<br/>
              在厂内生产并控管质量。 独立版印刷服<br/>
              务更能满足客户实时处理的速度需求。<br/>
              卡之屋物流车队，大台北区专车配送服<br/>
              务，其它外县市也有专员处理货运服<br/>
              务。
            </div>
          </div>
          <div style={styles.contentBlocks}>
            <div style={styles.contentSlogan}>系统数据化<br/>严守质量控管</div>
            <div style={styles.contentTopic}>质量用心</div>
            <div style={styles.contentContent}>
              Print Control色彩检验报告 我们坚<br/>
              持每天量测与检验不同纸张的色彩标<br/>
              准，为的就是能够让印品与印版之间的<br/>
              色彩结合更密切，精确且真实呈现颜色<br/>
              数据。 数字打样数据计算机化 采用高<br/>
              阶的数字彩印机并与印刷机同步联机，<br/>
              色准度高达95%以上，能在印刷前准确<br/>
              预测印刷结果。 12项质量技术。
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Article02);
