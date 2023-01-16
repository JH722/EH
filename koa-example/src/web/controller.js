//익스포트.사용할 이름 = 함수 입력
exports.home = (ctx,next) => {
  
  ctx.body = "homepage";
}

exports.page = (ctx,next) => {
  let name = ctx.params.name; // == let {name} = ctx.params; 
  let content;
  switch (name) {
    case 'terms':
      content = "이용약관";
      break;
    case 'policy':
      content = "개인정보 처리방침";
      break;
  }
  ctx.body = content;
}