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
