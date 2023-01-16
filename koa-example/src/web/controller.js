//익스포트.사용할 이름 = 함수 입력
exports.home = (ctx,next) => {
  
  ctx.body = "homepage";
}

exports.page = async (ctx,next) => {
  let name = ctx.params.name; // == let {name} = ctx.params; 
  let pagename;
  switch (name) {
    case 'terms':
      pagename = "이용약관";
      break;
    case 'policy':
      pagename = "개인정보 처리방침";
      break;
  }
  // ctx.body = content;
  await ctx.render('index',{ pagename });
}