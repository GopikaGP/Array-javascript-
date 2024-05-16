a=[10,11,12,20,30]
b=[11,20,25,30,33]
// 11 20 30

isPair=false
c=[]
for(i=0;i<=a.length;i++){
    for(j=0;j<=b.length;j++){
        if(a[i]==b[j]){
            isPair=true
            console.log(a[i]);
          
          
        
        }
    }
}  
!isPair&&console.log('no such pair');
