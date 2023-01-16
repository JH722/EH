/**
 * 클라이언트의 요청 Ip와, url을 콘솔에 단순히 출력해주는 로그함수
 * 
 */

exports.myLogging = async (ctx, next) => {
  let clientIp = ctx.request.ip;
  console.log(`${clientIp.replace("::ffff:","")} 에서 호출 : ${ctx.originalUrl}`);
  await next();

}