import CodeEditor from '../../components/CodeEditor';

const CssDisplay = () => {
  const displayExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Display Property</title>
    <style>
        .block-element {
            display: block;
            background-color: lightblue;
            padding: 10px;
            margin: 5px;
        }

        .inline-element {
            display: inline;
            background-color: lightgreen;
            padding: 10px;
            margin: 5px;
        }

        .inline-block-element {
            display: inline-block;
            background-color: lightcoral;
            padding: 10px;
            margin: 5px;
            width: 150px;
        }

        .none-element {
            display: none;
        }

        .flex-container {
            display: flex;
            background-color: lightyellow;
            padding: 10px;
            margin: 5px;
        }

        .flex-item {
            background-color: lightpink;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>CSS Display Property</h1>

    <h2>Block Elements</h2>
    <div class="block-element">This is a block element</div>
    <div class="block-element">Another block element</div>

    <h2>Inline Elements</h2>
    <span class="inline-element">Inline element 1</span>
    <span class="inline-element">Inline element 2</span>

    <h2>Inline-Block Elements</h2>
    <div class="inline-block-element">Inline-block 1</div>
    <div class="inline-block-element">Inline-block 2</div>

    <h2>Flexbox</h2>
    <div class="flex-container">
        <div class="flex-item">Flex item 1</div>
        <div class="flex-item">Flex item 2</div>
        <div class="flex-item">Flex item 3</div>
    </div>

    <p>This element is hidden: <span class="none-element">Hidden text</span></p>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        CSS Display Property
      </h1>

      {/* What is Display */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is the Display Property?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The CSS <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">display</code> property specifies the display behavior (the type of rendering box) of an element.
          It is the most important CSS property for controlling layout.
        </p>
      </div>

      {/* Common Display Values */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Common Display Values
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">block</code> - Element takes full width, starts on new line</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">inline</code> - Element takes only necessary width, stays in line</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">inline-block</code> - Like inline but can have width/height</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">none</code> - Element is completely hidden</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex</code> - Element becomes a flex container</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">grid</code> - Element becomes a grid container</li>
        </ul>
      </div>

      {/* Display Examples */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Display Property Examples
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's an example demonstrating different display values:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{displayExample}</pre>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different display values. Try changing block to inline, or inline to block!
        </p>
        <CodeEditor initialCode={displayExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/css/text"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to CSS Text
        </a>
        <a
          href="/css/position"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: CSS Position
        </a>
      </div>
    </div>
  );
};

export default CssDisplay;
