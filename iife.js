var arr= [1, 2, 3, 45, 5,6, 7, 8, 9, 10];
console.log(odd(arr));
function odd(array) {
    let odd = [];
    for (let i = 0; i <= array.length; i++) {
        if (i%2 !== 0) {
            odd.push(array[i]);
        
        }
    }
    
    return odd;
};
var num = [1, 2, 3];
function getSum(num) {
    var l = num.length;
    var total = 0;
    for (var i = 0; i<l; i++) {
        
        total += num[i];
        
    }
    return total; 
}
console.log(getSum(num));
const arras= [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function uniqueElements(array) {
    const unique = [];
    array.forEach((value) => {
        if (!unique.includes(value)) {
            unique.push(value)
        }
        
        
    })
    return unique;
}
console.log(uniqueElements(arras));
