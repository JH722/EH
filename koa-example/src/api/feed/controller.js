exports.index = (ctx,next) => {
  let query = ctx.query;
  // query.color
  // query.size
  // query.count ???
  let { color,size,count } = ctx.query;
  ctx.body = query;
}
exports.store = (ctx,next) => {
  let body = ctx.request.body
  ctx.body = body;
}
exports.show = (ctx,next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 피드 상세`;
}
exports.update = (ctx,next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 피드 수정`;
}
exports.delete = (ctx,next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 피드 삭제`;
}