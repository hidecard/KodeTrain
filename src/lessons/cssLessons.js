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
    difficulty: 'Intermediate'
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
    difficulty: 'Intermediate'
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
    difficulty: 'Intermediate'
  }
];
