const Router = require('@koa/router');
const router = new Router();

const { myLogging } = require('./middleware/logging');
const { verify } = require('./middleware/auth');

//웹 컨트롤러에서 가져오기
const webController = require('./web/controller');
const userController = require('./api/user/controller');
const feedController = require('./api/feed/controller');

//어떤 페이지를 들어가든 마이로깅 먼저 하고 동작
router.use(myLogging);

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