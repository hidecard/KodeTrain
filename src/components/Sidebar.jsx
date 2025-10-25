import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { htmlLessons } from '../lessons/htmlLessons';
import { cssLessons } from '../lessons/cssLessons';
import { jsLessons } from '../lessons/jsLessons';
import { bootstrapLessons } from '../lessons/bootstrapLessons';
import { reactLessons } from '../lessons/reactLessons';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Get current category from URL
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

  // Get lessons for current category
  const getLessonsForCategory = () => {
    switch (category) {
      case 'html': return htmlLessons;
      case 'css': return cssLessons;
      case 'js': return jsLessons;
      case 'bootstrap': return bootstrapLessons;
      case 'react': return reactLessons;
      default: return htmlLessons;
    }
  };

  const lessons = getLessonsForCategory();

  // Filter lessons based on search term
  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get progress from localStorage
  const getProgress = () => {
    const progress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
    return progress;
  };

  const progress = getProgress();

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0 w-80 border-r border-gray-200 dark:border-gray-700`}>

        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 capitalize">
              {category} Topics
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 pl-8 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {filteredLessons.map((lesson, index) => {
              const lessonPath = `/${category}/${lesson.id}`;
              const isActive = location.pathname === lessonPath;
              const isCompleted = progress[lesson.id];

              return (
                <Link
                  key={lesson.id}
                  to={lessonPath}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={`block p-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isActive
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                      }`}>
                        {isCompleted ? '✓' : index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{lesson.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {lesson.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Progress: {Object.values(progress).filter(Boolean).length} / {lessons.length} completed
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(Object.values(progress).filter(Boolean).length / lessons.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
