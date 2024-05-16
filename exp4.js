arr=[10,11,12,3,23,4,2]
// check wheather 2 is present in the array
presentIn = false
for (let i of arr){
   if(i==2){
   presentIn=true
   break
   }
}
console.log(presentIn?'present':'not present');
