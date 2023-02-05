// arr = [1,2,3,4,5,6,7,9]
// k = 7
// // brute force / navie method
// // this method will traverse with whole array if 1M array it will take longer time
// function linearSearch(val,arr){
//     for (let i=0; i<arr.length; i++){
//         console.log(i)
//         if(arr[i]===k){
//             return i
//         }
       
//     }
//     return -1
// };

// Binary search (for binary search the array should by sorted)

arr = [1,2,3,4,5,6,7,9]

const binarySearch=(val,arr)=>{
   
    let  lower = arr[0]
    let  upper = (arr.length -1)
while(lower <= upper){
    console.log("try")
    let middle = lower + Math.floor((upper-lower)/2)

    if(val === arr[middle]){
        return middle;
    }
    if(val < arr[middle]){
        upper = middle -1;
    }else{
        lower = middle + 1;
    }
}
return -1
};
console.log(binarySearch(7, arr))
