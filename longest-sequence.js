// Given a number N and an array of N elements, 
// find the length of the longest repeating sequence of the elements.
// If no such sequence is found print -1
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 8
// 1 2 2 2 3 4 5 6
// OUTPUT
// 3

   let arr = [1,2,2,2,3,4,5,6] 

   let b=[]
   let validate=false;

   for(let i=0;i<arr.length; i++){
    
    if(arr[i]===arr[i+1]){
        b.push(arr[i])
        validate=true;
    }
   }
   let k =b.length;
   let min =1;

   if(min < k){
    console.log(k)
   }else{
    console.log(-1)
   }