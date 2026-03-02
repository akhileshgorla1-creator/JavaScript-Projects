Task -1

let myName = "Akhilesh kumar";
let age = 24;
let city = "Vishakapatnam";
console.log("My name is " + myName + ".");
console.log("I am " + age + " years old.");
console.log("I am from " + city + ".");

 Task -2
let userName = prompt("Enter your name:"); 
alert("Welcome, " + userName + "!"); 
let choice = confirm("Do you want to learn JavaScript?");
if (choice) {
    alert("Great Choice!");
} else {
    alert("No Problem!");
}

Task -3 
let String = "Hello Akhilesh!";
let Number = 970;
let Boolean = false;
let Undefined;
let Null = null; 
console.log("Value:", String, "| Type:", typeof String);
console.log("Value:", Number, "| Type:", typeof Number);
console.log("Value:", Boolean, "| Type:", typeof Boolean);
console.log("Value:", Undefined, "| Type:", typeof Undefined);
console.log("Value:", Null, "| Type:", typeof Null); 

Task -4 
let colors = ["Black", "Pink", "Purple", "Red", "Brown", "Navyblue"]; 
console.log("First color:", colors[0]); 
console.log("Last color:", colors[colors.length - 1]); 
console.log("Total number of colors:", colors.length); 
for (let i = 0; i < colors.length; i++) {
    console.log("Color at index", i + ":", colors[i]);
}

Task -5 
let subjects = ["English", "Science", "Math", "telugu", "Computer"]; 
let index = prompt("Enter a number between 0 and 4:"); 
index = Number(index); 
if (index >= 0 && index < subjects.length) {
    console.log("Selected Subject:", subjects[index]);
} else {
    console.log("Invalid index! Please enter a number between 0 and 4.");
}

Task -6 
let student = {
    name: "Akhilesh Kumar",
    age: 24,
    course: "MBA",
    skills: ["HTML", "CSS", "JavaScript"]
};
console.log("Student Name:", student.name);
console.log("Second Skill:", student.skills[1]);
console.log("Course Name:", student.course);

Task -7 
let product = {
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    inStock: true
}; 
console.log("Product Name:", product.name);
console.log("Price:", product.price); 
if (product.inStock) {
    console.log("Available : Yes");
} else {
    console.log("Out of Stock");
}

Task -8 
let fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
}; 
console.log("Blueberry:", fruits.berries[1]);
console.log("Mango:", fruits.tropical[0]);
console.log("Lemon:", fruits.citrus[1]); 
console.log("Total Categories:", Object.keys(fruits).length);