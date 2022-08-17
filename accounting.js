function Employee(imageUrl, fullName, employeeId, department, level) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
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


const allEmployees = [];
let employee;

let form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let employeeId = document.getElementById('employeeId').value;
    let fullNAme = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('LevelName').value;
    let imageUrl = document.getElementById('imageUrl').value;
    employee = new Employee(imageUrl, fullNAme, employeeId, department, level);
    employee['salary'] = employee.salary();
    if (!JSON.parse(localStorage.getItem('employees'))) {
        localStorage.setItem('employees', JSON.stringify([employee]));
    } else {
        let newArray = JSON.parse(localStorage.getItem('employees'));
        console.log(newArray);
        newArray.push(employee);
        localStorage.setItem('employees', JSON.stringify(newArray));

    }
    form.reset();
});


const section = document.querySelector('#allEmployees');
if (JSON.parse(localStorage.getItem('employees'))) {
    const informationArray = JSON.parse(localStorage.getItem('employees'));

    informationArray.forEach(employee => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <img src='${employee.imageUrl}' alt="John" style="width:100%">
                    <h1> ${employee.fullName}  ${employee.employeeId} </h1 >
                    <p>${employee.department}  ${employee.level}</p>
                    <p>${employee.salary}</p>                
                            <div style="margin: 24px 0;">
                            <a href="#"><i class="fa fa-dribbble"></i></a> 
                            <a href="#"><i class="fa fa-twitter"></i></a>  
                            <a href="#"><i class="fa fa-linkedin"></i></a>  
                            <a href="#"><i class="fa fa-facebook"></i></a> 
                            </div>
                    <p><button>Contact</button></p>
    
        `;
        section.appendChild(card);
    })
}


