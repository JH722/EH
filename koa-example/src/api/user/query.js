const { pool } = require('../../data')

/**
 * 회원가입
 * @param {string} email 
 * @param {string} password 
 * @param {string} name 
 * @returns 
 */
exports.register = async (email, password, name) => {
  const query = `INSERT INTO user (email, password, name)
  VALUES (?, ?, ?)`;
  return await pool(query, [email, password, name]);
}