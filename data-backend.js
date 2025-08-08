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
