let array1 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20]
// v-Filter Positive Numbers from an array and their sum
let summ = 0;
for ( let i =0; i<= array1.length;i++){
    if (array1[i] >0){
        
        console.log(`Positive Numbers ${array1[i]}`)
        summ += array1[i];
        
          
    }
}
console.log(`Sum of positive numbers ${summ}`)
