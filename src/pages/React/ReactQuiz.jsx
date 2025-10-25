import QuizCard from '../../components/QuizCard';

const ReactQuiz = () => {
  const questions = [
    {
      question: "What is React?",
      options: ["A programming language", "A JavaScript library for building user interfaces", "A database management system", "A CSS framework"],
      correctAnswer: "A JavaScript library for building user interfaces"
    },
    {
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "Java Syntax Extension", "JSON XML Syntax", "JavaScript Extended"],
      correctAnswer: "JavaScript XML"
    },
    {
      question: "Which method is used to render a React component to the DOM?",
      options: ["ReactDOM.render()", "React.render()", "component.render()", "React.mount()"],
      correctAnswer: "ReactDOM.render()"
    },
    {
      question: "What is the purpose of state in React?",
      options: ["To store component data that can change", "To define component styles", "To handle routing", "To manage external APIs"],
      correctAnswer: "To store component data that can change"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        React Quiz
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Test your knowledge of React basics with this quiz. Answer all questions to see your score!
      </p>
      <QuizCard questions={questions} />
      <div className="mt-8 flex justify-between">
        <a
          href="/react/intro"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to React Introduction
        </a>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ReactQuiz;
