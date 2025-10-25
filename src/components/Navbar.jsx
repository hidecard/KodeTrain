import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
            Frontend Learning Lab
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Home
            </Link>
            <Link to="/my-progress" className="text-white hover:text-yellow-300 font-medium transition-colors">
              My Progress
            </Link>
            <Link to="/html/intro" className="text-white hover:text-yellow-300 font-medium transition-colors">
              HTML
            </Link>
            <Link to="/css/intro" className="text-white hover:text-yellow-300 font-medium transition-colors">
              CSS
            </Link>
            <Link to="/bootstrap/bootstrap-intro" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Bootstrap
            </Link>
            <Link to="/js/js-intro" className="text-white hover:text-yellow-300 font-medium transition-colors">
              JavaScript
            </Link>
            <Link to="/react/react-intro" className="text-white hover:text-yellow-300 font-medium transition-colors">
              React
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
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
