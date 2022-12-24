import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "icap",
    "postgres",
    "147123",
    {
    host: "localhost",
    dialect: "postgres"
});
