import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';
import TryItYourself from './pages/TryItYourself';
import MyProgress from './pages/MyProgress';
import HtmlQuiz from './pages/HTML/HtmlQuiz';
import CssQuiz from './pages/CSS/CssQuiz';
import BootstrapQuiz from './pages/Bootstrap/BootstrapQuiz';
import JsQuiz from './pages/JS/JsQuiz';
import ReactQuiz from './pages/React/ReactQuiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-progress" element={<MyProgress />} />

          {/* Dynamic lesson routes */}
          <Route path="/html/:lessonId" element={<LessonPage />} />
          <Route path="/css/:lessonId" element={<LessonPage />} />
          <Route path="/js/:lessonId" element={<LessonPage />} />
          <Route path="/bootstrap/:lessonId" element={<LessonPage />} />
          <Route path="/react/:lessonId" element={<LessonPage />} />

          {/* Try It Yourself routes */}
          <Route path="/try-it-yourself/:category/:lessonId" element={<TryItYourself />} />

          {/* Quiz routes */}
          <Route path="/html/quiz" element={<HtmlQuiz />} />
          <Route path="/css/quiz" element={<CssQuiz />} />
          <Route path="/bootstrap/quiz" element={<BootstrapQuiz />} />
          <Route path="/js/quiz" element={<JsQuiz />} />
          <Route path="/react/quiz" element={<ReactQuiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
