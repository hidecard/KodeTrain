export const cssLessons = [
  {
    id: 'intro',
    title: 'CSS Introduction',
    content: `
      <h1>What is CSS?</h1>
      <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>

      <h2>Basic CSS Syntax</h2>
      <p>CSS rules consist of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to CSS!</h1>
        <p>This is a paragraph styled with CSS.</p>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'selectors',
    title: 'CSS Selectors',
    content: `
      <h1>CSS Selectors</h1>
      <p>CSS selectors are patterns used to select the elements you want to style. There are several types of selectors available in CSS.</p>

      <h2>Basic Selectors</h2>
      <ul>
        <li><strong>Element selector:</strong> Selects all elements of a given type (e.g., <code>p</code>, <code>h1</code>)</li>
        <li><strong>Class selector:</strong> Selects elements with a specific class (e.g., <code>.classname</code>)</li>
        <li><strong>ID selector:</strong> Selects a single element with a specific ID (e.g., <code>#idname</code>)</li>
        <li><strong>Universal selector:</strong> Selects all elements (e.g., <code>*</code>)</li>
      </ul>

      <h2>Combinator Selectors</h2>
      <ul>
        <li><strong>Descendant selector:</strong> Selects all descendants (e.g., <code>div p</code>)</li>
        <li><strong>Child selector:</strong> Selects direct children (e.g., <code>div > p</code>)</li>
        <li><strong>Adjacent sibling selector:</strong> Selects the next sibling (e.g., <code>h1 + p</code>)</li>
        <li><strong>General sibling selector:</strong> Selects all following siblings (e.g., <code>h1 ~ p</code>)</li>
      </ul>

      <h2>Pseudo-classes and Pseudo-elements</h2>
      <ul>
        <li><strong>:hover</strong> - Selects elements when mouse is over them</li>
        <li><strong>:focus</strong> - Selects elements when they have focus</li>
        <li><strong>:first-child</strong> - Selects the first child of its parent</li>
        <li><strong>::before</strong> - Inserts content before an element</li>
        <li><strong>::after</strong> - Inserts content after an element</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectors</title>
    <style>
        /* Element selector */
        p {
            color: blue;
        }

        /* Class selector */
        .highlight {
            background-color: yellow;
        }

        /* ID selector */
        #main-title {
            font-size: 2em;
        }

        /* Descendant selector */
        .container p {
            margin: 10px;
        }

        /* Pseudo-class */
        a:hover {
            color: red;
        }

        /* Pseudo-element */
        .quote::before {
            content: '"';
            font-size: 2em;
        }
    </style>
</head>
<body>
    <h1 id="main-title">CSS Selectors Demo</h1>
    <div class="container">
        <p>This paragraph is styled with an element selector.</p>
        <p class="highlight">This paragraph has a highlight class.</p>
        <p class="quote">This is a quoted paragraph.</p>
        <a href="#">Hover over this link</a>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'colors',
    title: 'CSS Colors',
    content: `
      <h1>CSS Colors</h1>
      <p>CSS provides several ways to specify colors for HTML elements. You can use color names, hexadecimal values, RGB, RGBA, HSL, and HSLA values.</p>

      <h2>Color Formats</h2>
      <ul>
        <li><strong>Color names:</strong> red, blue, green, etc.</li>
        <li><strong>Hexadecimal:</strong> #RRGGBB or #RGB</li>
        <li><strong>RGB:</strong> rgb(red, green, blue)</li>
        <li><strong>RGBA:</strong> rgb(red, green, blue, alpha)</li>
        <li><strong>HSL:</strong> hsl(hue, saturation, lightness)</li>
        <li><strong>HSLA:</strong> hsl(hue, saturation, lightness, alpha)</li>
      </ul>

      <h2>Color Properties</h2>
      <ul>
        <li><strong>color:</strong> Text color</li>
        <li><strong>background-color:</strong> Background color</li>
        <li><strong>border-color:</strong> Border color</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Colors</title>
    <style>
        .color-demo {
            padding: 20px;
            margin: 10px;
            border: 2px solid #333;
        }

        .red-bg {
            background-color: red;
            color: white;
        }

        .hex-bg {
            background-color: #4CAF50;
            color: white;
        }

        .rgb-bg {
            background-color: rgb(255, 165, 0);
            color: white;
        }

        .rgba-bg {
            background-color: rgba(0, 123, 255, 0.8);
            color: white;
        }

        .hsl-bg {
            background-color: hsl(120, 100%, 50%);
            color: white;
        }

        .hsla-bg {
            background-color: hsla(240, 100%, 50%, 0.7);
            color: white;
        }
    </style>
</head>
<body>
    <h1>CSS Color Examples</h1>
    <div class="color-demo red-bg">Red background (color name)</div>
    <div class="color-demo hex-bg">Green background (hex)</div>
    <div class="color-demo rgb-bg">Orange background (RGB)</div>
    <div class="color-demo rgba-bg">Blue background (RGBA)</div>
    <div class="color-demo hsl-bg">Green background (HSL)</div>
    <div class="color-demo hsla-bg">Blue background (HSLA)</div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'backgrounds',
    title: 'CSS Backgrounds',
    content: `
      <h1>CSS Background Properties</h1>
      <p>CSS background properties allow you to control the background of elements. You can set colors, images, gradients, and more.</p>

      <h2>Background Properties</h2>
      <ul>
        <li><strong>background-color:</strong> Sets the background color</li>
        <li><strong>background-image:</strong> Sets a background image</li>
        <li><strong>background-repeat:</strong> Controls how background images repeat</li>
        <li><strong>background-position:</strong> Sets the position of background images</li>
        <li><strong>background-size:</strong> Controls the size of background images</li>
        <li><strong>background-attachment:</strong> Controls if background scrolls with content</li>
      </ul>

      <h2>Background Shorthand</h2>
      <p>You can combine all background properties into one declaration using the <code>background</code> shorthand property.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Backgrounds</title>
    <style>
        .bg-demo {
            height: 150px;
            margin: 20px;
            border: 2px solid #333;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .bg-color {
            background-color: #4CAF50;
        }

        .bg-image {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text fill="white" font-size="20" y="50%">Pattern</text></svg>');
            background-repeat: repeat;
        }

        .bg-gradient {
            background: linear-gradient(to right, #ff0000, #ffff00);
        }

        .bg-fixed {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white" opacity="0.3"/></svg>');
            background-attachment: fixed;
            background-repeat: repeat;
        }
    </style>
</head>
<body>
    <h1>CSS Background Examples</h1>
    <div class="bg-demo bg-color">Solid Color Background</div>
    <div class="bg-demo bg-image">Pattern Background</div>
    <div class="bg-demo bg-gradient">Gradient Background</div>
    <div class="bg-demo bg-fixed">Fixed Background</div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'fonts',
    title: 'CSS Fonts',
    content: `
      <h1>CSS Font Properties</h1>
      <p>CSS font properties allow you to control the appearance of text on your web pages. You can set font families, sizes, weights, and more.</p>

      <h2>Font Properties</h2>
      <ul>
        <li><strong>font-family:</strong> Specifies the font family</li>
        <li><strong>font-size:</strong> Sets the font size</li>
        <li><strong>font-weight:</strong> Sets the font weight (normal, bold, etc.)</li>
        <li><strong>font-style:</strong> Sets the font style (normal, italic, oblique)</li>
        <li><strong>line-height:</strong> Sets the line height</li>
        <li><strong>text-align:</strong> Aligns text horizontally</li>
        <li><strong>text-decoration:</strong> Adds decorations to text</li>
      </ul>

      <h2>Web Fonts</h2>
      <p>You can use web fonts from services like Google Fonts to expand your typography options.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Fonts</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        .font-demo {
            margin: 20px 0;
            padding: 20px;
            border: 1px solid #ddd;
        }

        .serif {
            font-family: 'Times New Roman', serif;
        }

        .sans-serif {
            font-family: 'Arial', sans-serif;
        }

        .monospace {
            font-family: 'Courier New', monospace;
        }

        .web-font {
            font-family: 'Roboto', sans-serif;
        }

        .bold {
            font-weight: bold;
        }

        .italic {
            font-style: italic;
        }

        .large {
            font-size: 1.5em;
        }

        .underline {
            text-decoration: underline;
        }

        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>CSS Font Examples</h1>

    <div class="font-demo serif">
        <p>This is serif font (Times New Roman)</p>
    </div>

    <div class="font-demo sans-serif">
        <p>This is sans-serif font (Arial)</p>
    </div>

    <div class="font-demo monospace">
        <p>This is monospace font (Courier New)</p>
    </div>

    <div class="font-demo web-font">
        <p>This is a web font (Roboto from Google Fonts)</p>
    </div>

    <div class="font-demo">
        <p class="bold">This text is bold</p>
        <p class="italic">This text is italic</p>
        <p class="large">This text is larger</p>
        <p class="underline">This text is underlined</p>
        <p class="center">This text is centered</p>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'box-model',
    title: 'CSS Box Model',
    content: `
      <h1>CSS Box Model</h1>
      <p>The CSS box model is a fundamental concept in CSS layout. Every HTML element is treated as a rectangular box with content, padding, border, and margin.</p>

      <h2>Box Model Components</h2>
      <ul>
        <li><strong>Content:</strong> The actual content of the element (text, images, etc.)</li>
        <li><strong>Padding:</strong> Space between content and border</li>
        <li><strong>Border:</strong> A border around the padding</li>
        <li><strong>Margin:</strong> Space outside the border</li>
      </ul>

      <h2>Box Model Properties</h2>
      <ul>
        <li><strong>width/height:</strong> Content dimensions</li>
        <li><strong>padding:</strong> Padding on all sides or individual sides</li>
        <li><strong>border:</strong> Border width, style, and color</li>
        <li><strong>margin:</strong> Margin on all sides or individual sides</li>
        <li><strong>box-sizing:</strong> Changes how width/height are calculated</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Box Model</title>
    <style>
        .box-model-demo {
            width: 200px;
            padding: 20px;
            border: 5px solid #333;
            margin: 20px;
            background-color: lightblue;
        }

        .content-box {
            box-sizing: content-box;
            background-color: lightgreen;
        }

        .border-box {
            box-sizing: border-box;
            background-color: lightcoral;
        }

        .explanation {
            margin: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 4px solid #333;
        }
    </style>
</head>
<body>
    <h1>CSS Box Model</h1>

    <div class="explanation">
        <strong>Box Model:</strong> Content → Padding → Border → Margin
    </div>

    <div class="box-model-demo content-box">
        <h3>Content Box (default)</h3>
        <p>Width: 200px + padding + border = total width</p>
    </div>

    <div class="box-model-demo border-box">
        <h3>Border Box</h3>
        <p>Width: 200px includes padding and border</p>
    </div>

    <div class="explanation">
        <strong>box-sizing: border-box</strong> makes layout calculations easier!
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'display',
    title: 'CSS Display',
    content: `
      <h1>CSS Display Property</h1>
      <p>The display property specifies the display behavior (the type of rendering box) of an element.</p>

      <h2>Common Display Values</h2>
      <ul>
        <li><strong>block:</strong> Takes full width, starts on new line</li>
        <li><strong>inline:</strong> Takes only necessary width, doesn't start new line</li>
        <li><strong>inline-block:</strong> Like inline but can have width/height</li>
        <li><strong>none:</strong> Hides the element completely</li>
        <li><strong>flex:</strong> Enables flexbox layout</li>
        <li><strong>grid:</strong> Enables grid layout</li>
      </ul>
    `,
    example: `<div class="block-example" style="display: block; background: lightblue; padding: 10px; margin: 5px;">
  Block element
</div>
<span class="inline-example" style="display: inline; background: lightgreen; padding: 10px; margin: 5px;">
  Inline element
</span>
<span class="inline-block-example" style="display: inline-block; background: lightcoral; padding: 10px; margin: 5px;">
  Inline-block element
</span>`,
    difficulty: 'Beginner'
  },
  {
    id: 'position',
    title: 'CSS Position',
    content: `
      <h1>CSS Positioning</h1>
      <p>The position property specifies the type of positioning method used for an element.</p>

      <h2>Position Values</h2>
      <ul>
        <li><strong>static:</strong> Default positioning (normal flow)</li>
        <li><strong>relative:</strong> Positioned relative to its normal position</li>
        <li><strong>absolute:</strong> Positioned relative to nearest positioned ancestor</li>
        <li><strong>fixed:</strong> Positioned relative to the viewport</li>
        <li><strong>sticky:</strong> Switches between relative and fixed based on scroll</li>
      </ul>
    `,
    example: `<div style="position: relative; width: 300px; height: 200px; border: 2px solid black;">
  <div style="position: absolute; top: 10px; right: 10px; background: red; padding: 10px;">
    Absolute positioned
  </div>
  <div style="position: relative; top: 50px; left: 20px; background: blue; padding: 10px;">
    Relative positioned
  </div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'flexbox',
    title: 'CSS Flexbox',
    content: `
      <h1>CSS Flexbox Layout</h1>
      <p>Flexbox is a one-dimensional layout method for laying out items in rows or columns. It provides a more efficient way to lay out, align and distribute space among items in a container.</p>

      <h2>Flex Container Properties</h2>
      <ul>
        <li><strong>display: flex:</strong> Creates a flex container</li>
        <li><strong>flex-direction:</strong> Defines the direction of flex items</li>
        <li><strong>justify-content:</strong> Aligns items horizontally</li>
        <li><strong>align-items:</strong> Aligns items vertically</li>
        <li><strong>flex-wrap:</strong> Controls wrapping of flex items</li>
      </ul>

      <h2>Flex Item Properties</h2>
      <ul>
        <li><strong>flex-grow:</strong> Defines how much a flex item will grow</li>
        <li><strong>flex-shrink:</strong> Defines how much a flex item will shrink</li>
        <li><strong>flex-basis:</strong> Defines the default size of a flex item</li>
        <li><strong>flex:</strong> Shorthand for grow, shrink, and basis</li>
        <li><strong>align-self:</strong> Overrides container's align-items for individual item</li>
      </ul>
    `,
    example: `<div style="display: flex; justify-content: space-between; align-items: center; height: 100px; border: 1px solid black; padding: 10px;">
  <div style="background: lightblue; padding: 20px;">Item 1</div>
  <div style="background: lightgreen; padding: 20px;">Item 2</div>
  <div style="background: lightcoral; padding: 20px;">Item 3</div>
</div>

<div style="display: flex; flex-direction: column; height: 200px; border: 1px solid black; margin-top: 20px;">
  <div style="background: lightyellow; padding: 20px; flex: 1;">Flex: 1</div>
  <div style="background: lightpink; padding: 20px; flex: 2;">Flex: 2</div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'grid',
    title: 'CSS Grid',
    content: `
      <h1>CSS Grid Layout</h1>
      <p>CSS Grid is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p>

      <h2>Grid Container Properties</h2>
      <ul>
        <li><strong>display: grid:</strong> Creates a grid container</li>
        <li><strong>grid-template-columns:</strong> Defines column tracks</li>
        <li><strong>grid-template-rows:</strong> Defines row tracks</li>
        <li><strong>gap:</strong> Sets spacing between grid items</li>
        <li><strong>justify-items:</strong> Aligns items horizontally in their grid area</li>
        <li><strong>align-items:</strong> Aligns items vertically in their grid area</li>
      </ul>

      <h2>Grid Item Properties</h2>
      <ul>
        <li><strong>grid-column:</strong> Specifies which column(s) to place the item in</li>
        <li><strong>grid-row:</strong> Specifies which row(s) to place the item in</li>
        <li><strong>grid-area:</strong> Shorthand for grid-row-start, grid-column-start, etc.</li>
      </ul>
    `,
    example: `<div style="display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 10px; height: 200px; border: 1px solid black; padding: 10px;">
  <div style="background: lightblue; padding: 20px;">Header</div>
  <div style="background: lightgreen; padding: 20px;">Main Content</div>
  <div style="background: lightcoral; padding: 20px;">Sidebar</div>
  <div style="background: lightyellow; padding: 20px;">Footer</div>
  <div style="background: lightpink; padding: 20px;">Footer 2</div>
  <div style="background: lightcyan; padding: 20px;">Footer 3</div>
</div>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 100px 200px; gap: 15px; margin-top: 20px;">
  <div style="background: #ff6b6b; grid-column: span 2;">Wide item</div>
  <div style="background: #4ecdc4;">Normal item</div>
  <div style="background: #45b7d1;">Normal item</div>
  <div style="background: #96ceb4;">Normal item</div>
  <div style="background: #ffeaa7; grid-row: span 2;">Tall item</div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'responsive',
    title: 'CSS Responsive Design',
    content: `
      <h1>CSS Responsive Design</h1>
      <p>Responsive design makes web pages look good on all devices. It uses media queries to apply different styles for different screen sizes.</p>

      <h2>Media Queries</h2>
      <p>Media queries allow you to apply CSS rules based on device characteristics like screen width, height, orientation, etc.</p>

      <h2>Breakpoints</h2>
      <ul>
        <li><strong>Mobile:</strong> Up to 768px</li>
        <li><strong>Tablet:</strong> 768px to 1024px</li>
        <li><strong>Desktop:</strong> 1024px and above</li>
      </ul>

      <h2>Responsive Techniques</h2>
      <ul>
        <li><strong>Fluid layouts:</strong> Use percentages instead of fixed widths</li>
        <li><strong>Flexible images:</strong> Images that scale with their container</li>
        <li><strong>Media queries:</strong> Apply different styles at different breakpoints</li>
        <li><strong>Mobile-first approach:</strong> Design for mobile first, then enhance for larger screens</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
    <style>
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .responsive-grid {
            display: grid;
            gap: 20px;
        }

        /* Mobile first */
        .responsive-grid {
            grid-template-columns: 1fr;
        }

        /* Tablet */
        @media (min-width: 768px) {
            .responsive-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Desktop */
        @media (min-width: 1024px) {
            .responsive-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        img {
            max-width: 100%;
            height: auto;
        }

        .menu {
            display: none;
        }

        .hamburger {
            display: block;
            background: #333;
            color: white;
            padding: 10px;
            cursor: pointer;
        }

        @media (min-width: 768px) {
            .menu {
                display: flex;
                gap: 20px;
            }

            .hamburger {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="hamburger">☰ Menu</div>
            <nav class="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>

        <div class="responsive-grid">
            <div class="card">
                <h3>Card 1</h3>
                <p>This card will stack on mobile, 2 per row on tablet, 3 per row on desktop.</p>
            </div>
            <div class="card">
                <h3>Card 2</h3>
                <p>Responsive design ensures good user experience across all devices.</p>
            </div>
            <div class="card">
                <h3>Card 3</h3>
                <p>Use media queries to create breakpoints for different screen sizes.</p>
            </div>
        </div>
    </div>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    content: `
      <h1>CSS Animations</h1>
      <p>CSS animations allow you to animate HTML elements without using JavaScript. You can create smooth transitions between different CSS property values.</p>

      <h2>Animation Properties</h2>
      <ul>
        <li><strong>animation-name:</strong> Specifies the name of the keyframe animation</li>
        <li><strong>animation-duration:</strong> Sets how long the animation takes</li>
        <li><strong>animation-timing-function:</strong> Specifies the speed curve</li>
        <li><strong>animation-delay:</strong> Delays the start of the animation</li>
        <li><strong>animation-iteration-count:</strong> Sets how many times to play</li>
        <li><strong>animation-direction:</strong> Specifies direction (normal, reverse, alternate)</li>
        <li><strong>animation-fill-mode:</strong> Specifies what happens before/after animation</li>
      </ul>

      <h2>Keyframes</h2>
      <p>Keyframes define the animation sequence using the <code>@keyframes</code> rule. You specify the animation's start and end states, and optionally intermediate states.</p>

      <h2>@keyframes Syntax</h2>
      <p>The <code>@keyframes</code> rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another.</p>

      <h2>Animation Timing</h2>
      <ul>
        <li><code>from</code> - Starting point (equivalent to 0%)</li>
        <li><code>to</code> - Ending point (equivalent to 100%)</li>
        <li>Percentage values - Intermediate points (e.g., 25%, 50%, 75%)</li>
      </ul>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Animations</title>
    <style>
        .animated-box {
            width: 100px;
            height: 100px;
            background-color: #4CAF50;
            position: relative;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0% {
                transform: translateY(0);
                background-color: #4CAF50;
            }
            25% {
                transform: translateY(-50px);
                background-color: #2196F3;
            }
            50% {
                transform: translateY(0);
                background-color: #FF9800;
            }
            75% {
                transform: translateY(-25px);
                background-color: #E91E63;
            }
            100% {
                transform: translateY(0);
                background-color: #4CAF50;
            }
        }

        .fade-in {
            animation: fadeIn 3s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .slide-in {
            animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .rotate {
            animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    </style>
</head>
<body>
    <h1>CSS Animation Examples</h1>

    <div class="animated-box"></div>

    <h2>Fade In Animation</h2>
    <p class="fade-in">This text fades in when the page loads.</p>

    <h2>Slide In Animation</h2>
    <div class="slide-in" style="background: lightblue; padding: 20px; margin: 20px;">
        This div slides in from the left.
    </div>

    <h2>Rotation Animation</h2>
    <div class="rotate" style="width: 50px; height: 50px; background: red; margin: 20px;"></div>

    <h2>Multiple Animations</h2>
    <div style="animation: bounce 2s infinite, rotate 3s linear infinite; width: 100px; height: 100px; background: purple; margin: 20px;"></div>
</body>
</html>`,
    difficulty: 'Beginner'
  }
];
