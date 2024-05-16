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
for(emp of employee){
    console.log(emp[1]);
} 
console.log('--------------------------------------------------');
//print total numbers of employee
console.log(`the total number of employee: ${employee.length}`);

console.log('--------------------------------------------------');

//print developer employee details
console.log("employee as developers");
for(emp of employee){
    if(emp[2] ===  "developer"){
        console.log(emp);
    }
}

console.log('--------------------------------------------------');
// print details of employee Laisha
console.log("Details of Laisha");
for(emp of employee){
    if(emp[1] ===  "Laisha"){
        console.log(emp);
    }
}


console.log('--------------------------------------------------');

// print the employee name whose salry is greter than 30000
for(emp of employee){
    if(emp[4]>30000)
    console.log(emp[1]);
}

console.log('--------------------------------------------------');



//sort employee based on their salary in descending order
sal=employee.sort((n1,n2)=>n2[4]-n1[4])
for(emp of sal){
    console.log(emp[1]);
}


console.log('--------------------------------------------------');
//sort employee based on their experience in ascending order
exp=employee.sort((exp1,exp2)=>exp1[5]-exp2[5])
console.log(exp);


console.log('--------------------------------------------------');
// print the employ name whose have the higest salary
sal=employee.sort((n1,n2)=>n2[4]-n1[4])
console.log("The highest salary:",sal[0][1]);



console.log('--------------------------------------------------');

