let arr = [];
function ernum(num) {
    // console.log(num)
    if (num < 10) {
        return arr.push(num);
    }
    arr.push(num % 10);
    // console.log(arr)
    ernum((num - num % 10) / 10)
    return arr;
}
console.log(ernum(123))