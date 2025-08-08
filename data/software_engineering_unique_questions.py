#!/usr/bin/env python3
"""
Software Engineering - 50 COMPLETELY UNIQUE Questions
"""

SOFTWARE_ENGINEERING_UNIQUE_QUESTIONS = [
    # Level 1 - Basic Principles (5 questions)
    {
        'level': 1,
        'question': 'What does DRY principle mean?',
        'correct': "Don't Repeat Yourself",
        'wrong': ['Do Repeat Yourself', 'Data Retrieval Yield', 'Dynamic Resource Yielding']
    },
    {
        'level': 1,
        'question': 'What is version control?',
        'correct': 'Track file changes',
        'wrong': ['Control versions', 'System for tracking changes in files', 'Version management']
    },
    {
        'level': 1,
        'question': 'What is code refactoring?',
        'correct': 'Improve code structure',
        'wrong': ['Rewrite code', 'Improving code without changing behavior', 'Factor code']
    },
    {
        'level': 1,
        'question': 'What is a software bug?',
        'correct': 'Error in code',
        'wrong': ['Software insect', 'Error or flaw in software code', 'Bug report']
    },
    {
        'level': 1,
        'question': 'What is debugging?',
        'correct': 'Find and fix errors',
        'wrong': ['Remove bugs', 'Process of finding and fixing errors', 'Debug mode']
    },

    # Level 2 - Development Practices (5 questions)
    {
        'level': 2,
        'question': 'What is pair programming?',
        'correct': 'Two developers, one computer',
        'wrong': ['Programming pairs', 'Two developers working together', 'Paired coding']
    },
    {
        'level': 2,
        'question': 'What is code review?',
        'correct': 'Examine code for quality',
        'wrong': ['Review code', 'Systematic examination of code', 'Code inspection']
    },
    {
        'level': 2,
        'question': 'What is technical debt?',
        'correct': 'Cost of quick solutions',
        'wrong': ['Money owed', 'Cost of choosing quick over good solutions', 'Technical payment']
    },
    {
        'level': 2,
        'question': 'What is continuous integration?',
        'correct': 'Frequent code merging',
        'wrong': ['Continuous coding', 'Frequently merging code changes', 'Integration testing']
    },
    {
        'level': 2,
        'question': 'What is agile methodology?',
        'correct': 'Iterative development',
        'wrong': ['Fast development', 'Iterative and flexible development', 'Agile programming']
    },

    # Level 3 - Testing (5 questions)
    {
        'level': 3,
        'question': 'What is unit testing?',
        'correct': 'Test individual components',
        'wrong': ['Test units', 'Testing individual software components', 'Unit validation']
    },
    {
        'level': 3,
        'question': 'What is integration testing?',
        'correct': 'Test component interactions',
        'wrong': ['Integrate tests', 'Testing interactions between components', 'Integration validation']
    },
    {
        'level': 3,
        'question': 'What is test-driven development?',
        'correct': 'Write tests first',
        'wrong': ['Test while developing', 'Writing tests before implementation', 'Driven by tests']
    },
    {
        'level': 3,
        'question': 'What is regression testing?',
        'correct': 'Test after changes',
        'wrong': ['Regress tests', 'Testing after code changes', 'Backward testing']
    },
    {
        'level': 3,
        'question': 'What is code coverage?',
        'correct': 'Measure tested code',
        'wrong': ['Cover code', 'Measuring how much code is tested', 'Code protection']
    },

    # Level 4 - Design Patterns (5 questions)
    {
        'level': 4,
        'question': 'What is Singleton pattern?',
        'correct': 'One instance only',
        'wrong': ['Single pattern', 'Ensuring only one instance exists', 'Alone pattern']
    },
    {
        'level': 4,
        'question': 'What is Factory pattern?',
        'correct': 'Create objects without specifying class',
        'wrong': ['Object factory', 'Creating objects without specifying exact class', 'Manufacturing pattern']
    },
    {
        'level': 4,
        'question': 'What is Observer pattern?',
        'correct': 'Notify multiple objects',
        'wrong': ['Watch objects', 'Notifying multiple objects of changes', 'Observation pattern']
    },
    {
        'level': 4,
        'question': 'What is Strategy pattern?',
        'correct': 'Interchangeable algorithms',
        'wrong': ['Strategic pattern', 'Making algorithms interchangeable', 'Strategy planning']
    },
    {
        'level': 4,
        'question': 'What is Decorator pattern?',
        'correct': 'Add behavior dynamically',
        'wrong': ['Decorate objects', 'Adding behavior to objects dynamically', 'Decoration pattern']
    },

    # Level 5 - SOLID Principles (5 questions)
    {
        'level': 5,
        'question': 'What is Single Responsibility Principle?',
        'correct': 'One reason to change',
        'wrong': ['Single responsibility', 'Class should have one reason to change', 'One responsibility']
    },
    {
        'level': 5,
        'question': 'What is Open/Closed Principle?',
        'correct': 'Open for extension, closed for modification',
        'wrong': ['Open and closed', 'Software entities should be extensible but not modifiable', 'Open or closed']
    },
    {
        'level': 5,
        'question': 'What is Liskov Substitution Principle?',
        'correct': 'Subtypes must be substitutable',
        'wrong': ['Liskov substitution', 'Subtypes must be substitutable for base types', 'Substitution principle']
    },
    {
        'level': 5,
        'question': 'What is Interface Segregation Principle?',
        'correct': 'Many specific interfaces',
        'wrong': ['Segregate interfaces', 'Many specific interfaces better than one general', 'Interface separation']
    },
    {
        'level': 5,
        'question': 'What is Dependency Inversion Principle?',
        'correct': 'Depend on abstractions',
        'wrong': ['Invert dependencies', 'Depend on abstractions not concretions', 'Dependency reversal']
    },

    # Level 6 - Architecture (5 questions)
    {
        'level': 6,
        'question': 'What is MVC pattern?',
        'correct': 'Model-View-Controller',
        'wrong': ['Model-View-Component', 'Separating concerns into three parts', 'Multi-View-Controller']
    },
    {
        'level': 6,
        'question': 'What is layered architecture?',
        'correct': 'Organize code in layers',
        'wrong': ['Layer architecture', 'Organizing code into logical layers', 'Layered structure']
    },
    {
        'level': 6,
        'question': 'What is hexagonal architecture?',
        'correct': 'Ports and adapters',
        'wrong': ['Six-sided architecture', 'Architecture with ports and adapters', 'Hexagon structure']
    },
    {
        'level': 6,
        'question': 'What is clean architecture?',
        'correct': 'Dependencies point inward',
        'wrong': ['Clean code architecture', 'Architecture with inward dependencies', 'Tidy architecture']
    },
    {
        'level': 6,
        'question': 'What is microservices architecture?',
        'correct': 'Small independent services',
        'wrong': ['Micro architecture', 'Architecture of small independent services', 'Service architecture']
    },

    # Level 7 - Advanced Concepts (5 questions)
    {
        'level': 7,
        'question': 'What is Domain-Driven Design?',
        'correct': 'Focus on business domain',
        'wrong': ['Domain design', 'Focusing software design on business domain', 'Driven design']
    },
    {
        'level': 7,
        'question': 'What is CQRS?',
        'correct': 'Command Query Responsibility Segregation',
        'wrong': ['Command Query Response System', 'Separating read and write operations', 'Command Query Result Set']
    },
    {
        'level': 7,
        'question': 'What is event sourcing?',
        'correct': 'Store events not state',
        'wrong': ['Source events', 'Storing sequence of events not current state', 'Event storage']
    },
    {
        'level': 7,
        'question': 'What is dependency injection?',
        'correct': 'Provide dependencies externally',
        'wrong': ['Inject dependencies', 'Providing dependencies from external source', 'Dependency provision']
    },
    {
        'level': 7,
        'question': 'What is inversion of control?',
        'correct': 'Framework controls flow',
        'wrong': ['Control inversion', 'Framework controlling application flow', 'Inverted control']
    },

    # Level 8 - Quality Assurance (5 questions)
    {
        'level': 8,
        'question': 'What is behavior-driven development?',
        'correct': 'Specify behavior in natural language',
        'wrong': ['Behavior development', 'Specifying behavior using natural language', 'Driven by behavior']
    },
    {
        'level': 8,
        'question': 'What is acceptance testing?',
        'correct': 'Test user requirements',
        'wrong': ['Accept tests', 'Testing against user requirements', 'Acceptance validation']
    },
    {
        'level': 8,
        'question': 'What is performance testing?',
        'correct': 'Test system performance',
        'wrong': ['Performance validation', 'Testing system performance under load', 'Speed testing']
    },
    {
        'level': 8,
        'question': 'What is security testing?',
        'correct': 'Test for vulnerabilities',
        'wrong': ['Secure testing', 'Testing for security vulnerabilities', 'Security validation']
    },
    {
        'level': 8,
        'question': 'What is usability testing?',
        'correct': 'Test user experience',
        'wrong': ['Usable testing', 'Testing user experience and interface', 'Usage testing']
    },

    # Level 9 - DevOps & Deployment (5 questions)
    {
        'level': 9,
        'question': 'What is continuous deployment?',
        'correct': 'Automatic production deployment',
        'wrong': ['Continuous delivery', 'Automatically deploying to production', 'Deploy continuously']
    },
    {
        'level': 9,
        'question': 'What is blue-green deployment?',
        'correct': 'Two identical environments',
        'wrong': ['Blue and green', 'Using two identical production environments', 'Color deployment']
    },
    {
        'level': 9,
        'question': 'What is canary deployment?',
        'correct': 'Gradual rollout',
        'wrong': ['Canary testing', 'Gradually rolling out to subset of users', 'Bird deployment']
    },
    {
        'level': 9,
        'question': 'What is infrastructure as code?',
        'correct': 'Manage infrastructure with code',
        'wrong': ['Code infrastructure', 'Managing infrastructure using code', 'Infrastructure coding']
    },
    {
        'level': 9,
        'question': 'What is monitoring and observability?',
        'correct': 'Track system health',
        'wrong': ['Monitor systems', 'Tracking and understanding system health', 'System observation']
    },

    # Level 10 - Expert Level (5 questions)
    {
        'level': 10,
        'question': 'What is chaos engineering?',
        'correct': 'Deliberately introduce failures',
        'wrong': ['Chaotic engineering', 'Deliberately introducing failures to test resilience', 'Engineering chaos']
    },
    {
        'level': 10,
        'question': 'What is site reliability engineering?',
        'correct': 'Apply engineering to operations',
        'wrong': ['Site reliability', 'Applying engineering principles to operations', 'Reliable engineering']
    },
    {
        'level': 10,
        'question': 'What is feature flagging?',
        'correct': 'Toggle features dynamically',
        'wrong': ['Flag features', 'Dynamically toggling features on/off', 'Feature switching']
    },
    {
        'level': 10,
        'question': 'What is A/B testing?',
        'correct': 'Compare two versions',
        'wrong': ['A and B testing', 'Comparing two versions to see which performs better', 'Version testing']
    },
    {
        'level': 10,
        'question': 'What is distributed system design?',
        'correct': 'Design systems across multiple machines',
        'wrong': ['Distributed design', 'Designing systems that run across multiple machines', 'System distribution']
    }
]
