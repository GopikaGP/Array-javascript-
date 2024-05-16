// find the lowest expense and find the highest expense and total expense

expense = [12000,24000,35000,10000,54000,40000]
sum=0;
min=expense[0];
max=expense.length-1
for(let i of expense){
    sum=sum + i
     if(i<min){
        min = i
     }
     else if(i>max){
        max = i
     }
     

}
console.log(`the largest value is ${max}`);
console.log(`the smallest value is ${min}`);
console.log(`the avrege is ${sum}`);

