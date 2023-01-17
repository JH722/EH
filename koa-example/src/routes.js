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
const apiFileController = require('./api/file/controller'); //함수 사용시 require 자체를 대신 넣어준다

//어떤 페이지를 들어가든 마이로깅 먼저 하고 동작
router.use(myLogging);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload); //업로드 루트
router.get('/file/:id',require('./api/file/controller').download); //download 루트 

//가져온 웹 컨트롤러 기존 함수 대신 사용
router.get('/', webController.home);
router.get('/page/:name', webController.page);

router.post('/api/user/login', userController.login);
router.post('/api/user/register', userController.register);


//auth 필요한 기능들
router.use(verify);

router.get('/api/user/:id', userController.info);
router.get('/api/feed', feedController.index);
router.post('/api/feed', feedController.store);
router.get('/api/feed/:id', feedController.show);
router.put('/api/feed/:id', feedController.update);
router.delete('/api/feed/:id', feedController.delete);


module.exports = router;