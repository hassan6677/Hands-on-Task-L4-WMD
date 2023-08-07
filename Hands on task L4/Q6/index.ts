let array1 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20]
let summ = 0;
// vi-Filter Negative Numbers from an array and their Sum
for ( let i =0; i<= array1.length;i++){
    if (array1[i] <0){
        
        console.log(`Negative Number: ${array1[i]}`)
        summ += array1[i];
        
          
    }
}
console.log(`Sum of Negative Numbers =`, summ )
