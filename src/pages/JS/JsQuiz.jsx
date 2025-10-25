import QuizCard from '../../components/QuizCard';

const JsQuiz = () => {
  const questions = [
    {
      question: "What is JavaScript primarily used for?",
      options: ["Styling web pages", "Creating dynamic web content", "Defining page structure", "Managing databases"],
      correctAnswer: "Creating dynamic web content"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Dynamic Object Method", "Document Oriented Markup"],
      correctAnswer: "Document Object Model"
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["push()", "add()", "append()", "insert()"],
      correctAnswer: "push()"
    },
    {
      question: "What will 'typeof null' return in JavaScript?",
      options: ["null", "undefined", "object", "boolean"],
      correctAnswer: "object"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        JavaScript Quiz
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Test your knowledge of JavaScript basics with this quiz. Answer all questions to see your score!
      </p>
      <QuizCard questions={questions} />
      <div className="mt-8 flex justify-between">
        <a
          href="/js/intro"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to JavaScript Introduction
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

export default JsQuiz;
