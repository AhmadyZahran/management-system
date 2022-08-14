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

const employeeOne = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeOne);
console.log(employeeOne.salary());


const employeeTwo = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeTwo);
console.log(employeeTwo.salary());


const employeeThree = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeThree);
console.log(employeeThree.salary());



const employeeFour = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeFour);
console.log(employeeFour.salary());




const employeeFive = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeFive);
console.log(employeeFive.salary());



const employeeSix = new Employee(1005, 'Rana Saleh', 'Development', 'junior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeSix);
console.log(employeeSix.salary());




const employeeSeven = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU');
console.log(employeeSeven);
console.log(employeeSeven.salary());

