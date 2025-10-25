import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { htmlLessons } from '../lessons/htmlLessons';
import { cssLessons } from '../lessons/cssLessons';
import { jsLessons } from '../lessons/jsLessons';
import { bootstrapLessons } from '../lessons/bootstrapLessons';
import { reactLessons } from '../lessons/reactLessons';

const MyProgress = () => {
  const [progress, setProgress] = useState({});
  const [quizScores, setQuizScores] = useState({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
    setProgress(savedProgress);

    // Load quiz scores from localStorage
    const savedQuizScores = JSON.parse(localStorage.getItem('quiz_scores') || '{}');
    setQuizScores(savedQuizScores);
  }, []);

  const allLessons = {
    html: htmlLessons,
    css: cssLessons,
    js: jsLessons,
    bootstrap: bootstrapLessons,
    react: reactLessons
  };

  const getCategoryProgress = (category) => {
    const categoryLessons = allLessons[category] || [];
    const completedLessons = categoryLessons.filter(lesson => progress[lesson.id]).length;
    return {
      completed: completedLessons,
      total: categoryLessons.length,
      percentage: categoryLessons.length > 0 ? Math.round((completedLessons / categoryLessons.length) * 100) : 0
    };
  };

  const getOverallProgress = () => {
    let totalCompleted = 0;
    let totalLessons = 0;

    Object.keys(allLessons).forEach(category => {
      const catProgress = getCategoryProgress(category);
      totalCompleted += catProgress.completed;
      totalLessons += catProgress.total;
    });

    return {
      completed: totalCompleted,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0
    };
  };

  const overallProgress = getOverallProgress();

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      localStorage.removeItem('lesson_progress');
      localStorage.removeItem('quiz_scores');
      setProgress({});
      setQuizScores({});
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        My Progress
      </h1>

      {/* Overall Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Overall Progress
        </h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{overallProgress.completed} of {overallProgress.total} lessons completed</span>
            <span>{overallProgress.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Progress */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.keys(allLessons).map(category => {
          const catProgress = getCategoryProgress(category);
          return (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 capitalize">
                {category}
              </h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>{catProgress.completed}/{catProgress.total}</span>
                  <span>{catProgress.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      catProgress.percentage === 100 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${catProgress.percentage}%` }}
                  />
                </div>
              </div>
              <Link
                to={`/${category}/intro`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              >
                Continue Learning →
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quiz Scores */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Quiz Scores
        </h2>
        {Object.keys(quizScores).length > 0 ? (
          <div className="space-y-3">
            {Object.entries(quizScores).map(([quizId, scores]) => {
              const latestScore = scores[scores.length - 1];
              const category = quizId.split('-')[0];
              return (
                <div key={quizId} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div>
                    <span className="font-medium capitalize">{category} Quiz</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      Latest: {latestScore.score}/{latestScore.total} ({Math.round((latestScore.score/latestScore.total)*100)}%)
                    </span>
                  </div>
                  <Link
                    to={`/${category}/quiz`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  >
                    Retake Quiz
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No quiz scores yet. Take some quizzes to see your progress!</p>
        )}
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {overallProgress.percentage >= 25 && (
            <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900 rounded">
              <span className="text-2xl mr-3">🌟</span>
              <div>
                <div className="font-medium text-yellow-800 dark:text-yellow-200">Getting Started</div>
                <div className="text-sm text-yellow-600 dark:text-yellow-300">Completed 25% of lessons</div>
              </div>
            </div>
          )}
          {overallProgress.percentage >= 50 && (
            <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900 rounded">
              <span className="text-2xl mr-3">🚀</span>
              <div>
                <div className="font-medium text-blue-800 dark:text-blue-200">Halfway There</div>
                <div className="text-sm text-blue-600 dark:text-blue-300">Completed 50% of lessons</div>
              </div>
            </div>
          )}
          {overallProgress.percentage >= 75 && (
            <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900 rounded">
              <span className="text-2xl mr-3">💪</span>
              <div>
                <div className="font-medium text-purple-800 dark:text-purple-200">Advanced Learner</div>
                <div className="text-sm text-purple-600 dark:text-purple-300">Completed 75% of lessons</div>
              </div>
            </div>
          )}
          {overallProgress.percentage === 100 && (
            <div className="flex items-center p-3 bg-green-50 dark:bg-green-900 rounded">
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <div className="font-medium text-green-800 dark:text-green-200">Master</div>
                <div className="text-sm text-green-600 dark:text-green-300">Completed all lessons!</div>
              </div>
            </div>
          )}
        </div>
        {overallProgress.percentage < 25 && (
          <p className="text-gray-600 dark:text-gray-400">Complete more lessons to unlock achievements!</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Link
          to="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to Home
        </Link>
        <button
          onClick={resetProgress}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default MyProgress;
