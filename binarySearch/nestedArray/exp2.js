// /w a p to find the even number from the given array  a=[[2,10],[50,25],[2,100],[7,66],[33,9]]

a=[[2,10],[50,25],[2,100],[7,66],[33,9]]


 b = a.flat()
for (let n of b){
  if(n%2==0){
    console.log(n);
  }
}
