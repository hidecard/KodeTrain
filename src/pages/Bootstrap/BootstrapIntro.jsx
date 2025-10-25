import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const BootstrapIntro = () => {
  const bootstrapExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Welcome to Bootstrap!</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">This is a Bootstrap card component.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="alert alert-success" role="alert">
                    This is a success alert!
                </div>
                <button type="button" class="btn btn-secondary">Secondary Button</button>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Bootstrap Introduction
      </h1>

      {/* What is Bootstrap */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is Bootstrap?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bootstrap is a popular CSS framework for developing responsive and mobile-first websites.
          It provides a collection of CSS and JavaScript tools for creating responsive layouts,
          components, and utilities that work across all modern browsers.
        </p>
      </div>

      {/* Bootstrap Grid System */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Bootstrap Grid System
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content.
          It's built with flexbox and is fully responsive. The grid system is based on 12 columns and
          provides responsive breakpoints for different screen sizes.
        </p>
        <CodeBlock
          value={`<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4">Column 1</div>
    <div class="col-sm-6 col-md-4">Column 2</div>
    <div class="col-sm-12 col-md-4">Column 3</div>
  </div>
</div>`}
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

      {/* Bootstrap Components */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Bootstrap Components
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bootstrap comes with many pre-built components like buttons, cards, modals, navigation bars,
          and more. These components are designed to be responsive and customizable.
        </p>
      </div>

      {/* Bootstrap Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Bootstrap Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's an example of a simple Bootstrap page:
        </p>
        <CodeBlock
          value={bootstrapExample}
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
          Experiment with the Bootstrap code below. Change the components and see how it affects the preview!
        </p>
        <CodeEditor initialCode={bootstrapExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/css/quiz"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to CSS Quiz
        </a>
        <a
          href="/bootstrap/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: Bootstrap Quiz
        </a>
      </div>
    </div>
  );
};

export default BootstrapIntro;
