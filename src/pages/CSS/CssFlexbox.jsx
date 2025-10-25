import CodeEditor from '../../components/CodeEditor';

const CssFlexbox = () => {
  const flexboxExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox</title>
    <style>
        .container {
            display: flex;
            height: 300px;
            border: 2px solid #333;
            margin: 20px 0;
            padding: 10px;
        }

        .item {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            margin: 5px;
            text-align: center;
            font-size: 16px;
        }

        /* Flex Direction Examples */
        .flex-row {
            flex-direction: row;
        }

        .flex-row-reverse {
            flex-direction: row-reverse;
        }

        .flex-column {
            flex-direction: column;
        }

        .flex-column-reverse {
            flex-direction: column-reverse;
        }

        /* Justify Content Examples */
        .justify-start {
            justify-content: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-end {
            justify-content: flex-end;
        }

        .justify-space-between {
            justify-content: space-between;
        }

        .justify-space-around {
            justify-content: space-around;
        }

        .justify-space-evenly {
            justify-content: space-evenly;
        }

        /* Align Items Examples */
        .align-start {
            align-items: flex-start;
        }

        .align-center {
            align-items: center;
        }

        .align-end {
            align-items: flex-end;
        }

        .align-stretch {
            align-items: stretch;
        }

        /* Flex Wrap */
        .flex-wrap {
            flex-wrap: wrap;
        }

        .flex-nowrap {
            flex-wrap: nowrap;
        }

        /* Individual Flex Properties */
        .item-1 {
            flex: 1;
        }

        .item-2 {
            flex: 2;
        }

        .item-3 {
            flex: 3;
        }

        /* Responsive Flexbox */
        @media (max-width: 600px) {
            .container {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <h1>CSS Flexbox</h1>

    <h2>Flex Direction: Row (Default)</h2>
    <div class="container flex-row">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    <h2>Flex Direction: Row Reverse</h2>
    <div class="container flex-row-reverse">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    <h2>Justify Content: Space Between</h2>
    <div class="container justify-space-between">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    <h2>Align Items: Center</h2>
    <div class="container align-center">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    <h2>Flex Wrap</h2>
    <div class="container flex-wrap" style="height: auto;">
        <div class="item" style="width: 200px;">Item 1</div>
        <div class="item" style="width: 200px;">Item 2</div>
        <div class="item" style="width: 200px;">Item 3</div>
        <div class="item" style="width: 200px;">Item 4</div>
        <div class="item" style="width: 200px;">Item 5</div>
    </div>

    <h2>Flex Property (Flexible Items)</h2>
    <div class="container">
        <div class="item item-1">Flex: 1</div>
        <div class="item item-2">Flex: 2</div>
        <div class="item item-3">Flex: 3</div>
    </div>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        CSS Flexbox
      </h1>

      {/* What is Flexbox */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is Flexbox?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Flexbox (Flexible Box Layout) is a CSS layout module that provides a more efficient way to lay out,
          align, and distribute space among items in a container, even when their size is unknown or dynamic.
          It offers powerful alignment capabilities and makes complex layouts simple.
        </p>
      </div>

      {/* Flexbox Properties */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Main Flexbox Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Container Properties</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">display: flex</code> - Creates flex container</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex-direction</code> - Direction of flex items</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">justify-content</code> - Horizontal alignment</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">align-items</code> - Vertical alignment</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex-wrap</code> - Wrapping behavior</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Item Properties</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex</code> - Grow, shrink, basis</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">align-self</code> - Individual alignment</li>
              <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">order</code> - Display order</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flex Direction */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Flex Direction Values
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">row</code> - Left to right (default)</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">row-reverse</code> - Right to left</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">column</code> - Top to bottom</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">column-reverse</code> - Bottom to top</li>
        </ul>
      </div>

      {/* Justify Content */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Justify Content Values
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex-start</code> - Items at start</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">center</code> - Items centered</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">flex-end</code> - Items at end</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">space-between</code> - Equal space between</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">space-around</code> - Equal space around</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">space-evenly</code> - Equal space all around</li>
        </ul>
      </div>

      {/* Flexbox Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Flexbox Examples
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's a comprehensive example demonstrating various flexbox properties and their effects:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{flexboxExample}</pre>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different flexbox properties. Try changing justify-content, align-items, or flex-direction!
        </p>
        <CodeEditor initialCode={flexboxExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/css/position"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to CSS Position
        </a>
        <a
          href="/css/grid"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: CSS Grid
        </a>
      </div>
    </div>
  );
};

export default CssFlexbox;
