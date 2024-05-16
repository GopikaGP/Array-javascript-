// a=[2,3,4,5] 
// find the sum sum=7
a=[2,3,4,5]   /*  */
fsum=7
low=0
isPresent = false
up=a.length-1 
while(low<up){ 
    csum=a[low]+a[up] 
    if( csum==fsum){  
       
        console.log(`(${a[low]},${a[up]})`);
        low++ 
    }else if(csum<fsum){  
        low++
    }else{ 
        up--  
    }
}