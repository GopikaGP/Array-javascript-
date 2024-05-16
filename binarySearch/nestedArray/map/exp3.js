// w a p to create a new array with number<=13 increemt by 1 and number>13 decrement 1
// op=[11,12,13,14,13,14]
a=[10,11,12,13,14,15]

op=a.map(num=>num<=13? num+1:num-1)
console.log(op);