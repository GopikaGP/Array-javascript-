//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name
console.log('The employees name is :');
employeeName=employee.map((a=>a[1]))
console.log(employeeName);
employee.forEach((emp) => {
    console.log(emp[1] );
})
console.log('--------------------------------------------------');
//print total numbers of employee
total=employee.map(a=>a[1]).reduce((n1,n2) => n1+n2)
console.log(total);
console.log('--------------------------------------------------');
//print developer employee details
console.log("employee as developers");
employeeDetails=employee.filter((n1=>n1[2]=='developer'))
console.log(employeeDetails)
console.log('--------------------------------------------------');



// print details of employee Laisha
console.log("Details of Laisha");
laisha=employee.filter((name=>name[1]=='Laisha'))
console.log(laisha );





// print the employee name whose salry is greter than 30000
salary = employee.filter((sal=>sal[4]>30000))
console.log(salary);



//sort employee based on their salary in descending order
console.log('descening');
descending=employee.sort((n1,n2)=>n2[4]-n1[4])
console.log(descending);

//sort employee based on their experience in ascending order

console.log('ascending');
ascending = employee.sort((n1,n2)=>n1[4]-n2[4])
console.log(ascending);


// print the employ name whose have the higest salary
console.log('print the employ name whose have the higest salary');
highst = employee.map((item)=>item[4]).reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highst);
// total salary expense of the salary
console.log('total salary expense of the salary' );
expense = employee.map((item)=>item[4]).reduce((n1,n2)=>n1+n2)
console.log(expense);


