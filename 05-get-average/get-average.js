// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function (numbers){
    const numbersValue = numbers.filter((i) => typeof i === "number");

    const sum = numbersValue.reduce((acc, curr) => acc + curr , 0);

    return sum /numbersValue.length
}