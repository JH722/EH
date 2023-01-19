const { pool } = require('../../data')
// 피드 등록
exports.create = async (userId, imageId, content) => {
  const query = `INSERT INTO feed (user_id, image_id, content)
  VALUES(?,?,?)`;
  return await pool(query, [userId, imageId, content]);
}

// 피드 리스트 보기
exports.showAll = async () => {
  const query = `SELECT * FROM feed`;
  let result = await pool(query);
  return (result.length < 0) ? null : result;
}
// 피드 상세 보기
exports.show = async (id) => {
  const query = `SELECT * FROM feed WHERE id = ?`;
  let result = await pool(query, [id]);
  return (result.length < 0) ? null : result[0];
}
// 피드 수정
exports.ulter = async (userId, imageId, content, id) => {
  const query = `UPDATE feed 
  SET user_id = ?, image_id = ?, content = ?, updated_at = now()
  WHERE id = ?`;
  let result = await pool(query,[userId, imageId, content, id]);
  return (result.length < 0) ? null : result[0];
}

//피드 삭제
exports.drop = async (id) => {
  const query = `DELETE FROM feed WHERE id = ?`;
  let result = await pool(query, [id]);
  return(result)
}