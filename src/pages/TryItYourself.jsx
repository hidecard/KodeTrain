import { useState, useEffect, useRef, useCallback } from 'react';
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
  const [output, setOutput] = useState('');
  const iframeRef = useRef(null);
  const [splitSize, setSplitSize] = useState(50); // percentage for left panel
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      const initialCode = {
        html: savedCode.html || lesson.example || '<!DOCTYPE html>\n<html>\n<head>\n  <title>Try It Yourself</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>',
        css: savedCode.css || '',
        js: savedCode.js || ''
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

  // Handle mouse drag for resizable split
  const handleMouseDown = useCallback(() => {
    if (isMobile) return;
    setIsDragging(true);
  }, [isMobile]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || isMobile) return;
    const container = e.currentTarget.parentElement;
    const rect = container.getBoundingClientRect();
    const newSize = ((e.clientX - rect.left) / rect.width) * 100;
    setSplitSize(Math.max(30, Math.min(70, newSize)));
  }, [isDragging, isMobile]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleMouseMoveWrapper = (e) => handleMouseMove(e);
    const handleMouseUpWrapper = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMoveWrapper);
      document.addEventListener('mouseup', handleMouseUpWrapper);
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveWrapper);
        document.removeEventListener('mouseup', handleMouseUpWrapper);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const runCode = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
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
          </head>
          <body>
            ${code.html}
            <script>
              try {
                ${code.js}
              } catch (error) {
                console.error('JavaScript Error:', error);
              }
            </script>
          </body>
          </html>
        `);
        doc.close();
        setOutput('✓ Code executed successfully!');
      } catch (error) {
        setOutput(`✗ Error: ${error.message}`);
      }
    }
  };

  const resetCode = () => {
    if (lesson) {
      const initialCode = {
        html: lesson.example || '<!DOCTYPE html>\n<html>\n<head>\n  <title>Try It Yourself</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>',
        css: '',
        js: ''
      };
      setCode(initialCode);
      localStorage.removeItem(`editor_${category}_${lessonId}`);
      setOutput('↺ Code reset to original example.');
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header - W3Schools style */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-4">
              <Link
                to={`/${category}/${lessonId}`}
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                ← Back to Tutorial
              </Link>
              <span className="text-gray-400">|</span>
              <h1 className="text-lg font-semibold text-gray-800">
                {lesson.title} - Try it Yourself
              </h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={runCode}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
              >
                ▶ Run
              </button>
              <button
                onClick={resetCode}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
              >
                ↺ Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor and Preview - Responsive Layout */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-[calc(100vh-73px)]`}>
        {/* Left Panel - Editor */}
        <div
          className="bg-white border-r border-gray-200 flex flex-col"
          style={{ width: isMobile ? '100%' : `${splitSize}%`, height: isMobile ? '50%' : '100%' }}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-r border-gray-200 transition-colors flex-1 ${
                  activeTab === tab.id
                    ? 'bg-white text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="flex-1">
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
                theme: 'vs-light'
              }}
            />
          </div>
        </div>

        {/* Resize Handle - Desktop only */}
        {!isMobile && (
          <div
            className="w-1 bg-gray-300 cursor-col-resize hover:bg-green-400 transition-colors"
            onMouseDown={handleMouseDown}
          />
        )}

        {/* Right Panel - Preview */}
        <div
          className="bg-white flex flex-col border-t md:border-t-0 md:border-l border-gray-200"
          style={{ width: isMobile ? '100%' : `${100 - splitSize}%`, height: isMobile ? '50%' : '100%' }}
        >
          {/* Preview Header */}
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-800">Live Preview</h3>
          </div>

          {/* Preview Iframe */}
          <div className="flex-1 p-4 bg-gray-50">
            <iframe
              ref={iframeRef}
              className="w-full h-full border border-gray-300 rounded bg-white"
              title="Code Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          {/* Output */}
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <h4 className="text-xs font-medium mb-1 text-gray-700">Console Output:</h4>
            <div className="text-xs text-gray-600 bg-white p-2 rounded border min-h-[2rem] max-h-20 overflow-y-auto">
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItYourself;
