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
        tableHtml += "</tr>";
    });

    table1.innerHTML = tableHtml;
    table2.innerHTML = tableHtml;
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

    fetch('http://localhost:3000/car/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      })
      .then(response => response.json())
      .then(data => {
        const x = document.getElementById('carNotif');
        x.innerHTML = "Car has been created!";
        x.classList.remove('hidden');
        x.classList.add('success');
        sleep(10000);
        x.classList.add('hidden');
    }).catch(error => {
        console.log(error);
        const x = document.getElementById('carNotif');
        x.innerHTML = "Something when Wrong!";
        x.classList.remove('hidden');
    });
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Insert the car inside the table
function insertRowToTable(data){
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    const isTableData1 = table1.querySelector(".no-data");
    const isTableData2 = table2.querySelector(".no-data");
    const tableHtml = "";
    tableHtml += "<tr>";
    tableHtml += `<td>${data.name}</td>`;

    tableHtml += "</tr>";
    tableHtml += "</tr>";
    console.logt(tableHtml);
    if(isTableData1){
        table1.innerHTML += tableHtml;
    }
    else{
        const newtable1 = table1.insertRow()
        newtable1 = tableHtml;
    }
    
    if(isTableData2){
        table2.innerHTML += tableHtml;
    }
    else{
        const newtable2 = table2.insertRow()
        newtable2 = tableHtml;
    }
}
