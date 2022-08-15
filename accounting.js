function Employee(employeeId, fullName, department, level) {
    this.employeeId = employeeId
    this.fullName = fullName
    this.department = department
    this.level = level
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
const employees = [];
const employeeOne = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
employees.push(employeeOne);

const employeeTwo = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
employees.push(employeeTwo)

const employeeThree = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');

employees.push(employeeThree)

const employeeFour = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');

employees.push(employeeFour)

const employeeFive = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');

employees.push(employeeFive)

const employeeSix = new Employee(1005, 'Rana Saleh', 'Development', 'junior');

employees.push(employeeSix)

const employeeSeven = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-senior');

employees.push(employeeSeven)





// call the parent 
let container = document.getElementById('container');
//create child
let tableOfEmployees = document.createElement('table');

container.appendChild(tableOfEmployees);

let row = document.createElement("tr")

const data = ["employeeId", "fullName", "department", "level", "salary"];

for (let i = 0; i < data.length; i++) {

    let th = document.createElement("th")
    row.appendChild(th)
    th.innerText = data[i];

}

tableOfEmployees.appendChild(row)

for (let i = 0; i < employees.length; i++) {
    let row = document.createElement("tr");
    for (info in employees[i]) {
        console.log(info);
        let td = document.createElement("td")
        row.appendChild(td)
        if (info === 'salary') {
            td.innerText = employees[i].salary();
        } else {
            td.innerText = employees[i][info];
        }
    }
    tableOfEmployees.appendChild(row);

}


