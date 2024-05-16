// filter()
a=[10,12,15,13,25,2,3,5]
// wap to print all even number from the given array
// w ap to print all numbers >13 from the given array

even=a.filter(n1=>n1%2==0)
console.log(`the even numbers from given array: ${even}`);

// 
greater=a.filter(n1=>n1>13)
console.log(`the number above 13 is ${greater}`);

// w ap to check wheather numbers grether than 13 exists in an given array
c=a.some(n1=>n1>13)
console.log(c);

