import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { htmlLessons } from '../lessons/htmlLessons';
import { cssLessons } from '../lessons/cssLessons';
import { jsLessons } from '../lessons/jsLessons';
import { bootstrapLessons } from '../lessons/bootstrapLessons';
import { reactLessons } from '../lessons/reactLessons';

const TryItYourself = () => {
  const { lessonId } = useParams();
  const location = useLocation();

  // Get current category from URL path
  const getCurrentCategory = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/try-it-yourself/html/')) return 'html';
    if (path.includes('/try-it-yourself/css/')) return 'css';
    if (path.includes('/try-it-yourself/js/')) return 'js';
    if (path.includes('/try-it-yourself/bootstrap/')) return 'bootstrap';
    if (path.includes('/try-it-yourself/react/')) return 'react';
    return 'html'; // default
  };

  const category = getCurrentCategory();
  const [activeTab, setActiveTab] = useState('html');
  const [code, setCode] = useState({
    html: '',
    css: '',
    js: ''
  });
  const iframeRef = useRef(null);



  // Get lesson data
  const getLessonData = () => {
    const allLessons = {
      html: htmlLessons,
      css: cssLessons,
      js: jsLessons,
      bootstrap: bootstrapLessons,
      react: reactLessons
    };

    const categoryLower = category ? category.toLowerCase() : '';
    const lessonIdLower = lessonId ? lessonId.toLowerCase() : '';
    const categoryLessons = allLessons[categoryLower] || [];
    return categoryLessons.find(lesson => lesson.id.toLowerCase() === lessonIdLower) || null;
  };

  const lesson = getLessonData();

  // Load initial code from lesson and localStorage
  useEffect(() => {
    if (lesson) {
      const savedCode = JSON.parse(localStorage.getItem(`editor_${category}_${lessonId}`) || '{}');

      // For JS and React lessons, extract JS code from example if it contains code blocks
      let jsCode = savedCode.js || '';
      if (!jsCode && (category === 'js' || category === 'react') && lesson.example) {
        // Extract code between ```javascript or ```js blocks
        const jsMatch = lesson.example.match(/```(?:javascript|js)\n([\s\S]*?)\n```/);
        if (jsMatch) {
          jsCode = jsMatch[1].trim();
        } else {
          // Fallback: extract any code that looks like JS
          const lines = lesson.example.split('\n');
          const codeLines = lines.filter(line =>
            line.includes('let ') || line.includes('const ') || line.includes('var ') ||
            line.includes('function ') || line.includes('console.log') ||
            line.includes('=>') || line.includes('import ') || line.includes('export ')
          );
          jsCode = codeLines.join('\n');
        }
      }

      const initialCode = {
        html: savedCode.html || (category === 'react' ? '<div id="root"></div>' : '<!DOCTYPE html>\n<html>\n<head>\n  <title>Try It Yourself</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>'),
        css: savedCode.css || '',
        js: jsCode
      };
      setCode(initialCode);
    }
  }, [lesson, category, lessonId]);

  // Auto-save code to localStorage
  useEffect(() => {
    if (lesson) {
      localStorage.setItem(`editor_${category}_${lessonId}`, JSON.stringify(code));
    }
  }, [code, category, lessonId, lesson]);

  // Auto-run code when code changes
  useEffect(() => {
    runCode();
  }, [code]);

  const runCode = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();

        // For React lessons, load React and ReactDOM
        const isReact = category === 'react';
        const reactScripts = isReact ? `
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        ` : '';

        // For React, we need to compile JSX
        const processedJS = isReact ? `
          try {
            // For React, render to a root element
            const rootElement = document.getElementById('react-root');
            if (rootElement) {
              const root = ReactDOM.createRoot(rootElement);
              root.render(
                <div>
                  ${code.js}
                </div>
              );
            } else {
              ${code.js}
            }
          } catch (error) {
            console.log('Error:', error.message);
          }
        ` : `
          ${code.js}
        `;

        const htmlContent = isReact ? `
          <div id="react-root"></div>
          ${code.html.replace(/<div id="react-root"><\/div>/g, '').replace(/<div id="root"><\/div>/g, '')}
        ` : code.html;

        doc.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
              ${code.css}
            </style>
            ${reactScripts}
          </head>
          <body>
            ${htmlContent}
            <script type="${isReact ? 'text/babel' : 'text/javascript'}">
              ${processedJS}
            </script>
          </body>
          </html>
        `);
        doc.close();
        // No output display needed for W3Schools style
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };



  const tabs = [
    { id: 'html', label: 'HTML', language: 'html' },
    { id: 'css', label: 'CSS', language: 'css' },
    { id: 'js', label: 'JavaScript', language: 'javascript' }
  ];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Lesson Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700 font-medium">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - W3Schools style */}
      <div className="bg-white border-b border-gray-300 shadow-sm">
        <div className="max-w-full px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to={`/${category}/${lessonId}`}
                className="text-green-600 hover:text-green-800 font-medium text-sm"
              >
                ❮ Previous
              </Link>
              <span className="text-gray-400">|</span>
              <h1 className="text-lg font-normal text-gray-800">
                {lesson.title}
              </h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={runCode}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-3 rounded text-sm transition-colors border border-green-700"
              >
                Run ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - W3Schools style */}
      <div className="flex h-[calc(100vh-57px)]">
        {/* Left Panel - Editor */}
        <div className="w-1/2 bg-white border-r border-gray-300 flex flex-col">
          {/* Tabs */}
          <div className="flex bg-gray-50 border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm font-medium border-r border-gray-300 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-green-600 border-b-2 border-green-600 -mb-px'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{ minWidth: '80px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="flex-1 bg-gray-50">
            <Editor
              height="100%"
              language={tabs.find(tab => tab.id === activeTab)?.language}
              value={code[activeTab]}
              onChange={(value) => setCode(prev => ({ ...prev, [activeTab]: value || '' }))}
              theme="vs-light"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                roundedSelection: false,
                theme: 'vs-light',
                padding: { top: 10, bottom: 10 }
              }}
            />
          </div>
        </div>

        {/* Right Panel - Result */}
        <div className="w-1/2 bg-white flex flex-col">
          {/* Result Header */}
          <div className="bg-gray-50 border-b border-gray-300 px-3 py-2">
            <h3 className="text-sm font-medium text-gray-800">Result:</h3>
          </div>

          {/* Result Iframe */}
          <div className="flex-1 p-4 bg-white">
            <iframe
              ref={iframeRef}
              className="w-full h-full border border-gray-300 bg-white"
              title="Code Result"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItYourself;
