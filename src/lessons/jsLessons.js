export const jsLessons = [
  {
    id: 'intro',
    title: 'JavaScript Introduction',
    content: `
      <h1>What is JavaScript?</h1>
      <p>JavaScript is a programming language that allows you to implement complex features on web pages. It is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>

      <h2>Variables and Data Types</h2>
      <p>JavaScript variables can hold different data types: numbers, strings, booleans, arrays, objects, etc. Use <code>let</code> or <code>const</code> to declare variables.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>
    <h1 id="demo">JavaScript Example</h1>
    <button onclick="changeText()">Click me!</button>
    <p id="output"></p>

    <script>
        function changeText() {
            document.getElementById("demo").innerHTML = "Hello JavaScript!";
            document.getElementById("output").innerHTML = "Button was clicked at " + new Date().toLocaleTimeString();
        }

        // Variables and data types
        let name = "John";
        let age = 25;
        let isStudent = true;

        // Arrays
        let fruits = ["Apple", "Banana", "Orange"];

        // Objects
        let person = {
            firstName: "John",
            lastName: "Doe",
            age: 25
        };

        console.log("Welcome to JavaScript!");
    </script>
</body>
</html>`,
    difficulty: 'Intermediate'
  }
];
