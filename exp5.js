// input array[4,5,6] 7 5 3
// output arr[11,10,9]
sum=0
output=[]
input = [4,5,6]
for(i of input){
    sum=sum+i
   
  
}
for(i of input){
    output.push(sum-i)
}
console.log(input);
console.log(output);