/* #uyga_vazifa 1. Raqamlar massivi berilgan. Uni shu raqamlarning kvadratlaridan iborat massiv qiling. (map)*/

// let array = [3,4,5,6,7];
// let check = array.map(function(el){
//     return el**2;
// });

// console.log(check);
//==========================================================================================================================================



/* 2. Raqamlar massivi berilgan. Unda faqat salbiy raqamlarni qoldiring. (filter)*/

// let array = [-1,8,9,3,-4,-2,5,6,1];

// let passiveNumbers = array.filter(function(el){
//     return el < 0;
// });

// console.log(passiveNumbers);
//==========================================================================================================================================



/* 3. Massiv berilgan, unda oddiy elementlar va ichki massivlar bo‘lishi mumkin, masalan [1, 2, [3, 4], 5, [6, 7]]. Unda faqat ichki massivlarni qoldiring. (filter)*/

// let array = [1, 2, [3, 4], 5, [6, 7]];

// let exclude = array.filter(function(el){
//    return  Array.isArray(el);
// });

// console.log(exclude);
//==========================================================================================================================================



/*4. Raqamlar massivi berilgan. Birinchi nolga qadar bo’lgan elementlarning yig'indisini toping. Misol: [1, 2, 3, 0, 4, 5, 6] - birinchi 3 ta elementni yig'ing, chunki 0 raqami keyingi element. (reduce) */

// let numbers = [1, 2, 3, 0, 4, 5, 6];
// let sum = numbers.reduce((accumulator, current) => {
//     if (current === 0) {
//         return accumulator;
//     }
//     return accumulator+current;
// }, 0);

// console.log(sum); 
//=============================================================================================================================

/*5. Raqamlar massivi berilgan. Oxiridan birinchi nolga qadar bo’lgan elementlarning yig'indisini toping. Misol: [1, 2, 3, 0, 4, 5, 6] - oxirgi 3 ta elementni yig'ing, chunki 0 raqami keyingi element. (reduce) */

// let numbers = [1, 2, 3, 0, 4, 5, 6];
// let sum = numbers.reduceRight((accumulator, current) => {
//     if (current === 0) {
//         return accumulator;
//     }
//     return accumulator + current;
// }, 0);

// console.log(sum);
//==========================================================================================================================


/* 6. Raqamlar massivi berilgan. Unda ketma-ket ikkita bir xil raqam mavjudligini tekshiring. Ha bo'lsa, "ha" ni, bo'lmasa, "yo'q" ni chop eting.*/

// let array = [1,2,3,4,5,5,6,7,8,9];

// function checkSameNumbers(arr){
//     for(i=0; i < arr.length-1; i++){
//         if(arr[i]===arr[i+1]){
//             return " Ha!"
//         }
//     }
//   return "Yo'q"
// }

// console.log(checkSameNumbers(arr));

/*7.Raqamlar massivi berilgan. Unda ikkita bir xil raqam mavjudligini tekshiring. Ha bo'lsa, ......*/

// let arr = [1, 2, 3, 6, 0, 3, 4, 5];

// function arrcheck(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let i2 = i + 1; i2 < arr.length; i2++) {
//             if (arr[i] === arr[i2]) {
//                 return "Ha";
//             }
//         }
//     }
//     return "Yo'q";
// }


// console.log(arrcheck(arr));
//=================================================================================================================================

// 8 

// function arrayFill(a,b){
//     let result = []
//     for (let i = 0; i < b; i++) {
//        result.push(a)
//     //    console.log(result);
//     }
//     return result
// }
// console.log((arrayFill("x",5)));
//=================================================================================================================================

// 9 

// function arrayFill(a,b){
//     let result = [];
//     let res = []
//     for (let i = 0; i < b; i++) {
//         res += a
//         result.push(res)
//     }
//     return result
// }
// console.log((arrayFill("x",5)));

//=================================================================================================================================

// 10 

// function arrayFill(b){
//     let result = [];
//     let res = []
//     for (let i = 1; i < b; i++) {
//         res += i 
//         console.log(i);
//         result.push(res)
//     }
//     return result
// }
// console.log((arrayFill(5)));


