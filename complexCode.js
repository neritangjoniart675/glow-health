/*
Filename: complexCode.js
Content: Complex JavaScript Code with various functionalities and complex logic
*/

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to calculate the factorial of a number
function factorial(number) {
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate the Fibonacci sequence up to a given number of terms
function fibonacci(numberOfTerms) {
    let sequence = [];
    if (numberOfTerms >= 1) {
        sequence.push(0);
    }
    if (numberOfTerms >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < numberOfTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Class representing a complex number
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complexNumber) {
        return new ComplexNumber(this.real + complexNumber.real, this.imaginary + complexNumber.imaginary);
    }

    multiply(complexNumber) {
        const realPart = (this.real * complexNumber.real) - (this.imaginary * complexNumber.imaginary);
        const imaginaryPart = (this.real * complexNumber.imaginary) + (this.imaginary * complexNumber.real);
        return new ComplexNumber(realPart, imaginaryPart);
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// Usage of the implemented functionalities
console.log(isPrime(17)); // true
console.log(factorial(5)); // 120
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
const complexNumber1 = new ComplexNumber(2, 3);
const complexNumber2 = new ComplexNumber(-1, 2);
const sum = complexNumber1.add(complexNumber2);
const product = complexNumber1.multiply(complexNumber2);
console.log(sum.toString()); // 1 + 5i
console.log(product.toString()); // -8 + 1i

// ... more complex code logic can be added below ...