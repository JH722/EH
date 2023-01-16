const Router = require('@koa/router');
const router = new Router();

//웹 컨트롤러에서 가져오기
const webController = require('./web/controller');
const userController = require('./api/user/controller');
const feedController = require('./api/feed/controller');

//가져온 웹 컨트롤러 기존 함수 대신 사용
router.get('/', webController.home);
router.get('/page/:name', webController.page);

router.get('/api/user/:id', userController.info);

router.get('/api/feed', feedController.index);
router.post('/api/feed', feedController.store);
router.get('/api/feed/:id', feedController.show);
router.put('/api/feed/:id', feedController.update);
router.delete('/api/feed/:id', feedController.delete);


module.exports = router;