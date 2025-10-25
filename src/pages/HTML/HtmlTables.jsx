import CodeEditor from '../../components/CodeEditor';

const HtmlTables = () => {
  const tablesExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tables</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f5f5f5;
        }

        .styled-table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .styled-table thead tr {
            background-color: #009879;
            color: #ffffff;
            text-align: left;
        }

        .styled-table th,
        .styled-table td {
            padding: 12px 15px;
        }

        .styled-table tbody tr {
            border-bottom: 1px solid #dddddd;
        }

        .styled-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
        }

        .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
        }
    </style>
</head>
<body>
    <h1>HTML Tables</h1>

    <h2>Basic Table</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>25</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>30</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Bob Johnson</td>
                <td>35</td>
                <td>Chicago</td>
            </tr>
        </tbody>
    </table>

    <h2>Table with Colspan and Rowspan</h2>
    <table>
        <tr>
            <th>Month</th>
            <th>Savings</th>
            <th colspan="2">Expenses</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$100</td>
            <td>$50</td>
            <td>$25</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$200</td>
            <td>$75</td>
            <td>$30</td>
        </tr>
        <tr>
            <td rowspan="2">March</td>
            <td rowspan="2">$300</td>
            <td>$80</td>
            <td>$35</td>
        </tr>
        <tr>
            <td>$85</td>
            <td>$40</td>
        </tr>
    </table>

    <h2>Styled Table</h2>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Technology</th>
                <th>Type</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HTML</td>
                <td>Markup</td>
                <td>1993</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>Style</td>
                <td>1996</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>Scripting</td>
                <td>1995</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Tables
      </h1>

      {/* What are HTML Tables */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What are HTML Tables?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML tables are used to display tabular data in rows and columns. Tables consist of table rows ({`<tr>`}),
          table headers ({`<th>`}), and table data cells ({`<td>`}). Tables can be styled with CSS to create
          professional-looking data presentations.
        </p>
      </div>

      {/* Table Elements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Table Elements
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<table>`}</code> - Defines the table</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<thead>`}</code> - Groups header content</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<tbody>`}</code> - Groups body content</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<tr>`}</code> - Defines a table row</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<th>`}</code> - Defines a header cell</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">{`<td>`}</code> - Defines a data cell</li>
        </ul>
      </div>

      {/* Table Attributes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Important Table Attributes
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">colspan</code> - Number of columns a cell should span</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">rowspan</code> - Number of rows a cell should span</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">scope</code> - Associates header cells with data cells</li>
        </ul>
      </div>

      {/* CSS Table Styling */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          CSS Table Styling
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">border-collapse</code> - Controls border spacing</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">border-spacing</code> - Sets spacing between borders</li>
          <li><code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">table-layout</code> - Controls table layout algorithm</li>
        </ul>
      </div>

      {/* Tables Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Tables Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here's a comprehensive example showing basic tables, colspan/rowspan usage, and CSS styling:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{tablesExample}</pre>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Try It Yourself
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with table structure and styling. Try adding colspan, rowspan, or custom CSS styles!
        </p>
        <CodeEditor initialCode={tablesExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/html/lists"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Lists
        </a>
        <a
          href="/html/images"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Images
        </a>
      </div>
    </div>
  );
};

export default HtmlTables;
