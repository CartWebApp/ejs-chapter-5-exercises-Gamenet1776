let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
 
let flattened = arrays.reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue);
    }
)
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]