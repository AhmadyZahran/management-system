function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageUrl = imageUrl
    this.salary = () => {
        if (this.level.toLowerCase() === 'junior') {
            return Math.trunc(Math.random() * 500 + 500);
        } else if (this.level.toLowerCase() === 'mid-senior') {
            return Math.trunc(Math.random() * 500 + 1000);
        } else if (this.level.toLowerCase() === 'senior') {
            return Math.trunc(Math.random() * 500 + 1500);
        } else {
            return 'Invalid level';
        }
    }

}

// // call the parent 
let container = document.getElementById('container');
//create child
let tableOfEmployees = document.createElement('table');

container.appendChild(tableOfEmployees);

let row = document.createElement("tr");

const data = ["employeeId", "fullName", "department", "level", "imageUrl", "salary"];

for (let i = 0; i < data.length; i++) {

    let th = document.createElement("th")
    row.appendChild(th)
    th.innerText = data[i];

}

tableOfEmployees.appendChild(row);


let form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let row = document.createElement("tr");
    let employeeId = document.getElementById('employeeId').value;
    let fullNAme = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('LevelName').value;
    let imageUrl = document.getElementById('imageUrl').value;

    const employee = new Employee(employeeId, fullNAme, department, level, imageUrl);

    for (info in employee) {
        let td = document.createElement("td");
        if (info === 'salary') {
            td.innerHTML = employee.salary();
        } else {
            td.innerHTML = employee[info];
        }
        row.appendChild(td);

    }
    tableOfEmployees.appendChild(row);
})
