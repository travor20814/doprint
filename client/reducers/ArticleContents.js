import {
  ARTICLE_CONTENTS_FETCHED,
} from '../actions/ArticleContents.js';

export default function (state = [] , action){
  switch (action.type) {
    case ARTICLE_CONTENTS_FETCHED:
      return action.contents
    default:
      return state ;
  }
};
/*case ARTICLE_LEFT:
  return Object.assign({},state,{
    slogans: '创新计算机科技\n'+'整合印务流程',
    topics: '技术创新',
    contents: '开发专属系统，整合印务流程，每笔订\n单都能全面监控与掌握印件进度，让每\n位同仁的工作都有明确的节奏。拼版全\n面自动化系统，让各式软件制作的上千\n笔稿件在AM12:00内全部处理完毕。\n全自动计算机控制直接出版设备，产能\n高且质量稳定，可达每小时64片版，全\n厂印刷机备有CIP4计算机自动控墨与色\n彩导航设备 透由CIP4色彩导航系统，\n由计算机精准的将印纹计算出印刷控墨\n数据，彻底改成全计算机控墨，实现从\n0~100万张无色差的不可能任务。',
  });
  break;
case ARTICLE_MID:
  return Object.assign({},state,{
    slogans:'一贯化生产\n满足速度需求',
    topics:'速度精确',
    contents: '专属印务系统能精准监控与掌握每笔印\n件进度，达到今日接稿，隔日交货的速\n度。 客制化的印刷品规格标准化，加速\n生产流程。 一贯化的后加工设备，从上\n光／折纸／压线／裁切／书籍装订都能\n在厂内生产并控管质量。 独立版印刷服\n务更能满足客户实时处理的速度需求。\n卡之屋物流车队，大台北区专车配送服\n务，其它外县市也有专员处理货运服\n务。',
  });
  break;
case ARTICLE_RIGHT:
    return Object.assign({},state,{
      slogans:'系统数据化\n严守质量控管',
      topics:'质量用心',
      contents: 'Print Control色彩检验报告 我们坚\n持每天量测与检验不同纸张的色彩标\n准，为的就是能够让印品与印版之间的\n色彩结合更密切，精确且真实呈现颜色\n数据。 数字打样数据计算机化 采用高\n阶的数字彩印机并与印刷机同步联机，\n色准度高达95%以上，能在印刷前准确\n预测印刷结果。 12项质量技术。',
    });
    break;
case JOIN_US:
      return Object.assign({},state,{
        content:'歡迎成為我們的夥伴\n\n加入我們最堅強的陣容\n我們能協助你晉升世界一流的水平',
      });
      break;
*/
