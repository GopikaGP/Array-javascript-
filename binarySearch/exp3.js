searchItem=3 
a=[2,3,1,10,11,12]
isPresent=false
// ascending;
a.sort((n1,n2)=>n1-n2)
console.log(a);

left=0
right=a.length-1 /* 5 */

while(left<=right) /* 0<=5,  */
{
mid = Math.floor((left+right)/2)  /* 0 + 5 / 2 = 2.5 MATH(2), 3 + 5 =8/2=4 */
if(a[mid]==searchItem){ /* 11 == 3 */
isPresent=true
break;

}
else if(a[mid]>searchItem){ /* 1 > 3 , 11 > 3*/
right=mid-1  /* 4 - 1 = 3 */
}else{
left=mid+1 /* 2 + 1 = 3  */ 
}
}
console.log(isPresent?'present' : 'not Present');