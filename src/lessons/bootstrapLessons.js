export const bootstrapLessons = [
  {
    id: 'intro',
    title: 'Bootstrap Introduction',
    content: `
      <h1>What is Bootstrap?</h1>
      <p>Bootstrap is a popular CSS framework for developing responsive and mobile-first websites. It provides a collection of CSS and JavaScript tools for creating responsive layouts, components, and utilities that work across all modern browsers.</p>

      <h2>Bootstrap Grid System</h2>
      <p>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. The grid system is based on 12 columns and provides responsive breakpoints for different screen sizes.</p>

      <h2>Bootstrap Components</h2>
      <p>Bootstrap comes with many pre-built components like buttons, cards, modals, navigation bars, and more. These components are designed to be responsive and customizable.</p>
    `,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Welcome to Bootstrap!</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">This is a Bootstrap card component.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="alert alert-success" role="alert">
                    This is a success alert!
                </div>
                <button type="button" class="btn btn-secondary">Secondary Button</button>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
    difficulty: 'Intermediate'
  }
];
