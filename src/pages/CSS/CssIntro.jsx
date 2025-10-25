import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const CssIntro = () => {
  const cssExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to CSS!</h1>
        <p>This is a paragraph styled with CSS.</p>
    </div>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        CSS Introduction
      </h1>

      {/* What is CSS */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is CSS?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation
          of a document written in HTML. CSS describes how elements should be rendered on screen,
          on paper, in speech, or on other media.
        </p>
      </div>

      {/* Basic CSS Syntax */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Basic CSS Syntax
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          CSS rules consist of a selector and a declaration block. The selector points to the HTML
          element you want to style. The declaration block contains one or more declarations separated
          by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
        </p>
        <CodeBlock
          value={`selector {
  property: value;
  property: value;
}`}
          language="css"
          placeholder="Please enter CSS code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      {/* CSS Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          CSS Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's an example of HTML with embedded CSS styling:
        </p>
        <CodeBlock
          value={cssExample}
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
          Experiment with the CSS code below. Change the styles and see how it affects the preview!
        </p>
        <CodeEditor initialCode={cssExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/html/quiz"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Quiz
        </a>
        <a
          href="/css/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: CSS Quiz
        </a>
      </div>
    </div>
  );
};

export default CssIntro;
