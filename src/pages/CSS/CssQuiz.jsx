import QuizCard from '../../components/QuizCard';

const CssQuiz = () => {
  const questions = [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["color", "text-color", "font-color", "foreground-color"],
      correctAnswer: "color"
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: ["#demo", ".demo", "demo", "*demo"],
      correctAnswer: "#demo"
    },
    {
      question: "Which CSS property controls the space between elements?",
      options: ["margin", "padding", "border", "spacing"],
      correctAnswer: "margin"
    },
    {
      question: "What is the correct CSS syntax to make all p elements bold?",
      options: ["p {font-weight: bold;}", "p {text-size: bold;}", "<p style='font-weight: bold;'>", "p {bold: true;}"],
      correctAnswer: "p {font-weight: bold;}"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        CSS Quiz
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Test your knowledge of CSS basics with this quiz. Answer all questions to see your score!
      </p>
      <QuizCard questions={questions} />
      <div className="mt-8 flex justify-between">
        <a
          href="/css/intro"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to CSS Introduction
        </a>
        <a
          href="/bootstrap/intro"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: Bootstrap Introduction
        </a>
      </div>
    </div>
  );
};

export default CssQuiz;
