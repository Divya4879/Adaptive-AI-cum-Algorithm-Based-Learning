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
