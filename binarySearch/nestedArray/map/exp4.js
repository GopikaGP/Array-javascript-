// reduce method:
a=[10,11,2,7,3,6,1]

// w a p to find the highest  of given array 

highest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(`the highest item in the array: ${highest}`);
// w a p to find the lowest  of the given  array

lowest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(`the lowest item in the array: ${lowest}`);
// find the sum of the given array
sum=a.reduce((n1,n2)=>n1+n2)
console.log(`the sum of the array: ${sum}`);