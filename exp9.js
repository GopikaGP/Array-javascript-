a=[10,20,30,20,30,30,30,40,50,60,10]

b=[]
for(i=0;i<=a.length-1;i++){
for(j=i+1;j<=a.length-1;j++){
    if(a[i]==a[j]){
        isDuplicate = false
for(k=0;k<=b.length-1;k++){
    if(a[i]==b[k]){
        isDuplicate= true
        break
       
    }


    }
if(!isDuplicate){
    b.push(a[i])
   }

}
}
}
    b.length==0?console.log('no duplication'):console.log(b);