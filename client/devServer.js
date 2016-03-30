import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import Debug from 'debug';
import path from 'path';

const debug = Debug('Starbucks:Client');
const app = new express();
const PORT = process.env.PORT || 5100;

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: "'http://api.starbucks.rytass.com'",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'babel',
      ],
      exclude: /node_modules/,
      include: __dirname,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }],
  }
};

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/api/ArticleContents', function (req, res) {
  res.json([{
    slogans: '创新计算机科技\n整合印务流程',
    topics: '技术创新',
    contents:'开发专属系统，整合印务流程，每笔订\n'+
    '单都能全面监控与掌握印件进度，让每\n'+
    '位同仁的工作都有明确的节奏。拼版全\n'+
    '面自动化系统，让各式软件制作的上千\n'+
    '笔稿件在AM12:00内全部处理完毕。\n'+
    '全自动计算机控制直接出版设备，产能\n'+
    '高且质量稳定，可达每小时64片版，全\n'+
    '厂印刷机备有CIP4计算机自动控墨与色\n'+
    '彩导航设备 透由CIP4色彩导航系统，\n'+
    '由计算机精准的将印纹计算出印刷控墨\n'+
    '数据，彻底改成全计算机控墨，实现从\n0~100万张无色差的不可能任务。',
  }, {
    slogans: '一贯化生产\n满足速度需求',
    topics: '速度精确',
    contents:'专属印务系统能精准监控与掌握每笔印\n'+
    '件进度，达到今日接稿，隔日交货的速\n'+
    '度。 客制化的印刷品规格标准化，加速\n'+
    '生产流程。 一贯化的后加工设备，从上\n'+
    '光／折纸／压线／裁切／书籍装订都能\n'+
    '在厂内生产并控管质量。 独立版印刷服\n'+
    '务更能满足客户实时处理的速度需求。\n'+
    '卡之屋物流车队，大台北区专车配送服\n务，其它外县市也有专员处理货运服\n务。',
  }, {
    slogans: '系统数据化\n严守质量控管',
    topics:'质量用心',
    contents:'Print Control色彩检验报告 我们坚\n'+
    '持每天量测与检验不同纸张的色彩标\n'+
    '准，为的就是能够让印品与印版之间的\n'+
    '色彩结合更密切，精确且真实呈现颜色\n'+
    '数据。 数字打样数据计算机化 采用高\n'+
    '阶的数字彩印机并与印刷机同步联机，\n'+
    '色准度高达95%以上，能在印刷前准确\n'+'预测印刷结果。 12项质量技术。',
  }]);
});

app.get('/api/Articles', function (req, res) {
  res.json({
    slogan:'都彼快印首創雲平台垂直整合，\n提供快速、經濟、又高質量的列印體驗，\n馬上加入會員更享優惠。',
    joinContent:'歡迎成為我們的夥伴\n\n加入我們最堅強的陣容\n我們能協助你晉升世界一流的水平',
    joinMore:'了解更多',
    lateNews:'最新消息',
    othersNews:'其他消息',
    newsDate:'2016-01-01',
    newsTopic:{
      contentLeft:'建立上海新線上服務系統',
      contentRight:'世界博覽會指定合作廠商',
    },
    introduce:{
      name:'凱基印刷',
      topic:'十三年領導經驗\n持續追求領先',
      content:'凱基印刷成立於二零零三年六月，期間積極引進全球領遷的生產技術及設備，\n'+
      '不斷精進硬體實力，並於成立隔年成立印前設計部門，累積軟實力，並致力於\n'+
      '在上海及蘇州地區提昇服務水平，目前已累積超過十三年的經驗，也成為上海\n'+
      '蘇州區域的業界領先品牌，但凱基仍舊持續精進，在二零一六年也將整合雲端\n服務，持續保持業界領先位置',
    },
  });
});

app.get('/api/FooterButtons', function (req, res) {
  res.json({
    aboutTopic: '關於我們',
    newsTopic: '最新消息',
    productTopic: '產品型錄',
    storeTopic: '打印門市',
    priceTopic: '報價系統',
    memberTopic: '會員專區',
    aboutUs : [{
      path: '/aboutDubi',
      name: '關於都彼',
    },{
      path: '/CompanyTeam',
      name: '公司團隊',
    },{
      path: '/jobs',
      name: '各事業處',
    }],
    latestNews:[{
        path: '/aboutDubi',
        name: '公司新訊',
      },{
        path: '/CompanyTeam',
        name: '人員招募',
      },{
        path: '/jobs',
        name: '成功故事',
    }],
    products:[{
      path: '/aboutDubi',
      name: '產品介紹',
    },{
      path: '/CompanyTeam',
      name: '下載中心',
    }],
    stores:[{
      path: '/aboutDubi',
      name: '合作夥伴',
    },{
      path: '/CompanyTeam',
      name: '技術諮詢',
    },{
      path: '/jobs',
      name: '誠邀加盟',
    }],
    prices:[{
      path: '/aboutDubi',
      name: '線上報價',
    },{
      path: '/CompanyTeam',
      name: '自動化名片打印',
    }],
    members:[{
      path: '/aboutDubi',
      name: '對帳單查詢',
    },{
      path: '/CompanyTeam',
      name: '物流查詢',
    },{
      path: '/jobs',
      name: '退貨單打印',
    }]
  });
});

app.get('/api/HeaderButtons', function(req, res) {
  res.json([{
    path: '/member',
    name: '會員專區',
  }, {
    path: '/onlineServe',
    name: '線上客服',
  }]);
});

app.get('/api/TopicButtons', function(req, res) {
  res.json([{
    path: '/about',
    name: '關於我們',
  }, {
    path: '/news',
    name: '最新消息',
  }, {
    path: '/products',
    name: '產品型錄',
  },{
    path: '/stores',
    name: '印刷門市',
  },{
    path: '/prices',
    name: '報價系統',
  },{
    path: '/members',
    name: '會員專區',
  }]);
});

app.get('/api/SomeNames', function(req, res) {
  res.json({
    join:{
      content: '+加入我們',
      link:'/join',
    },
  });
});

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    debug("Starbucks Dev Site Listening on port %s", PORT);
  }
});
