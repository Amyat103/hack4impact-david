const{ Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://postgres:TNlyXPACcwYxhpqPfExdQHUbiDjXZHwX@roundhouse.proxy.rlwy.net:56415/railway"
})

module.exports = pool;

