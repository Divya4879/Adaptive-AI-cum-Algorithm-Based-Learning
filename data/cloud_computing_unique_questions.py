#!/usr/bin/env python3
"""
Cloud Computing - 50 COMPLETELY UNIQUE Questions
"""

CLOUD_COMPUTING_UNIQUE_QUESTIONS = [
    # Level 1 - Cloud Basics (5 questions)
    {
        'level': 1,
        'question': 'What does IaaS provide?',
        'correct': 'Infrastructure resources',
        'wrong': ['Internet access', 'Infrastructure resources like servers', 'Information services']
    },
    {
        'level': 1,
        'question': 'What is the main benefit of cloud computing?',
        'correct': 'Pay-as-you-use',
        'wrong': ['Always cheaper', 'Pay-as-you-use pricing model', 'Unlimited storage']
    },
    {
        'level': 1,
        'question': 'What is virtualization?',
        'correct': 'Create virtual resources',
        'wrong': ['Make things virtual', 'Creating virtual versions of physical resources', 'Virtual reality']
    },
    {
        'level': 1,
        'question': 'What is a public cloud?',
        'correct': 'Shared cloud infrastructure',
        'wrong': ['Government cloud', 'Cloud infrastructure shared by multiple tenants', 'Open cloud']
    },
    {
        'level': 1,
        'question': 'What is cloud elasticity?',
        'correct': 'Scale resources automatically',
        'wrong': ['Flexible cloud', 'Automatically scaling resources based on demand', 'Elastic storage']
    },

    # Level 2 - Cloud Services (5 questions)
    {
        'level': 2,
        'question': 'What is Amazon EC2?',
        'correct': 'Virtual servers',
        'wrong': ['Elastic storage', 'Virtual servers in the cloud', 'Container service']
    },
    {
        'level': 2,
        'question': 'What is object storage?',
        'correct': 'Store files as objects',
        'wrong': ['Object-oriented storage', 'Storing files as objects with metadata', 'Storage objects']
    },
    {
        'level': 2,
        'question': 'What is a private cloud?',
        'correct': 'Dedicated cloud infrastructure',
        'wrong': ['Private access', 'Cloud infrastructure for single organization', 'Hidden cloud']
    },
    {
        'level': 2,
        'question': 'What is hybrid cloud?',
        'correct': 'Mix of public and private',
        'wrong': ['Hybrid technology', 'Combination of public and private clouds', 'Mixed cloud']
    },
    {
        'level': 2,
        'question': 'What is cloud migration?',
        'correct': 'Move to cloud',
        'wrong': ['Cloud movement', 'Moving applications and data to cloud', 'Migration service']
    },

    # Level 3 - Cloud Storage (5 questions)
    {
        'level': 3,
        'question': 'What is Amazon S3?',
        'correct': 'Object storage service',
        'wrong': ['Server service', 'Simple Storage Service for objects', 'Security service']
    },
    {
        'level': 3,
        'question': 'What is data redundancy in cloud?',
        'correct': 'Multiple copies of data',
        'wrong': ['Redundant data', 'Storing multiple copies for reliability', 'Extra data']
    },
    {
        'level': 3,
        'question': 'What is cloud backup?',
        'correct': 'Store data copies remotely',
        'wrong': ['Backup cloud', 'Storing data copies in cloud for recovery', 'Cloud storage']
    },
    {
        'level': 3,
        'question': 'What is data archiving?',
        'correct': 'Long-term data storage',
        'wrong': ['Archive data', 'Storing data for long-term retention', 'Data collection']
    },
    {
        'level': 3,
        'question': 'What is cloud sync?',
        'correct': 'Keep data synchronized',
        'wrong': ['Synchronize cloud', 'Keeping data synchronized across devices', 'Cloud timing']
    },

    # Level 4 - Networking (5 questions)
    {
        'level': 4,
        'question': 'What is a VPC?',
        'correct': 'Virtual Private Cloud',
        'wrong': ['Virtual PC', 'Isolated network environment in cloud', 'Very Private Computer']
    },
    {
        'level': 4,
        'question': 'What is a load balancer?',
        'correct': 'Distribute traffic',
        'wrong': ['Balance loads', 'Distributing incoming traffic across servers', 'Load distribution']
    },
    {
        'level': 4,
        'question': 'What is CDN?',
        'correct': 'Content Delivery Network',
        'wrong': ['Content Distribution Network', 'Network of servers for content delivery', 'Central Data Network']
    },
    {
        'level': 4,
        'question': 'What is auto-scaling?',
        'correct': 'Automatic resource adjustment',
        'wrong': ['Scale automatically', 'Automatically adjusting resources based on load', 'Auto sizing']
    },
    {
        'level': 4,
        'question': 'What is cloud DNS?',
        'correct': 'Domain name resolution',
        'wrong': ['DNS service', 'Resolving domain names to IP addresses', 'Name service']
    },

    # Level 5 - Containers (5 questions)
    {
        'level': 5,
        'question': 'What is containerization?',
        'correct': 'Package apps with dependencies',
        'wrong': ['Container technology', 'Packaging applications with dependencies', 'Application containers']
    },
    {
        'level': 5,
        'question': 'What is Docker?',
        'correct': 'Container platform',
        'wrong': ['Container technology', 'Platform for building and running containers', 'Application packager']
    },
    {
        'level': 5,
        'question': 'What is Kubernetes?',
        'correct': 'Container orchestration',
        'wrong': ['Container manager', 'Platform for orchestrating containers', 'Container service']
    },
    {
        'level': 5,
        'question': 'What is a container image?',
        'correct': 'Template for containers',
        'wrong': ['Container picture', 'Template for creating containers', 'Image container']
    },
    {
        'level': 5,
        'question': 'What is container registry?',
        'correct': 'Store container images',
        'wrong': ['Register containers', 'Repository for storing container images', 'Container database']
    },

    # Level 6 - Serverless (5 questions)
    {
        'level': 6,
        'question': 'What is serverless computing?',
        'correct': 'Run code without managing servers',
        'wrong': ['No servers needed', 'Running code without server management', 'Server-free computing']
    },
    {
        'level': 6,
        'question': 'What is AWS Lambda?',
        'correct': 'Function as a Service',
        'wrong': ['Lambda function', 'Serverless compute service', 'Function service']
    },
    {
        'level': 6,
        'question': 'What is event-driven architecture?',
        'correct': 'Respond to events',
        'wrong': ['Event architecture', 'Architecture that responds to events', 'Driven by events']
    },
    {
        'level': 6,
        'question': 'What is cold start?',
        'correct': 'Initial function startup delay',
        'wrong': ['Cold startup', 'Delay when function starts for first time', 'Starting cold']
    },
    {
        'level': 6,
        'question': 'What is function timeout?',
        'correct': 'Maximum execution time',
        'wrong': ['Function timer', 'Maximum time function can run', 'Timeout function']
    },

    # Level 7 - DevOps (5 questions)
    {
        'level': 7,
        'question': 'What is Infrastructure as Code?',
        'correct': 'Manage infrastructure with code',
        'wrong': ['Code infrastructure', 'Managing infrastructure using code files', 'Infrastructure coding']
    },
    {
        'level': 7,
        'question': 'What is CI/CD pipeline?',
        'correct': 'Automated build and deploy',
        'wrong': ['Continuous pipeline', 'Automated building and deployment process', 'Pipeline service']
    },
    {
        'level': 7,
        'question': 'What is blue-green deployment?',
        'correct': 'Two identical environments',
        'wrong': ['Blue and green', 'Using two identical production environments', 'Color deployment']
    },
    {
        'level': 7,
        'question': 'What is monitoring in cloud?',
        'correct': 'Track system performance',
        'wrong': ['Monitor cloud', 'Tracking performance and health of systems', 'System monitoring']
    },
    {
        'level': 7,
        'question': 'What is log aggregation?',
        'correct': 'Collect logs centrally',
        'wrong': ['Aggregate logs', 'Collecting logs from multiple sources', 'Log collection']
    },

    # Level 8 - Security (5 questions)
    {
        'level': 8,
        'question': 'What is cloud security?',
        'correct': 'Protect cloud resources',
        'wrong': ['Secure cloud', 'Protecting cloud-based resources and data', 'Security service']
    },
    {
        'level': 8,
        'question': 'What is identity management?',
        'correct': 'Manage user identities',
        'wrong': ['Identity service', 'Managing user identities and access', 'User management']
    },
    {
        'level': 8,
        'question': 'What is encryption at rest?',
        'correct': 'Encrypt stored data',
        'wrong': ['Rest encryption', 'Encrypting data when stored', 'Storage encryption']
    },
    {
        'level': 8,
        'question': 'What is network security group?',
        'correct': 'Virtual firewall',
        'wrong': ['Security network', 'Virtual firewall for network traffic', 'Group security']
    },
    {
        'level': 8,
        'question': 'What is multi-factor authentication?',
        'correct': 'Multiple verification methods',
        'wrong': ['Multiple factors', 'Using multiple methods to verify identity', 'Factor authentication']
    },

    # Level 9 - Advanced Architecture (5 questions)
    {
        'level': 9,
        'question': 'What is multi-cloud strategy?',
        'correct': 'Use multiple cloud providers',
        'wrong': ['Multiple clouds', 'Using multiple cloud providers', 'Cloud strategy']
    },
    {
        'level': 9,
        'question': 'What is edge computing?',
        'correct': 'Process data near source',
        'wrong': ['Edge processing', 'Processing data closer to where it is generated', 'Computing edge']
    },
    {
        'level': 9,
        'question': 'What is disaster recovery?',
        'correct': 'Recover from failures',
        'wrong': ['Disaster planning', 'Recovering systems after disasters', 'Recovery service']
    },
    {
        'level': 9,
        'question': 'What is high availability?',
        'correct': 'Minimize downtime',
        'wrong': ['Always available', 'Designing systems to minimize downtime', 'Available systems']
    },
    {
        'level': 9,
        'question': 'What is fault tolerance?',
        'correct': 'Continue despite failures',
        'wrong': ['Tolerate faults', 'System continues operating despite failures', 'Failure tolerance']
    },

    # Level 10 - Expert Level (5 questions)
    {
        'level': 10,
        'question': 'How do you design for global scale?',
        'correct': 'Multi-region architecture',
        'wrong': ['Global design', 'Using multi-region distributed architecture', 'Scale globally']
    },
    {
        'level': 10,
        'question': 'What is chaos engineering?',
        'correct': 'Test by introducing failures',
        'wrong': ['Engineering chaos', 'Testing resilience by introducing failures', 'Chaotic testing']
    },
    {
        'level': 10,
        'question': 'What is cost optimization?',
        'correct': 'Minimize cloud costs',
        'wrong': ['Optimize costs', 'Strategies to minimize cloud spending', 'Cost management']
    },
    {
        'level': 10,
        'question': 'What is vendor lock-in?',
        'correct': 'Dependency on one provider',
        'wrong': ['Vendor locking', 'Being dependent on single cloud provider', 'Provider dependency']
    },
    {
        'level': 10,
        'question': 'What is cloud-native architecture?',
        'correct': 'Built specifically for cloud',
        'wrong': ['Native cloud', 'Architecture designed specifically for cloud', 'Cloud architecture']
    }
]
