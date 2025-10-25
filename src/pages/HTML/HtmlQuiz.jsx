import QuizCard from '../../components/QuizCard';

const HtmlQuiz = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: "<a>"
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h1>", "<heading>", "<h6>", "<head>"],
      correctAnswer: "<h1>"
    },
    {
      question: "Which attribute is used to provide an alternative text for an image?",
      options: ["alt", "src", "title", "href"],
      correctAnswer: "alt"
    },
    {
      question: "What is the purpose of the <DOCTYPE> declaration?",
      options: ["To define the document type", "To create a comment", "To link external stylesheets", "To include JavaScript"],
      correctAnswer: "To define the document type"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        HTML Quiz
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Test your knowledge of HTML basics with this quiz. Answer all questions to see your score!
      </p>
      <QuizCard questions={questions} />
      <div className="mt-8 flex justify-between">
        <a
          href="/html/tags"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to HTML Tags
        </a>
        <a
          href="/css/intro"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: CSS Introduction
        </a>
      </div>
    </div>
  );
};

export default HtmlQuiz;
