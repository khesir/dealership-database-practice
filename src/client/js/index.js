const addBtn = document.getElementById('createCar');

// Upon loading the page, we want to fetch all the cars from the server
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded!');
    fetch('http://localhost:3000/car/',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }})
    .then(response => response.json())
    .then(data => loadHTMLTable(data['cars']));
});

function loadHTMLTable(data) {
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    console.log(data);
    if (data[0].length == 0) {
        table1.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        table2.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data[0].forEach(function ({Dealership_car_id, Car_name, Car_brand, Car_model,Car_body_type ,Car_year_model, Car_price}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${Dealership_car_id}</td>`;
        tableHtml += `<td>${Car_name}</td>`;
        tableHtml += `<td>${Car_brand}</td>`;
        tableHtml += `<td>${Car_model}</td>`;
        tableHtml += `<td>${Car_body_type}</td>`;
        tableHtml += `<td>${Car_year_model}</td>`;
        tableHtml += `<td>${Car_price}</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${Dealership_car_id}>Edit</button><button class="delete-row-btn" data-id=${Dealership_car_id}>Delete</button></td>`;
        tableHtml += "</tr>";
        tableHtml += "</tr>";
    });

    table1.innerHTML = tableHtml;
    table2.innerHTML = tableHtml;
}

document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

function deleteRowById(id) {
    fetch('http://localhost:3000/car/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    console.log("Update button is clicked")
}

// Add / Create a new car
addBtn.onclick = function () {
    const carName = document.getElementById('carName');
    const carBrand = document.getElementById('carBrand');
    const carModel = document.getElementById('carModel');
    const carbodyType = document.getElementById('carBType');
    const caryearModel = document.getElementById('carYM');
    const carPrice = document.getElementById('carPrice');

    const name = carName.value;
    const brand = carBrand.value;
    const model = carModel.value;
    const bodytype = carbodyType.value;
    const yearmodel = Number(caryearModel.value);
    const price = Number(carPrice.value);
    
    const carData = {
        name,
        brand,
        model,
        bodytype,
        yearmodel,
        price
    }
    console.log(carData.yearModel);

    fetch('http://localhost:3000/car/createCar',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      })
      .then(response => response.json())
      .then(data => insertRowToTable(data)).catch(error => {
        console.log(error)});
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Insert the car inside the table
function insertRowToTable(data){
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');

    tableHtml = "";
    tableHtml += "<tr>";
    tableHtml += `<td>${data.Dealership_car_id}</td>`;
    tableHtml += `<td>${data.Car_name}</td>`;
    tableHtml += `<td>${data.Car_brand}</td>`;
    tableHtml += `<td>${data.Car_model}</td>`;
    tableHtml += `<td>${data.Car_body_type}</td>`;
    tableHtml += `<td>${data.Car_year_model}</td>`;
    tableHtml += `<td>${data.Car_price}</td>`;
    tableHtml += `<td><button class="edit-row-btn" id="${Dealership_car_id}">Edit</button><button class="delete-row-btn" id="${Dealership_car_id}">Delete</button></td>`;
    tableHtml += "</tr>";

    table1.innerHTML += tableHtml;
    table2.innerHTML += tableHtml;
}

const searchBtn = document.getElementById('searchBtn');

searchBtn.onclick = function () {
    console.log("Search button is clicked");
    const searchValue = document.getElementById('searchInput').value;
    fetch('http://localhost:3000/car/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: searchValue })
    })
    .then(response => response.json())
    .then(data => loadHTMLTable(data['cars']));
}

function searchedTable() {
    const table1 = document.getElementById('table1');

    if(data[0] === 0){
        return;
    }


    let tableHtml = "";
    data[0].forEach(function ({Dealership_car_id, Car_name, Car_brand, Car_model,Car_body_type ,Car_year_model, Car_price}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${Dealership_car_id}</td>`;
        tableHtml += `<td>${Car_name}</td>`;
        tableHtml += `<td>${Car_brand}</td>`;
        tableHtml += `<td>${Car_model}</td>`;
        tableHtml += `<td>${Car_body_type}</td>`;
        tableHtml += `<td>${Car_year_model}</td>`;
        tableHtml += `<td>${Car_price}</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${Dealership_car_id}>Edit</button><button class="delete-row-btn" data-id=${Dealership_car_id}>Delete</button></td>`;
        tableHtml += "</tr>";
        tableHtml += "</tr>";
    });

    table1.innerHTML = tableHtml;
}