import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const HtmlForms = () => {
  const formsExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Forms</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Forms
      </h1>

      {/* What are HTML Forms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What are HTML Forms?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML forms are used to collect user input. They consist of form elements like input fields,
          text areas, checkboxes, radio buttons, and submit buttons. Forms allow users to send data
          to a server for processing.
        </p>
      </div>

      {/* Form Elements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Common Form Elements
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<input>`}</code> - Text fields, passwords, emails, etc.</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<textarea>`}</code> - Multi-line text input</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<select>`}</code> - Dropdown menus</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<button>`}</code> - Clickable buttons</li>
        </ul>
      </div>

      {/* Form Attributes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Important Form Attributes
        </h2>
        <CodeBlock
          value={`<form action="/submit" method="post">
    <!-- action: URL to send data to -->
    <!-- method: HTTP method (GET/POST) -->
</form>

<input type="text" name="username" required>
<!-- name: identifies the input -->
<!-- required: makes field mandatory -->`}
          language="html"
          placeholder="Please enter HTML code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* Forms Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Forms Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's a complete contact form example:
        </p>
        <CodeBlock
          value={formsExample}
          language="html"
          placeholder="Please enter HTML code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* Form Validation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Form Validation
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML5 provides built-in validation for form inputs. You can use attributes like <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">required</code>,
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">minlength</code>, <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">maxlength</code>,
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">pattern</code>, and more to validate user input.
        </p>
        <CodeBlock
          value={`<!-- Required field -->
<input type="text" name="username" required>

<!-- Minimum and maximum length -->
<input type="password" name="password" minlength="8" maxlength="20" required>

<!-- Email validation -->
<input type="email" name="email" required>

<!-- Number with range -->
<input type="number" name="age" min="18" max="100" required>

<!-- Pattern matching (e.g., phone number) -->
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>`}
          language="html"
          placeholder="Please enter HTML code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* Advanced Form Elements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Advanced Form Elements
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Beyond basic inputs, HTML forms support checkboxes, radio buttons, select dropdowns, and more.
        </p>
        <CodeBlock
          value={`<!-- Checkboxes -->
<input type="checkbox" id="newsletter" name="newsletter" value="yes">
<label for="newsletter">Subscribe to newsletter</label>

<!-- Radio buttons -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>

<!-- Select dropdown -->
<select name="country" required>
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>

<!-- Date picker -->
<input type="date" name="birthdate">

<!-- File upload -->
<input type="file" name="avatar" accept="image/*">`}
          language="html"
          placeholder="Please enter HTML code."
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
          Experiment with the form code below. Add more input types and validation!
        </p>
        <CodeEditor initialCode={formsExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/html/tags"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Tags
        </a>
        <a
          href="/html/semantics"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Semantics
        </a>
      </div>
    </div>
  );
};

export default HtmlForms;
