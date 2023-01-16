const jwt = require('jsonwebtoken');


exports.info = (ctx,next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx, next) => {

  let token = await generateToken({name: 'my-name'});
  ctx.body = token;
}
exports.login = async (ctx, next) => {
  let {id,pw} = ctx.request.body;


  let result = "";
  // 계정이 있을 때 토큰 발급 아니면 에러메시지 출력
  if(id === 'admin' && pw == '1234'){
    result = await generateToken({name: 'abc'});
  } else {
    result = "아이디 혹은 페스워드가 일치하지 않습니다";
  }
  ctx.body = result;
}

let generateToken = (payload) => {
  return new Promise((resolve,reject) => {
    jwt.sign(payload, process.env.APP_KEY,(error,token) => {
      if(error) {reject(error);}
      resolve(token);
    })
  })
}