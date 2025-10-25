import CodeEditor from '../../components/CodeEditor';

const HtmlLists = () => {
  const listsExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Lists</title>
    <style>
        .styled-list {
            list-style-type: square;
            margin-left: 20px;
        }

        .roman-list {
            list-style-type: upper-roman;
            margin-left: 20px;
        }

        .alpha-list {
            list-style-type: lower-alpha;
            margin-left: 20px;
        }

        .custom-list {
            list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="%23ff6b6b"/></svg>');
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1>HTML Lists</h1>

    <h2>Unordered List (Default)</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Unordered List (Square Bullets)</h2>
    <ul class="styled-list">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
    </ul>

    <h2>Ordered List (Default Numbers)</h2>
    <ol>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
        <li>Build Projects</li>
    </ol>

    <h2>Ordered List (Uppercase Roman)</h2>
    <ol class="roman-list">
        <li>Planning</li>
        <li>Design</li>
        <li>Development</li>
        <li>Testing</li>
    </ol>

    <h2>Ordered List (Lowercase Letters)</h2>
    <ol class="alpha-list">
        <li>Header</li>
        <li>Navigation</li>
        <li>Main Content</li>
        <li>Footer</li>
    </ol>

    <h2>Nested Lists</h2>
    <ul>
        <li>Frontend
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend
            <ol>
                <li>Node.js</li>
                <li>Databases</li>
                <li>APIs</li>
            </ol>
        </li>
    </ul>

    <h2>Description List</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language - the standard markup language for creating web pages</dd>

        <dt>CSS</dt>
        <dd>Cascading Style Sheets - used for describing the presentation of a document</dd>

        <dt>JavaScript</dt>
        <dd>A programming language that enables interactive web pages</dd>
    </dl>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Lists
      </h1>

      {/* What are HTML Lists */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What are HTML Lists?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML lists are used to group related items together. There are three types of lists in HTML:
          unordered lists ({`<ul>`}),
          ordered lists ({`<ol>`}),
          and description lists ({`<dl>`}).
        </p>
      </div>

      {/* List Types */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          List Types
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><strong>Unordered Lists ({`<ul>`})</strong> - Items are marked with bullets</li>
          <li><strong>Ordered Lists ({`<ol>`})</strong> - Items are numbered or lettered</li>
          <li><strong>Description Lists ({`<dl>`})</strong> - Terms and their descriptions</li>
        </ul>
      </div>

      {/* List Styling */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          List Styling with CSS
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">list-style-type</code> - Changes bullet/number style</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">list-style-image</code> - Uses custom image for bullets</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">list-style-position</code> - Positions markers inside/outside</li>
        </ul>
      </div>

      {/* Lists Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Lists Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's a comprehensive example showing different types of lists and styling:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{listsExample}</pre>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different list types and styling. Try nesting lists or changing bullet styles!
        </p>
        <CodeEditor initialCode={listsExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/html/input"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Input
        </a>
        <a
          href="/html/tables"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Tables
        </a>
      </div>
    </div>
  );
};

export default HtmlLists;
