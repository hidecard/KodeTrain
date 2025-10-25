import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const HtmlIntro = () => {
  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://www.example.com">This is a link</a>
</body>
</html>`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Introduction
      </h1>

      {/* What is HTML */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is HTML?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It describes the structure of a web page and consists of a series of elements that tell
          the browser how to display the content.
        </p>
      </div>

      {/* Basic HTML Structure */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Basic HTML Structure
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Every HTML document starts with a document type declaration and has a root element called 
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">&lt;html&gt;</code>.
          Inside the <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">&lt;html&gt;</code> 
          element, there are typically two main sections: 
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">&lt;head&gt;</code> and 
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">&lt;body&gt;</code>.
        </p>
        <CodeBlock
          value={htmlExample}
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
          Experiment with the code below. Change the content and see how it affects the preview!
        </p>
        <CodeEditor initialCode={htmlExample} language="html" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to Home
        </a>
        <a
          href="/html/tags"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Tags
        </a>
      </div>
    </div>
  );
};

export default HtmlIntro;
