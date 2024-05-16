a=[[2,10],[50,25],[2,100],[7,66],[33,9]]
// .w ap to find the number is equal to 10 or less than 10
for(let num of a){
    // console.log(num);
    for(let n of num){  /*2  10 50 25 2 100 7 66  33 9  */
        if(n<=10){
            console.log(n);/* 2 10 7 9 2 */
        }
       
    }
}
