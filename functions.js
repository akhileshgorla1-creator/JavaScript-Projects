// =========================
// Functions (1-6)
// =========================

// 1
function greetUser(name) {
    console.log("Welcome to Stackly, " + name);
}
greetUser("Akhilesh");

// 2
function calculateSalary(basic, bonus) {
    return basic + bonus;
}
let totalSalary = calculateSalary(20000, 5000);
console.log("Total Salary:", totalSalary);

// 3
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// 4
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findMax(10, 25, 15));

// 5
function calculateGST(price) {
    return price + price * 0.18;
}
console.log(calculateGST(1000));

// 6
function login(username, password) {
    return username === "admin" && password === "1234"
        ? "Login Successful"
        : "Invalid Username or Password";
}
console.log(login("admin", "1234"));
console.log(login("user", "1111"));


// =========================
// Default Parameters (7-9)
// =========================

// 7
function createEmployee(name, role = "Trainee") {
    console.log("Employee:", name, "-", role);
}
createEmployee("Akhilesh", "Developer");
createEmployee("Ravi");

// 8
function calculateDiscount(price, discount = 10) {
    return price - price * discount / 100;
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));

// 9
function orderFood(item, quantity = 1) {
    console.log("Item:", item, "Quantity:", quantity);
}
orderFood("Pizza", 3);
orderFood("Burger");


// =========================
// Scope (10-12)
// =========================

// 10 Global Scope
let company = "Stackly";
function showCompany() {
    console.log("Company Name:", company);
}
showCompany();

// 11 Block Scope
if (true) {
    var varA = 10;
    let letB = 20;
    const constC = 30;

    console.log(varA, letB, constC);
}
console.log(varA);

// 12 Local Scope
function showMessage() {
    let message = "Hello Stackly";
    console.log(message);
}
showMessage();


// =========================
// Hoisting (13-15)
// =========================

// 13
console.log(hoistVar);
var hoistVar = 10;

// 14
let hoistLet = 20;
// console.log(hoistLet); // Error if before declaration

// 15
greetHoist();
function greetHoist() {
    console.log("Hello from Stackly");
}


// =========================
// Function Types (16-18)
// =========================

// 16 Named Function
function showExample() {
    console.log("Named Function Example");
}
showExample();

// 17 Anonymous Function
let multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 4));

// 18 Arrow Function
const square = num => num * num;
console.log(square(5));


// =========================
// Callback Functions (19-22)
// =========================

// 19
function processData(callback) {
    console.log("Processing data...");
    callback();
}
function showResult() {
    console.log("Callback executed");
}
processData(showResult);

// 20
function calculate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));

// 21
function calculateTask(a, b, callback) {
    console.log("Result:", a + b);
    callback();
}
function taskCompleted() {
    console.log("Task Completed");
}
calculateTask(10, 5, taskCompleted);

// 22
function getUserData(callback) {
    let user = { name: "Akhilesh", age: 22, role: "Trainee" };
    callback(user);
}
function printUser(data) {
    console.log(data.name, data.age, data.role);
}
getUserData(printUser);


// =========================
// Currying (23-24)
// =========================

// 23
function addCurry(a) {
    return b => c => a + b + c;
}
console.log(addCurry(2)(3)(4));

// 24
function multiplyCurry(a) {
    return b => c => a * b * c;
}
console.log(multiplyCurry(2)(3)(4));


// =========================
// IIFE (25-26)
// =========================

// 25
(function(){
    console.log("Website Loaded");
})();

// 26
(function(){
    let price = 1000;
    let discount = 10;
    let finalPrice = price - price * discount / 100;
    console.log("Discount Price:", finalPrice);
})();


// =========================
// Generators (27-28)
// =========================

// 27
function* generateCoupons() {
    for(let i=0;i<3;i++){
        yield "COUPON" + Math.floor(Math.random()*1000);
    }
}
let coupons = generateCoupons();
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

// 28
function* motivationalMessages() {
    yield "Keep learning and keep coding!";
    yield "Fixing bugs makes you stronger!";
    yield "Consistency builds great developers!";
}
let msgs = motivationalMessages();
console.log(msgs.next().value);
console.log(msgs.next().value);
console.log(msgs.next().value);


// =========================
// Spread Operator (29-31)
// =========================

// 29
let arrA = [1,2,3];
let arrB = [4,5,6];
let mergedArray = [...arrA,...arrB];
console.log(mergedArray);

// 30
let arrClone1 = [10,20,30];
let arrClone2 = [...arrClone1];
console.log(arrClone2);

// 31
let obj1 = {name:"John"};
let obj2 = {role:"Developer"};
let mergedObj = {...obj1,...obj2};
console.log(mergedObj);


// =========================
// Rest Operator (32-34)
// =========================

// 32
function sumAll(...numbers){
    return numbers.reduce((a,b)=>a+b,0);
}
console.log(sumAll(10,20,30,40));

// 33
function printArgs(first,...rest){
    console.log("First:",first);
    console.log("Rest:",rest);
}
printArgs(10,20,30,40);

// 34
function totalBill(...prices){
    return prices.reduce((a,b)=>a+b,0);
}
console.log(totalBill(100,200,150,50));


// =========================
// Destructuring (35-38)
// =========================

// 35
let arrDes = [10,20,30,40];
let [d1,d2,d3,d4] = arrDes;
console.log(d1,d2,d3,d4);

// 36
let employee = {name:"Naveen",role:"Developer",salary:40000};
let {name,role,salary} = employee;
console.log(name,role,salary);

// 37
let arrFL = [10,20,30,40];
let [first,, ,last] = arrFL;
console.log(first,last);

// 38
let nestedArr = [1,2,[3,4]];
let [n1,n2,[n3,n4]] = nestedArr;
console.log(n1,n2,n3,n4);


// =========================
// Array Manipulation (39-40)
// =========================

// 39
let arrOps = [1,2,3,4,5];
arrOps.push(6);
arrOps.pop();
arrOps.shift();
arrOps.unshift(0);
console.log(arrOps);

// 40
let spliceArr = [1,2,3,40,50,6];
spliceArr.splice(3,2,4,5);
console.log(spliceArr);