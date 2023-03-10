const Router = require('@koa/router');
const router = new Router();

const multer = require('@koa/multer');
const path = require('path');
const upload = multer({
  dest: path.resolve(__dirname,'../','storage') //현제 디렉토리 한단계 위에 스토리지 파일 만들고 저장할거다
})

const { myLogging } = require('./middleware/logging');
const { verify } = require('./middleware/auth');

//웹 컨트롤러에서 가져오기
const webController = require('./web/controller');
const userController = require('./api/user/controller');
const feedController = require('./api/feed/controller');
// const apiFileController = require('./api/file/controller'); //함수 사용시 require 자체를 대신 넣어준다

//어떤 페이지를 들어가든 마이로깅 먼저 하고 동작
router.use(myLogging);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload); //업로드 루트
router.get('/file/:id',require('./api/file/controller').download); //download 루트 

//가져온 웹 컨트롤러 기존 함수 대신 사용
router.get('/', webController.home);
router.get('/page/:name', webController.page);

router.post('/api/user/login', userController.login);  //로그인
router.post('/api/user/register', userController.register);  //회원가입


//auth 필요한 기능들 , 헤더에 토큰값 넣어야 기능 수행
router.use(verify);

router.get('/api/user/:id', userController.info);        //유저 정보 
router.get('/api/feed', feedController.index);           //피드 목차, 토큰값 넣기
router.post('/api/feed', feedController.store);          //피드 저장
router.get('/api/feed/:id', feedController.show);        //피드 보기
router.put('/api/feed/:id', feedController.update);      //피드 수정
router.delete('/api/feed/:id', feedController.delete);   //피드 삭제


module.exports = router;