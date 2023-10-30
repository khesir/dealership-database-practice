const mysql = require('mysql2');
require("dotenv").config();

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
});

module.exports = pool.promise();


// export async function getCar() {
//     const result = await pool.query("SELECT * FROM dealership_car")
//     return result[0];
// }

// export async function getCarById(id) {
//     const result = await pool.query("SELECT * FROM dealership_car WHERE dealership_car_id = ?", [id])
//     return result;
// }

// export async function createCar(Car_name, Car_brand, Car_model, Car_body_type, Car_year_model, Car_price) {
//     const result = await pool.query("INSERT INTO Dealership_car (Car_name, Car_brand, Car_model, Car_body_type, Car_year_model, Car_price) VALUES (?,?,?,?,?,?)",[Car_name, Car_brand, Car_model, Car_body_type, Car_year_model, Car_price])
//     return result;
// }
