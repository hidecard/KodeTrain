export const htmlLessons = [
  {
    id: 'intro',
    title: 'HTML Introduction',
    content: `
      <h1>What is HTML?</h1>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.</p>

      <h2>Basic HTML Structure</h2>
      <p>Every HTML document starts with a document type declaration and has a root element called <html>. Inside the <html> element, there are typically two main sections: <head> and <body>.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://www.example.com">This is a link</a>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'doctype',
    title: 'HTML Doctype',
    content: `
      <h1>The HTML Doctype Declaration</h1>
      <p>The doctype declaration is the very first thing in an HTML document, and it tells the browser which version of HTML the page is written in.</p>

      <h2>Why Doctype Matters</h2>
      <p>The doctype declaration ensures that the browser renders the page in standards mode, which means it follows the HTML and CSS specifications as closely as possible.</p>

      <h2>HTML5 Doctype</h2>
      <p>HTML5 has the simplest doctype declaration: <code><!DOCTYPE html></code>. It's case-insensitive and should be placed at the very beginning of your HTML document.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'head',
    title: 'HTML Head Section',
    content: `
      <h1>The HTML Head Element</h1>
      <p>The <code><head></code> element contains meta-information about the document that is not displayed on the page itself.</p>

      <h2>Common Head Elements</h2>
      <ul>
        <li><code><title></code> - Sets the page title shown in browser tabs</li>
        <li><code><meta></code> - Provides metadata about the document</li>
        <li><code><link></code> - Links to external resources like stylesheets</li>
        <li><code><script></code> - Includes JavaScript files</li>
      </ul>

      <h2>Important Meta Tags</h2>
      <p>The charset and viewport meta tags are essential for modern web pages.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML basics">
    <title>My HTML Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome!</h1>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'body',
    title: 'HTML Body Element',
    content: `
      <h1>The HTML Body Element</h1>
      <p>The <code><body></code> element contains all the content that is visible to users when they visit your web page.</p>

      <h2>Body Content</h2>
      <p>Everything you want users to see and interact with goes inside the body element. This includes text, images, links, forms, and more.</p>

      <h2>Body Attributes</h2>
      <p>While most styling is done with CSS, the body element can have attributes like background color (though this is deprecated in favor of CSS).</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Body Element Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
        </nav>
    </header>

    <main>
        <h2>Welcome to my site!</h2>
        <p>This is the main content of the page.</p>
    </main>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'headings',
    title: 'HTML Headings',
    content: `
      <h1>HTML Heading Elements</h1>
      <p>HTML provides six levels of headings, from <code><h1></code> (most important) to <code><h6></code> (least important).</p>

      <h2>Heading Hierarchy</h2>
      <p>Headings create a document outline and help with SEO. Search engines use headings to understand the structure and importance of your content.</p>

      <h3>Best Practices</h3>
      <ul>
        <li>Use only one H1 per page</li>
        <li>Don't skip heading levels (H1, H2, H3, not H1, H3)</li>
        <li>Use headings for structure, not just styling</li>
      </ul>
    `,
    example: `<h1>Main Page Title (H1)</h1>

<h2>Section Title (H2)</h2>
<p>Content for the first section.</p>

<h3>Subsection (H3)</h3>
<p>More detailed content.</p>

<h2>Another Section (H2)</h2>
<p>Content for the second section.</p>

<h3>Another Subsection (H3)</h3>
<p>Even more content.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'paragraphs',
    title: 'HTML Paragraphs',
    content: `
      <h1>HTML Paragraph Element</h1>
      <p>The <code><p></code> element defines a paragraph of text. Browsers automatically add space before and after paragraphs.</p>

      <h2>Paragraph Formatting</h2>
      <p>Paragraphs are block-level elements, meaning they take up the full width available and start on a new line.</p>

      <h2>Text Content</h2>
      <p>Paragraphs can contain text, links, images, and inline elements. They cannot contain other block-level elements like headings or other paragraphs.</p>
    `,
    example: `<h1>My Blog Post</h1>

<p>This is the first paragraph of my blog post. It contains some introductory text that welcomes readers to the article.</p>

<p>This is the second paragraph. It continues the discussion from the first paragraph and provides more detailed information.</p>

<p>The third paragraph wraps up the main points and provides a conclusion to the article.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'links',
    title: 'HTML Links',
    content: `
      <h1>HTML Link Element</h1>
      <p>The <code><a></code> element (anchor) creates hyperlinks to other web pages, files, or locations within the same page.</p>

      <h2>Link Attributes</h2>
      <ul>
        <li><code>href</code> - Specifies the URL of the page the link goes to</li>
        <li><code>target</code> - Specifies where to open the linked document</li>
        <li><code>title</code> - Provides additional information about the link</li>
      </ul>

      <h2>Link Types</h2>
      <p>Links can point to web pages, email addresses, phone numbers, and locations within the same page.</p>
    `,
    example: `<h2>Types of Links</h2>

<!-- External link -->
<p>Visit <a href="https://www.google.com" target="_blank">Google</a> for search.</p>

<!-- Email link -->
<p>Contact us at <a href="mailto:info@example.com">info@example.com</a></p>

<!-- Phone link -->
<p>Call us: <a href="tel:+1234567890">+1 (234) 567-890</a></p>

<!-- Internal link -->
<p>Go to <a href="#section2">Section 2</a></p>

<h2 id="section2">Section 2</h2>
<p>This is section 2 of the page.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'images',
    title: 'HTML Images',
    content: `
      <h1>HTML Image Element</h1>
      <p>The <code><img></code> element is used to embed images in web pages. It's a self-closing tag that requires a source attribute.</p>

      <h2>Essential Attributes</h2>
      <ul>
        <li><code>src</code> - Specifies the path to the image file</li>
        <li><code>alt</code> - Provides alternative text for screen readers and when image fails to load</li>
        <li><code>width</code> and <code>height</code> - Specify image dimensions</li>
      </ul>

      <h2>Image Formats</h2>
      <p>Common web image formats include JPEG, PNG, GIF, SVG, and WebP.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Examples</title>
</head>
<body>
    <h1>Image Gallery</h1>

    <!-- Basic image -->
    <img src="photo.jpg" alt="A beautiful landscape">

    <!-- Image with dimensions -->
    <img src="logo.png" alt="Company Logo" width="200" height="100">

    <!-- Image as link -->
    <a href="https://example.com">
        <img src="banner.jpg" alt="Click here to visit our site">
    </a>

    <!-- Responsive image -->
    <img src="responsive.jpg" alt="Responsive image" style="max-width: 100%; height: auto;">
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'attributes',
    title: 'HTML Attributes',
    content: `
      <h1>HTML Attributes</h1>
      <p>Attributes provide additional information about HTML elements. They are always specified in the opening tag and consist of a name and value pair.</p>

      <h2>Attribute Syntax</h2>
      <p>Attributes are written as <code>name="value"</code> inside the opening tag. Some attributes are boolean (present or not present).</p>

      <h2>Common Attributes</h2>
      <ul>
        <li><code>id</code> - Unique identifier for an element</li>
        <li><code>class</code> - Class name for styling and JavaScript</li>
        <li><code>style</code> - Inline CSS styles</li>
        <li><code>title</code> - Tooltip text</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Attributes</title>
</head>
<body>
    <!-- Element with multiple attributes -->
    <img src="photo.jpg" alt="Beautiful scenery" width="400" height="300" class="gallery-image" id="main-photo">

    <!-- Link with attributes -->
    <a href="https://example.com" target="_blank" title="Opens in new tab" class="external-link">Visit Example</a>

    <!-- Form input with attributes -->
    <input type="text" name="username" placeholder="Enter username" required maxlength="50" class="form-input">

    <!-- Div with styling attributes -->
    <div id="header" class="main-header" style="background-color: blue; color: white; padding: 20px;">
        <h1>Welcome!</h1>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'comments',
    title: 'HTML Comments',
    content: `
      <h1>HTML Comments</h1>
      <p>Comments are used to add notes or explanations in your HTML code. They are not displayed in the browser but help developers understand the code.</p>

      <h2>Comment Syntax</h2>
      <p>HTML comments start with <code><!--</code> and end with <code>--></code>. Everything between these markers is ignored by the browser.</p>

      <h2>Uses for Comments</h2>
      <ul>
        <li>Explain complex code sections</li>
        <li>Temporarily disable code during development</li>
        <li>Add TODO notes or reminders</li>
        <li>Mark sections of code for team members</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Comments Example</title>
</head>
<body>
    <!-- This is the main header section -->
    <header>
        <h1>Welcome to My Website</h1>
        <!-- TODO: Add navigation menu here -->
    </header>

    <!-- Main content area -->
    <main>
        <h2>About Us</h2>
        <p>This is the main content of the page.</p>

        <!-- This paragraph was commented out for now
        <p>This content is temporarily hidden.</p>
        -->
    </main>

    <!-- Footer section
         Last updated: 2024-01-15
         Author: John Doe
    -->
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'line-breaks',
    title: 'HTML Line Breaks',
    content: `
      <h1>HTML Line Breaks</h1>
      <p>The <code><br></code> element creates a line break in text. It's a self-closing tag that forces the text to continue on the next line.</p>

      <h2>When to Use Line Breaks</h2>
      <p>Use <code><br></code> for line breaks in addresses, poems, or other content where the line break is meaningful. Don't use it just for spacing - use CSS for that.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use for actual line breaks in content</li>
        <li>Avoid using multiple <code><br></code> tags for spacing</li>
        <li>Consider semantic elements like <code><address></code> for addresses</li>
      </ul>
    `,
    example: `<h1>Address Example</h1>
<address>
    John Doe<br>
    123 Main Street<br>
    Anytown, ST 12345<br>
    USA
</address>

<h2>Poem Example</h2>
<p>
    Roses are red,<br>
    Violets are blue,<br>
    HTML is awesome,<br>
    And so are you!
</p>

<h2>Proper Spacing</h2>
<p>This paragraph has proper spacing.</p>
<p>This is a new paragraph with automatic spacing.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'horizontal-rule',
    title: 'HTML Horizontal Rule',
    content: `
      <h1>HTML Horizontal Rule</h1>
      <p>The <code><hr></code> element creates a horizontal line that can be used to separate content sections.</p>

      <h2>Usage</h2>
      <p>Horizontal rules are useful for separating different sections of content, such as chapters in a book or different topics on a page.</p>

      <h2>Styling</h2>
      <p>While <code><hr></code> has default styling, you can customize its appearance using CSS.</p>
    `,
    example: `<h1>My Blog Post</h1>

<p>This is the introduction to my blog post. It sets up the topic and gives readers an overview of what they'll learn.</p>

<hr>

<h2>Section 1: The Basics</h2>
<p>This section covers the fundamental concepts. Here we dive deep into the core principles.</p>

<hr>

<h2>Section 2: Advanced Topics</h2>
<p>Now that we understand the basics, let's explore some more advanced concepts and techniques.</p>

<hr>

<p>Thank you for reading! Check back soon for more content.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'text-formatting',
    title: 'HTML Text Formatting',
    content: `
      <h1>HTML Text Formatting</h1>
      <p>HTML provides several elements for formatting text to add emphasis, importance, or special meaning.</p>

      <h2>Common Formatting Tags</h2>
      <ul>
        <li><code><strong></code> or <code><b></code> - Bold text (strong has semantic meaning)</li>
        <li><code><em></code> or <code><i></code> - Italic text (em has semantic meaning)</li>
        <li><code><u></code> - Underlined text</li>
        <li><code><mark></code> - Highlighted text</li>
        <li><code><small></code> - Smaller text</li>
        <li><code><del></code> - Deleted/strikethrough text</li>
        <li><code><ins></code> - Inserted/underlined text</li>
        <li><code><sub></code> - Subscript text</li>
        <li><code><sup></code> - Superscript text</li>
      </ul>
    `,
    example: `<h1>Text Formatting Examples</h1>

<p>This is <strong>important text</strong> that needs emphasis.</p>

<p>This is <em>emphasized text</em> that should be stressed.</p>

<p>This text contains <mark>highlighted content</mark>.</p>

<p>This is <small>smaller text</small> for fine print.</p>

<p>This shows <del>deleted text</del> and <ins>inserted text</ins>.</p>

<p>This is a chemical formula: H<sub>2</sub>O and E = mc<sup>2</sup>.</p>

<p>This text is <u>underlined</u> for emphasis.</p>

<p>You can combine formatting: <strong><em>bold and italic</em></strong>.</p>`,
    difficulty: 'Beginner'
  },
  {
    id: 'semantic-html',
    title: 'Semantic HTML',
    content: `
      <h1>Semantic HTML</h1>
      <p>Semantic HTML elements clearly describe their meaning and purpose to both browsers and developers.</p>

      <h2>Why Semantic HTML Matters</h2>
      <ul>
        <li>Better accessibility for screen readers</li>
        <li>Improved SEO (search engine optimization)</li>
        <li>Easier to maintain and understand</li>
        <li>Better structure for styling and JavaScript</li>
      </ul>

      <h2>Common Semantic Elements</h2>
      <ul>
        <li><code><header></code> - Header content</li>
        <li><code><nav></code> - Navigation links</li>
        <li><code><main></code> - Main content</li>
        <li><code><section></code> - Section of content</li>
        <li><code><article></code> - Self-contained content</li>
        <li><code><aside></code> - Sidebar content</li>
        <li><code><footer></code> - Footer content</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Welcome</h2>
            <p>This is the main content section.</p>
        </section>

        <article>
            <h3>Blog Post Title</h3>
            <p>This is a self-contained article.</p>
        </article>
    </main>

    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'div-span',
    title: 'HTML Div and Span',
    content: `
      <h1>HTML Div and Span Elements</h1>
      <p><code><div></code> and <code><span></code> are generic container elements used for grouping and styling content.</p>

      <h2>Div Element</h2>
      <p>The <code><div></code> element is a block-level container that groups related elements together. It's commonly used for layout and styling purposes.</p>

      <h2>Span Element</h2>
      <p>The <code><span></code> element is an inline container used to group inline elements or text. It's perfect for styling specific parts of text.</p>

      <h2>When to Use Each</h2>
      <ul>
        <li>Use <code><div></code> for block-level grouping and layout</li>
        <li>Use <code><span></code> for inline text styling</li>
        <li>Prefer semantic elements when possible</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Div and Span Example</title>
    <style>
        .container { border: 1px solid #ccc; padding: 20px; margin: 10px; }
        .highlight { background-color: yellow; }
        .important { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Div Example</h2>
        <p>This entire section is wrapped in a div for styling.</p>
    </div>

    <div class="container">
        <h2>Span Example</h2>
        <p>
            This sentence contains <span class="highlight">highlighted text</span> and
            <span class="important">important information</span> using span elements.
        </p>
    </div>

    <div class="container">
        <h2>Layout with Divs</h2>
        <div style="float: left; width: 45%; margin-right: 10%;">
            <h3>Left Column</h3>
            <p>Content for the left column.</p>
        </div>
        <div style="float: left; width: 45%;">
            <h3>Right Column</h3>
            <p>Content for the right column.</p>
        </div>
        <div style="clear: both;"></div>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'lists',
    title: 'HTML Lists',
    content: `
      <h1>HTML Lists</h1>
      <p>HTML provides different types of lists to organize content in a structured way.</p>

      <h2>Unordered Lists</h2>
      <p>Unordered lists (<code><ul></code>) are used when the order of items doesn't matter. Each item is marked with a bullet point.</p>

      <h2>Ordered Lists</h2>
      <p>Ordered lists (<code><ol></code>) are used when the order of items is important. Each item is numbered.</p>

      <h2>List Items</h2>
      <p>Both types of lists use <code><li></code> elements to define individual list items.</p>
    `,
    example: `<h2>Unordered List:</h2>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>

<h2>Ordered List:</h2>
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<h2>Nested Lists:</h2>
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>`,
    difficulty: 'Beginner'
  },
  {
    id: 'description-lists',
    title: 'HTML Description Lists',
    content: `
      <h1>HTML Description Lists</h1>
      <p>Description lists (<code><dl></code>) are used to group terms and their descriptions. They're perfect for glossaries, metadata, or any key-value pairs.</p>

      <h2>Description List Elements</h2>
      <ul>
        <li><code><dl></code> - Description list container</li>
        <li><code><dt></code> - Description term (the thing being described)</li>
        <li><code><dd></code> - Description definition (the description)</li>
      </ul>

      <h2>Use Cases</h2>
      <p>Description lists are great for FAQs, glossaries, metadata display, and any content that pairs terms with explanations.</p>
    `,
    example: `<h1>HTML Glossary</h1>

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - the standard markup language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets - a style sheet language used for describing the presentation of a document.</dd>

  <dt>JavaScript</dt>
  <dd>A programming language that enables interactive web pages and is an essential part of web applications.</dd>
</dl>

<h2>FAQ</h2>
<dl>
  <dt>What is web development?</dt>
  <dd>Web development is the work involved in developing a website for the Internet or an intranet.</dd>

  <dt>Do I need to know HTML to be a web developer?</dt>
  <dd>Yes, HTML is the foundation of web development and is essential for creating web pages.</dd>
</dl>`,
    difficulty: 'Beginner'
  },
  {
    id: 'tables',
    title: 'HTML Tables',
    content: `
      <h1>HTML Tables</h1>
      <p>HTML tables are used to display data in a tabular format with rows and columns.</p>

      <h2>Table Structure</h2>
      <p>A table consists of rows (<code><tr></code>) and cells (<code><td></code> for data cells, <code><th></code> for header cells).</p>

      <h2>Table Elements</h2>
      <ul>
        <li><code><table></code> - Table container</li>
        <li><code><thead></code> - Table header section</li>
        <li><code><tbody></code> - Table body section</li>
        <li><code><tfoot></code> - Table footer section</li>
        <li><code><tr></code> - Table row</li>
        <li><code><th></code> - Table header cell</li>
        <li><code><td></code> - Table data cell</li>
      </ul>
    `,
    example: `<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`,
    difficulty: 'Beginner'
  },
  {
    id: 'table-advanced',
    title: 'Advanced HTML Tables',
    content: `
      <h1>Advanced HTML Tables</h1>
      <p>HTML tables support advanced features like cell spanning, captions, and complex layouts.</p>

      <h2>Cell Spanning</h2>
      <ul>
        <li><code>colspan</code> - Makes a cell span multiple columns</li>
        <li><code>rowspan</code> - Makes a cell span multiple rows</li>
      </ul>

      <h2>Table Captions</h2>
      <p>The <code><caption></code> element provides a title or explanation for the table.</p>

      <h2>Accessibility</h2>
      <p>Use proper table structure and headers for screen readers.</p>
    `,
    example: `<table border="1">
  <caption>Employee Information</caption>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th colspan="2">Contact</th>
      <th rowspan="2">Department</th>
    </tr>
    <tr>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>555-0123</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>555-0456</td>
      <td>Marketing</td>
    </tr>
  </tbody>
</table>`,
    difficulty: 'Beginner'
  },
  {
    id: 'forms',
    title: 'HTML Forms',
    content: `
      <h1>HTML Forms</h1>
      <p>HTML forms are used to collect user input. They consist of form controls like text fields, checkboxes, radio buttons, and submit buttons.</p>

      <h2>Form Elements</h2>
      <p>The <code><form></code> element defines an HTML form. Inside the form, you can use various input types to collect different kinds of data.</p>

      <h2>Form Attributes</h2>
      <ul>
        <li><code>action</code> - URL where form data is sent</li>
        <li><code>method</code> - HTTP method (GET or POST)</li>
        <li><code>name</code> - Form identifier</li>
      </ul>
    `,
    example: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <input type="submit" value="Submit">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'input',
    title: 'HTML Input',
    content: `
      <h1>HTML Input Elements</h1>
      <p>HTML provides various input types for different kinds of user input. Each input type has its own purpose and validation rules.</p>

      <h2>Common Input Types</h2>
      <p>Text, password, email, number, date, and many other input types are available to suit different data collection needs.</p>

      <h2>Input Attributes</h2>
      <ul>
        <li><code>type</code> - Input type (text, email, password, etc.)</li>
        <li><code>name</code> - Field name for form submission</li>
        <li><code>placeholder</code> - Hint text shown in empty field</li>
        <li><code>required</code> - Makes field mandatory</li>
        <li><code>value</code> - Default value</li>
      </ul>
    `,
    example: `<input type="text" placeholder="Enter text">
<input type="password" placeholder="Enter password">
<input type="email" placeholder="Enter email">
<input type="number" min="1" max="100">
<input type="date">
<input type="checkbox" id="agree">
<label for="agree">I agree to terms</label>`,
    difficulty: 'Beginner'
  },
  {
    id: 'textarea',
    title: 'HTML Textarea',
    content: `
      <h1>HTML Textarea Element</h1>
      <p>The <code><textarea></code> element creates a multi-line text input field, perfect for longer text input like comments or messages.</p>

      <h2>Textarea Attributes</h2>
      <ul>
        <li><code>rows</code> - Number of visible text lines</li>
        <li><code>cols</code> - Number of visible characters per line</li>
        <li><code>placeholder</code> - Hint text for empty textarea</li>
        <li><code>maxlength</code> - Maximum number of characters allowed</li>
        <li><code>required</code> - Makes field mandatory</li>
      </ul>

      <h2>Usage</h2>
      <p>Use textarea for longer text input. For short text, use input type="text" instead.</p>
    `,
    example: `<form>
  <label for="message">Your Message:</label><br>
  <textarea id="message" name="message" rows="5" cols="50" placeholder="Enter your message here..." required></textarea><br>

  <label for="comments">Comments:</label><br>
  <textarea id="comments" name="comments" rows="3" cols="40" maxlength="500" placeholder="Any additional comments?"></textarea><br>

  <input type="submit" value="Send Message">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'select-dropdown',
    title: 'HTML Select Dropdown',
    content: `
      <h1>HTML Select Element</h1>
      <p>The <code><select></code> element creates a dropdown list that allows users to choose from a list of options.</p>

      <h2>Select Attributes</h2>
      <ul>
        <li><code>name</code> - Field name for form submission</li>
        <li><code>multiple</code> - Allows multiple selections</li>
        <li><code>size</code> - Number of visible options</li>
        <li><code>required</code> - Makes field mandatory</li>
      </ul>

      <h2>Option Element</h2>
      <p>The <code><option></code> element defines each option in the dropdown. Use the <code>value</code> attribute for the data sent to the server.</p>
    `,
    example: `<form>
  <label for="country">Country:</label>
  <select id="country" name="country" required>
    <option value="">-- Select Country --</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </select><br>

  <input type="submit" value="Submit">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'radio-checkbox',
    title: 'HTML Radio Buttons and Checkboxes',
    content: `
      <h1>HTML Radio Buttons and Checkboxes</h1>
      <p>Radio buttons and checkboxes allow users to make selections from predefined options.</p>

      <h2>Radio Buttons</h2>
      <p>Radio buttons (<code><input type="radio"></code>) allow users to select one option from a group. All radio buttons in the same group should have the same <code>name</code> attribute.</p>

      <h2>Checkboxes</h2>
      <p>Checkboxes (<code><input type="checkbox"></code>) allow users to select multiple options. Each checkbox should have a unique <code>name</code> attribute.</p>

      <h2>Label Association</h2>
      <p>Always associate labels with form controls using the <code>for</code> attribute for better accessibility.</p>
    `,
    example: `<form>
  <h3>Choose your favorite color:</h3>
  <input type="radio" id="red" name="color" value="red">
  <label for="red">Red</label><br>

  <input type="radio" id="blue" name="color" value="blue">
  <label for="blue">Blue</label><br>

  <input type="radio" id="green" name="color" value="green">
  <label for="green">Green</label><br>

  <h3>Select your interests:</h3>
  <input type="checkbox" id="sports" name="sports" value="sports">
  <label for="sports">Sports</label><br>

  <input type="checkbox" id="music" name="music" value="music">
  <label for="music">Music</label><br>

  <input type="checkbox" id="art" name="art" value="art">
  <label for="art">Art</label><br>

  <input type="submit" value="Submit">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'fieldset-legend',
    title: 'HTML Fieldset and Legend',
    content: `
      <h1>HTML Fieldset and Legend Elements</h1>
      <p>The <code><fieldset></code> element groups related form controls and content, while <code><legend></code> provides a caption for the fieldset.</p>

      <h2>Fieldset</h2>
      <p>Fieldset creates a visual and semantic grouping of form elements. It's especially useful for complex forms with multiple sections.</p>

      <h2>Legend</h2>
      <p>The legend element provides a title or explanation for the fieldset group.</p>

      <h2>Accessibility</h2>
      <p>Fieldsets and legends improve form accessibility by clearly organizing form sections for screen readers.</p>
    `,
    example: `<form>
  <fieldset>
    <legend>Personal Information</legend>

    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname" required><br>

    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>
  </fieldset>

  <fieldset>
    <legend>Account Preferences</legend>

    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
    <label for="newsletter">Subscribe to newsletter</label><br>

    <label for="notifications">Email notifications:</label>
    <select id="notifications" name="notifications">
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="never">Never</option>
    </select><br>
  </fieldset>

  <input type="submit" value="Create Account">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'datalist',
    title: 'HTML Datalist Element',
    content: `
      <h1>HTML Datalist Element</h1>
      <p>The <code><datalist></code> element provides a list of predefined options for an input field, creating an autocomplete dropdown.</p>

      <h2>How It Works</h2>
      <p>The datalist is associated with an input field using the <code>list</code> attribute. Users can type to filter options or select from the dropdown.</p>

      <h2>Browser Support</h2>
      <p>Datalist is supported in all modern browsers. It degrades gracefully in older browsers by showing a regular text input.</p>

      <h2>Use Cases</h2>
      <p>Perfect for suggesting common values while still allowing custom input.</p>
    `,
    example: `<form>
  <label for="browser">Choose your favorite browser:</label>
  <input type="text" id="browser" name="browser" list="browsers" placeholder="Start typing...">

  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
  </datalist><br>

  <label for="country">Country:</label>
  <input type="text" id="country" name="country" list="countries">

  <datalist id="countries">
    <option value="United States">
    <option value="United Kingdom">
    <option value="Canada">
    <option value="Australia">
    <option value="Germany">
    <option value="France">
    <option value="Japan">
  </datalist><br>

  <input type="submit" value="Submit">
</form>`,
    difficulty: 'Beginner'
  },
  {
    id: 'iframe',
    title: 'HTML Iframe Element',
    content: `
      <h1>HTML Iframe Element</h1>
      <p>The <code><iframe></code> element embeds another HTML document within the current document.</p>

      <h2>Common Uses</h2>
      <ul>
        <li>Embedding videos from YouTube or Vimeo</li>
        <li>Displaying maps from Google Maps</li>
        <li>Showing content from other websites</li>
        <li>Creating sandboxed content areas</li>
      </ul>

      <h2>Security Considerations</h2>
      <p>Use the <code>sandbox</code> attribute to restrict what the embedded content can do, and always validate sources.</p>

      <h2>Attributes</h2>
      <ul>
        <li><code>src</code> - URL of the document to embed</li>
        <li><code>width</code> and <code>height</code> - Dimensions</li>
        <li><code>sandbox</code> - Security restrictions</li>
        <li><code>loading</code> - Lazy loading control</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Iframe Examples</title>
</head>
<body>
    <h1>Iframe Examples</h1>

    <!-- Basic iframe -->
    <h2>Embedded Website</h2>
    <iframe src="https://www.example.com" width="600" height="400" title="Example website"></iframe>

    <!-- YouTube video -->
    <h2>YouTube Video</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <!-- Google Maps -->
    <h2>Location Map</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAuNzAwMDAwMDAwMDAwMDAw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

    <!-- Sandboxed iframe -->
    <h2>Sandboxed Content</h2>
    <iframe src="demo.html" width="400" height="300" sandbox="allow-scripts allow-same-origin" title="Sandboxed content"></iframe>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'meta-tags',
    title: 'HTML Meta Tags',
    content: `
      <h1>HTML Meta Tags</h1>
      <p>Meta tags provide metadata about the HTML document. They are placed in the <code><head></code> section and are not visible to users.</p>

      <h2>Essential Meta Tags</h2>
      <ul>
        <li><code><meta charset="UTF-8"></code> - Character encoding</li>
        <li><code><meta name="viewport" content="width=device-width, initial-scale=1.0"></code> - Responsive design</li>
        <li><code><meta name="description" content="..."></code> - Page description for SEO</li>
        <li><code><meta name="keywords" content="..."></code> - Keywords for search engines</li>
        <li><code><meta name="author" content="..."></code> - Page author</li>
      </ul>

      <h2>Open Graph Tags</h2>
      <p>Open Graph meta tags control how your page appears when shared on social media platforms.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML basics with interactive examples and tutorials.">
    <meta name="keywords" content="HTML, web development, tutorial, beginner">
    <meta name="author" content="HTML Learning Lab">

    <!-- Open Graph tags for social media -->
    <meta property="og:title" content="HTML Learning Lab">
    <meta property="og:description" content="Interactive HTML tutorials for beginners">
    <meta property="og:image" content="https://example.com/og-image.jpg">
    <meta property="og:url" content="https://example.com">
    <meta property="og:type" content="website">

    <!-- Favicon -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <title>HTML Meta Tags Example</title>
</head>
<body>
    <h1>Meta Tags Example</h1>
    <p>Check the page source to see all the meta tags in the head section!</p>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'favicon',
    title: 'HTML Favicon',
    content: `
      <h1>HTML Favicon</h1>
      <p>A favicon is a small icon that appears in the browser tab next to the page title. It helps users identify your website visually.</p>

      <h2>How to Add a Favicon</h2>
      <p>Use the <code><link></code> element in the head section to specify your favicon. The most common format is ICO, but PNG and SVG are also supported.</p>

      <h2>Favicon Sizes</h2>
      <p>Different devices and contexts require different favicon sizes. Modern browsers support multiple sizes for optimal display.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use square images (recommended: 32x32, 16x16)</li>
        <li>Keep file size small for fast loading</li>
        <li>Use your brand colors and logo</li>
        <li>Test across different browsers</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website with Favicon</title>

    <!-- Basic favicon -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- PNG favicon -->
    <link rel="icon" href="favicon.png" type="image/png">

    <!-- Multiple sizes for different devices -->
    <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png">

    <!-- Apple touch icon for iOS -->
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <!-- Android/Chrome -->
    <link rel="manifest" href="site.webmanifest">
</head>
<body>
    <h1>Favicon Example</h1>
    <p>Look at the browser tab - you should see a favicon!</p>
    <p>If you don't see one, the browser is using a default icon.</p>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'accessibility',
    title: 'HTML Accessibility',
    content: `
      <h1>HTML Accessibility (a11y)</h1>
      <p>Web accessibility ensures that websites are usable by people with disabilities. HTML provides many built-in features to make content accessible.</p>

      <h2>Key Principles</h2>
      <ul>
        <li><strong>Perceivable</strong> - Information must be presentable in different ways</li>
        <li><strong>Operable</strong> - Interface components must be operable</li>
        <li><strong>Understandable</strong> - Information and operation must be understandable</li>
        <li><strong>Robust</strong> - Content must work with different technologies</li>
      </ul>

      <h2>Essential HTML for Accessibility</h2>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Provide alt text for images</li>
        <li>Associate labels with form controls</li>
        <li>Use proper heading hierarchy</li>
        <li>Ensure sufficient color contrast</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible HTML Example</title>
</head>
<body>
    <header>
        <h1>Accessible Website</h1>
        <nav>
            <ul>
                <li><a href="#main">Skip to main content</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main id="main">
        <section>
            <h2>Contact Form</h2>
            <form>
                <div>
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="name" required aria-describedby="name-help">
                    <span id="name-help">Enter your first and last name</span>
                </div>

                <div>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>

        <section>
            <h2>Image Gallery</h2>
            <figure>
                <img src="landscape.jpg" alt="Beautiful mountain landscape with lake and forest" width="400" height="300">
                <figcaption>A serene mountain landscape captured during sunset</figcaption>
            </figure>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Accessible Website</p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'html5-elements',
    title: 'HTML5 New Elements',
    content: `
      <h1>HTML5 New Elements</h1>
      <p>HTML5 introduced many new semantic elements that provide better structure and meaning to web documents.</p>

      <h2>Structural Elements</h2>
      <ul>
        <li><code><header></code> - Header content</li>
        <li><code><nav></code> - Navigation links</li>
        <li><code><main></code> - Main content</li>
        <li><code><section></code> - Section of content</li>
        <li><code><article></code> - Self-contained content</li>
        <li><code><aside></code> - Sidebar content</li>
        <li><code><footer></code> - Footer content</li>
      </ul>

      <h2>Media Elements</h2>
      <ul>
        <li><code><audio></code> - Audio content</li>
        <li><code><video></code> - Video content</li>
        <li><code><canvas></code> - Graphics canvas</li>
        <li><code><svg></code> - Scalable vector graphics</li>
      </ul>

      <h2>Form Elements</h2>
      <ul>
        <li><code><datalist></code> - Input suggestions</li>
        <li><code><output></code> - Calculation results</li>
        <li><code><progress></code> - Progress indicator</li>
        <li><code><meter></code> - Scalar measurement</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Elements</title>
</head>
<body>
    <header>
        <h1>HTML5 New Elements Demo</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Welcome</h2>
            <article>
                <h3>Introduction to HTML5</h3>
                <p>HTML5 brings many new features and elements to web development.</p>
                <time datetime="2024-01-15">Published on January 15, 2024</time>
            </article>
        </section>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">HTML5 Specification</a></li>
                <li><a href="#">CSS3 Features</a></li>
            </ul>
        </aside>

        <section>
            <h2>Progress Example</h2>
            <p>File upload progress:</p>
            <progress value="70" max="100">70%</progress>

            <p>Storage usage:</p>
            <meter value="0.8" min="0" max="1" low="0.3" high="0.7" optimum="0.5">80%</meter>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 HTML5 Demo. <small>All rights reserved.</small></p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'entities',
    title: 'HTML Entities',
    content: `
      <h1>HTML Entities</h1>
      <p>HTML entities are special codes used to display characters that have special meaning in HTML or characters that are difficult to type.</p>

      <h2>Common Entities</h2>
      <ul>
        <li><code>&amp;lt;</code> - Less than (<)</li>
        <li><code>&amp;gt;</code> - Greater than (>)</li>
        <li><code>&amp;amp;</code> - Ampersand (&amp;)</li>
        <li><code>&amp;quot;</code> - Quotation mark (")</li>
        <li><code>&amp;apos;</code> - Apostrophe (')</li>
        <li><code>&amp;nbsp;</code> - Non-breaking space</li>
        <li><code>&amp;copy;</code> - Copyright symbol (©)</li>
        <li><code>&amp;reg;</code> - Registered trademark (®)</li>
        <li><code>&amp;trade;</code> - Trademark (™)</li>
      </ul>

      <h2>When to Use Entities</h2>
      <p>Use entities when you need to display reserved HTML characters as text, or when you want to include special symbols.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Entities</title>
</head>
<body>
    <h1>HTML Entities Examples</h1>

    <h2>Reserved Characters</h2>
    <p>HTML tags use <angle brackets> like this: <p>Hello</p></p>
    <p>Use &amp;amp; for ampersands in URLs: company.com?a=1&amp;b=2</p>
    <p>Quotes in attributes: <input value="It's "working""></p>

    <h2>Special Symbols</h2>
    <p>Copyright: &copy; 2024 My Company</p>
    <p>Trademark: HTML&trade;</p>
    <p>Registered: MyApp&reg;</p>

    <h2>Typography</h2>
    <p>Fractions: ½, ¼, ¾</p>
    <p>Arrows: ← ↑ → ↓</p>
    <p>Math: × ÷ ± √ ∑ ∏</p>
    <p>Currency: ¢ £ € ¥</p>

    <h2>Spacing</h2>
    <p>Non-breaking space: Word1&nbsp;Word2 (won't break)</p>
    <p>Thin space: Word1&#8201;Word2</p>
    <p>Em space: Word1&emsp;Word2</p>

    <h2>Greek Letters</h2>
    <p>Alpha: &alpha;, Beta: &beta;, Gamma: &gamma;</p>
    <p>Delta: &delta;, Epsilon: &epsilon;, Zeta: &zeta;</p>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'validation',
    title: 'HTML Validation',
    content: `
      <h1>HTML Validation</h1>
      <p>HTML validation ensures that your HTML code follows the correct syntax and standards. Valid HTML is important for browser compatibility and accessibility.</p>

      <h2>Why Validate?</h2>
      <ul>
        <li>Ensures cross-browser compatibility</li>
        <li>Improves accessibility</li>
        <li>Helps with SEO</li>
        <li>Catches syntax errors early</li>
        <li>Follows web standards</li>
      </ul>

      <h2>Validation Tools</h2>
      <ul>
        <li><strong>W3C Validator</strong> - Official HTML validator</li>
        <li><strong>Browser DevTools</strong> - Built-in validation</li>
        <li><strong>ESLint</strong> - Code linting for HTML</li>
        <li><strong>HTMLHint</strong> - HTML-specific linting</li>
      </ul>

      <h2>Common Validation Errors</h2>
      <ul>
        <li>Unclosed tags</li>
        <li>Missing alt attributes on images</li>
        <li>Improper nesting of elements</li>
        <li>Missing doctype declaration</li>
        <li>Invalid attribute values</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valid HTML Example</title>
</head>
<body>
    <header>
        <h1>HTML Validation</h1>
        <nav>
            <ul>
                <li><a href="#quality">Code Quality</a></li>
                <li><a href="#performance">Performance</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#seo">SEO</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Validation Checklist</h2>
            <ul>
                <li>✓ Valid doctype declaration</li>
                <li>✓ Proper character encoding</li>
                <li>✓ Semantic HTML structure</li>
                <li>✓ Alt text on images</li>
                <li>✓ Associated form labels</li>
                <li>✓ Valid attribute values</li>
                <li>✓ Properly nested elements</li>
                <li>✓ No unclosed tags</li>
            </ul>
        </section>

        <section>
            <h2>Test Your HTML</h2>
            <p>Use the <a href="https://validator.w3.org/" target="_blank">W3C Markup Validator</a> to check your HTML code.</p>

            <form>
                <label for="code">Paste your HTML code:</label><br>
                <textarea id="code" name="code" rows="10" cols="60" placeholder="Paste your HTML here..."></textarea><br>
                <button type="submit">Validate HTML</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 HTML Validation Guide</p>
    </footer>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'best-practices',
    title: 'HTML Best Practices',
    content: `
      <h1>HTML Best Practices</h1>
      <p>Following HTML best practices ensures your code is maintainable, accessible, and performs well across all devices and browsers.</p>

      <h2>Code Quality</h2>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Write valid HTML that passes validation</li>
        <li>Use lowercase for element and attribute names</li>
        <li>Always close tags properly</li>
        <li>Use meaningful class and id names</li>
        <li>Keep code well-indented and readable</li>
      </ul>

      <h2>Performance</h2>
      <ul>
        <li>Minimize HTTP requests</li>
        <li>Use appropriate image formats and sizes</li>
        <li>Lazy load images when possible</li>
        <li>Avoid inline styles and scripts</li>
        <li>Use compression for HTML files</li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>Provide alt text for images</li>
        <li>Use proper heading hierarchy</li>
        <li>Associate labels with form controls</li>
        <li>Ensure sufficient color contrast</li>
        <li>Make content keyboard navigable</li>
        <li>Use ARIA attributes when needed</li>
      </ul>

      <h2>SEO</h2>
      <ul>
        <li>Use descriptive page titles</li>
        <li>Include meta descriptions</li>
        <li>Use semantic HTML structure</li>
        <li>Optimize heading hierarchy</li>
        <li>Use descriptive link text</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML best practices for modern web development">
    <meta name="keywords" content="HTML, best practices, web development, accessibility">
    <title>HTML Best Practices Guide</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header role="banner">
        <h1>HTML Best Practices</h1>
        <nav role="navigation">
            <ul>
                <li><a href="#quality">Code Quality</a></li>
                <li><a href="#performance">Performance</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#seo">SEO</a></li>
            </ul>
        </nav>
    </header>

    <main role="main">
        <article>
            <section id="quality">
                <h2>Code Quality</h2>
                <p>Write clean, maintainable HTML code that follows standards.</p>
                <figure>
                    <img src="code-quality.jpg" alt="Illustration of clean code structure" width="400" height="300">
                    <figcaption>Clean, well-structured HTML code</figcaption>
                </figure>
            </section>

            <section id="performance">
                <h2>Performance Optimization</h2>
                <p>Optimize your HTML for fast loading and rendering.</p>
            </section>

            <section id="accessibility">
                <h2>Web Accessibility</h2>
                <p>Make your website usable for everyone, including people with disabilities.</p>
            </section>

            <section id="seo">
                <h2>Search Engine Optimization</h2>
                <p>Help search engines understand and rank your content.</p>
            </section>
        </article>
    </main>

    <footer role="contentinfo">
        <p>&copy; 2024 HTML Best Practices Guide. <a href="#top">Back to top</a></p>
    </footer>

    <script src="script.js" defer></script>
</body>
</html>`,
    difficulty: 'Beginner'
  }
];
