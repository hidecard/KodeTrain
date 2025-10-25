export const bootstrapLessons = [
  {
    id: 'bootstrap-intro',
    title: 'Bootstrap Introduction',
    content: `
      <h1>What is Bootstrap?</h1>
      <p>Bootstrap is a popular CSS framework for building responsive, mobile-first websites. It provides pre-built components and utilities that make web development faster and easier.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Responsive grid system</li>
        <li>Pre-built components (buttons, forms, navigation)</li>
        <li>Utility classes for common styling tasks</li>
        <li>JavaScript plugins for interactive elements</li>
        <li>Customizable with Sass variables</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Include Bootstrap CSS and JS in your HTML file using CDN links or download the files locally.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Hello, Bootstrap!</h1>
        <button class="btn btn-primary">Click me</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-grid',
    title: 'Bootstrap Grid System',
    content: `
      <h1>Bootstrap Grid System</h1>
      <p>The Bootstrap grid system uses containers, rows, and columns to layout content. It's based on flexbox and is fully responsive.</p>

      <h2>Grid Components</h2>
      <ul>
        <li><code>.container</code> - Fixed-width container</li>
        <li><code>.container-fluid</code> - Full-width container</li>
        <li><code>.row</code> - Horizontal group of columns</li>
        <li><code>.col</code> - Column classes (col-1 to col-12)</li>
      </ul>

      <h2>Responsive Breakpoints</h2>
      <ul>
        <li><code>col-</code> - Extra small (xs)</li>
        <li><code>col-sm-</code> - Small (≥576px)</li>
        <li><code>col-md-</code> - Medium (≥768px)</li>
        <li><code>col-lg-</code> - Large (≥992px)</li>
        <li><code>col-xl-</code> - Extra large (≥1200px)</li>
        <li><code>col-xxl-</code> - Extra extra large (≥1400px)</li>
      </ul>
    `,
    example: `<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h3>Column 1</h3>
      <p>This is the first column.</p>
    </div>
    <div class="col-md-4">
      <h3>Column 2</h3>
      <p>This is the second column.</p>
    </div>
    <div class="col-md-4">
      <h3>Column 3</h3>
      <p>This is the third column.</p>
    </div>
  </div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-components',
    title: 'Bootstrap Components',
    content: `
      <h1>Bootstrap Components</h1>
      <p>Bootstrap provides many pre-built components for common UI elements like buttons, forms, navigation, and more.</p>

      <h2>Common Components</h2>
      <ul>
        <li>Buttons (.btn, .btn-primary, etc.)</li>
        <li>Alerts (.alert)</li>
        <li>Badges (.badge)</li>
        <li>Cards (.card)</li>
        <li>Modals (.modal)</li>
        <li>Navigation (.navbar)</li>
        <li>Forms (.form-control, .form-group)</li>
      </ul>
    `,
    example: `<div class="container">
  <h2>Buttons</h2>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>

  <h2>Alert</h2>
  <div class="alert alert-info" role="alert">
    This is an info alert!
  </div>

  <h2>Card</h2>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">Some quick example text.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-utilities',
    title: 'Bootstrap Utilities',
    content: `
      <h1>Bootstrap Utilities</h1>
      <p>Bootstrap utilities are helper classes that provide common styling and layout options without writing custom CSS.</p>

      <h2>Common Utilities</h2>
      <ul>
        <li>Spacing (.m-*, .p-*, .mt-*, .mb-*, etc.)</li>
        <li>Colors (.text-*, .bg-*)</li>
        <li>Display (.d-none, .d-block, .d-flex)</li>
        <li>Flexbox (.justify-content-*, .align-items-*)</li>
        <li>Positioning (.position-*, .fixed-top)</li>
        <li>Borders (.border, .border-top)</li>
        <li>Shadows (.shadow, .shadow-lg)</li>
      </ul>
    `,
    example: `<div class="container">
  <div class="bg-light p-3 mb-3">
    <h3 class="text-primary">Utility Classes Demo</h3>
    <p class="text-muted">This text uses utility classes for styling.</p>
  </div>

  <div class="d-flex justify-content-between align-items-center bg-secondary text-white p-3">
    <span>Left content</span>
    <span>Right content</span>
  </div>

  <div class="mt-4 p-3 border rounded shadow">
    <h4>Card-like element</h4>
    <p>Created with utility classes only.</p>
  </div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-forms',
    title: 'Bootstrap Forms',
    content: `
      <h1>Bootstrap Forms</h1>
      <p>Bootstrap provides comprehensive styling for form elements, making them responsive and visually appealing.</p>

      <h2>Form Classes</h2>
      <ul>
        <li><code>.form-control</code> - For input, textarea, select</li>
        <li><code>.form-group</code> - Groups form controls</li>
        <li><code>.form-label</code> - Labels for form controls</li>
        <li><code>.form-check</code> - For checkboxes and radio buttons</li>
        <li><code>.btn</code> - For submit buttons</li>
      </ul>
    `,
    example: `<div class="container">
  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com">
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password">
    </div>

    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="remember">
      <label class="form-check-label" for="remember">Remember me</label>
    </div>

    <button type="submit" class="btn btn-primary">Sign In</button>
  </form>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-navbar',
    title: 'Bootstrap Navbar',
    content: `
      <h1>Bootstrap Navbar</h1>
      <p>The Bootstrap navbar component provides responsive navigation headers for your website.</p>

      <h2>Navbar Classes</h2>
      <ul>
        <li><code>.navbar</code> - Main navbar container</li>
        <li><code>.navbar-brand</code> - Brand/logo</li>
        <li><code>.navbar-nav</code> - Navigation links container</li>
        <li><code>.nav-link</code> - Individual navigation links</li>
        <li><code>.navbar-toggler</code> - Mobile menu toggle</li>
      </ul>
    `,
    example: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">MySite</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`,
    difficulty: 'Intermediate'
  },
  {
    id: 'bootstrap-cards',
    title: 'Bootstrap Cards',
    content: `
      <h1>Bootstrap Cards</h1>
      <p>Cards are flexible content containers that can display various types of content like images, text, and links.</p>

      <h2>Card Structure</h2>
      <ul>
        <li><code>.card</code> - Card container</li>
        <li><code>.card-header</code> - Card header</li>
        <li><code>.card-body</code> - Card content</li>
        <li><code>.card-footer</code> - Card footer</li>
        <li><code>.card-img-top</code> - Image at top of card</li>
      </ul>
    `,
    example: `<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img src="image1.jpg" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">Card Title 1</h5>
          <p class="card-text">Some quick example text for the first card.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card Title 2</h5>
          <p class="card-text">Some quick example text for the second card.</p>
          <a href="#" class="btn btn-secondary">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</div>`,
    difficulty: 'Beginner'
  },
  {
    id: 'bootstrap-modals',
    title: 'Bootstrap Modals',
    content: `
      <h1>Bootstrap Modals</h1>
      <p>Modals are dialog boxes that overlay the current page. They're useful for displaying additional content or forms.</p>

      <h2>Modal Structure</h2>
      <ul>
        <li><code>.modal</code> - Modal container</li>
        <li><code>.modal-dialog</code> - Modal dialog wrapper</li>
        <li><code>.modal-content</code> - Modal content</li>
        <li><code>.modal-header</code> - Modal header</li>
        <li><code>.modal-body</code> - Modal body</li>
        <li><code>.modal-footer</code> - Modal footer</li>
      </ul>
    `,
    example: `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,
    difficulty: 'Intermediate'
  },
  {
    id: 'bootstrap-responsive',
    title: 'Bootstrap Responsive Design',
    content: `
      <h1>Bootstrap Responsive Design</h1>
      <p>Bootstrap's responsive utilities and grid system help create websites that work on all device sizes.</p>

      <h2>Responsive Utilities</h2>
      <ul>
        <li><code>.d-none .d-sm-block</code> - Hide/show on different screen sizes</li>
        <li><code>.text-center .text-md-left</code> - Responsive text alignment</li>
        <li><code>.w-100 .w-md-50</code> - Responsive widths</li>
      </ul>

      <h2>Breakpoint Classes</h2>
      <p>Use breakpoint prefixes to apply styles at specific screen sizes.</p>
    `,
    example: `<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">
      <h2>Main Content</h2>
      <p>This column takes full width on mobile and 8/12 on medium screens and up.</p>
    </div>
    <div class="col-12 col-md-4">
      <h2>Sidebar</h2>
      <p>This column takes full width on mobile and 4/12 on medium screens and up.</p>
    </div>
  </div>

  <div class="d-block d-md-none bg-info p-3 mt-3">
    <p>This content only shows on mobile devices.</p>
  </div>

  <div class="d-none d-md-block bg-success p-3 mt-3">
    <p>This content only shows on medium screens and larger.</p>
  </div>
</div>`,
    difficulty: 'Intermediate'
  }
];
