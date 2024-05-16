a=[10,11,12,13,14,15]
// w a p to find the sqaure of each element in this given array

sqt=a.map(num=>num**2)
console.log(sqt);

console.log('-----------------------');
for(num of a){
    console.log(num**2);
}
console.log('-----------------------');
a.forEach(num => {
    console.log(num**2);
});