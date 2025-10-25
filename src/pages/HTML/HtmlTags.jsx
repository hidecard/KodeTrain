import CodeEditor from '../../components/CodeEditor';
import CodeBlock from '@uiw/react-textarea-code-editor';

const HtmlTags = () => {
  const tagsExample = `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>
<a href="https://example.com">This is a link</a>
<img src="image.jpg" alt="Description">
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>`;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">HTML Tags</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Common HTML Tags</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          HTML tags are the building blocks of web pages. They define the structure and content of your HTML document.
          Here are some of the most commonly used HTML tags:
        </p>
        <CodeBlock
          value={tagsExample}
          language="html"
          placeholder="Please enter HTML code."
          data-color-mode="dark"
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Try It Yourself</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experiment with different HTML tags in the editor below!
        </p>
        <CodeEditor
          initialCode={tagsExample}
          language="html"
        />
      </div>

      <div className="flex justify-between">
        <a
          href="/html/intro"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Previous: HTML Intro
        </a>
        <a
          href="/html/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Next: HTML Quiz
        </a>
      </div>
    </div>
  );
};

export default HtmlTags;
