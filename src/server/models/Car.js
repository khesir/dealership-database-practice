const db = require("../database/database")

class Car {
    constructor(name, brand, model, body_type, year_model, price) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.body_type = body_type;
        this.year_model = year_model;
        this.price = price;
    }

    create(){
        let sql = `INSERT INTO dealership_car `
        +`(Car_name, Car_brand, Car_model, Car_body_type, Car_year_model, Car_price)`
        +` VALUES ('${this.name}','${this.brand}','${this.model}','${this.body_type}','${this.year_model}','${this.price}')`;
        return db.execute(sql);
        
    }

    static findAll(){
        let sql = `SELECT * FROM dealership_car`;
        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM dealership_car WHERE dealership_car_id = ${id}`;
        return db.execute(sql);
    }
    static deleteById(id){
        let sql = `DELETE FROM dealership_car WHERE dealership_car_id = ${id}`;
        return db.execute(sql);
    }
    static updateCarById(id, name, brand, model, body_type, year_model, price){
        let sql = `UPDATE dealership_car SET Car_name = '${name}', Car_brand = '${brand}', Car_model = '${model}', Car_body_type = '${body_type}', Car_year_model = '${year_model}', Car_price = '${price}' WHERE dealership_car_id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Car;