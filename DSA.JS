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



function reverse(n){

    let nCopy = n
    let rev = 0
    n = Math.abs(n)

    while(n>0){
        let last = (n%10)
        rev = (10* rev) + last
        n= Math.floor(n/10)

    }

   return (nCopy < 0 )? -rev : rev
}

 let num = -121
 let result = reverse(num)
 console.log(result)