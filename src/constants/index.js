import { meta, shopify, starbucks, tesla, common } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript, uncommon
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Graph-Based Fraud Detection System - AI Ml engineer",
        company_name: "Self-Employed",
        icon: common,
        iconBg: "#accbe1",
        points: [
            "Created a graph-based model using Neo4j for fraud detection; achieved 92%anomaly detection accuracy.",
            "Deployed using AWS, Docker, and Kubernetes for scalability",
            "Modelled complex relationships using Cypher query language",
            "Built scalable ML pipelines with Kubeflow for data preprocessing, training, and deployment.",
        ],
    },
    {
        title: "NLP for Text Summarization and Topic Modeling - AI Ml engineer",
        company_name: "Self-Employed",
        icon: common,
        iconBg: "#fbc3bc",
        points: [
            "Created an NLP pipeline for summarization and topic modeling, reducing processing time by 35%",
            "Launched an interactive app for text analysis, boosting user engagement",
            "Ensured scalability and robustness using Docker, maintaining high availability.",
        ],
    },
    {
        title: "Full-Stack E-Commerce Platform - Software Engineer",
        company_name: "Self-Employed",
        icon: common,
        iconBg: "#b7e4c7",
        points: [
            "API Development: Designed and implemented RESTful APIs for robust communication between the front end and back end.",
            "Database Design: Structured efficient MongoDB schemas, employing indexing for faster query responses",
            "Security Measures: Implemented authentication and authorization using JWTs, following best practices for password hashing and data protection.",
            "Performance Optimization: Used load balancing techniques and optimized server responses to handle multiple simultaneous requests.",
        ],
    },
    {
        title: "Progressive Web App for Task Management - Software Engineer",
        company_name: "Self-Employed",
        icon: common,
        iconBg: "#a2d2ff",
        points: [
            "Asynchronous Programming: Utilized async/await and Promises to handle data synchronization between local storage and the server.",
            "Stack Proficiency: Managed client-server communication efficiently, handling HTTP requests and responses effectively.",
            "Scalability: Designed the app architecture to be scalable, allowing for future feature additions without significant refactoring",
            ".Optimization Techniques: Employed caching strategies and minimized bundle sizes for enhanced performance. User-Centric Design: Focused on creating an intuitive user interface with smooth navigation and interactive elements.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/demoncoder-crypto',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/prabhjit-singh-dhillon-a508b48a/',
    }
];

export const projects = [
    {
        iconUrl: uncommon,
        theme: 'btn-back-red',
        name: 'Real-Time Object Detection System',
        description: 'Achieved 95% accuracy in object detection using YOLOv5 and OpenCV for live videostreams. Mainly focused on football(soccer) can be used for other videos as well.',
        link: 'https://github.com/demoncoder-crypto/Object-Yolo',
    },
    {
        iconUrl: uncommon,
        theme: 'btn-back-green',
        name: 'Ecommerce platform full-stack',
        description: 'Created a Ecommerce platform, loosely based on a very popular platform.',
        link: 'https://github.com/demoncoder-crypto/Ecommerce-platform',
    },
    {
        iconUrl: uncommon,
        theme: 'btn-back-blue',
        name: 'Image Classification and Segmentation',
        description: 'Architected a CNN with 98% accuracy on CIFAR-10. Utilized U-Net for image segmentation, improving object isolation by 20%',
        link: 'https://github.com/demoncoder-crypto/Cifar',
    },
    {
        iconUrl: uncommon,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/PrabhjitDhillon/social_media_app',
    },
    {
        iconUrl: uncommon,
        theme: 'btn-back-black',
        name: 'Personalized Movie Recommendation System',
        description: 'Developed a recommendation system with a RMSE of 0.85 for collaborative filtering. ● Incorporated Neo4j to enhance recommendation diversity by 25%',
        link: 'https://github.com/demoncoder-crypto/Movie-recomendation-system',
    },
    {
        iconUrl: uncommon,
        theme: 'btn-back-yellow',
        name: 'Interactive Data Visualization Dashboard',
        description: 'Applied data structures to efficiently handle large datasets and optimized algorithms for data fetching and manipulation.',
        link: 'https://github.com/demoncoder-crypto/Interactive_dashboard',
    }
];