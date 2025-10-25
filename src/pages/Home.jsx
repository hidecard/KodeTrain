import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const Home = () => {
  const lessons = [
    {
      title: 'HTML Introduction',
      description: 'Learn the basics of HTML, the foundation of web development.',
      link: '/html/intro',
      difficulty: 'Beginner',
      category: 'html'
    },
    {
      title: 'HTML Tags',
      description: 'Explore essential HTML tags and their usage.',
      link: '/html/tags',
      difficulty: 'Beginner',
      category: 'html'
    },
    {
      title: 'HTML Forms',
      description: 'Learn how to create and handle HTML forms.',
      link: '/html/forms',
      difficulty: 'Beginner',
      category: 'html'
    },
    {
      title: 'HTML Input',
      description: 'Master different types of input elements in HTML.',
      link: '/html/input',
      difficulty: 'Beginner',
      category: 'html'
    },
    {
      title: 'HTML Lists',
      description: 'Create ordered and unordered lists in HTML.',
      link: '/html/lists',

      category: 'html'
    },
    {
      title: 'HTML Tables',
      description: 'Build structured data tables with HTML.',
      link: '/html/tables',
      difficulty: 'Beginner',
      category: 'html'
    },
    {
      title: 'CSS Introduction',
      description: 'Discover how to style your web pages with CSS.',
      link: '/css/intro',
      difficulty: 'Beginner',
      category: 'css'
    },
    {
      title: 'CSS Display',
      description: 'Understand CSS display properties and layout.',
      link: '/css/display',
      difficulty: 'Intermediate',
      category: 'css'
    },
    {
      title: 'CSS Position',
      description: 'Master CSS positioning techniques.',
      link: '/css/position',
      difficulty: 'Intermediate',
      category: 'css'
    },
    {
      title: 'CSS Flexbox',
      description: 'Learn modern layout with CSS Flexbox.',
      link: '/css/flexbox',
      difficulty: 'Intermediate',
      category: 'css'
    },
    {
      title: 'Bootstrap Introduction',
      description: 'Learn responsive design with Bootstrap framework.',
      link: '/bootstrap/intro',
      difficulty: 'Intermediate',
      category: 'bootstrap'
    },
    {
      title: 'JavaScript Introduction',
      description: 'Add interactivity to your websites with JavaScript.',
      link: '/js/intro',
      difficulty: 'Intermediate',
      category: 'js'
    },
    {
      title: 'React Introduction',
      description: 'Build dynamic user interfaces with React components.',
      link: '/react/intro',
      difficulty: 'Advanced',
      category: 'react'
    },
  ];
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to Frontend Learning Lab
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Master HTML, CSS, Bootstrap, and JavaScript through interactive lessons, code examples, and quizzes.
          All learning happens offline, right in your browser.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {lessons.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Ready to Test Your Knowledge?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Take our interactive quizzes to reinforce your learning and track your progress.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/html/quiz"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            HTML Quiz
          </Link>
          <Link
            to="/css/quiz"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            CSS Quiz
          </Link>
          <Link
            to="/bootstrap/quiz"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Bootstrap Quiz
          </Link>
          <Link
            to="/js/quiz"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            JavaScript Quiz
          </Link>
          <Link
            to="/react/quiz"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            React Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
