const dbConfig = require("../dbConfig");

exports.constructQuery = async (sql, params) => {
  const pool = dbConfig.createPool();
  const parameters = params || [];
  const client = await pool.connect();

  return new Promise(async (resolve, reject) => {
    try {
      const result = await client.query(sql, parameters);
      resolve(result);
    } catch (e) {
      reject(new Error(`Database: ${e.message}`));
    }
    client.release();
  });
};
