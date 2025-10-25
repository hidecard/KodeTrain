import QuizCard from '../../components/QuizCard';

const BootstrapQuiz = () => {
  const questions = [
    {
      question: "What is Bootstrap?",
      options: ["A JavaScript library", "A CSS framework", "A programming language", "A database system"],
      correctAnswer: "A CSS framework"
    },
    {
      question: "Which class is used to create a responsive container in Bootstrap?",
      options: ["container", "wrapper", "box", "div"],
      correctAnswer: "container"
    },
    {
      question: "What does the Bootstrap grid system use?",
      options: ["12 columns", "10 columns", "16 columns", "8 columns"],
      correctAnswer: "12 columns"
    },
    {
      question: "Which Bootstrap class is used to create a button?",
      options: ["btn", "button", "bttn", "click"],
      correctAnswer: "btn"
    },
    {
      question: "What is the correct Bootstrap class for creating a card component?",
      options: ["card", "panel", "box", "component"],
      correctAnswer: "card"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Bootstrap Quiz
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Test your knowledge of Bootstrap basics with this quiz. Answer all questions to see your score!
      </p>
      <QuizCard questions={questions} />
      <div className="mt-8 flex justify-between">
        <a
          href="/bootstrap/intro"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to Bootstrap Introduction
        </a>
        <a
          href="/js/intro"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: JavaScript Introduction
        </a>
      </div>
    </div>
  );
};

export default BootstrapQuiz;
