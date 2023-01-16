const Koa = require("koa");
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

//서버 실행 포트
const port = process.env.PORT || 3000;   //환경변수세팅 해놓은 포트 먼저 기본적으러 가져오고 없으면 3000번으로 접속

//바디파서 http request 바디부부을 활욜할 수 있게 해줌
app.use(bodyParser({formLimit: '5mb'}));


//정적파일 변수로 설정 안 하고 바로 설정
app.use(require('koa-static')(`${__dirname}/public`));

//라우터 설정
router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

//템플릿 엔진 설정
render(app, {
  layout: 'layouts/web',
  root:path.join(__dirname,'/views'),
  viewExt: 'ejs', cache: false
});

//서버 실행
app.listen(port, () => {
  console.log(`웹서버 구동...${port}`);
});