const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
    }
);

(async() => {   
    try {
        await sequelize.authenticate();
        console.log("Connection has been established succesfully.");
    }   catch(err) {
        console.error("Failed to connect to the MySQL database.", err);
    }
})();

module.exports = sequelize;