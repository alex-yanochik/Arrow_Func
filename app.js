




const double = (arr) => arr.map((val) => val * 2)
console.log(double([2,3,4,5]))


const squareAndFindEvens = (numbers) => numbers.map((val) => val**2).filter((even) => even % 2 === 0) 
console.log(squareAndFindEvens([1,2,10,4]))