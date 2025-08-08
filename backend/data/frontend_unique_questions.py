#!/usr/bin/env python3
"""
Frontend Web Development - 50 COMPLETELY UNIQUE Questions
Each question is different with balanced answer lengths
"""

FRONTEND_UNIQUE_QUESTIONS = [
    # Level 1 - HTML Basics (5 questions)
    {
        'level': 1,
        'question': 'What does HTML stand for?',
        'correct': 'HyperText Markup Language',
        'wrong': ['High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink Text Markup Language']
    },
    {
        'level': 1,
        'question': 'Which HTML tag creates a hyperlink?',
        'correct': '<a>',
        'wrong': ['<link>', '<href>', '<url>']
    },
    {
        'level': 1,
        'question': 'What is the purpose of the <head> section?',
        'correct': 'Contains metadata',
        'wrong': ['Displays content', 'Contains metadata about the document', 'Creates headers']
    },
    {
        'level': 1,
        'question': 'Which attribute makes an input field required?',
        'correct': 'required',
        'wrong': ['mandatory', 'necessary', 'needed']
    },
    {
        'level': 1,
        'question': 'What does the <br> tag do?',
        'correct': 'Line break',
        'wrong': ['Bold text', 'Creates a line break in text', 'Border']
    },

    # Level 2 - CSS Basics (5 questions)
    {
        'level': 2,
        'question': 'How do you center text horizontally in CSS?',
        'correct': 'text-align: center',
        'wrong': ['align: center', 'center: text', 'horizontal-align: center']
    },
    {
        'level': 2,
        'question': 'Which CSS property controls the space between elements?',
        'correct': 'margin',
        'wrong': ['padding', 'spacing', 'gap']
    },
    {
        'level': 2,
        'question': 'What does the z-index property control?',
        'correct': 'Stacking order',
        'wrong': ['Font size', 'Controls the stacking order of elements', 'Color depth']
    },
    {
        'level': 2,
        'question': 'How do you make text bold in CSS?',
        'correct': 'font-weight: bold',
        'wrong': ['text-style: bold', 'bold: true', 'font-bold: yes']
    },
    {
        'level': 2,
        'question': 'Which unit is relative to the font size?',
        'correct': 'em',
        'wrong': ['px', 'pt', 'cm']
    },

    # Level 3 - JavaScript Basics (5 questions)
    {
        'level': 3,
        'question': 'How do you declare a constant in JavaScript?',
        'correct': 'const',
        'wrong': ['constant', 'final', 'readonly']
    },
    {
        'level': 3,
        'question': 'Which method converts a string to uppercase?',
        'correct': 'toUpperCase()',
        'wrong': ['uppercase()', 'toUpper()', 'upper()']
    },
    {
        'level': 3,
        'question': 'What does the typeof operator return for an array?',
        'correct': 'object',
        'wrong': ['array', 'list', 'collection']
    },
    {
        'level': 3,
        'question': 'How do you add an event listener in JavaScript?',
        'correct': 'addEventListener()',
        'wrong': ['addEvent()', 'on()', 'listen()']
    },
    {
        'level': 3,
        'question': 'Which method removes whitespace from both ends of a string?',
        'correct': 'trim()',
        'wrong': ['strip()', 'clean()', 'removeSpaces()']
    },

    # Level 4 - DOM Manipulation (5 questions)
    {
        'level': 4,
        'question': 'How do you select an element by its class name?',
        'correct': 'getElementsByClassName()',
        'wrong': ['getClass()', 'selectByClass()', 'findClass()']
    },
    {
        'level': 4,
        'question': 'Which property changes the HTML content of an element?',
        'correct': 'innerHTML',
        'wrong': ['content', 'html', 'text']
    },
    {
        'level': 4,
        'question': 'How do you create a new HTML element in JavaScript?',
        'correct': 'createElement()',
        'wrong': ['newElement()', 'makeElement()', 'addElement()']
    },
    {
        'level': 4,
        'question': 'Which method removes a child element?',
        'correct': 'removeChild()',
        'wrong': ['deleteChild()', 'remove()', 'destroy()']
    },
    {
        'level': 4,
        'question': 'How do you get the value of an input field?',
        'correct': 'element.value',
        'wrong': ['element.text', 'element.content', 'element.data']
    },

    # Level 5 - Advanced JavaScript (5 questions)
    {
        'level': 5,
        'question': 'What is the difference between let and const?',
        'correct': 'const cannot be reassigned',
        'wrong': ['let is faster', 'const cannot be reassigned after declaration', 'No difference']
    },
    {
        'level': 5,
        'question': 'Which method creates a new array with filtered elements?',
        'correct': 'filter()',
        'wrong': ['select()', 'where()', 'find()']
    },
    {
        'level': 5,
        'question': 'What does the spread operator (...) do?',
        'correct': 'Expands arrays/objects',
        'wrong': ['Multiplies values', 'Expands arrays and objects into elements', 'Creates ranges']
    },
    {
        'level': 5,
        'question': 'How do you handle errors in JavaScript?',
        'correct': 'try...catch',
        'wrong': ['error...handle', 'catch...error', 'handle...exception']
    },
    {
        'level': 5,
        'question': 'Which method executes a function for each array element?',
        'correct': 'forEach()',
        'wrong': ['each()', 'iterate()', 'loop()']
    },

    # Level 6 - ES6+ Features (5 questions)
    {
        'level': 6,
        'question': 'What is destructuring assignment?',
        'correct': 'Extract values from arrays/objects',
        'wrong': ['Destroy variables', 'Extracting values from arrays and objects', 'Delete properties']
    },
    {
        'level': 6,
        'question': 'How do you define a template literal?',
        'correct': 'Backticks (`)',
        'wrong': ['Single quotes', 'Double quotes', 'Forward slashes']
    },
    {
        'level': 6,
        'question': 'What does Promise.all() do?',
        'correct': 'Waits for all promises',
        'wrong': ['Creates promises', 'Waits for all promises to resolve', 'Cancels promises']
    },
    {
        'level': 6,
        'question': 'How do you define default parameters?',
        'correct': 'function(param = value)',
        'wrong': ['function(param := value)', 'function(param default value)', 'function(param || value)']
    },
    {
        'level': 6,
        'question': 'What is the purpose of Symbol in JavaScript?',
        'correct': 'Unique identifiers',
        'wrong': ['Mathematical symbols', 'Creates unique primitive identifiers', 'String symbols']
    },

    # Level 7 - React Basics (5 questions)
    {
        'level': 7,
        'question': 'What is JSX?',
        'correct': 'JavaScript XML syntax',
        'wrong': ['Java Syntax Extension', 'JavaScript XML syntax extension', 'JSON XML']
    },
    {
        'level': 7,
        'question': 'How do you pass data to a child component?',
        'correct': 'Props',
        'wrong': ['State', 'Properties passed to components', 'Parameters']
    },
    {
        'level': 7,
        'question': 'Which hook manages component state?',
        'correct': 'useState',
        'wrong': ['useEffect', 'useContext', 'useReducer']
    },
    {
        'level': 7,
        'question': 'What triggers a component re-render?',
        'correct': 'State change',
        'wrong': ['Props change', 'State or props change', 'Function call']
    },
    {
        'level': 7,
        'question': 'How do you handle form submission in React?',
        'correct': 'onSubmit event',
        'wrong': ['onClick', 'onSubmit event handler', 'onSend']
    },

    # Level 8 - React Advanced (5 questions)
    {
        'level': 8,
        'question': 'What is the purpose of useEffect?',
        'correct': 'Handle side effects',
        'wrong': ['Manage state', 'Handle side effects in components', 'Create effects']
    },
    {
        'level': 8,
        'question': 'How do you optimize React performance?',
        'correct': 'React.memo',
        'wrong': ['useState', 'React.memo for component memoization', 'useEffect']
    },
    {
        'level': 8,
        'question': 'What is prop drilling?',
        'correct': 'Passing props through levels',
        'wrong': ['Creating props', 'Passing props through multiple levels', 'Drilling holes']
    },
    {
        'level': 8,
        'question': 'How do you share state between components?',
        'correct': 'Context API',
        'wrong': ['Props only', 'Context API or state management', 'Global variables']
    },
    {
        'level': 8,
        'question': 'What is the purpose of useCallback?',
        'correct': 'Memoize functions',
        'wrong': ['Call functions', 'Memoize functions to prevent recreation', 'Create callbacks']
    },

    # Level 9 - Performance & Optimization (5 questions)
    {
        'level': 9,
        'question': 'What is code splitting?',
        'correct': 'Divide code into chunks',
        'wrong': ['Split strings', 'Dividing code into loadable chunks', 'Break code']
    },
    {
        'level': 9,
        'question': 'How do you implement lazy loading?',
        'correct': 'React.lazy()',
        'wrong': ['lazy()', 'React.lazy() with Suspense', 'loadLazy()']
    },
    {
        'level': 9,
        'question': 'What is tree shaking?',
        'correct': 'Remove unused code',
        'wrong': ['Shake DOM tree', 'Removing unused code from bundles', 'Optimize trees']
    },
    {
        'level': 9,
        'question': 'How do you measure performance?',
        'correct': 'Performance API',
        'wrong': ['Console timing', 'Performance API and profiling tools', 'Manual timing']
    },
    {
        'level': 9,
        'question': 'What is the purpose of service workers?',
        'correct': 'Background processing',
        'wrong': ['UI workers', 'Background processing and caching', 'Service calls']
    },

    # Level 10 - Expert Level (5 questions)
    {
        'level': 10,
        'question': 'How do you implement micro-frontends?',
        'correct': 'Module federation',
        'wrong': ['Single SPA', 'Module federation and routing', 'Micro services']
    },
    {
        'level': 10,
        'question': 'What is server-side rendering?',
        'correct': 'Render on server',
        'wrong': ['Client rendering', 'Rendering HTML on server side', 'Service rendering']
    },
    {
        'level': 10,
        'question': 'How do you handle large datasets?',
        'correct': 'Virtual scrolling',
        'wrong': ['Load all data', 'Virtual scrolling and pagination', 'Cache everything']
    },
    {
        'level': 10,
        'question': 'What is progressive web app?',
        'correct': 'Web app with native features',
        'wrong': ['Progressive loading', 'Web app with native capabilities', 'Advanced web app']
    },
    {
        'level': 10,
        'question': 'How do you implement real-time updates?',
        'correct': 'WebSockets',
        'wrong': ['HTTP polling', 'WebSockets or Server-Sent Events', 'AJAX calls']
    }
]
