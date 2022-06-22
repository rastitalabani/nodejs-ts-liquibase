import {
  Liquibase,
  LiquibaseConfig,
  POSTGRESQL_DEFAULT_CONFIG,
} from "node-liquibase";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const myConfig: LiquibaseConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: "src/db/migrations/changelog.yml",
  url: `jdbc:postgresql://${DB_HOST}:5432/${DB_NAME}`,
  username: DB_USER!,
  password: DB_PASSWORD!,
};

const instance = new Liquibase(myConfig);

const doEet = async () => {
  instance.update({});
  // await instance.update();
  // await instance.dropAll();
};

doEet();
