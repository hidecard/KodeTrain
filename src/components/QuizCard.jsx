import { useState } from 'react';

const QuizCard = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswers([...answers, { question: currentQuestion, selected: selectedAnswer, correct: isCorrect }]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
      // Save quiz score to localStorage
      const quizId = window.location.pathname.split('/')[1] + '-quiz'; // e.g., 'html-quiz'
      const existingScores = JSON.parse(localStorage.getItem('quiz_scores') || '{}');
      if (!existingScores[quizId]) {
        existingScores[quizId] = [];
      }
      existingScores[quizId].push({
        score: score + (isCorrect ? 1 : 0),
        total: questions.length,
        date: new Date().toISOString()
      });
      localStorage.setItem('quiz_scores', JSON.stringify(existingScores));
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  if (showResult) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Quiz Results</h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          Your score: {score} out of {questions.length}
        </p>
        <div className="mb-4">
          {answers.map((answer, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                Question {index + 1}: {questions[answer.question].question}
              </p>
              <p className={`text-sm ${answer.correct ? 'text-green-600' : 'text-red-600'}`}>
                Your answer: {answer.selected}
                {!answer.correct && ` (Correct: ${questions[answer.question].correctAnswer})`}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleRetry}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{question.question}</p>
      </div>
      <div className="space-y-2 mb-6">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerSelect(option)}
              className="mr-2"
            />
            <span className="text-gray-700 dark:text-gray-300">{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default QuizCard;
