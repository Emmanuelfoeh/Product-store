export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    name: process.env.DEV_DB_NAME,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
