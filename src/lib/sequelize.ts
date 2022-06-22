import { Dialect, Sequelize } from "sequelize";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres" as Dialect,
  logging: false,
  sync: { force: false },
  logQueryParameters: false,
});

export default sequelize;
