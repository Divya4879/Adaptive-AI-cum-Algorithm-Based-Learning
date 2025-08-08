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
