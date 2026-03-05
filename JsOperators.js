// Task-1 Arithmetic Operations

// ----------------------
// Section 1
// ----------------------

let a = 25;
let b = 4;

console.log("Addition:", a + b);        // 29
console.log("Subtraction:", a - b);     // 21
console.log("Multiplication:", a * b);  // 100
console.log("Division:", a / b);        // 6.25

console.log(100 % 30); // 10
console.log(7 ** 2);   // 49
console.log(2 ** 5);   // 32

let num = 50;
console.log(num / 5);       // 10
console.log(45 % 6);        // 3
console.log(0.5 * 8);       // 4
console.log(75 - 200);      // -125
console.log(10 + 20 + 30);  // 60
console.log(9 % 2);         // 1


// ----------------------
// Section 2 (Increment / Decrement)
// ----------------------

let a1 = 5
console.log(a1++) // 5
console.log(a1)   // 6

let a2 = 5
console.log(++a2) // 6
console.log(a2)   // 6

let a3 = 10
let b3 = a3++
console.log(a3, b3) // 11 10

let a4 = 10
let b4 = ++a4
console.log(a4, b4) // 11 11

let a5 = 1
let b5 = a5++ + a5++
console.log(a5, b5) // 3 3

let a6 = 1
let b6 = ++a6 + ++a6
console.log(a6, b6) // 3 5

let a7 = 3
a7 = a7++
console.log(a7) // 3

let a8 = 3
a8 = ++a8
console.log(a8) // 4

let x1 = 5
let y1 = --x1
console.log(x1, y1) // 4 4

let x2 = 5
let y2 = x2--
console.log(x2, y2) // 4 5

let a9 = 2
let b9 = a9++ + ++a9 + a9++
console.log(a9, b9) // 5 10

let a10 = 4
let b10 = --a10 + a10-- + --a10
console.log(a10, b10) // 1 7

let a11 = 1
let b11 = ++a11 + a11++ + ++a11
console.log(a11, b11) // 4 8

let a12 = 5
let b12 = a12++ + a12++ + a12++
console.log(a12, b12) // 8 18

let a13 = 10
a13 += a13++
console.log(a13) // 21


// ----------------------
// Section 3 (Assignment Operators)
// ----------------------

let a14 = 10
a14 += 5
console.log(a14) // 15

let a15 = 20
a15 -= 8
console.log(a15) // 12

let a16 = 40
a16 /= 5
console.log(a16) // 8

let a17 = 25
a17 %= 4
console.log(a17) // 1

let a18 = 5
a18 += 3
a18 *= 2
console.log(a18) // 16

let a19 = 10
a19 -= 2
a19 /= 4
console.log(a19) // 2

let a20 = 8
a20 %= 3
console.log(a20) // 2

let a21 = 6
a21 += a21
console.log(a21) // 12

let a22 = 2
a22 *= (a22 += 3)
console.log(a22) // 10


// ----------------------
// Section 4 (Comparison Operators)
// ----------------------

console.log(5 == "5")        // true
console.log(5 === "5")       // false
console.log(0 == false)      // true
console.log(0 === false)     // false
console.log(null == undefined)   // true
console.log(null === undefined)  // false
console.log("10" > 5)        // true
console.log("2" > "10")      // true
console.log(true == 1)       // true
console.log(true === 1)      // false


// ----------------------
// Section 5 (Logical Operators)
// ----------------------

console.log(true && false)   // false
console.log(true || false)   // true
console.log(false || false)  // false
console.log(!true)           // false
console.log(!(5 > 2))        // false
console.log(5 > 3 && 10 > 5) // true
console.log(5 > 3 && 10 < 5) // false
console.log(5 < 3 || 10 < 5) // false
console.log(5 < 3 || 10 > 5) // true


// ----------------------
// Section 6 (Ternary Operator)
// ----------------------

let age = 20
console.log(age >= 18 ? "Adult" : "Minor") // Adult

let marks1 = 45
console.log(marks1 >= 50 ? "Pass" : "Fail") // Fail

let number = 7
console.log(number % 2 == 0 ? "Even" : "Odd") // Odd

let marks2 = 82
let grade = marks2 >= 90 ? "A" :
            marks2 >= 75 ? "B" :
            marks2 >= 50 ? "C" :
            "Fail"
console.log(grade) // B

let num2 = -10
console.log(num2 >= 0 ? "Positive" : "Negative") // Negative


// ----------------------
// Section 7 (Strings)
// ----------------------

let str1 = "Hello"
let str2 = "World"
console.log(str1 + str2) // HelloWorld

let firstName = "Akhilesh"
let lastName = "Kumar"
console.log(firstName + " " + lastName) // Akhilesh Kumar

console.log(`${firstName} ${lastName}`) // Akhilesh Kumar

console.log("10" + 5) // 105
console.log(5 + "10") // 510


// ----------------------
// Section 8 (Type Coercion)
// ----------------------

console.log("5" + 2) // 52
console.log("5" - 2) // 3
console.log("5" * 2) // 10
console.log(true + 1) // 2


// ----------------------
// Section 9 (Type Conversion)
// ----------------------

console.log(Number("123")) // 123
console.log(Number("abc")) // NaN
console.log(Number(true))  // 1
console.log(Boolean(""))   // false
console.log(Boolean("Hello")) // true


// ----------------------
// Rapid Fire Questions
// ----------------------

// Difference between == and ===
console.log(5 == "5")   // true
console.log(5 === "5")  // false

// Difference between a++ and ++a
let rf1 = 5
console.log(rf1++) // 5
console.log(rf1)   // 6

let rf2 = 5
console.log(++rf2) // 6
console.log(rf2)   // 6

// Falsy values
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

// "5" - 2 vs "5" + 2
console.log("5" - 2) // 3
console.log("5" + 2) // "52"

// null vs undefined
console.log(null == undefined)   // true
console.log(null === undefined)  // false