export const jsLessons = [
  {
    id: 'js-intro',
    title: 'JavaScript Introduction',
    content: `
      <h1>What is JavaScript?</h1>
      <p>JavaScript is a programming language that adds interactivity to websites. It runs in the browser and allows you to create dynamic content.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Client-side scripting language</li>
        <li>Object-oriented programming</li>
        <li>Event-driven programming</li>
        <li>Dynamic typing</li>
        <li>Cross-platform compatibility</li>
      </ul>

      <h2>Getting Started</h2>
      <p>JavaScript code can be embedded directly in HTML using <code><script></code> tags or linked from external files.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Example</title>
</head>
<body>
    <h1 id="demo">Hello World!</h1>

    <script>
        // JavaScript code goes here
        console.log("Hello, JavaScript!");
        document.getElementById("demo").innerHTML = "Hello, JavaScript!";
    </script>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-variables',
    title: 'JavaScript Variables',
    content: `
      <h1>JavaScript Variables</h1>
      <p>Variables are containers for storing data values. In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>

      <h2>Variable Declaration</h2>
      <ul>
        <li><code>var</code> - Function-scoped, can be redeclared</li>
        <li><code>let</code> - Block-scoped, cannot be redeclared in same scope</li>
        <code>const</code> - Block-scoped, cannot be reassigned</li>
      </ul>

      <h2>Data Types</h2>
      <p>JavaScript has dynamic typing. Common data types include strings, numbers, booleans, arrays, and objects.</p>
    `,
    example: `// Variable declarations
var name = "John";        // String
let age = 25;             // Number
const PI = 3.14159;       // Constant

// Different data types
let isStudent = true;     // Boolean
let hobbies = ["reading", "coding", "gaming"];  // Array
let person = {            // Object
    firstName: "John",
    lastName: "Doe",
    age: 25
};

console.log(name, age, PI);
console.log(typeof name);  // "string"`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-operators',
    title: 'JavaScript Operators',
    content: `
      <h1>JavaScript Operators</h1>
      <p>Operators are used to perform operations on variables and values. JavaScript supports various types of operators.</p>

      <h2>Types of Operators</h2>
      <ul>
        <li><strong>Arithmetic:</strong> +, -, *, /, %, ++, --</li>
        <li><strong>Assignment:</strong> =, +=, -=, *=, /=, %=</li>
        <li><strong>Comparison:</strong> ==, ===, !=, !==, >, <, >=, <=</li>
        <li><strong>Logical:</strong> &&, ||, !</li>
        <li><strong>Ternary:</strong> condition ? value1 : value2</li>
      </ul>
    `,
    example: `// Arithmetic operators
let x = 10;
let y = 3;
console.log(x + y);  // 13
console.log(x - y);  // 7
console.log(x * y);  // 30
console.log(x / y);  // 3.333...
console.log(x % y);  // 1

// Comparison operators
console.log(x > y);   // true
console.log(x === y); // false
console.log(x !== y); // true

// Logical operators
let a = true, b = false;
console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false

// Ternary operator
let result = x > 5 ? "Greater than 5" : "Less than or equal to 5";
console.log(result);  // "Greater than 5"`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-functions',
    title: 'JavaScript Functions',
    content: `
      <h1>JavaScript Functions</h1>
      <p>Functions are blocks of code designed to perform a particular task. They are executed when they are called (invoked).</p>

      <h2>Function Declaration</h2>
      <p>Functions can be declared using the <code>function</code> keyword, function expressions, or arrow functions.</p>

      <h2>Parameters and Arguments</h2>
      <p>Parameters are variables listed in the function definition. Arguments are the values passed to the function when it is called.</p>
    `,
    example: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function calls
console.log(greet("John"));     // "Hello, John!"
console.log(add(5, 3));         // 8
console.log(multiply(4, 2));    // 8

// Function with default parameters
function welcome(name = "Guest") {
    return "Welcome, " + name + "!";
}

console.log(welcome());          // "Welcome, Guest!"
console.log(welcome("Alice"));   // "Welcome, Alice!"`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-arrays',
    title: 'JavaScript Arrays',
    content: `
      <h1>JavaScript Arrays</h1>
      <p>Arrays are used to store multiple values in a single variable. They are ordered collections of items.</p>

      <h2>Array Methods</h2>
      <ul>
        <li><code>push()</code> - Add item to end</li>
        <li><code>pop()</code> - Remove item from end</li>
        <li><code>shift()</code> - Remove item from beginning</li>
        <li><code>unshift()</code> - Add item to beginning</li>
        <li><code>slice()</code> - Extract portion of array</li>
        <li><code>splice()</code> - Add/remove items</li>
        <li><code>forEach()</code> - Execute function for each element</li>
        <li><code>map()</code> - Create new array with results of calling function</li>
        <li><code>filter()</code> - Create new array with elements that pass test</li>
      </ul>
    `,
    example: `// Creating arrays
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, {name: "John"}];

// Accessing elements
console.log(fruits[0]);    // "Apple"
console.log(fruits[2]);    // "Orange"

// Array methods
fruits.push("Grape");      // Add to end
console.log(fruits);       // ["Apple", "Banana", "Orange", "Grape"]

fruits.pop();              // Remove from end
console.log(fruits);       // ["Apple", "Banana", "Orange"]

// Array iteration
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Array mapping
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);  // ["APPLE", "BANANA", "ORANGE"]`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-objects',
    title: 'JavaScript Objects',
    content: `
      <h1>JavaScript Objects</h1>
      <p>Objects are collections of key-value pairs. They are used to store complex data and represent real-world entities.</p>

      <h2>Object Properties</h2>
      <p>Objects can contain properties (data) and methods (functions). Properties can be accessed using dot notation or bracket notation.</p>

      <h2>Object Methods</h2>
      <p>Common object methods include <code>Object.keys()</code>, <code>Object.values()</code>, and <code>Object.entries()</code>.</p>
    `,
    example: `// Object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    // Method
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing properties
console.log(person.firstName);        // "John"
console.log(person["lastName"]);      // "Doe"
console.log(person.fullName());       // "John Doe"

// Adding properties
person.email = "john@example.com";

// Modifying properties
person.age = 31;

// Object methods
console.log(Object.keys(person));     // ["firstName", "lastName", ...]
console.log(Object.values(person));   // ["John", "Doe", ...]`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-dom',
    title: 'JavaScript DOM Manipulation',
    content: `
      <h1>DOM Manipulation</h1>
      <p>The Document Object Model (DOM) is a programming interface for HTML documents. JavaScript can be used to manipulate the DOM.</p>

      <h2>Selecting Elements</h2>
      <ul>
        <li><code>getElementById()</code> - Select by ID</li>
        <li><code>getElementsByClassName()</code> - Select by class</li>
        <li><code>getElementsByTagName()</code> - Select by tag name</li>
        <li><code>querySelector()</code> - Select first matching element</li>
        <li><code>querySelectorAll()</code> - Select all matching elements</li>
      </ul>

      <h2>Modifying Elements</h2>
      <p>You can change content, attributes, and styles of DOM elements.</p>
    `,
    example: `// Selecting elements
let heading = document.getElementById("main-heading");
let paragraphs = document.getElementsByTagName("p");
let buttons = document.querySelectorAll(".btn");

// Changing content
heading.innerHTML = "New Heading";
heading.textContent = "New Heading Text";

// Modifying styles
heading.style.color = "blue";
heading.style.fontSize = "24px";

// Adding event listeners
let button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Creating new elements
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
newDiv.className = "alert alert-success";

document.body.appendChild(newDiv);

// Removing elements
let elementToRemove = document.querySelector("#remove-me");
if (elementToRemove) {
    elementToRemove.remove();
}`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-events',
    title: 'JavaScript Events',
    content: `
      <h1>JavaScript Events</h1>
      <p>Events are actions that happen in the browser, such as clicking a button, hovering over an element, or submitting a form.</p>

      <h2>Event Types</h2>
      <ul>
        <li><code>click</code> - Mouse click</li>
        <li><code>mouseover</code> - Mouse over element</li>
        <li><code>mouseout</code> - Mouse out of element</li>
        <li><code>keydown</code> - Key pressed down</li>
        <li><code>keyup</code> - Key released</li>
        <li><code>submit</code> - Form submission</li>
        <li><code>load</code> - Page finished loading</li>
      </ul>

      <h2>Event Listeners</h2>
      <p>Use <code>addEventListener()</code> to attach event handlers to elements.</p>
    `,
    example: `// Click event
let button = document.querySelector("#myButton");
button.addEventListener("click", function(event) {
    console.log("Button was clicked!");
    event.target.textContent = "Clicked!";
});

// Mouse events
let box = document.querySelector("#hover-box");
box.addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// Form events
let form = document.querySelector("#myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Form submitted!");
});

// Event object properties
button.addEventListener("click", function(event) {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
    console.log("Mouse position:", event.clientX, event.clientY);
});`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-async',
    title: 'JavaScript Asynchronous Programming',
    content: `
      <h1>Asynchronous JavaScript</h1>
      <p>Asynchronous programming allows JavaScript to perform tasks without blocking the main thread. This is crucial for network requests and time-consuming operations.</p>

      <h2>Callbacks</h2>
      <p>Callbacks are functions passed as arguments to other functions, executed after an asynchronous operation completes.</p>

      <h2>Promises</h2>
      <p>Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>

      <h2>Async/Await</h2>
      <p>Async/await is syntactic sugar built on top of promises, making asynchronous code look synchronous.</p>
    `,
    example: `// Callback example
function fetchData(callback) {
    setTimeout(function() {
        callback("Data received");
    }, 1000);
}

fetchData(function(result) {
    console.log(result);  // "Data received" after 1 second
});

// Promise example
function fetchDataPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Data received");
        }, 1000);
    });
}

fetchDataPromise()
    .then(function(result) {
        console.log(result);
        return "Processed: " + result;
    })
    .then(function(processed) {
        console.log(processed);
    })
    .catch(function(error) {
        console.error(error);
    });

// Async/await example
async function fetchDataAsync() {
    try {
        let result = await fetchDataPromise();
        console.log(result);
        let processed = "Processed: " + result;
        console.log(processed);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();`,
    difficulty: 'Beginner'
  },
  {
    id: 'js-fetch',
    title: 'JavaScript Fetch API',
    content: `
      <h1>Fetch API</h1>
      <p>The Fetch API provides an interface for fetching resources across the network. It's a modern replacement for XMLHttpRequest.</p>

      <h2>Basic Fetch</h2>
      <p>Fetch returns a Promise that resolves to the Response object representing the response to the request.</p>

      <h2>HTTP Methods</h2>
      <ul>
        <li><code>GET</code> - Retrieve data</li>
        <li><code>POST</code> - Send data</li>
        <li><code>PUT</code> - Update data</li>
        <li><code>DELETE</code> - Delete data</li>
      </ul>
    `,
    example: `// GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'My Post',
        body: 'This is my post content',
        userId: 1,
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Async/await with fetch
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPosts();`,
    difficulty: 'Beginner'
  }
];
