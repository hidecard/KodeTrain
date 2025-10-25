
import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const ReactIntro = () => {
  const reactExample = `import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to the world of React components.</p>
    </div>
  );
}

export default App;`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        React Introduction
      </h1>

      {/* What is React */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What is React?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          React is a popular JavaScript library for building user interfaces, particularly web applications.
          It allows developers to create reusable UI components and manage the state of their applications efficiently.
          React uses a component-based architecture and a virtual DOM for optimal performance.
        </p>
      </div>

      {/* Basic React Component */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Basic React Component
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A React component is a JavaScript function that returns JSX (JavaScript XML).
          JSX allows you to write HTML-like syntax in JavaScript. Components can be functional or class-based,
          but functional components with hooks are the modern approach.
        </p>
        <CodeBlock
          value={reactExample}
          language="jsx"
          placeholder="Please enter JSX code."
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
          Experiment with the React code below. Change the content and see how it affects the preview!
        </p>
        <CodeEditor initialCode={reactExample} language="javascript" />
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
          href="/react/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: React Quiz
        </a>
      </div>
    </div>
  );
};

export default ReactIntro;
