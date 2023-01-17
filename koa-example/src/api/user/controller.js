const jwt = require('jsonwebtoken');
const { register, login } =require('./query');
const crypto = require('crypto');

// 해당 id의 회원정보
exports.info = (ctx,next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 회원에 대한 정보`;
}

//회원가입
exports.register = async (ctx, next) => {
  let { email, password, name } = ctx.request.body;
  let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 100, 'sha512')

  let { affectedRows } = await register(email, result.toString('base64'), name);

  if(affectedRows > 0) {
    let token = await generateToken({ name });
    ctx.body = token;
  } else {
    ctx.body = {result: "fail"};
  }
}
exports.login = async (ctx, next) => {
  let { email, password } = ctx.request.body;
  let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 100, 'sha512')

  let item = await login(email, result.toString('base64'));

  // 계정이 있을 때 토큰 발급 아니면 에러메시지 출력
  if(item == null){
    ctx.body = {result: "fail"};
  } else {
    let token = await generateToken({name: item.name});
    ctx.body = token;
  }
}

let generateToken = (payload) => {
  return new Promise((resolve,reject) => {
    jwt.sign(payload, process.env.APP_KEY,(error,token) => {
      if(error) {reject(error);}
      resolve(token);
    })
  })
}