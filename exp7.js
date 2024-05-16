a=[2,3,4,5] 
isPair=false

// sum=6
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]+a[j]==6){
            isPair=true
            console.log(a[i],a[j]);
        }
    }
}
!isPair&&console.log('no such pair');
