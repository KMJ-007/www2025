export interface Project {
  title: string;
  date: string; // Format: "YYYY-MM-DD" or "YYYY-MM" or "YYYY"
  headline: string; // Short, punchy description
  description: string; // Detailed description
  tags: string[];
  links?: {
    title: string;
    url: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "KINO AI",
    date: "2025-01",
    headline: "A multimodal AI system for streamlining the creative filmmaking process.",
    description: "Building multimodal machine learning systems to help filmmakers streamline their creative process. Working on video understanding, generation, and editing. The system combines state-of-the-art computer vision models with natural language processing to assist in various aspects of film production, from script analysis to post-production workflows.",
    tags: ["ML", "Video", "AI"],
    links: [
      {
        title: "Demo",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      },
      {
        src: "https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WE3qoMWE649PAx6qL24yCJRSKQY76T4wc1M5GJpAPs8",
        alt: "Sample project image 2"
      }
    ]
  },
  {
    title: "ARCEUS",
    date: "2024-03",
    headline: "A decentralized cross-device model training system for large-scale ML.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["Distributed Systems", "ML"],
    links: [
      {
        title: "GitHub",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/239/200/300.jpg?hmac=7xz8fPYz03uWqD9jP8TkqoMXxqDAQCvz9TQ9GBj5gZI",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "AI AGENTS AS CITIZENS",
    date: "2024-01",
    headline: "City-scale simulation with AI agents for optimizing urban mobility.",
    description: "City simulation of Los Angeles with AI Agents, simulating human behaviour and optimizing transit routing with Reinforcement Learning to maximize mobility at the lowest carbon cost. Finalists @ AI Berkeley Hackathon. The project demonstrates how AI agents can be used to model complex urban systems and optimize city-wide transportation networks while considering environmental impact.",
    tags: ["AI", "Simulation", "RL"],
    links: [
      {
        title: "Demo",
        url: "#"
      },
      {
        title: "Paper",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/240/200/300.jpg?hmac=QPGS9Uu4v5HvfVXoJV9STvmhRQF-D4JXc7tHZHoHBYE",
        alt: "Sample project image 1"
      },
      {
        src: "https://fastly.picsum.photos/id/241/200/300.jpg?hmac=0NxbYA75YSJ0VY6A9YI4-pMKvkYP5ry3CfFdxL_GCJE",
        alt: "Sample project image 2"
      },
      {
        src: "https://fastly.picsum.photos/id/242/200/300.jpg?hmac=S3_Su9NK5xPz93LJkPtB_8BsuAB0JKjGXdQz_k8dC-M",
        alt: "Sample project image 3"
      }
    ]
  }
]; 