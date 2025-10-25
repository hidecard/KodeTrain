export const reactLessons = [
  {
    id: 'react-intro',
    title: 'React Introduction',
    content: `
      <h1>What is React?</h1>
      <p>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Component-based architecture</li>
        <li>Virtual DOM for performance</li>
        <li>Declarative programming</li>
        <li>Unidirectional data flow</li>
        <li>JSX syntax extension</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Create a new React app using Create React App or Vite, then start building components.</p>
    `,
    example: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to your first React application.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-jsx',
    title: 'React JSX',
    content: `
      <h1>JSX in React</h1>
      <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and expressive.</p>

      <h2>JSX Rules</h2>
      <ul>
        <li>JSX must return a single parent element</li>
        <li>Use <code>className</code> instead of <code>class</code></li>
        <li>Use <code>htmlFor</code> instead of <code>for</code></li>
        <li>JavaScript expressions go in curly braces <code>{}</code></li>
        <li>JSX is compiled to <code>React.createElement()</code> calls</li>
      </ul>
    `,
    example: `import React from 'react';

function UserProfile() {
  const name = "John Doe";
  const age = 25;
  const isLoggedIn = true;

  return (
    <div className="user-profile">
      <h1>Welcome, {name}!</h1>
      <p>Age: {age}</p>
      <p>Status: {isLoggedIn ? 'Online' : 'Offline'}</p>

      {/* Conditional rendering */}
      {isLoggedIn && <button>Logout</button>}

      {/* List rendering */}
      <ul>
        {['React', 'JavaScript', 'HTML'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-components',
    title: 'React Components',
    content: `
      <h1>React Components</h1>
      <p>Components are the building blocks of React applications. They allow you to split the UI into independent, reusable pieces.</p>

      <h2>Component Types</h2>
      <ul>
        <li><strong>Function Components:</strong> Simple functions that return JSX</li>
        <li><strong>Class Components:</strong> ES6 classes that extend React.Component</li>
      </ul>

      <h2>Component Props</h2>
      <p>Props (properties) are how you pass data from parent to child components. They are read-only.</p>
    `,
    example: `import React from 'react';

// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class Component
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Component with multiple props
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Usage
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <WelcomeClass name="Bob" />
      <UserCard name="Charlie" age={30} email="charlie@example.com" />
    </div>
  );
}

export default App;`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-state',
    title: 'React State',
    content: `
      <h1>React State</h1>
      <p>State is a way to store and manage data that can change over time in your React components. When state changes, the component re-renders.</p>

      <h2>useState Hook</h2>
      <p>The <code>useState</code> hook allows you to add state to function components. It returns an array with the current state value and a function to update it.</p>

      <h2>State Rules</h2>
      <ul>
        <li>Never modify state directly</li>
        <li>Use the setter function to update state</li>
        <li>State updates are asynchronous</li>
        <li>State can hold any JavaScript value</li>
      </ul>
    `,
    example: `import React, { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-effects',
    title: 'React useEffect Hook',
    content: `
      <h1>React useEffect</h1>
      <p>The <code>useEffect</code> hook allows you to perform side effects in function components. Side effects include data fetching, subscriptions, and manual DOM manipulation.</p>

      <h2>useEffect Syntax</h2>
      <p><code>useEffect</code> takes a function and an optional dependency array. The effect runs after every render by default, or only when dependencies change.</p>

      <h2>Cleanup Function</h2>
      <p>You can return a cleanup function from useEffect to clean up subscriptions, timers, or other side effects.</p>
    `,
    example: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Effect runs on mount
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // Cleanup function runs on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means run only once

  return <div>Seconds: {seconds}</div>;
}

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effect runs on mount
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array

  if (loading) return <div>Loading...</div>;
  return <div><h2>{data.title}</h2><p>{data.body}</p></div>;
}

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Run only on mount

  return <div>Window width: {width}px</div>;
}`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-context',
    title: 'React Context API',
    content: `
      <h1>React Context API</h1>
      <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>

      <h2>When to Use Context</h2>
      <ul>
        <li>Global app state (theme, user info, language)</li>
        <li>Avoiding prop drilling</li>
        <li>Sharing state between distant components</li>
      </ul>

      <h2>Context API Components</h2>
      <ul>
        <li><code>React.createContext()</code> - Creates a context object</li>
        <li><code>Context.Provider</code> - Provides the context value</li>
        <li><code>Context.Consumer</code> or <code>useContext</code> hook - Consumes the context value</li>
      </ul>
    `,
    example: `import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Theme provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component that uses context
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}

// Component that consumes context using Consumer
function ThemeDisplay() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div style={{ color: theme === 'light' ? '#000' : '#fff' }}>
          Current theme: {theme}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>Theme Context Example</h1>
        <ThemeButton />
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-router',
    title: 'React Router',
    content: `
      <h1>React Router</h1>
      <p>React Router is a library for routing in React applications. It allows you to build single-page applications with navigation.</p>

      <h2>Core Components</h2>
      <ul>
        <li><code>BrowserRouter</code> - Router that uses HTML5 history API</li>
        <li><code>Routes</code> - Container for Route components</li>
        <li><code>Route</code> - Defines a route and its component</li>
        <li><code>Link</code> - Navigation link component</li>
        <li><code>Navigate</code> - Programmatic navigation</li>
      </ul>

      <h2>Route Parameters</h2>
      <p>Use route parameters to pass data through URLs.</p>
    `,
    example: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

// User profile component with route parameters
function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile for ID: {userId}</h2>;
}

// Navigation component
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users/123">User 123</Link></li>
        <li><Link to="/users/456">User 456</Link></li>
      </ul>
    </nav>
  );
}

// App component with routing
function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-hooks',
    title: 'React Custom Hooks',
    content: `
      <h1>React Custom Hooks</h1>
      <p>Custom hooks allow you to extract component logic into reusable functions. They follow the naming convention of starting with "use".</p>

      <h2>Why Custom Hooks?</h2>
      <ul>
        <li>Code reusability</li>
        <li>Separation of concerns</li>
        <li>Easier testing</li>
        <li>Sharing logic between components</li>
      </ul>

      <h2>Rules of Hooks</h2>
      <ul>
        <li>Only call hooks at the top level</li>
        <li>Only call hooks from React functions</li>
        <li>Custom hooks can call other hooks</li>
      </ul>
    `,
    example: `import React, { useState, useEffect } from 'react';

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using custom hooks
function App() {
  const [name, setName] = useLocalStorage('name', 'John');
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>

      <h2>Fetched Data:</h2>
      <p>{data.title}</p>
    </div>
  );
}

export default App;`,
    difficulty: 'Beginner'
  },
  {
    id: 'react-performance',
    title: 'React Performance Optimization',
    content: `
      <h1>React Performance Optimization</h1>
      <p>Optimizing React applications involves minimizing unnecessary re-renders, reducing bundle size, and improving runtime performance.</p>

      <h2>React.memo</h2>
      <p><code>React.memo</code> is a higher-order component that memoizes functional components to prevent unnecessary re-renders.</p>

      <h2>useMemo and useCallback</h2>
      <ul>
        <li><code>useMemo</code> - Memoizes expensive calculations</li>
        <li><code>useCallback</code> - Memoizes function references</li>
      </ul>

      <h2>Code Splitting</h2>
      <p>Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand.</p>
    `,
    example: `import React, { useState, useMemo, useCallback, memo } from 'react';

// Memoized component
const TodoItem = memo(({ todo, onToggle }) => {
  console.log('TodoItem rendered:', todo.id);
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </li>
  );
});

// Optimized component
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  // Memoized expensive calculation
  const filteredTodos = useMemo(() => {
    console.log('Filtering todos...');
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // Memoized callback function
  const toggleTodo = useCallback((id) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

// Lazy loading example
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  const [showOther, setShowOther] = useState(false);

  return (
    <div>
      <button onClick={() => setShowOther(true)}>
        Load Other Component
      </button>

      {showOther && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;`,
    difficulty: 'Beginner'
  }
];
