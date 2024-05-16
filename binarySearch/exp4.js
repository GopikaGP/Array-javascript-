p=[10,11,12,20,30]
q=[11,20,25,30,35]
// w a p to find the coomon items in two array?
// index for p
a=0;
x = p.length-1

// index for q
b=0
y=q.length-1


isCommon = false

while (a<=x && b<=y){
    
            if(p[a]==q[b]){
               console.log(p[a]);
               isCommon=true
                a++
                b++
            }else if(p[a]<q[b]){
                    a++
            }else{
                b++
            }
} !isCommon&&console.log('not present');