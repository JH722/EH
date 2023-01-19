const {pool} = require('../../data');
const {create, showAll, show, ulter, drop} = require('./query');

// 피드 리스트 보기
exports.index = async ctx => {
  // let query = ctx.query;

  let item = await showAll();

  ctx.body = item;
}
// 피드 등록
exports.store = async ctx => {
  // let feed = ctx.request.feed;
  let { userId, imageId, content } = ctx.request.body;

  let { affectedRows, insertId } = await create(userId,imageId,content);

if(affectedRows > 0){
  ctx.body = { result: "ok", id: insertId };
} else {
  ctx.body = { result: "fail", };
}
}
// 피드 상세보기
exports.show = async (ctx,next) => {
  let { id } = ctx.params;

  let item = await show(id);

  if(item == null) {
    ctx.body = {result: "fail"};
    return;
  }
  ctx.body = item

}
// 피드 수정
exports.update = async (ctx,next) => {
  let { id } = ctx.params;
  let { userId, imageId, content } = ctx.request.body;

  let item1 = await ulter(userId, imageId, content, id);
  let item = await show(id);

  if(item == null) {
    ctx.body = {result: "fail"};
    return;
  }
  ctx.body = item
}
// 피드 삭제
exports.delete = async (ctx,next) => {
  let id = ctx.params.id;
  let item = await drop(id);

  if(item == null) {
    ctx.body = {result: "삭제 실패"};
    return;
  }
  ctx.body = `${id}번째 피드를 삭제하였습니다`
  
}
