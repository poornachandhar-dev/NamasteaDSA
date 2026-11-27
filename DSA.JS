// function findsmallestinarray(arr){

//     let smallest = Infinity

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }


//     }
//     return smallest
// }


// let arr = [1,4,5,3,8,6,7,1];
// let result = findsmallestinarray(arr)
// console.log(result)


// function findlargestinarray(arr){

//     let largest = -Infinity

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }


//     }
//     return largest
// }


// let arr = [1,4,5,3,8,6,7,1,56];
// let result = findlargestinarray(arr)
// console.log(result)







// function secondlargest(arr){

//     if(arr.length < 2){
//         return null
//     }


//     let firstlargest = -Infinity
//     let secondlargest = Infinity

//     for(let i=0; i< arr.length;i++){
//         if(arr[i] > firstlargest){

//         secondlargest = firstlargest

//         firstlargest = arr[i]
//         }
//         else if (arr[i] > secondlargest && arr[i] != firstlargest ){
//             secondlargest = arr[i]
//         }
//     }

//     return secondlargest
// }




//  let arr = [10,20,8,9,3,5,20,59,34,5,59]

//  let result = secondlargest(arr)

//  console.log(result)


 //Write a function that returns the count of digits in a number


// function countnumber(n){

//     if(n == 0) return 1;

//     let count = 0;

//     while(n > 0){

//         n = Math.floor(n/10)

//         count = count+1
//     }
//     return count

// }


// let n = 34563

// let result = countnumber(n)
// console.log(result)







//Palindram Nuber 

// function palindram(n){


//     let xcopy = n 
//     let rev =0 
//     while(n>0){
//         let rem = (n%10)
//         rev = (10* rev) + rem
//         n= Math.floor(n/10)
//     }

//     if(rev == xcopy){
//         return true
//     }

//     else{
//         return false
//     }

// }

// let num = 121
// let result = palindram(num)
// console.log(result)



// function reverse(n){

//     let nCopy = n
//     let rev = 0
//     n = Math.abs(n)

//     while(n>0){
//         let last = (n%10)
//         rev = (10* rev) + last
//         n= Math.floor(n/10)

//     }

//    return (nCopy < 0 )? -rev : rev
// }

//  let num = -121
//  let result = reverse(num)
//  console.log(result)


//Remove Duplication from sorted array  non-decreasing order [0,0,1,1,1,2,2,3,3,4]


// function duplicate(nums){

//     let x = 0;
//     for(let i=0;i<nums.length;i++){

//         if(nums[i] > nums[x]){
//             x=x+1
        
//             nums[x] = nums[i]
//         }

//     }

//     return x+1
// }


// let nums = [0,0,1,1,1,2,2,3,3,4]
// let result = duplicate(nums)
// console.log(result)







// function removeelements(nums,val){

//     let x = 0
//     for(let i = 0; i< nums.length; i++){

//         if(nums[i] != val){
//             nums[x] = nums[i]

//             x= x+1

//         }
//     }
//     return x

// }



// let nums = [3,1,6, 2, 3, 3, 4]

// let result = removeelements(nums,3)
// console.log(result)





function reversestring(S){

    let length = S.length
    let halflength = Math.floor(length/2)
    for(let i=0; i<halflength;i++){
        let temp = S[i]
        S[i] = S[length-1-i]
        S[length-1-i] = temp
    }
    return S
}





let S = ["h","e","l","l","o"]

let result = reversestring(S)
console.log(result)