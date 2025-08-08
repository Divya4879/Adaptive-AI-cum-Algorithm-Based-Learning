// Complete 200 Questions - All Subjects Combined for Reliable Deployment
console.log('🔄 Loading complete question database...');

// Frontend Web Development Questions
// Frontend Web Development - 50 Questions (5 per level, 10 levels)
const FRONTEND_QUESTIONS = [
    // Level 1 - Basic HTML/CSS
    {
        id: 1,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct_answer: "<a>",
        question_type: "multiple_choice"
    },
    {
        id: 2,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correct_answer: "Cascading Style Sheets",
        question_type: "multiple_choice"
    },
    {
        id: 3,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which attribute makes an input field required?",
        options: ["required", "mandatory", "needed", "must"],
        correct_answer: "required",
        question_type: "multiple_choice"
    },
    {
        id: 4,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<header>"],
        correct_answer: "<h1>",
        question_type: "multiple_choice"
    },
    {
        id: 5,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which CSS property is used to change the text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correct_answer: "color",
        question_type: "multiple_choice"
    },

    // Level 2 - Intermediate HTML/CSS
    {
        id: 6,
        subject: "frontend_web_dev",
        difficulty_level: 2,
        question_text: "What is the CSS box model?",
        options: ["Content, Padding, Border, Margin", "Header, Body, Footer", "HTML, CSS, JS", "Width, Height, Position"],
        correct_answer: "Content, Padding, Border, Margin",
        question_type: "multiple_choice"
    },
    {
        id: 7,
        subject: "frontend_web_dev",
        difficulty_level: 2,
        question_text: "Which CSS property is used for responsive design?",
        options: ["@media queries", "flex-wrap", "grid-template", "responsive"],
        correct_answer: "@media queries",
        question_type: "multiple_choice"
    },
    {
        id: 8,
        subject: "frontend_web_dev",
        difficulty_level: 2,
        question_text: "What is the purpose of the 'alt' attribute in img tags?",
        options: ["Alternative text for screen readers and accessibility", "Alignment", "Animation", "Automatic loading"],
        correct_answer: "Alternative text for screen readers and accessibility",
        question_type: "multiple_choice"
    },
    {
        id: 9,
        subject: "frontend_web_dev",
        difficulty_level: 2,
        question_text: "Which CSS display property removes an element from the document flow?",
        options: ["none", "hidden", "invisible", "remove"],
        correct_answer: "none",
        question_type: "multiple_choice"
    },
    {
        id: 10,
        subject: "frontend_web_dev",
        difficulty_level: 2,
        question_text: "What is the difference between margin and padding?",
        options: ["Margin is outside border, padding is inside", "Margin is inside, padding is outside", "They are the same", "Margin is for text, padding is for images"],
        correct_answer: "Margin is outside border, padding is inside",
        question_type: "multiple_choice"
    },

    // Level 3 - Basic JavaScript
    {
        id: 11,
        subject: "frontend_web_dev",
        difficulty_level: 3,
        question_text: "Which JavaScript method adds an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correct_answer: "push()",
        question_type: "multiple_choice"
    },
    {
        id: 12,
        subject: "frontend_web_dev",
        difficulty_level: 3,
        question_text: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Dynamic Object Model", "Document Oriented Model"],
        correct_answer: "Document Object Model",
        question_type: "multiple_choice"
    },
    {
        id: 13,
        subject: "frontend_web_dev",
        difficulty_level: 3,
        question_text: "How do you declare a variable in JavaScript?",
        options: ["var, let, or const", "variable", "declare", "dim"],
        correct_answer: "var, let, or const",
        question_type: "multiple_choice"
    },
    {
        id: 14,
        subject: "frontend_web_dev",
        difficulty_level: 3,
        question_text: "Which method is used to select an element by ID in JavaScript?",
        options: ["getElementById()", "selectById()", "getElement()", "findById()"],
        correct_answer: "getElementById()",
        question_type: "multiple_choice"
    },
    {
        id: 15,
        subject: "frontend_web_dev",
        difficulty_level: 3,
        question_text: "What is the correct way to write a JavaScript array?",
        options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correct_answer: "var colors = ['red', 'green', 'blue']",
        question_type: "multiple_choice"
    },

    // Level 4 - Intermediate JavaScript
    {
        id: 16,
        subject: "frontend_web_dev",
        difficulty_level: 4,
        question_text: "What is event bubbling in JavaScript?",
        options: ["Events propagate from child to parent elements", "Events propagate from parent to child", "Events occur simultaneously", "Events are cancelled"],
        correct_answer: "Events propagate from child to parent elements",
        question_type: "multiple_choice"
    },
    {
        id: 17,
        subject: "frontend_web_dev",
        difficulty_level: 4,
        question_text: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        correct_answer: "pop()",
        question_type: "multiple_choice"
    },
    {
        id: 18,
        subject: "frontend_web_dev",
        difficulty_level: 4,
        question_text: "What is the difference between '==' and '===' in JavaScript?",
        options: ["== compares values, === compares values and types", "They are identical", "=== is for strings only", "== is deprecated"],
        correct_answer: "== compares values, === compares values and types",
        question_type: "multiple_choice"
    },
    {
        id: 19,
        subject: "frontend_web_dev",
        difficulty_level: 4,
        question_text: "What is a closure in JavaScript?",
        options: ["A function that has access to variables in its outer scope", "A way to close the browser", "A method to end loops", "A CSS property"],
        correct_answer: "A function that has access to variables in its outer scope",
        question_type: "multiple_choice"
    },
    {
        id: 20,
        subject: "frontend_web_dev",
        difficulty_level: 4,
        question_text: "Which method is used to convert a JSON string to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        correct_answer: "JSON.parse()",
        question_type: "multiple_choice"
    },

    // Level 5 - Advanced JavaScript & ES6
    {
        id: 21,
        subject: "frontend_web_dev",
        difficulty_level: 5,
        question_text: "What is the purpose of the 'async' keyword in JavaScript?",
        options: ["To declare a function that returns a Promise", "To make code run faster", "To handle errors", "To create loops"],
        correct_answer: "To declare a function that returns a Promise",
        question_type: "multiple_choice"
    },
    {
        id: 22,
        subject: "frontend_web_dev",
        difficulty_level: 5,
        question_text: "What does the spread operator (...) do in JavaScript?",
        options: ["Expands an array or object into individual elements", "Creates a new array", "Deletes elements", "Sorts arrays"],
        correct_answer: "Expands an array or object into individual elements",
        question_type: "multiple_choice"
    },
    {
        id: 23,
        subject: "frontend_web_dev",
        difficulty_level: 5,
        question_text: "What is destructuring assignment in JavaScript?",
        options: ["A way to extract values from arrays or objects into variables", "A method to destroy objects", "A way to create arrays", "A loop structure"],
        correct_answer: "A way to extract values from arrays or objects into variables",
        question_type: "multiple_choice"
    },
    {
        id: 24,
        subject: "frontend_web_dev",
        difficulty_level: 5,
        question_text: "What is the difference between 'let' and 'var' in JavaScript?",
        options: ["let has block scope, var has function scope", "let is faster than var", "var is newer than let", "They are identical"],
        correct_answer: "let has block scope, var has function scope",
        question_type: "multiple_choice"
    },
    {
        id: 25,
        subject: "frontend_web_dev",
        difficulty_level: 5,
        question_text: "What is a Promise in JavaScript?",
        options: ["An object representing eventual completion of an async operation", "A way to make promises to users", "A method to handle errors", "A type of variable"],
        correct_answer: "An object representing eventual completion of an async operation",
        question_type: "multiple_choice"
    },

    // Level 6 - CSS Frameworks & Preprocessors
    {
        id: 26,
        subject: "frontend_web_dev",
        difficulty_level: 6,
        question_text: "What is the main advantage of using CSS Grid over Flexbox?",
        options: ["Grid is better for 2D layouts, Flexbox for 1D", "Grid is faster", "Grid has better browser support", "Grid is easier to learn"],
        correct_answer: "Grid is better for 2D layouts, Flexbox for 1D",
        question_type: "multiple_choice"
    },
    {
        id: 27,
        subject: "frontend_web_dev",
        difficulty_level: 6,
        question_text: "What is SASS/SCSS?",
        options: ["A CSS preprocessor that adds features like variables and nesting", "A JavaScript framework", "A database", "A web server"],
        correct_answer: "A CSS preprocessor that adds features like variables and nesting",
        question_type: "multiple_choice"
    },
    {
        id: 28,
        subject: "frontend_web_dev",
        difficulty_level: 6,
        question_text: "What is the purpose of CSS custom properties (CSS variables)?",
        options: ["To store reusable values that can be used throughout CSS", "To make CSS faster", "To add animations", "To create responsive layouts"],
        correct_answer: "To store reusable values that can be used throughout CSS",
        question_type: "multiple_choice"
    },
    {
        id: 29,
        subject: "frontend_web_dev",
        difficulty_level: 6,
        question_text: "What is the difference between 'mobile-first' and 'desktop-first' responsive design?",
        options: ["Mobile-first starts with mobile styles and adds desktop, desktop-first is opposite", "Mobile-first is faster", "Desktop-first has better SEO", "They are the same approach"],
        correct_answer: "Mobile-first starts with mobile styles and adds desktop, desktop-first is opposite",
        question_type: "multiple_choice"
    },
    {
        id: 30,
        subject: "frontend_web_dev",
        difficulty_level: 6,
        question_text: "What is the CSS 'z-index' property used for?",
        options: ["To control the stacking order of positioned elements", "To set the zoom level", "To create animations", "To set the font size"],
        correct_answer: "To control the stacking order of positioned elements",
        question_type: "multiple_choice"
    },

    // Level 7 - React Basics
    {
        id: 31,
        subject: "frontend_web_dev",
        difficulty_level: 7,
        question_text: "What is JSX in React?",
        options: ["A syntax extension that allows writing HTML-like code in JavaScript", "A new programming language", "A database query language", "A CSS framework"],
        correct_answer: "A syntax extension that allows writing HTML-like code in JavaScript",
        question_type: "multiple_choice"
    },
    {
        id: 32,
        subject: "frontend_web_dev",
        difficulty_level: 7,
        question_text: "What is a React component?",
        options: ["A reusable piece of UI that can accept props and return JSX", "A CSS class", "A JavaScript function only", "A HTML element"],
        correct_answer: "A reusable piece of UI that can accept props and return JSX",
        question_type: "multiple_choice"
    },
    {
        id: 33,
        subject: "frontend_web_dev",
        difficulty_level: 7,
        question_text: "What are props in React?",
        options: ["Properties passed from parent to child components", "CSS properties", "JavaScript properties", "HTML attributes only"],
        correct_answer: "Properties passed from parent to child components",
        question_type: "multiple_choice"
    },
    {
        id: 34,
        subject: "frontend_web_dev",
        difficulty_level: 7,
        question_text: "What is state in React?",
        options: ["Data that can change over time and triggers re-renders", "CSS styling", "HTML structure", "Server data"],
        correct_answer: "Data that can change over time and triggers re-renders",
        question_type: "multiple_choice"
    },
    {
        id: 35,
        subject: "frontend_web_dev",
        difficulty_level: 7,
        question_text: "What is the Virtual DOM in React?",
        options: ["A JavaScript representation of the real DOM for efficient updates", "A new type of HTML", "A CSS framework", "A database"],
        correct_answer: "A JavaScript representation of the real DOM for efficient updates",
        question_type: "multiple_choice"
    },

    // Level 8 - Advanced React
    {
        id: 36,
        subject: "frontend_web_dev",
        difficulty_level: 8,
        question_text: "What is the useEffect hook used for in React?",
        options: ["To perform side effects like API calls and subscriptions", "To create components", "To style components", "To handle routing"],
        correct_answer: "To perform side effects like API calls and subscriptions",
        question_type: "multiple_choice"
    },
    {
        id: 37,
        subject: "frontend_web_dev",
        difficulty_level: 8,
        question_text: "What is React Context used for?",
        options: ["To share data between components without prop drilling", "To create animations", "To handle forms", "To manage routing"],
        correct_answer: "To share data between components without prop drilling",
        question_type: "multiple_choice"
    },
    {
        id: 38,
        subject: "frontend_web_dev",
        difficulty_level: 8,
        question_text: "What is the difference between controlled and uncontrolled components in React?",
        options: ["Controlled components have their state managed by React, uncontrolled by DOM", "Controlled are faster", "Uncontrolled are newer", "They are the same"],
        correct_answer: "Controlled components have their state managed by React, uncontrolled by DOM",
        question_type: "multiple_choice"
    },
    {
        id: 39,
        subject: "frontend_web_dev",
        difficulty_level: 8,
        question_text: "What is React.memo() used for?",
        options: ["To prevent unnecessary re-renders of functional components", "To create memos", "To handle memory", "To create animations"],
        correct_answer: "To prevent unnecessary re-renders of functional components",
        question_type: "multiple_choice"
    },
    {
        id: 40,
        subject: "frontend_web_dev",
        difficulty_level: 8,
        question_text: "What is the purpose of keys in React lists?",
        options: ["To help React identify which items have changed for efficient updates", "To encrypt data", "To create unique IDs", "To handle events"],
        correct_answer: "To help React identify which items have changed for efficient updates",
        question_type: "multiple_choice"
    },

    // Level 9 - Performance & Optimization
    {
        id: 41,
        subject: "frontend_web_dev",
        difficulty_level: 9,
        question_text: "What is lazy loading in web development?",
        options: ["Loading content only when it's needed to improve performance", "Slow loading", "Loading everything at once", "A CSS technique"],
        correct_answer: "Loading content only when it's needed to improve performance",
        question_type: "multiple_choice"
    },
    {
        id: 42,
        subject: "frontend_web_dev",
        difficulty_level: 9,
        question_text: "What is code splitting in React?",
        options: ["Dividing code into smaller bundles that load on demand", "Writing code in multiple files", "Splitting CSS from JS", "A debugging technique"],
        correct_answer: "Dividing code into smaller bundles that load on demand",
        question_type: "multiple_choice"
    },
    {
        id: 43,
        subject: "frontend_web_dev",
        difficulty_level: 9,
        question_text: "What is the purpose of a Service Worker?",
        options: ["To enable offline functionality and background sync", "To serve web pages", "To handle databases", "To create animations"],
        correct_answer: "To enable offline functionality and background sync",
        question_type: "multiple_choice"
    },
    {
        id: 44,
        subject: "frontend_web_dev",
        difficulty_level: 9,
        question_text: "What is Critical Rendering Path optimization?",
        options: ["Optimizing the sequence of steps to render the initial view", "Making CSS critical", "Optimizing images", "Database optimization"],
        correct_answer: "Optimizing the sequence of steps to render the initial view",
        question_type: "multiple_choice"
    },
    {
        id: 45,
        subject: "frontend_web_dev",
        difficulty_level: 9,
        question_text: "What is tree shaking in JavaScript bundling?",
        options: ["Removing unused code from the final bundle", "Organizing code in tree structure", "A debugging technique", "A testing method"],
        correct_answer: "Removing unused code from the final bundle",
        question_type: "multiple_choice"
    },

    // Level 10 - Expert Level
    {
        id: 46,
        subject: "frontend_web_dev",
        difficulty_level: 10,
        question_text: "What is the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)?",
        options: ["SSR renders on server before sending to client, CSR renders in browser", "SSR is faster", "CSR is more secure", "They are the same"],
        correct_answer: "SSR renders on server before sending to client, CSR renders in browser",
        question_type: "multiple_choice"
    },
    {
        id: 47,
        subject: "frontend_web_dev",
        difficulty_level: 10,
        question_text: "What is Micro Frontend architecture?",
        options: ["Breaking frontend into smaller, independently deployable pieces", "Very small websites", "Mobile-first design", "A CSS framework"],
        correct_answer: "Breaking frontend into smaller, independently deployable pieces",
        question_type: "multiple_choice"
    },
    {
        id: 48,
        subject: "frontend_web_dev",
        difficulty_level: 10,
        question_text: "What is the purpose of Web Assembly (WASM)?",
        options: ["To run high-performance code in browsers at near-native speed", "To create websites", "To style web pages", "To handle databases"],
        correct_answer: "To run high-performance code in browsers at near-native speed",
        question_type: "multiple_choice"
    },
    {
        id: 49,
        subject: "frontend_web_dev",
        difficulty_level: 10,
        question_text: "What is Progressive Web App (PWA)?",
        options: ["Web apps that provide native app-like experience with offline capability", "Apps that get progressively better", "Mobile apps only", "Desktop applications"],
        correct_answer: "Web apps that provide native app-like experience with offline capability",
        question_type: "multiple_choice"
    },
    {
        id: 50,
        subject: "frontend_web_dev",
        difficulty_level: 10,
        question_text: "What is the JAMstack architecture?",
        options: ["JavaScript, APIs, and Markup - a modern web development architecture", "A JavaScript framework", "A database technology", "A CSS methodology"],
        correct_answer: "JavaScript, APIs, and Markup - a modern web development architecture",
        question_type: "multiple_choice"
    }
];

// Backend Web Development Questions
// Backend Web Development - 50 Questions (5 per level, 10 levels)
const BACKEND_QUESTIONS = [
    // Level 1 - Basic Backend Concepts
    {
        id: 51,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What does API stand for?",
        options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Interface", "Application Process Integration"],
        correct_answer: "Application Programming Interface",
        question_type: "multiple_choice"
    },
    {
        id: 52,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "Which HTTP method is used to retrieve data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct_answer: "GET",
        question_type: "multiple_choice"
    },
    {
        id: 53,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What is a database?",
        options: ["Organized collection of structured data", "Programming language", "Web server", "Operating system"],
        correct_answer: "Organized collection of structured data",
        question_type: "multiple_choice"
    },
    {
        id: 54,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "Which status code indicates a successful HTTP request?",
        options: ["200", "404", "500", "301"],
        correct_answer: "200",
        question_type: "multiple_choice"
    },
    {
        id: 55,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        correct_answer: "Structured Query Language",
        question_type: "multiple_choice"
    },

    // Level 2 - HTTP & Web Protocols
    {
        id: 56,
        subject: "backend_web_dev",
        difficulty_level: 2,
        question_text: "What is the difference between HTTP and HTTPS?",
        options: ["HTTPS is HTTP with SSL/TLS encryption", "HTTPS is faster", "HTTP is newer", "They are identical"],
        correct_answer: "HTTPS is HTTP with SSL/TLS encryption",
        question_type: "multiple_choice"
    },
    {
        id: 57,
        subject: "backend_web_dev",
        difficulty_level: 2,
        question_text: "What does REST stand for in RESTful APIs?",
        options: ["Representational State Transfer", "Remote State Transfer", "Relational State Transfer", "Responsive State Transfer"],
        correct_answer: "Representational State Transfer",
        question_type: "multiple_choice"
    },
    {
        id: 58,
        subject: "backend_web_dev",
        difficulty_level: 2,
        question_text: "Which HTTP status code indicates 'Not Found'?",
        options: ["404", "200", "500", "403"],
        correct_answer: "404",
        question_type: "multiple_choice"
    },
    {
        id: 59,
        subject: "backend_web_dev",
        difficulty_level: 2,
        question_text: "What is the purpose of HTTP headers?",
        options: ["To provide metadata about the request or response", "To style web pages", "To execute JavaScript", "To store user data"],
        correct_answer: "To provide metadata about the request or response",
        question_type: "multiple_choice"
    },
    {
        id: 60,
        subject: "backend_web_dev",
        difficulty_level: 2,
        question_text: "What is CORS in web development?",
        options: ["Cross-Origin Resource Sharing - security feature for web browsers", "A database technology", "A programming language", "A web server"],
        correct_answer: "Cross-Origin Resource Sharing - security feature for web browsers",
        question_type: "multiple_choice"
    },

    // Level 3 - Databases & SQL
    {
        id: 61,
        subject: "backend_web_dev",
        difficulty_level: 3,
        question_text: "What is the difference between SQL and NoSQL databases?",
        options: ["SQL uses structured tables, NoSQL uses flexible document/key-value stores", "SQL is newer", "NoSQL is faster", "They are identical"],
        correct_answer: "SQL uses structured tables, NoSQL uses flexible document/key-value stores",
        question_type: "multiple_choice"
    },
    {
        id: 62,
        subject: "backend_web_dev",
        difficulty_level: 3,
        question_text: "What is a primary key in a database?",
        options: ["A unique identifier for each record in a table", "The first column", "The most important data", "A password"],
        correct_answer: "A unique identifier for each record in a table",
        question_type: "multiple_choice"
    },
    {
        id: 63,
        subject: "backend_web_dev",
        difficulty_level: 3,
        question_text: "What does CRUD stand for in database operations?",
        options: ["Create, Read, Update, Delete", "Connect, Retrieve, Upload, Download", "Copy, Remove, Undo, Deploy", "Cache, Render, Update, Display"],
        correct_answer: "Create, Read, Update, Delete",
        question_type: "multiple_choice"
    },
    {
        id: 64,
        subject: "backend_web_dev",
        difficulty_level: 3,
        question_text: "What is a foreign key in relational databases?",
        options: ["A field that links to the primary key of another table", "A key from another country", "An encrypted key", "A backup key"],
        correct_answer: "A field that links to the primary key of another table",
        question_type: "multiple_choice"
    },
    {
        id: 65,
        subject: "backend_web_dev",
        difficulty_level: 3,
        question_text: "What is database normalization?",
        options: ["Organizing data to reduce redundancy and improve integrity", "Making databases normal", "Standardizing database names", "Backing up databases"],
        correct_answer: "Organizing data to reduce redundancy and improve integrity",
        question_type: "multiple_choice"
    },

    // Level 4 - Server-Side Programming
    {
        id: 66,
        subject: "backend_web_dev",
        difficulty_level: 4,
        question_text: "What is middleware in web development?",
        options: ["Software that sits between different applications or services", "The middle of a web page", "A type of database", "A programming language"],
        correct_answer: "Software that sits between different applications or services",
        question_type: "multiple_choice"
    },
    {
        id: 67,
        subject: "backend_web_dev",
        difficulty_level: 4,
        question_text: "What is the purpose of environment variables?",
        options: ["To store configuration values outside of code", "To track environmental impact", "To store user data", "To create animations"],
        correct_answer: "To store configuration values outside of code",
        question_type: "multiple_choice"
    },
    {
        id: 68,
        subject: "backend_web_dev",
        difficulty_level: 4,
        question_text: "What is session management in web applications?",
        options: ["Maintaining user state across multiple HTTP requests", "Managing database sessions", "Scheduling meetings", "Managing server uptime"],
        correct_answer: "Maintaining user state across multiple HTTP requests",
        question_type: "multiple_choice"
    },
    {
        id: 69,
        subject: "backend_web_dev",
        difficulty_level: 4,
        question_text: "What is the difference between authentication and authorization?",
        options: ["Authentication verifies identity, authorization determines permissions", "They are the same", "Authorization comes first", "Authentication is for databases only"],
        correct_answer: "Authentication verifies identity, authorization determines permissions",
        question_type: "multiple_choice"
    },
    {
        id: 70,
        subject: "backend_web_dev",
        difficulty_level: 4,
        question_text: "What is a JSON Web Token (JWT)?",
        options: ["A compact way to securely transmit information between parties", "A JavaScript library", "A database format", "A web server"],
        correct_answer: "A compact way to securely transmit information between parties",
        question_type: "multiple_choice"
    },

    // Level 5 - API Design & Architecture
    {
        id: 71,
        subject: "backend_web_dev",
        difficulty_level: 5,
        question_text: "What is GraphQL?",
        options: ["A query language and runtime for APIs", "A graph database", "A charting library", "A CSS framework"],
        correct_answer: "A query language and runtime for APIs",
        question_type: "multiple_choice"
    },
    {
        id: 72,
        subject: "backend_web_dev",
        difficulty_level: 5,
        question_text: "What is API versioning and why is it important?",
        options: ["Managing different versions of APIs to maintain backward compatibility", "Tracking API usage", "Securing APIs", "Optimizing API performance"],
        correct_answer: "Managing different versions of APIs to maintain backward compatibility",
        question_type: "multiple_choice"
    },
    {
        id: 73,
        subject: "backend_web_dev",
        difficulty_level: 5,
        question_text: "What is rate limiting in APIs?",
        options: ["Controlling the number of requests a client can make", "Limiting the response size", "Controlling server speed", "Limiting database connections"],
        correct_answer: "Controlling the number of requests a client can make",
        question_type: "multiple_choice"
    },
    {
        id: 74,
        subject: "backend_web_dev",
        difficulty_level: 5,
        question_text: "What is the purpose of API documentation?",
        options: ["To help developers understand how to use the API", "To store API data", "To secure the API", "To monitor API performance"],
        correct_answer: "To help developers understand how to use the API",
        question_type: "multiple_choice"
    },
    {
        id: 75,
        subject: "backend_web_dev",
        difficulty_level: 5,
        question_text: "What is idempotency in REST APIs?",
        options: ["Operations that produce the same result when called multiple times", "Operations that are very fast", "Operations that are secure", "Operations that use minimal resources"],
        correct_answer: "Operations that produce the same result when called multiple times",
        question_type: "multiple_choice"
    },

    // Level 6 - Caching & Performance
    {
        id: 76,
        subject: "backend_web_dev",
        difficulty_level: 6,
        question_text: "What is caching in web development?",
        options: ["Storing frequently accessed data in fast storage for quick retrieval", "Hiding data", "Encrypting data", "Compressing data"],
        correct_answer: "Storing frequently accessed data in fast storage for quick retrieval",
        question_type: "multiple_choice"
    },
    {
        id: 77,
        subject: "backend_web_dev",
        difficulty_level: 6,
        question_text: "What is the difference between Redis and Memcached?",
        options: ["Redis supports more data types and persistence, Memcached is simpler", "Redis is slower", "Memcached is newer", "They are identical"],
        correct_answer: "Redis supports more data types and persistence, Memcached is simpler",
        question_type: "multiple_choice"
    },
    {
        id: 78,
        subject: "backend_web_dev",
        difficulty_level: 6,
        question_text: "What is database indexing?",
        options: ["Creating data structures to improve query performance", "Organizing database files", "Backing up databases", "Encrypting database data"],
        correct_answer: "Creating data structures to improve query performance",
        question_type: "multiple_choice"
    },
    {
        id: 79,
        subject: "backend_web_dev",
        difficulty_level: 6,
        question_text: "What is a CDN (Content Delivery Network)?",
        options: ["Distributed servers that deliver content based on user location", "A type of database", "A programming framework", "A security protocol"],
        correct_answer: "Distributed servers that deliver content based on user location",
        question_type: "multiple_choice"
    },
    {
        id: 80,
        subject: "backend_web_dev",
        difficulty_level: 6,
        question_text: "What is database connection pooling?",
        options: ["Reusing database connections to improve performance", "Backing up database connections", "Encrypting database connections", "Monitoring database connections"],
        correct_answer: "Reusing database connections to improve performance",
        question_type: "multiple_choice"
    },

    // Level 7 - Security
    {
        id: 81,
        subject: "backend_web_dev",
        difficulty_level: 7,
        question_text: "What is SQL injection and how can it be prevented?",
        options: ["Malicious SQL code injection; prevent with parameterized queries", "A database optimization technique", "A way to speed up queries", "A database backup method"],
        correct_answer: "Malicious SQL code injection; prevent with parameterized queries",
        question_type: "multiple_choice"
    },
    {
        id: 82,
        subject: "backend_web_dev",
        difficulty_level: 7,
        question_text: "What is Cross-Site Scripting (XSS)?",
        options: ["Injecting malicious scripts into web pages viewed by other users", "A way to share scripts between sites", "A performance optimization", "A database technique"],
        correct_answer: "Injecting malicious scripts into web pages viewed by other users",
        question_type: "multiple_choice"
    },
    {
        id: 83,
        subject: "backend_web_dev",
        difficulty_level: 7,
        question_text: "What is CSRF (Cross-Site Request Forgery)?",
        options: ["Tricking users into executing unwanted actions on authenticated sites", "A way to forge certificates", "A database attack", "A network protocol"],
        correct_answer: "Tricking users into executing unwanted actions on authenticated sites",
        question_type: "multiple_choice"
    },
    {
        id: 84,
        subject: "backend_web_dev",
        difficulty_level: 7,
        question_text: "What is password hashing and why is it important?",
        options: ["Converting passwords to irreversible strings for security", "Organizing passwords", "Sharing passwords", "Backing up passwords"],
        correct_answer: "Converting passwords to irreversible strings for security",
        question_type: "multiple_choice"
    },
    {
        id: 85,
        subject: "backend_web_dev",
        difficulty_level: 7,
        question_text: "What is OAuth and what problem does it solve?",
        options: ["Authorization framework that allows secure third-party access", "A database protocol", "A caching mechanism", "A web server"],
        correct_answer: "Authorization framework that allows secure third-party access",
        question_type: "multiple_choice"
    },

    // Level 8 - Microservices & Architecture
    {
        id: 86,
        subject: "backend_web_dev",
        difficulty_level: 8,
        question_text: "What is microservices architecture?",
        options: ["Breaking applications into small, independent services", "Very small applications", "A type of database", "A programming language"],
        correct_answer: "Breaking applications into small, independent services",
        question_type: "multiple_choice"
    },
    {
        id: 87,
        subject: "backend_web_dev",
        difficulty_level: 8,
        question_text: "What is the difference between monolithic and microservices architecture?",
        options: ["Monolithic is single deployable unit, microservices are multiple independent services", "Monolithic is newer", "Microservices are slower", "They are the same"],
        correct_answer: "Monolithic is single deployable unit, microservices are multiple independent services",
        question_type: "multiple_choice"
    },
    {
        id: 88,
        subject: "backend_web_dev",
        difficulty_level: 8,
        question_text: "What is API Gateway in microservices?",
        options: ["Single entry point that routes requests to appropriate microservices", "A type of database", "A security protocol", "A monitoring tool"],
        correct_answer: "Single entry point that routes requests to appropriate microservices",
        question_type: "multiple_choice"
    },
    {
        id: 89,
        subject: "backend_web_dev",
        difficulty_level: 8,
        question_text: "What is service discovery in microservices?",
        options: ["Mechanism for services to find and communicate with each other", "Finding new services to use", "Discovering service bugs", "Service documentation"],
        correct_answer: "Mechanism for services to find and communicate with each other",
        question_type: "multiple_choice"
    },
    {
        id: 90,
        subject: "backend_web_dev",
        difficulty_level: 8,
        question_text: "What is eventual consistency in distributed systems?",
        options: ["System will become consistent over time, not immediately", "System is always consistent", "System is never consistent", "System consistency is optional"],
        correct_answer: "System will become consistent over time, not immediately",
        question_type: "multiple_choice"
    },

    // Level 9 - DevOps & Deployment
    {
        id: 91,
        subject: "backend_web_dev",
        difficulty_level: 9,
        question_text: "What is containerization and how does Docker work?",
        options: ["Packaging applications with dependencies into portable containers", "A type of database", "A programming language", "A web framework"],
        correct_answer: "Packaging applications with dependencies into portable containers",
        question_type: "multiple_choice"
    },
    {
        id: 92,
        subject: "backend_web_dev",
        difficulty_level: 9,
        question_text: "What is CI/CD in software development?",
        options: ["Continuous Integration/Continuous Deployment - automated testing and deployment", "A database technology", "A programming paradigm", "A security protocol"],
        correct_answer: "Continuous Integration/Continuous Deployment - automated testing and deployment",
        question_type: "multiple_choice"
    },
    {
        id: 93,
        subject: "backend_web_dev",
        difficulty_level: 9,
        question_text: "What is load balancing?",
        options: ["Distributing incoming requests across multiple servers", "Balancing database loads", "Optimizing code performance", "Managing server resources"],
        correct_answer: "Distributing incoming requests across multiple servers",
        question_type: "multiple_choice"
    },
    {
        id: 94,
        subject: "backend_web_dev",
        difficulty_level: 9,
        question_text: "What is horizontal vs vertical scaling?",
        options: ["Horizontal adds more servers, vertical adds more power to existing servers", "Horizontal is faster", "Vertical is cheaper", "They are the same"],
        correct_answer: "Horizontal adds more servers, vertical adds more power to existing servers",
        question_type: "multiple_choice"
    },
    {
        id: 95,
        subject: "backend_web_dev",
        difficulty_level: 9,
        question_text: "What is Infrastructure as Code (IaC)?",
        options: ["Managing infrastructure through code rather than manual processes", "Writing code for infrastructure", "A programming language", "A database technology"],
        correct_answer: "Managing infrastructure through code rather than manual processes",
        question_type: "multiple_choice"
    },

    // Level 10 - Advanced Topics
    {
        id: 96,
        subject: "backend_web_dev",
        difficulty_level: 10,
        question_text: "What is Event Sourcing in software architecture?",
        options: ["Storing all changes as a sequence of events rather than current state", "Finding events in code", "A type of database", "A monitoring technique"],
        correct_answer: "Storing all changes as a sequence of events rather than current state",
        question_type: "multiple_choice"
    },
    {
        id: 97,
        subject: "backend_web_dev",
        difficulty_level: 10,
        question_text: "What is CQRS (Command Query Responsibility Segregation)?",
        options: ["Separating read and write operations into different models", "A database query language", "A security protocol", "A caching strategy"],
        correct_answer: "Separating read and write operations into different models",
        question_type: "multiple_choice"
    },
    {
        id: 98,
        subject: "backend_web_dev",
        difficulty_level: 10,
        question_text: "What is the CAP theorem in distributed systems?",
        options: ["You can only guarantee 2 of: Consistency, Availability, Partition tolerance", "A database optimization rule", "A security principle", "A performance metric"],
        correct_answer: "You can only guarantee 2 of: Consistency, Availability, Partition tolerance",
        question_type: "multiple_choice"
    },
    {
        id: 99,
        subject: "backend_web_dev",
        difficulty_level: 10,
        question_text: "What is Domain-Driven Design (DDD)?",
        options: ["Software design approach focused on modeling business domain", "A database design method", "A user interface design", "A testing methodology"],
        correct_answer: "Software design approach focused on modeling business domain",
        question_type: "multiple_choice"
    },
    {
        id: 100,
        subject: "backend_web_dev",
        difficulty_level: 10,
        question_text: "What is Saga pattern in microservices?",
        options: ["Managing distributed transactions across multiple services", "A storytelling pattern", "A database pattern", "A security pattern"],
        correct_answer: "Managing distributed transactions across multiple services",
        question_type: "multiple_choice"
    }
];

// Software Engineering Questions
// Software Engineering - 50 Questions (5 per level, 10 levels)
const SOFTWARE_QUESTIONS = [
    // Level 1 - Basic Programming Concepts
    {
        id: 101,
        subject: "software_engineering",
        difficulty_level: 1,
        question_text: "What is version control?",
        options: ["System to track changes in code over time", "Testing methodology", "Design pattern", "Database management"],
        correct_answer: "System to track changes in code over time",
        question_type: "multiple_choice"
    },
    {
        id: 102,
        subject: "software_engineering",
        difficulty_level: 1,
        question_text: "What does SDLC stand for?",
        options: ["Software Development Life Cycle", "System Design Life Cycle", "Software Deployment Life Cycle", "System Development Logic Cycle"],
        correct_answer: "Software Development Life Cycle",
        question_type: "multiple_choice"
    },
    {
        id: 103,
        subject: "software_engineering",
        difficulty_level: 1,
        question_text: "What is debugging?",
        options: ["Finding and fixing errors in code", "Writing new code", "Testing user interface", "Deploying applications"],
        correct_answer: "Finding and fixing errors in code",
        question_type: "multiple_choice"
    },
    {
        id: 104,
        subject: "software_engineering",
        difficulty_level: 1,
        question_text: "What is a function in programming?",
        options: ["Reusable block of code that performs a specific task", "Database table", "User interface element", "Network protocol"],
        correct_answer: "Reusable block of code that performs a specific task",
        question_type: "multiple_choice"
    },
    {
        id: 105,
        subject: "software_engineering",
        difficulty_level: 1,
        question_text: "What does IDE stand for?",
        options: ["Integrated Development Environment", "Internet Development Environment", "Interactive Design Environment", "Internal Development Engine"],
        correct_answer: "Integrated Development Environment",
        question_type: "multiple_choice"
    },

    // Level 2 - Software Development Process
    {
        id: 106,
        subject: "software_engineering",
        difficulty_level: 2,
        question_text: "What is Agile methodology?",
        options: ["Iterative development approach with frequent collaboration and feedback", "A programming language", "A database system", "A testing framework"],
        correct_answer: "Iterative development approach with frequent collaboration and feedback",
        question_type: "multiple_choice"
    },
    {
        id: 107,
        subject: "software_engineering",
        difficulty_level: 2,
        question_text: "What is the difference between Waterfall and Agile methodologies?",
        options: ["Waterfall is sequential, Agile is iterative", "Waterfall is newer", "Agile is slower", "They are identical"],
        correct_answer: "Waterfall is sequential, Agile is iterative",
        question_type: "multiple_choice"
    },
    {
        id: 108,
        subject: "software_engineering",
        difficulty_level: 2,
        question_text: "What is a sprint in Scrum?",
        options: ["Time-boxed iteration usually lasting 1-4 weeks", "Running fast", "A type of test", "A database operation"],
        correct_answer: "Time-boxed iteration usually lasting 1-4 weeks",
        question_type: "multiple_choice"
    },
    {
        id: 109,
        subject: "software_engineering",
        difficulty_level: 2,
        question_text: "What is the purpose of code review?",
        options: ["To improve code quality and share knowledge among team members", "To slow down development", "To find bugs only", "To assign blame"],
        correct_answer: "To improve code quality and share knowledge among team members",
        question_type: "multiple_choice"
    },
    {
        id: 110,
        subject: "software_engineering",
        difficulty_level: 2,
        question_text: "What is technical debt?",
        options: ["Cost of additional work caused by choosing quick solutions over better approaches", "Money owed to developers", "Time spent on documentation", "Hardware costs"],
        correct_answer: "Cost of additional work caused by choosing quick solutions over better approaches",
        question_type: "multiple_choice"
    },

    // Level 3 - Testing & Quality Assurance
    {
        id: 111,
        subject: "software_engineering",
        difficulty_level: 3,
        question_text: "What is unit testing?",
        options: ["Testing individual components or modules in isolation", "Testing the entire application", "Testing user interface", "Testing database connections"],
        correct_answer: "Testing individual components or modules in isolation",
        question_type: "multiple_choice"
    },
    {
        id: 112,
        subject: "software_engineering",
        difficulty_level: 3,
        question_text: "What is the difference between black box and white box testing?",
        options: ["Black box tests functionality without knowing internal structure, white box tests internal logic", "Black box is automated", "White box is faster", "They are the same"],
        correct_answer: "Black box tests functionality without knowing internal structure, white box tests internal logic",
        question_type: "multiple_choice"
    },
    {
        id: 113,
        subject: "software_engineering",
        difficulty_level: 3,
        question_text: "What is Test-Driven Development (TDD)?",
        options: ["Writing tests before writing the actual code", "Testing after development", "Testing only critical features", "Automated testing only"],
        correct_answer: "Writing tests before writing the actual code",
        question_type: "multiple_choice"
    },
    {
        id: 114,
        subject: "software_engineering",
        difficulty_level: 3,
        question_text: "What is integration testing?",
        options: ["Testing the interaction between different modules or services", "Testing individual functions", "Testing user interface", "Testing performance"],
        correct_answer: "Testing the interaction between different modules or services",
        question_type: "multiple_choice"
    },
    {
        id: 115,
        subject: "software_engineering",
        difficulty_level: 3,
        question_text: "What is regression testing?",
        options: ["Re-running tests to ensure new changes don't break existing functionality", "Testing backwards compatibility", "Testing performance regression", "Testing old code only"],
        correct_answer: "Re-running tests to ensure new changes don't break existing functionality",
        question_type: "multiple_choice"
    },

    // Level 4 - Design Patterns
    {
        id: 116,
        subject: "software_engineering",
        difficulty_level: 4,
        question_text: "What is the Singleton design pattern?",
        options: ["Ensures a class has only one instance and provides global access to it", "A pattern for single functions", "A database pattern", "A user interface pattern"],
        correct_answer: "Ensures a class has only one instance and provides global access to it",
        question_type: "multiple_choice"
    },
    {
        id: 117,
        subject: "software_engineering",
        difficulty_level: 4,
        question_text: "What is the Observer design pattern?",
        options: ["Defines one-to-many dependency between objects so when one changes, dependents are notified", "A pattern for watching users", "A security pattern", "A database pattern"],
        correct_answer: "Defines one-to-many dependency between objects so when one changes, dependents are notified",
        question_type: "multiple_choice"
    },
    {
        id: 118,
        subject: "software_engineering",
        difficulty_level: 4,
        question_text: "What is the Factory design pattern?",
        options: ["Creates objects without specifying their exact classes", "A pattern for manufacturing", "A database creation pattern", "A user interface pattern"],
        correct_answer: "Creates objects without specifying their exact classes",
        question_type: "multiple_choice"
    },
    {
        id: 119,
        subject: "software_engineering",
        difficulty_level: 4,
        question_text: "What is the MVC (Model-View-Controller) pattern?",
        options: ["Separates application logic into three interconnected components", "A database pattern", "A network pattern", "A security pattern"],
        correct_answer: "Separates application logic into three interconnected components",
        question_type: "multiple_choice"
    },
    {
        id: 120,
        subject: "software_engineering",
        difficulty_level: 4,
        question_text: "What is the Strategy design pattern?",
        options: ["Defines a family of algorithms and makes them interchangeable", "A business strategy pattern", "A database optimization pattern", "A security pattern"],
        correct_answer: "Defines a family of algorithms and makes them interchangeable",
        question_type: "multiple_choice"
    },

    // Level 5 - Object-Oriented Programming
    {
        id: 121,
        subject: "software_engineering",
        difficulty_level: 5,
        question_text: "What is encapsulation in OOP?",
        options: ["Bundling data and methods together and hiding internal details", "Creating multiple objects", "Inheriting from parent classes", "Overriding methods"],
        correct_answer: "Bundling data and methods together and hiding internal details",
        question_type: "multiple_choice"
    },
    {
        id: 122,
        subject: "software_engineering",
        difficulty_level: 5,
        question_text: "What is inheritance in object-oriented programming?",
        options: ["Mechanism where a class acquires properties and methods of another class", "Getting money from parents", "Copying code", "Sharing variables"],
        correct_answer: "Mechanism where a class acquires properties and methods of another class",
        question_type: "multiple_choice"
    },
    {
        id: 123,
        subject: "software_engineering",
        difficulty_level: 5,
        question_text: "What is polymorphism in OOP?",
        options: ["Ability of objects to take multiple forms and respond differently to same method call", "Having multiple classes", "Using multiple languages", "Creating multiple objects"],
        correct_answer: "Ability of objects to take multiple forms and respond differently to same method call",
        question_type: "multiple_choice"
    },
    {
        id: 124,
        subject: "software_engineering",
        difficulty_level: 5,
        question_text: "What is abstraction in object-oriented programming?",
        options: ["Hiding complex implementation details and showing only essential features", "Making code abstract", "Using abstract art", "Creating interfaces"],
        correct_answer: "Hiding complex implementation details and showing only essential features",
        question_type: "multiple_choice"
    },
    {
        id: 125,
        subject: "software_engineering",
        difficulty_level: 5,
        question_text: "What is the difference between composition and inheritance?",
        options: ["Composition uses 'has-a' relationship, inheritance uses 'is-a' relationship", "Composition is newer", "Inheritance is faster", "They are identical"],
        correct_answer: "Composition uses 'has-a' relationship, inheritance uses 'is-a' relationship",
        question_type: "multiple_choice"
    },

    // Level 6 - Software Architecture
    {
        id: 126,
        subject: "software_engineering",
        difficulty_level: 6,
        question_text: "What is software architecture?",
        options: ["High-level structure of software system and discipline of creating such structures", "Building design", "Database design", "User interface design"],
        correct_answer: "High-level structure of software system and discipline of creating such structures",
        question_type: "multiple_choice"
    },
    {
        id: 127,
        subject: "software_engineering",
        difficulty_level: 6,
        question_text: "What is the difference between architecture and design?",
        options: ["Architecture is high-level structure, design is detailed implementation", "Architecture is newer", "Design is more important", "They are the same"],
        correct_answer: "Architecture is high-level structure, design is detailed implementation",
        question_type: "multiple_choice"
    },
    {
        id: 128,
        subject: "software_engineering",
        difficulty_level: 6,
        question_text: "What is layered architecture?",
        options: ["Organizing code into horizontal layers with specific responsibilities", "Stacking servers", "Database organization", "User interface layers"],
        correct_answer: "Organizing code into horizontal layers with specific responsibilities",
        question_type: "multiple_choice"
    },
    {
        id: 129,
        subject: "software_engineering",
        difficulty_level: 6,
        question_text: "What is the SOLID principle in software design?",
        options: ["Five principles for writing maintainable object-oriented code", "A type of database", "A testing methodology", "A deployment strategy"],
        correct_answer: "Five principles for writing maintainable object-oriented code",
        question_type: "multiple_choice"
    },
    {
        id: 130,
        subject: "software_engineering",
        difficulty_level: 6,
        question_text: "What does the Single Responsibility Principle state?",
        options: ["A class should have only one reason to change", "Use only one programming language", "Have only one developer per project", "Write only one function per file"],
        correct_answer: "A class should have only one reason to change",
        question_type: "multiple_choice"
    },

    // Level 7 - Performance & Optimization
    {
        id: 131,
        subject: "software_engineering",
        difficulty_level: 7,
        question_text: "What is Big O notation?",
        options: ["Mathematical notation to describe algorithm complexity and performance", "A programming language", "A database query", "A design pattern"],
        correct_answer: "Mathematical notation to describe algorithm complexity and performance",
        question_type: "multiple_choice"
    },
    {
        id: 132,
        subject: "software_engineering",
        difficulty_level: 7,
        question_text: "What is the difference between time and space complexity?",
        options: ["Time complexity measures execution time, space complexity measures memory usage", "Time is faster", "Space is more important", "They are the same"],
        correct_answer: "Time complexity measures execution time, space complexity measures memory usage",
        question_type: "multiple_choice"
    },
    {
        id: 133,
        subject: "software_engineering",
        difficulty_level: 7,
        question_text: "What is code profiling?",
        options: ["Analyzing program performance to identify bottlenecks", "Writing code profiles", "Documenting code", "Testing code"],
        correct_answer: "Analyzing program performance to identify bottlenecks",
        question_type: "multiple_choice"
    },
    {
        id: 134,
        subject: "software_engineering",
        difficulty_level: 7,
        question_text: "What is memoization?",
        options: ["Optimization technique that stores results of expensive function calls", "Memorizing code", "Writing documentation", "Creating backups"],
        correct_answer: "Optimization technique that stores results of expensive function calls",
        question_type: "multiple_choice"
    },
    {
        id: 135,
        subject: "software_engineering",
        difficulty_level: 7,
        question_text: "What is lazy loading?",
        options: ["Deferring initialization of resources until they're actually needed", "Slow programming", "Loading everything at once", "A design pattern"],
        correct_answer: "Deferring initialization of resources until they're actually needed",
        question_type: "multiple_choice"
    },

    // Level 8 - Concurrency & Parallel Programming
    {
        id: 136,
        subject: "software_engineering",
        difficulty_level: 8,
        question_text: "What is the difference between concurrency and parallelism?",
        options: ["Concurrency is dealing with multiple tasks, parallelism is executing them simultaneously", "Concurrency is faster", "Parallelism is newer", "They are identical"],
        correct_answer: "Concurrency is dealing with multiple tasks, parallelism is executing them simultaneously",
        question_type: "multiple_choice"
    },
    {
        id: 137,
        subject: "software_engineering",
        difficulty_level: 8,
        question_text: "What is a race condition?",
        options: ["When multiple threads access shared data simultaneously causing unpredictable results", "A fast algorithm", "A competitive programming contest", "A performance optimization"],
        correct_answer: "When multiple threads access shared data simultaneously causing unpredictable results",
        question_type: "multiple_choice"
    },
    {
        id: 138,
        subject: "software_engineering",
        difficulty_level: 8,
        question_text: "What is a deadlock?",
        options: ["Situation where two or more threads are blocked forever waiting for each other", "A security lock", "A database lock", "A performance issue"],
        correct_answer: "Situation where two or more threads are blocked forever waiting for each other",
        question_type: "multiple_choice"
    },
    {
        id: 139,
        subject: "software_engineering",
        difficulty_level: 8,
        question_text: "What is a mutex?",
        options: ["Mutual exclusion object that allows only one thread to access a resource", "A type of variable", "A design pattern", "A database concept"],
        correct_answer: "Mutual exclusion object that allows only one thread to access a resource",
        question_type: "multiple_choice"
    },
    {
        id: 140,
        subject: "software_engineering",
        difficulty_level: 8,
        question_text: "What is thread safety?",
        options: ["Property of code that functions correctly during simultaneous execution by multiple threads", "Protecting threads from harm", "A security feature", "A performance optimization"],
        correct_answer: "Property of code that functions correctly during simultaneous execution by multiple threads",
        question_type: "multiple_choice"
    },

    // Level 9 - Advanced Software Engineering
    {
        id: 141,
        subject: "software_engineering",
        difficulty_level: 9,
        question_text: "What is Domain-Driven Design (DDD)?",
        options: ["Approach to software development that centers design on business domain and logic", "Database design methodology", "User interface design", "Network design approach"],
        correct_answer: "Approach to software development that centers design on business domain and logic",
        question_type: "multiple_choice"
    },
    {
        id: 142,
        subject: "software_engineering",
        difficulty_level: 9,
        question_text: "What is CQRS (Command Query Responsibility Segregation)?",
        options: ["Pattern that separates read and write operations into different models", "A database technology", "A security protocol", "A testing methodology"],
        correct_answer: "Pattern that separates read and write operations into different models",
        question_type: "multiple_choice"
    },
    {
        id: 143,
        subject: "software_engineering",
        difficulty_level: 9,
        question_text: "What is Event Sourcing?",
        options: ["Storing all changes to application state as a sequence of events", "Finding events in code", "A monitoring technique", "A debugging method"],
        correct_answer: "Storing all changes to application state as a sequence of events",
        question_type: "multiple_choice"
    },
    {
        id: 144,
        subject: "software_engineering",
        difficulty_level: 9,
        question_text: "What is Hexagonal Architecture (Ports and Adapters)?",
        options: ["Architecture that isolates core business logic from external concerns", "A six-sided building design", "A network topology", "A database design"],
        correct_answer: "Architecture that isolates core business logic from external concerns",
        question_type: "multiple_choice"
    },
    {
        id: 145,
        subject: "software_engineering",
        difficulty_level: 9,
        question_text: "What is Clean Architecture?",
        options: ["Architecture that emphasizes separation of concerns and dependency inversion", "Keeping code clean", "A cleaning methodology", "A documentation standard"],
        correct_answer: "Architecture that emphasizes separation of concerns and dependency inversion",
        question_type: "multiple_choice"
    },

    // Level 10 - Expert Level
    {
        id: 146,
        subject: "software_engineering",
        difficulty_level: 10,
        question_text: "What is the Actor Model in concurrent programming?",
        options: ["Mathematical model where actors are primitive units of computation that communicate via messages", "A design pattern for actors", "A database model", "A user interface pattern"],
        correct_answer: "Mathematical model where actors are primitive units of computation that communicate via messages",
        question_type: "multiple_choice"
    },
    {
        id: 147,
        subject: "software_engineering",
        difficulty_level: 10,
        question_text: "What is Reactive Programming?",
        options: ["Programming paradigm oriented around data flows and propagation of change", "Programming that reacts quickly", "A user interface paradigm", "A database programming style"],
        correct_answer: "Programming paradigm oriented around data flows and propagation of change",
        question_type: "multiple_choice"
    },
    {
        id: 148,
        subject: "software_engineering",
        difficulty_level: 10,
        question_text: "What is Functional Programming?",
        options: ["Programming paradigm that treats computation as evaluation of mathematical functions", "Programming with functions only", "A type of object-oriented programming", "Programming for specific functions"],
        correct_answer: "Programming paradigm that treats computation as evaluation of mathematical functions",
        question_type: "multiple_choice"
    },
    {
        id: 149,
        subject: "software_engineering",
        difficulty_level: 10,
        question_text: "What is the difference between imperative and declarative programming?",
        options: ["Imperative describes how to do something, declarative describes what to do", "Imperative is newer", "Declarative is faster", "They are identical"],
        correct_answer: "Imperative describes how to do something, declarative describes what to do",
        question_type: "multiple_choice"
    },
    {
        id: 150,
        subject: "software_engineering",
        difficulty_level: 10,
        question_text: "What is Category Theory in relation to programming?",
        options: ["Mathematical theory that provides abstract framework for understanding program structure", "A way to categorize programs", "A classification system", "A database theory"],
        correct_answer: "Mathematical theory that provides abstract framework for understanding program structure",
        question_type: "multiple_choice"
    }
];

// Cloud Computing Questions
// Cloud Computing - 50 Questions (5 per level, 10 levels)
const CLOUD_QUESTIONS = [
    // Level 1 - Basic Cloud Concepts
    {
        id: 151,
        subject: "cloud_computing",
        difficulty_level: 1,
        question_text: "What is cloud computing?",
        options: ["Computing services delivered over the internet", "Local computer processing", "Mobile app development", "Database management"],
        correct_answer: "Computing services delivered over the internet",
        question_type: "multiple_choice"
    },
    {
        id: 152,
        subject: "cloud_computing",
        difficulty_level: 1,
        question_text: "What does SaaS stand for?",
        options: ["Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service"],
        correct_answer: "Software as a Service",
        question_type: "multiple_choice"
    },
    {
        id: 153,
        subject: "cloud_computing",
        difficulty_level: 1,
        question_text: "Which company provides AWS?",
        options: ["Amazon", "Google", "Microsoft", "IBM"],
        correct_answer: "Amazon",
        question_type: "multiple_choice"
    },
    {
        id: 154,
        subject: "cloud_computing",
        difficulty_level: 1,
        question_text: "What is virtualization?",
        options: ["Creating virtual versions of computing resources", "Internet browsing", "Mobile development", "Database design"],
        correct_answer: "Creating virtual versions of computing resources",
        question_type: "multiple_choice"
    },
    {
        id: 155,
        subject: "cloud_computing",
        difficulty_level: 1,
        question_text: "What does IaaS stand for?",
        options: ["Infrastructure as a Service", "Internet as a Service", "Integration as a Service", "Information as a Service"],
        correct_answer: "Infrastructure as a Service",
        question_type: "multiple_choice"
    },

    // Level 2 - Cloud Service Models
    {
        id: 156,
        subject: "cloud_computing",
        difficulty_level: 2,
        question_text: "What does PaaS stand for?",
        options: ["Platform as a Service", "Program as a Service", "Process as a Service", "Product as a Service"],
        correct_answer: "Platform as a Service",
        question_type: "multiple_choice"
    },
    {
        id: 157,
        subject: "cloud_computing",
        difficulty_level: 2,
        question_text: "What is the main difference between IaaS, PaaS, and SaaS?",
        options: ["IaaS provides infrastructure, PaaS provides platform, SaaS provides software", "IaaS is fastest", "PaaS is cheapest", "They are identical"],
        correct_answer: "IaaS provides infrastructure, PaaS provides platform, SaaS provides software",
        question_type: "multiple_choice"
    },
    {
        id: 158,
        subject: "cloud_computing",
        difficulty_level: 2,
        question_text: "Which is an example of SaaS?",
        options: ["Gmail, Office 365, Salesforce", "AWS EC2", "Google App Engine", "VMware"],
        correct_answer: "Gmail, Office 365, Salesforce",
        question_type: "multiple_choice"
    },
    {
        id: 159,
        subject: "cloud_computing",
        difficulty_level: 2,
        question_text: "What is a public cloud?",
        options: ["Cloud services offered over the internet to anyone who wants to use them", "A cloud owned by the government", "A free cloud service", "A cloud for public companies only"],
        correct_answer: "Cloud services offered over the internet to anyone who wants to use them",
        question_type: "multiple_choice"
    },
    {
        id: 160,
        subject: "cloud_computing",
        difficulty_level: 2,
        question_text: "What is a private cloud?",
        options: ["Cloud infrastructure used exclusively by a single organization", "A personal computer", "A secret cloud service", "A cloud with password protection"],
        correct_answer: "Cloud infrastructure used exclusively by a single organization",
        question_type: "multiple_choice"
    },

    // Level 3 - AWS Basics
    {
        id: 161,
        subject: "cloud_computing",
        difficulty_level: 3,
        question_text: "What is Amazon EC2?",
        options: ["Elastic Compute Cloud - virtual servers in the cloud", "Email service", "Database service", "Storage service"],
        correct_answer: "Elastic Compute Cloud - virtual servers in the cloud",
        question_type: "multiple_choice"
    },
    {
        id: 162,
        subject: "cloud_computing",
        difficulty_level: 3,
        question_text: "What is Amazon S3?",
        options: ["Simple Storage Service - object storage service", "Server service", "Security service", "Software service"],
        correct_answer: "Simple Storage Service - object storage service",
        question_type: "multiple_choice"
    },
    {
        id: 163,
        subject: "cloud_computing",
        difficulty_level: 3,
        question_text: "What is Amazon RDS?",
        options: ["Relational Database Service - managed database service", "Remote Desktop Service", "Resource Distribution Service", "Real-time Data Service"],
        correct_answer: "Relational Database Service - managed database service",
        question_type: "multiple_choice"
    },
    {
        id: 164,
        subject: "cloud_computing",
        difficulty_level: 3,
        question_text: "What is an AWS Region?",
        options: ["Geographic area containing multiple data centers", "A type of server", "A security group", "A billing unit"],
        correct_answer: "Geographic area containing multiple data centers",
        question_type: "multiple_choice"
    },
    {
        id: 165,
        subject: "cloud_computing",
        difficulty_level: 3,
        question_text: "What is an Availability Zone in AWS?",
        options: ["Isolated data center within a region", "A type of instance", "A security feature", "A pricing model"],
        correct_answer: "Isolated data center within a region",
        question_type: "multiple_choice"
    },

    // Level 4 - Cloud Storage & Databases
    {
        id: 166,
        subject: "cloud_computing",
        difficulty_level: 4,
        question_text: "What is the difference between object storage and block storage?",
        options: ["Object storage stores files as objects, block storage provides raw block-level storage", "Object storage is faster", "Block storage is newer", "They are identical"],
        correct_answer: "Object storage stores files as objects, block storage provides raw block-level storage",
        question_type: "multiple_choice"
    },
    {
        id: 167,
        subject: "cloud_computing",
        difficulty_level: 4,
        question_text: "What is Amazon DynamoDB?",
        options: ["NoSQL database service", "SQL database service", "File storage service", "Compute service"],
        correct_answer: "NoSQL database service",
        question_type: "multiple_choice"
    },
    {
        id: 168,
        subject: "cloud_computing",
        difficulty_level: 4,
        question_text: "What is data replication in cloud storage?",
        options: ["Creating multiple copies of data across different locations for redundancy", "Copying data to local storage", "Backing up data once", "Compressing data"],
        correct_answer: "Creating multiple copies of data across different locations for redundancy",
        question_type: "multiple_choice"
    },
    {
        id: 169,
        subject: "cloud_computing",
        difficulty_level: 4,
        question_text: "What is Amazon CloudFront?",
        options: ["Content Delivery Network (CDN) service", "Database service", "Compute service", "Security service"],
        correct_answer: "Content Delivery Network (CDN) service",
        question_type: "multiple_choice"
    },
    {
        id: 170,
        subject: "cloud_computing",
        difficulty_level: 4,
        question_text: "What is database sharding?",
        options: ["Horizontal partitioning of database across multiple servers", "Vertical partitioning", "Database backup", "Database encryption"],
        correct_answer: "Horizontal partitioning of database across multiple servers",
        question_type: "multiple_choice"
    },

    // Level 5 - Cloud Networking & Security
    {
        id: 171,
        subject: "cloud_computing",
        difficulty_level: 5,
        question_text: "What is a VPC in AWS?",
        options: ["Virtual Private Cloud - isolated network environment", "Virtual Private Computer", "Very Powerful Computing", "Virtual Processing Center"],
        correct_answer: "Virtual Private Cloud - isolated network environment",
        question_type: "multiple_choice"
    },
    {
        id: 172,
        subject: "cloud_computing",
        difficulty_level: 5,
        question_text: "What is the purpose of security groups in AWS?",
        options: ["Virtual firewalls that control inbound and outbound traffic", "User access groups", "Data encryption groups", "Server groupings"],
        correct_answer: "Virtual firewalls that control inbound and outbound traffic",
        question_type: "multiple_choice"
    },
    {
        id: 173,
        subject: "cloud_computing",
        difficulty_level: 5,
        question_text: "What is IAM in AWS?",
        options: ["Identity and Access Management - controls access to AWS resources", "Internet Access Management", "Infrastructure Asset Management", "Internal Application Management"],
        correct_answer: "Identity and Access Management - controls access to AWS resources",
        question_type: "multiple_choice"
    },
    {
        id: 174,
        subject: "cloud_computing",
        difficulty_level: 5,
        question_text: "What is encryption at rest vs encryption in transit?",
        options: ["At rest encrypts stored data, in transit encrypts data being transmitted", "At rest is faster", "In transit is more secure", "They are identical"],
        correct_answer: "At rest encrypts stored data, in transit encrypts data being transmitted",
        question_type: "multiple_choice"
    },
    {
        id: 175,
        subject: "cloud_computing",
        difficulty_level: 5,
        question_text: "What is a load balancer?",
        options: ["Distributes incoming traffic across multiple servers", "Balances server loads physically", "Monitors server performance", "Backs up server data"],
        correct_answer: "Distributes incoming traffic across multiple servers",
        question_type: "multiple_choice"
    },

    // Level 6 - Containerization & Orchestration
    {
        id: 176,
        subject: "cloud_computing",
        difficulty_level: 6,
        question_text: "What is Docker?",
        options: ["Platform for developing, shipping, and running applications in containers", "A type of server", "A database technology", "A programming language"],
        correct_answer: "Platform for developing, shipping, and running applications in containers",
        question_type: "multiple_choice"
    },
    {
        id: 177,
        subject: "cloud_computing",
        difficulty_level: 6,
        question_text: "What is Kubernetes?",
        options: ["Container orchestration platform for automating deployment and management", "A type of container", "A cloud provider", "A programming framework"],
        correct_answer: "Container orchestration platform for automating deployment and management",
        question_type: "multiple_choice"
    },
    {
        id: 178,
        subject: "cloud_computing",
        difficulty_level: 6,
        question_text: "What is the difference between containers and virtual machines?",
        options: ["Containers share OS kernel, VMs have separate OS instances", "Containers are slower", "VMs are newer", "They are identical"],
        correct_answer: "Containers share OS kernel, VMs have separate OS instances",
        question_type: "multiple_choice"
    },
    {
        id: 179,
        subject: "cloud_computing",
        difficulty_level: 6,
        question_text: "What is Amazon ECS?",
        options: ["Elastic Container Service - container orchestration service", "Elastic Compute Service", "Enterprise Cloud Service", "Email Communication Service"],
        correct_answer: "Elastic Container Service - container orchestration service",
        question_type: "multiple_choice"
    },
    {
        id: 180,
        subject: "cloud_computing",
        difficulty_level: 6,
        question_text: "What is a Docker image?",
        options: ["Read-only template used to create containers", "A picture of Docker", "A type of virtual machine", "A database snapshot"],
        correct_answer: "Read-only template used to create containers",
        question_type: "multiple_choice"
    },

    // Level 7 - Serverless Computing
    {
        id: 181,
        subject: "cloud_computing",
        difficulty_level: 7,
        question_text: "What is serverless computing?",
        options: ["Cloud computing model where cloud provider manages server infrastructure", "Computing without any servers", "Local computing only", "A type of database"],
        correct_answer: "Cloud computing model where cloud provider manages server infrastructure",
        question_type: "multiple_choice"
    },
    {
        id: 182,
        subject: "cloud_computing",
        difficulty_level: 7,
        question_text: "What is AWS Lambda?",
        options: ["Serverless compute service that runs code in response to events", "A type of server", "A database service", "A storage service"],
        correct_answer: "Serverless compute service that runs code in response to events",
        question_type: "multiple_choice"
    },
    {
        id: 183,
        subject: "cloud_computing",
        difficulty_level: 7,
        question_text: "What is Function as a Service (FaaS)?",
        options: ["Cloud service that allows running individual functions without managing servers", "A type of SaaS", "A database service", "A storage service"],
        correct_answer: "Cloud service that allows running individual functions without managing servers",
        question_type: "multiple_choice"
    },
    {
        id: 184,
        subject: "cloud_computing",
        difficulty_level: 7,
        question_text: "What is cold start in serverless computing?",
        options: ["Initial delay when function is invoked after being idle", "Starting servers in cold weather", "Restarting failed functions", "A security feature"],
        correct_answer: "Initial delay when function is invoked after being idle",
        question_type: "multiple_choice"
    },
    {
        id: 185,
        subject: "cloud_computing",
        difficulty_level: 7,
        question_text: "What is event-driven architecture?",
        options: ["Architecture where components communicate through events", "Architecture for event planning", "A database design pattern", "A security architecture"],
        correct_answer: "Architecture where components communicate through events",
        question_type: "multiple_choice"
    },

    // Level 8 - DevOps & CI/CD in Cloud
    {
        id: 186,
        subject: "cloud_computing",
        difficulty_level: 8,
        question_text: "What is Infrastructure as Code (IaC)?",
        options: ["Managing infrastructure through code rather than manual processes", "Writing code for infrastructure", "A programming language", "A database technology"],
        correct_answer: "Managing infrastructure through code rather than manual processes",
        question_type: "multiple_choice"
    },
    {
        id: 187,
        subject: "cloud_computing",
        difficulty_level: 8,
        question_text: "What is AWS CloudFormation?",
        options: ["Service for modeling and setting up AWS resources using templates", "A cloud formation process", "A weather service", "A database service"],
        correct_answer: "Service for modeling and setting up AWS resources using templates",
        question_type: "multiple_choice"
    },
    {
        id: 188,
        subject: "cloud_computing",
        difficulty_level: 8,
        question_text: "What is blue-green deployment?",
        options: ["Deployment strategy using two identical production environments", "Deployment using blue and green colors", "A security deployment", "A database deployment"],
        correct_answer: "Deployment strategy using two identical production environments",
        question_type: "multiple_choice"
    },
    {
        id: 189,
        subject: "cloud_computing",
        difficulty_level: 8,
        question_text: "What is canary deployment?",
        options: ["Gradually rolling out changes to a small subset of users first", "Deployment for canary birds", "A yellow deployment strategy", "A database migration technique"],
        correct_answer: "Gradually rolling out changes to a small subset of users first",
        question_type: "multiple_choice"
    },
    {
        id: 190,
        subject: "cloud_computing",
        difficulty_level: 8,
        question_text: "What is AWS CodePipeline?",
        options: ["Continuous integration and delivery service", "A data pipeline service", "A networking service", "A storage service"],
        correct_answer: "Continuous integration and delivery service",
        question_type: "multiple_choice"
    },

    // Level 9 - Cloud Monitoring & Optimization
    {
        id: 191,
        subject: "cloud_computing",
        difficulty_level: 9,
        question_text: "What is AWS CloudWatch?",
        options: ["Monitoring and observability service for AWS resources", "A cloud watching service", "A security monitoring tool", "A cost monitoring service"],
        correct_answer: "Monitoring and observability service for AWS resources",
        question_type: "multiple_choice"
    },
    {
        id: 192,
        subject: "cloud_computing",
        difficulty_level: 9,
        question_text: "What is auto-scaling in cloud computing?",
        options: ["Automatically adjusting resources based on demand", "Manually scaling resources", "Scaling resources once", "A pricing model"],
        correct_answer: "Automatically adjusting resources based on demand",
        question_type: "multiple_choice"
    },
    {
        id: 193,
        subject: "cloud_computing",
        difficulty_level: 9,
        question_text: "What is cloud cost optimization?",
        options: ["Strategies to reduce cloud spending while maintaining performance", "Making cloud services free", "Increasing cloud costs", "Ignoring cloud costs"],
        correct_answer: "Strategies to reduce cloud spending while maintaining performance",
        question_type: "multiple_choice"
    },
    {
        id: 194,
        subject: "cloud_computing",
        difficulty_level: 9,
        question_text: "What is distributed tracing?",
        options: ["Method to track requests across multiple microservices", "Tracing network cables", "A security tracing method", "A database tracing technique"],
        correct_answer: "Method to track requests across multiple microservices",
        question_type: "multiple_choice"
    },
    {
        id: 195,
        subject: "cloud_computing",
        difficulty_level: 9,
        question_text: "What is chaos engineering?",
        options: ["Practice of experimenting on systems to build confidence in resilience", "Creating chaos in systems", "A destructive testing method", "Random system failures"],
        correct_answer: "Practice of experimenting on systems to build confidence in resilience",
        question_type: "multiple_choice"
    },

    // Level 10 - Advanced Cloud Architecture
    {
        id: 196,
        subject: "cloud_computing",
        difficulty_level: 10,
        question_text: "What is multi-cloud strategy?",
        options: ["Using multiple cloud providers to avoid vendor lock-in and improve resilience", "Using multiple clouds for weather", "A single cloud strategy", "A hybrid cloud only"],
        correct_answer: "Using multiple cloud providers to avoid vendor lock-in and improve resilience",
        question_type: "multiple_choice"
    },
    {
        id: 197,
        subject: "cloud_computing",
        difficulty_level: 10,
        question_text: "What is edge computing?",
        options: ["Computing that brings data processing closer to data sources", "Computing on the edge of networks", "A type of cloud computing", "Computing with sharp edges"],
        correct_answer: "Computing that brings data processing closer to data sources",
        question_type: "multiple_choice"
    },
    {
        id: 198,
        subject: "cloud_computing",
        difficulty_level: 10,
        question_text: "What is the CAP theorem in distributed systems?",
        options: ["You can only guarantee 2 of: Consistency, Availability, Partition tolerance", "A cloud architecture principle", "A security theorem", "A performance theorem"],
        correct_answer: "You can only guarantee 2 of: Consistency, Availability, Partition tolerance",
        question_type: "multiple_choice"
    },
    {
        id: 199,
        subject: "cloud_computing",
        difficulty_level: 10,
        question_text: "What is cloud-native architecture?",
        options: ["Architecture designed specifically for cloud environments with microservices", "Architecture born in the cloud", "A native cloud service", "Traditional architecture in cloud"],
        correct_answer: "Architecture designed specifically for cloud environments with microservices",
        question_type: "multiple_choice"
    },
    {
        id: 200,
        subject: "cloud_computing",
        difficulty_level: 10,
        question_text: "What is service mesh?",
        options: ["Infrastructure layer that handles service-to-service communication", "A mesh of services", "A network topology", "A database architecture"],
        correct_answer: "Infrastructure layer that handles service-to-service communication",
        question_type: "multiple_choice"
    }
];


// Combine all questions into single array
const ALL_QUESTIONS = [
    ...FRONTEND_QUESTIONS,
    ...BACKEND_QUESTIONS,
    ...SOFTWARE_QUESTIONS,
    ...CLOUD_QUESTIONS
];

console.log(`✅ Complete database loaded: ${ALL_QUESTIONS.length} questions`);
console.log(`🎨 Frontend: ${FRONTEND_QUESTIONS.length} questions`);
console.log(`⚙️ Backend: ${BACKEND_QUESTIONS.length} questions`);
console.log(`🏗️ Software: ${SOFTWARE_QUESTIONS.length} questions`);
console.log(`☁️ Cloud: ${CLOUD_QUESTIONS.length} questions`);

// Verify questions are properly structured
const subjectCounts = {};
ALL_QUESTIONS.forEach(q => {
    subjectCounts[q.subject] = (subjectCounts[q.subject] || 0) + 1;
});
console.log('📊 Question distribution:', subjectCounts);
