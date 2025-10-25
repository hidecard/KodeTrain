export const reactLessons = [
  {
    id: 'intro',
    title: 'React Introduction',
    content: `
      <h1>What is React?</h1>
      <p>React is a popular JavaScript library for building user interfaces, particularly web applications. It allows developers to create reusable UI components and manage the state of their applications efficiently. React uses a component-based architecture and a virtual DOM for optimal performance.</p>

      <h2>Basic React Component</h2>
      <p>A React component is a JavaScript function that returns JSX (JavaScript XML). JSX allows you to write HTML-like syntax in JavaScript. Components can be functional or class-based, but functional components with hooks are the modern approach.</p>
    `,
    example: `import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to the world of React components.</p>
    </div>
  );
}

export default App;`,
    difficulty: 'Advanced'
  }
];
