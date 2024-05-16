a=[100,20,30,20,30,40,50,60,10]
isDuplicate = false
for(i=0;i<=a.length;i++){
   for(j=i+1;j<=a.length;j++){
    if(a[i] == a[j]){
          isDuplicate=true
          console.log(a[i]);
    }
   }
}
!isDuplicate&&(console.log('not repeated'))


console.log('---------------------');

