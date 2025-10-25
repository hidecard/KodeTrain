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
      difficulty: 'Beginner',
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-4 rounded-lg mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Frontend Learning Lab
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Master HTML, CSS, Bootstrap, and JavaScript through interactive lessons, code examples, and quizzes.
            All learning happens offline, right in your browser.
          </p>
          <Link
            to="/html/intro"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Start Learning Now
          </Link>
        </div>
      </div>

      {/* Lessons Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Explore Our Lessons
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-10 rounded-lg text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Test Your Knowledge?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Take our interactive quizzes to reinforce your learning and track your progress.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/html/quiz"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
          >
            HTML Quiz
          </Link>
          <Link
            to="/css/quiz"
            className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
          >
            CSS Quiz
          </Link>
          <Link
            to="/bootstrap/quiz"
            className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
          >
            Bootstrap Quiz
          </Link>
          <Link
            to="/js/quiz"
            className="bg-white text-yellow-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
          >
            JavaScript Quiz
          </Link>
          <Link
            to="/react/quiz"
            className="bg-white text-cyan-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
          >
            React Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
