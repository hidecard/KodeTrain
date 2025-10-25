import CodeEditor from '../../components/CodeEditor';

const CssPosition = () => {
  const positionExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Position Property</title>
    <style>
        .container {
            position: relative;
            height: 300px;
            border: 2px solid #333;
            background-color: #f0f0f0;
        }

        .static-box {
            position: static;
            background-color: lightblue;
            padding: 10px;
            margin: 5px;
        }

        .relative-box {
            position: relative;
            top: 20px;
            left: 20px;
            background-color: lightgreen;
            padding: 10px;
            margin: 5px;
        }

        .absolute-box {
            position: absolute;
            top: 50px;
            right: 20px;
            background-color: lightcoral;
            padding: 10px;
        }

        .fixed-box {
            position: fixed;
            top: 10px;
            left: 10px;
            background-color: lightyellow;
            padding: 10px;
            z-index: 1000;
        }

        .sticky-box {
            position: sticky;
            top: 0;
            background-color: lightpink;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="fixed-box">Fixed positioned element</div>

    <h1>CSS Position Property</h1>

    <div class="container">
        <div class="static-box">Static positioned element</div>
        <div class="relative-box">Relative positioned element (moved 20px down and right)</div>
        <div class="absolute-box">Absolute positioned element</div>
    </div>

    <div class="sticky-box">Sticky positioned element (sticks to top when scrolling)</div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        CSS Position Property
      </h1>

      {/* What is Position */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is the Position Property?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The CSS <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">position</code> property specifies the type of positioning method used for an element.
          It defines how an element is positioned in the document and whether it will create a new stacking context.
        </p>
      </div>

      {/* Position Values */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Position Values
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">static</code> - Default positioning (normal document flow)</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">relative</code> - Positioned relative to its normal position</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">absolute</code> - Positioned relative to nearest positioned ancestor</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">fixed</code> - Positioned relative to the viewport</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">sticky</code> - Switches between relative and fixed based on scroll position</li>
        </ul>
      </div>

      {/* Positioning Properties */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Positioning Properties
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">top</code> - Distance from top edge</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">right</code> - Distance from right edge</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">bottom</code> - Distance from bottom edge</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">left</code> - Distance from left edge</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">z-index</code> - Stacking order</li>
        </ul>
      </div>

      {/* Position Examples */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Position Property Examples
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's an example demonstrating different positioning values:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{positionExample}</pre>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different position values and offset properties. Try changing absolute to fixed!
        </p>
        <CodeEditor initialCode={positionExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/css/display"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to CSS Display
        </a>
        <a
          href="/css/flexbox"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: CSS Flexbox
        </a>
      </div>
    </div>
  );
};

export default CssPosition;
