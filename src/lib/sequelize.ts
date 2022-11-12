import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/db/dev-db.sql",
  logging: false,
  sync: { force: false },
  logQueryParameters: false,
});

export default sequelize;
