#!/usr/bin/env python3
"""
Backend Web Development - 50 COMPLETELY UNIQUE Questions
"""

BACKEND_UNIQUE_QUESTIONS = [
    # Level 1 - HTTP Basics (5 questions)
    {
        'level': 1,
        'question': 'What does REST stand for?',
        'correct': 'Representational State Transfer',
        'wrong': ['Remote State Transfer', 'Relational State Transfer', 'Recursive State Transfer']
    },
    {
        'level': 1,
        'question': 'Which HTTP method deletes a resource?',
        'correct': 'DELETE',
        'wrong': ['REMOVE', 'DROP', 'DESTROY']
    },
    {
        'level': 1,
        'question': 'What is the purpose of HTTP headers?',
        'correct': 'Metadata about request/response',
        'wrong': ['Main content', 'Metadata about the request or response', 'Authentication only']
    },
    {
        'level': 1,
        'question': 'Which status code indicates "Not Found"?',
        'correct': '404',
        'wrong': ['400', '500', '403']
    },
    {
        'level': 1,
        'question': 'What does CRUD stand for?',
        'correct': 'Create, Read, Update, Delete',
        'wrong': ['Copy, Read, Update, Delete', 'Create, Retrieve, Update, Delete', 'Create, Read, Upload, Delete']
    },

    # Level 2 - Database Basics (5 questions)
    {
        'level': 2,
        'question': 'What is a primary key?',
        'correct': 'Unique identifier',
        'wrong': ['First column', 'Unique identifier for table rows', 'Main key']
    },
    {
        'level': 2,
        'question': 'Which SQL command retrieves data?',
        'correct': 'SELECT',
        'wrong': ['GET', 'FETCH', 'RETRIEVE']
    },
    {
        'level': 2,
        'question': 'What is a foreign key?',
        'correct': 'Reference to another table',
        'wrong': ['External key', 'Reference to primary key in another table', 'Secondary key']
    },
    {
        'level': 2,
        'question': 'Which command adds data to a table?',
        'correct': 'INSERT',
        'wrong': ['ADD', 'CREATE', 'PUT']
    },
    {
        'level': 2,
        'question': 'What is database normalization?',
        'correct': 'Reduce data redundancy',
        'wrong': ['Make data normal', 'Organizing data to reduce redundancy', 'Standardize format']
    },

    # Level 3 - API Design (5 questions)
    {
        'level': 3,
        'question': 'What is JSON Web Token used for?',
        'correct': 'Authentication',
        'wrong': ['Data storage', 'Secure authentication and authorization', 'JSON parsing']
    },
    {
        'level': 3,
        'question': 'Which HTTP method is idempotent?',
        'correct': 'PUT',
        'wrong': ['POST', 'PATCH', 'CREATE']
    },
    {
        'level': 3,
        'question': 'What is API versioning?',
        'correct': 'Manage API changes',
        'wrong': ['Version control', 'Managing changes to API over time', 'API documentation']
    },
    {
        'level': 3,
        'question': 'What does CORS prevent?',
        'correct': 'Cross-origin requests',
        'wrong': ['All requests', 'Unauthorized cross-origin requests', 'Server errors']
    },
    {
        'level': 3,
        'question': 'What is rate limiting?',
        'correct': 'Control request frequency',
        'wrong': ['Limit features', 'Controlling the frequency of requests', 'Speed control']
    },

    # Level 4 - Server Architecture (5 questions)
    {
        'level': 4,
        'question': 'What is middleware?',
        'correct': 'Software between layers',
        'wrong': ['Middle software', 'Software that sits between layers', 'Database layer']
    },
    {
        'level': 4,
        'question': 'What is load balancing?',
        'correct': 'Distribute traffic',
        'wrong': ['Balance servers', 'Distributing traffic across servers', 'Server balancing']
    },
    {
        'level': 4,
        'question': 'What is caching?',
        'correct': 'Store frequently used data',
        'wrong': ['Hide data', 'Storing frequently accessed data', 'Data backup']
    },
    {
        'level': 4,
        'question': 'What is horizontal scaling?',
        'correct': 'Add more servers',
        'wrong': ['Increase server power', 'Adding more servers to handle load', 'Scale sideways']
    },
    {
        'level': 4,
        'question': 'What is a reverse proxy?',
        'correct': 'Server-side proxy',
        'wrong': ['Client proxy', 'Proxy server for backend servers', 'Backward proxy']
    },

    # Level 5 - Database Advanced (5 questions)
    {
        'level': 5,
        'question': 'What is database indexing?',
        'correct': 'Improve query speed',
        'wrong': ['Index pages', 'Data structure to improve query speed', 'Number records']
    },
    {
        'level': 5,
        'question': 'What is a database transaction?',
        'correct': 'Atomic operation unit',
        'wrong': ['Data transfer', 'Unit of work that is atomic', 'Database purchase']
    },
    {
        'level': 5,
        'question': 'What does ACID stand for?',
        'correct': 'Atomicity, Consistency, Isolation, Durability',
        'wrong': ['Atomic, Consistent, Isolated, Durable', 'Database properties for reliability', 'Advanced, Complete, Integrated, Dependable']
    },
    {
        'level': 5,
        'question': 'What is database sharding?',
        'correct': 'Partition data horizontally',
        'wrong': ['Break database', 'Partitioning data across databases', 'Share database']
    },
    {
        'level': 5,
        'question': 'What is connection pooling?',
        'correct': 'Reuse database connections',
        'wrong': ['Pool connections', 'Reusing database connections efficiently', 'Connect pools']
    },

    # Level 6 - Security (5 questions)
    {
        'level': 6,
        'question': 'What is SQL injection?',
        'correct': 'Malicious SQL code',
        'wrong': ['SQL medicine', 'Inserting malicious SQL code', 'Database injection']
    },
    {
        'level': 6,
        'question': 'What is OAuth?',
        'correct': 'Authorization framework',
        'wrong': ['Authentication only', 'Open authorization framework', 'Password system']
    },
    {
        'level': 6,
        'question': 'What is HTTPS?',
        'correct': 'Secure HTTP',
        'wrong': ['Fast HTTP', 'HTTP with SSL/TLS encryption', 'High-speed HTTP']
    },
    {
        'level': 6,
        'question': 'What is input validation?',
        'correct': 'Verify input data',
        'wrong': ['Input checking', 'Verifying input data is safe', 'Validate forms']
    },
    {
        'level': 6,
        'question': 'What is session management?',
        'correct': 'Track user state',
        'wrong': ['Manage meetings', 'Tracking user state across requests', 'Session storage']
    },

    # Level 7 - Microservices (5 questions)
    {
        'level': 7,
        'question': 'What are microservices?',
        'correct': 'Small independent services',
        'wrong': ['Tiny services', 'Small independent deployable services', 'Micro applications']
    },
    {
        'level': 7,
        'question': 'What is service discovery?',
        'correct': 'Find service locations',
        'wrong': ['Discover services', 'Mechanism to find service locations', 'Service detection']
    },
    {
        'level': 7,
        'question': 'What is an API gateway?',
        'correct': 'Single entry point',
        'wrong': ['API door', 'Single entry point for APIs', 'Gateway API']
    },
    {
        'level': 7,
        'question': 'What is eventual consistency?',
        'correct': 'Consistency over time',
        'wrong': ['Immediate consistency', 'System becomes consistent eventually', 'Final consistency']
    },
    {
        'level': 7,
        'question': 'What is circuit breaker pattern?',
        'correct': 'Prevent cascading failures',
        'wrong': ['Break circuits', 'Pattern to prevent cascading failures', 'Stop failures']
    },

    # Level 8 - Performance (5 questions)
    {
        'level': 8,
        'question': 'What is database replication?',
        'correct': 'Copy data across servers',
        'wrong': ['Duplicate database', 'Copying data across multiple servers', 'Replicate queries']
    },
    {
        'level': 8,
        'question': 'What is CDN?',
        'correct': 'Content Delivery Network',
        'wrong': ['Content Distribution Network', 'Network for delivering content globally', 'Central Data Network']
    },
    {
        'level': 8,
        'question': 'What is lazy loading?',
        'correct': 'Load data when needed',
        'wrong': ['Slow loading', 'Loading data only when needed', 'Delayed loading']
    },
    {
        'level': 8,
        'question': 'What is database partitioning?',
        'correct': 'Divide data into parts',
        'wrong': ['Separate database', 'Dividing data into manageable parts', 'Partition tables']
    },
    {
        'level': 8,
        'question': 'What is message queuing?',
        'correct': 'Asynchronous communication',
        'wrong': ['Queue messages', 'Asynchronous communication pattern', 'Message storage']
    },

    # Level 9 - Distributed Systems (5 questions)
    {
        'level': 9,
        'question': 'What is CAP theorem?',
        'correct': 'Consistency, Availability, Partition tolerance',
        'wrong': ['Capacity, Availability, Performance', 'Distributed systems trade-offs', 'Complete, Available, Persistent']
    },
    {
        'level': 9,
        'question': 'What is consensus algorithm?',
        'correct': 'Agreement in distributed systems',
        'wrong': ['Consensus building', 'Algorithm for distributed agreement', 'Voting algorithm']
    },
    {
        'level': 9,
        'question': 'What is event sourcing?',
        'correct': 'Store events not state',
        'wrong': ['Source events', 'Storing events instead of current state', 'Event tracking']
    },
    {
        'level': 9,
        'question': 'What is CQRS?',
        'correct': 'Command Query Responsibility Segregation',
        'wrong': ['Command Query Response System', 'Separating read and write models', 'Command Query Result Set']
    },
    {
        'level': 9,
        'question': 'What is saga pattern?',
        'correct': 'Distributed transaction management',
        'wrong': ['Story pattern', 'Managing distributed transactions', 'Saga database']
    },

    # Level 10 - Expert Level (5 questions)
    {
        'level': 10,
        'question': 'How do you handle distributed locks?',
        'correct': 'Consensus-based locking',
        'wrong': ['File locking', 'Using consensus algorithms for locking', 'Database locks']
    },
    {
        'level': 10,
        'question': 'What is Byzantine fault tolerance?',
        'correct': 'Handle malicious nodes',
        'wrong': ['Byzantine history', 'Handling malicious or faulty nodes', 'Fault tolerance']
    },
    {
        'level': 10,
        'question': 'How do you design for 99.99% uptime?',
        'correct': 'Redundancy and failover',
        'wrong': ['Single server', 'Multiple redundancy and failover systems', 'High availability']
    },
    {
        'level': 10,
        'question': 'What is distributed tracing?',
        'correct': 'Track requests across services',
        'wrong': ['Trace distribution', 'Tracking requests across microservices', 'Service tracing']
    },
    {
        'level': 10,
        'question': 'How do you handle data consistency at scale?',
        'correct': 'Eventual consistency patterns',
        'wrong': ['Strong consistency', 'Using eventual consistency patterns', 'Consistent scaling']
    }
]
