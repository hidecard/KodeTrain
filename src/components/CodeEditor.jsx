import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ initialCode = '', language = 'html', onCodeChange, autoSave = false, lessonId = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const iframeRef = useRef(null);

  // Auto-save functionality
  useEffect(() => {
    if (autoSave && lessonId) {
      const savedCode = localStorage.getItem(`editor_${lessonId}`);
      if (savedCode) {
        setCode(savedCode);
      }
    }
  }, [autoSave, lessonId]);

  useEffect(() => {
    if (autoSave && lessonId) {
      localStorage.setItem(`editor_${lessonId}`, code);
    }
    if (onCodeChange) {
      onCodeChange(code);
    }
  }, [code, autoSave, lessonId, onCodeChange]);

  const runCode = () => {
    if (language === 'html') {
      const iframe = iframeRef.current;
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
        setOutput('Code executed successfully!');
      }
    } else if (language === 'javascript') {
      try {
        // For JavaScript, we'll just log to console and show a message
        console.log(eval(code));
        setOutput('JavaScript executed. Check console for output.');
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else if (language === 'jsx') {
      setOutput('JSX code preview is shown in the iframe above.');
    } else {
      setOutput('Code execution not supported for this language.');
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    if (autoSave && lessonId) {
      localStorage.removeItem(`editor_${lessonId}`);
    }
    setOutput('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Code Editor</h3>
      <div className="mb-4">
        <Editor
          height="300px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
          }}
        />
      </div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={runCode}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Run Code
        </button>
        <button
          onClick={resetCode}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Reset
        </button>
      </div>
      {language === 'html' && (
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">Live Preview:</h4>
          <iframe
            ref={iframeRef}
            className="w-full h-64 border border-gray-300 dark:border-gray-600 rounded"
            title="Code Preview"
            sandbox="allow-scripts"
          ></iframe>
        </div>
      )}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
        <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">Output:</h4>
        <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
