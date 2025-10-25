import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Frontend Learning Lab
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link to="/my-progress" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              My Progress
            </Link>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                HTML
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1">
                <Link to="/html/intro" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Introduction
                </Link>
                <Link to="/html/tags" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Tags
                </Link>
                <Link to="/html/quiz" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Quiz
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                CSS
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1">
                <Link to="/css/intro" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Introduction
                </Link>
                <Link to="/css/quiz" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Quiz
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Bootstrap
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1">
                <Link to="/bootstrap/intro" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Introduction
                </Link>
                <Link to="/bootstrap/quiz" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Quiz
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                JavaScript
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1">
                <Link to="/js/intro" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Introduction
                </Link>
                <Link to="/js/quiz" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Quiz
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                React
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1">
                <Link to="/react/intro" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Introduction
                </Link>
                <Link to="/react/quiz" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Quiz
                </Link>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
