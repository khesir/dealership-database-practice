CREATE DATABASE Dealership;

Use Dealership;

Select * from Dealership_car;

INSERT INTO Dealership_car (Car_name, Car_brand, Car_model, Car_body_type, Car_year_model, Car_price) 
VALUES ('Civic', 'Honda', 'Civic', 'Sedan', 2019, 20000),
('Accord', 'Honda', 'Accord', 'Sedan', 2019, 30000),
('CR-V', 'Honda', 'CR-V', 'SUV', 2019, 25000),
('Pilot', 'Honda', 'Pilot', 'SUV', 2019, 35000),
('Odyssey', 'Honda', 'Odyssey', 'Minivan', 2019, 40000),
('Fit', 'Honda', 'Fit', 'Hatchback', 2019, 15000),
('Ridgeline', 'Honda', 'Ridgeline', 'Truck', 2019, 45000),
('Civic', 'Honda', 'Civic', 'Sedan', 2018, 20000),
('Accord', 'Honda', 'Accord', 'Sedan', 2018, 30000),
('CR-V', 'Honda', 'CR-V', 'SUV', 2018, 25000),
('Pilot', 'Honda', 'Pilot', 'SUV', 2018, 35000),
('Odyssey', 'Honda', 'Odyssey', 'Minivan', 2018, 40000),
('Fit', 'Honda', 'Fit', 'Hatchback', 2018, 15000),
('Ridgeline', 'Honda', 'Ridgeline', 'Truck', 2018, 45000),
('Civic', 'Honda', 'Civic', 'Sedan', 2017, 20000),
('Accord', 'Honda', 'Accord', 'Sedan', 2017, 30000),
('CR-V', 'Honda', 'CR-V', 'SUV', 2017, 25000),
('Pilot', 'Honda', 'Pilot', 'SUV', 2017, 35000),
('Odyssey', 'Honda', 'Odyssey', 'Minivan', 2017, 40000),
('Fit', 'Honda', 'Fit', 'Hatchback', 2017, 15000),
('Ridgeline', 'Honda', 'Ridgeline', 'Truck', 2017, 45000),
('Civic', 'Honda', 'Civic', 'Sedan', 2016, 20000);

CREATE TABLE Sales_person (
    Sales_person_id INT NOT NULL AUTO_INCREMENT,
    First_name VARCHAR(45) NOT NULL,
    Last_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (Sales_person_id)
);

CREATE TABLE Dealership_car(
    Dealership_car_id INT NOT NULL AUTO_INCREMENT,
    Car_name VARCHAR(45) NOT NULL,
    Car_brand VARCHAR(45) NOT NULL,
    Car_model VARCHAR(45) NOT NULL,
    Car_body_type VARCHAR(45) NOT NULL,
    Car_year_model INT NOT NULL,
    Car_price INT NOT NULL,
    PRIMARY KEY (Dealership_car_id)
);