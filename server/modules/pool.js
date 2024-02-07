const pg = require('pg');
let pool;

if (process.env.DATABASE_URL) {
  // new pool to connect to database that is rendered
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new pg.Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || 'weekend-to-do-app',
  });
}

module.exports = pool;
