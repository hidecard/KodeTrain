import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CodeEditor from '../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';
import { htmlLessons } from '../lessons/htmlLessons';
import { cssLessons } from '../lessons/cssLessons';
import { jsLessons } from '../lessons/jsLessons';
import { bootstrapLessons } from '../lessons/bootstrapLessons';
import { reactLessons } from '../lessons/reactLessons';

const LessonPage = () => {
  const { lessonId } = useParams();
  const location = useLocation();

  // Get current category from URL path
  const getCurrentCategory = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/html/')) return 'html';
    if (path.includes('/css/')) return 'css';
    if (path.includes('/js/')) return 'js';
    if (path.includes('/bootstrap/')) return 'bootstrap';
    if (path.includes('/react/')) return 'react';
    return 'html'; // default
  };

  const category = getCurrentCategory();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Mark lesson as completed when viewed
  useEffect(() => {
    if (lesson) {
      const progress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
      if (!progress[lesson.id]) {
        progress[lesson.id] = true;
        localStorage.setItem('lesson_progress', JSON.stringify(progress));
      }
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getLanguageForCategory = () => {
    switch (category) {
      case 'html': return 'html';
      case 'css': return 'css';
      case 'js': return 'javascript';
      case 'bootstrap': return 'html';
      case 'react': return 'jsx';
      default: return 'html';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-20 left-4 z-30 bg-blue-600 text-white p-2 rounded-md shadow-lg"
      >
        ☰ Topics
      </button>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              {' > '}
              <span className="capitalize">{category}</span>
              {' > '}
              <span>{lesson.title}</span>
            </div>

            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {lesson.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>

            {/* Code Example */}
            {lesson.example && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Code Example
                </h2>
                <CodeBlock
                  value={lesson.example}
                  language={getLanguageForCategory()}
                  placeholder="Please enter code."
                  data-color-mode="dark"
                  padding={15}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                  }}
                />
              </div>
            )}

            {/* Try It Yourself Button */}
            <div className="text-center mb-8">
              <Link
                to={`/try-it-yourself/${category}/${lessonId}`}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg inline-block"
              >
                Try It Yourself
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Back to Home
              </Link>

              {/* Next lesson logic would go here */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Lesson completed! ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
