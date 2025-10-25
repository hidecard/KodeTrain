import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const JsIntro = () => {
  const jsExample = `<!DOCTYPE html>
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
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        JavaScript Introduction
      </h1>

      {/* What is JavaScript */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is JavaScript?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          JavaScript is a programming language that allows you to implement complex features on web pages.
          It is a scripting language that enables you to create dynamically updating content, control multimedia,
          animate images, and pretty much everything else.
        </p>
      </div>

      {/* Variables and Data Types */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Variables and Data Types
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          JavaScript variables can hold different data types: numbers, strings, booleans, arrays, objects, etc.
          Use <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">let</code> or
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">const</code> to declare variables.
        </p>
        <CodeBlock
          value={`let name = "John";        // String
let age = 25;            // Number
let isStudent = true;     // Boolean
let fruits = ["Apple", "Banana"];  // Array
let person = {firstName: "John"};   // Object`}
          language="javascript"
          placeholder="Please enter JavaScript code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* Functions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Functions
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Functions are blocks of code designed to perform a particular task. They are executed when
          something invokes (calls) them.
        </p>
        <CodeBlock
          value={`function greetUser(name) {
  return "Hello, " + name + "!";
}

let message = greetUser("John");
console.log(message);  // Output: Hello, John!`}
          language="javascript"
          placeholder="Please enter JavaScript code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* DOM Manipulation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          DOM Manipulation
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          JavaScript can interact with HTML elements through the Document Object Model (DOM).
          You can change content, styles, and respond to user events.
        </p>
        <CodeBlock
          value={`// Change text content
document.getElementById("demo").innerHTML = "New text";

// Change style
document.getElementById("demo").style.color = "red";

// Add event listener
document.getElementById("button").addEventListener("click", function() {
  alert("Button clicked!");
});`}
          language="javascript"
          placeholder="Please enter JavaScript code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with the JavaScript code below. Change the code and see how it affects the preview!
        </p>
        <CodeEditor initialCode={jsExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/bootstrap/quiz"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to Bootstrap Quiz
        </a>
        <a
          href="/js/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: JavaScript Quiz
        </a>
      </div>
    </div>
  );
};

export default JsIntro;
