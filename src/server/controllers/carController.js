const Car = require("../models/Car");

exports.getAllCar = async(req, res) => {
    try {
        const cars = await Car.findAll();

        res.status(200).json({ cars })
    } catch (error) {
        console.log(error);
    }
};

exports.getCarBySearch = async(req, res) => {
    try {
        const search = req.body.search;
        const cars = await Car.findBySearch(search);
        res.status(200).json({ cars })
    } catch (error) {
        console.log(error);
    }
};

exports.getCarByID = async(req, res) => {
    try {
        let carId = req.params.id;
        let [car, _] = await Car.findById(carId);  

        res.status(200).json({ car: car[0] })

    } catch (error) {
        console.log(error);
    }
};
exports.createCar = async(req, res) => {
    try {
        let {name, brand, model, bodytype, yearmodel, price} = req.body;
        console.log(req.body);
        let car = new Car(name, brand, model, bodytype, yearmodel, price);

        car = await car.create();
        
        res.status(201).json({
            message: "CreatedNewCar",
        })
    } catch (error) {
        console.log(error);
    }
};
exports.deleteCarByID = async(req, res) => {
    try {
        let carId = req.params.id;
        let car = await Car.deleteById(carId);
        res.status(200).json({
            message: "DeletedCar",
        })
    } catch (error) {
        console.log(error);
    }
}
exports.updateCarByID = async(req, res) => {
    try {
        let carId = req.params.id;
        let {name, brand, model, bodytype, yearmodel, price} = req.body;
        let car = await Car.updateCarById(carId, name, brand, model, bodytype, yearmodel, price);

        res.status(200).json({
            message: "UpdatedCar",
        })
    } catch (error) {
        console.log(error);
    }
}
