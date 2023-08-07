"use strict";
let array1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
// i. find the odd numbers in an array
for (let p = 0; p <= array1.length; p += 1) {
    let element = array1[p];
    let modulus = element % 2;
    if (modulus != 0) {
        console.log(`This number ${element} is  odd`);
    }
}
