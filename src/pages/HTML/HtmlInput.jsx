import CodeEditor from '../../components/CodeEditor';

const HtmlInput = () => {
  const inputExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Input Elements</title>
</head>
<body>
    <h1>Input Elements</h1>

    <!-- Text input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>

    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email"><br><br>

    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>

    <!-- Number input -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120"><br><br>

    <!-- Date input -->
    <label for="birthdate">Birth Date:</label>
    <input type="date" id="birthdate" name="birthdate"><br><br>

    <!-- Checkbox -->
    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
    <label for="newsletter">Subscribe to newsletter</label><br><br>

    <!-- Radio buttons -->
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>

    <!-- Submit button -->
    <input type="submit" value="Submit">
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Input Elements
      </h1>

      {/* What are Input Elements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What are Input Elements?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The HTML <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<input>`}</code> element is used to create interactive controls for web-based forms in order to accept data from the user.
          Different input types allow for different types of data entry.
        </p>
      </div>

      {/* Common Input Types */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Common Input Types
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="text"</code> - Single line text input</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="email"</code> - Email address input with validation</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="password"</code> - Password input (masked)</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="number"</code> - Numeric input</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="date"</code> - Date picker</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="checkbox"</code> - Checkbox for multiple selections</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="radio"</code> - Radio button for single selection</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">type="submit"</code> - Submit button</li>
        </ul>
      </div>

      {/* Input Attributes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Important Input Attributes
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">name</code> - Name of the input field</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">id</code> - Unique identifier for the input</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">placeholder</code> - Hint text shown in empty field</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">required</code> - Makes the field mandatory</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">min/max</code> - Minimum/maximum values for number inputs</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">value</code> - Default value for the input</li>
        </ul>
      </div>

      {/* Input Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Input Elements Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's an example showing various input types:
        </p>
          {inputExample}
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different input types and attributes. Try adding validation!
        </p>
        <CodeEditor initialCode={inputExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/html/forms"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Forms
        </a>
        <a
          href="/html/lists"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Lists
        </a>
      </div>
    </div>
  );
};

export default HtmlInput;
