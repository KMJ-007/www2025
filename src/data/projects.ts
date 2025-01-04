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
    type?: 'image' | 'youtube';
    videoId?: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "WTFATHON",
    date: "2024-09",
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
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "LazyGH",
    date: "2024-09",
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
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "Finnovate-IIT ghandhinagar",
    date: "2024-06",
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
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "Misato Ai Companion",
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
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "RustyScheme",
    date: "2024-01",
    headline: "A decentralized cross-device model training system for large-scale ML.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["Distributed Systems", "ML"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/daspartho/DistillClassifier"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "Hackclub Workshop",
    date: "2023-12",
    headline: "Creative coding workshop at epoch delhi hackclub.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["Distributed Systems", "ML"],
    links: [
      {
        title: "producthunt",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "Snapcraft",
    date: "2023-11",
    headline: "A decentralized cross-device model training system for large-scale ML.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["Distributed Systems", "ML"],
    links: [
      {
        title: "producthunt",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "DistillClassifier",
    date: "2023-08",
    headline: "A decentralized cross-device model training system for large-scale ML.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["Distributed Systems", "ML"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/daspartho/DistillClassifier"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "WarpLearn-Research Paper buddy",
    date: "2023-04",
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
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "AR-Direction-compass",
    date: "2023-03",
    headline: "A decentralized cross-device model training system for large-scale ML.",
    description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
    tags: ["AR", "hackathon"],
    links: [
      {
        title: "producthunt",
        url: "#"
      }
    ],
    images: [
      {
        src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        alt: "Sample project image 1"
      }
    ]
  },
  {
    title: "Smart Agent",
    date: "2022-09",
    headline: "Taught creative coding to local college students",
    description: "I taught creative coding to local college students. I taught them how to code in python and how to use p5js to create interactive art, yes you can make art with code. I also taught them how to use AI to generate art. It was a fun experience to teach and learn from them.",
    tags: ["startup"],
    links: [
      {
        title: "Demo",
        url: "https://online.smartagent.one/home"
      }
    ],
    images: [
      {
        src: "/images/cc-wsh-1.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-2.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-3.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-4.jpeg",
        alt: "Creative Coding Workshop"
      }
    ]
  },
  {
    title: "Creative Coding Workshop",
    date: "2022-09",
    headline: "Taught creative coding to local college students",
    description: "I taught creative coding to local college students. I taught them how to code in python and how to use p5js to create interactive art, yes you can make art with code. I also taught them how to use AI to generate art. It was a fun experience to teach and learn from them.",
    tags: ["creative coding", "workshop"],
    images: [
      {
        src: "/images/cc-wsh-1.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-2.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-3.jpeg",
        alt: "Creative Coding Workshop"
      },
      {
        src: "/images/cc-wsh-4.jpeg",
        alt: "Creative Coding Workshop"
      }
    ]
  },
  {
    title: "PurgeConsole",
    date: "2022-06",
    headline: "Decentralized Network for IOT",
    description: "Interlynk was a decentralized network for IoT devices. It was a platform that allows IoT devices to communicate with each other without the need for a central server. User gets coins for being part of the network as the reward, it was really good concept, but didn't worked out.\n\n I created the MVP in react native single handedly in 4 days. this was fun to work on cause not only i learned react native, but also i learned how BLE works, and how to integrate BLE and store data on the blockchain and making sure how to make it end to end work.We also won the web3 2022 hackathon for the best hackathon project.",
    tags: ["project"],
    links: [
      {
        title: "Site",
        url: "https://web.archive.org/web/20230304135018/https://www.interlynk.space/"
      },
      {
        title: "White Paper",
        url: "https://web.archive.org/web/20220709180239/https://www.interlynk.space/_files/ugd/7aeff5_0f8af081f0f141a8b9c4e8fb42b57e97.pdf"
      }
    ],
    images: [
      {
        src: "/images/interlynk.jpeg",
        alt: "Interlynk"
      }
    ]
  },
  {
    title: "Interlynk",
    date: "2022-06",
    headline: "Decentralized Network for IOT",
    description: "Interlynk was a decentralized network for IoT devices. It was a platform that allows IoT devices to communicate with each other without the need for a central server. User gets coins for being part of the network as the reward, it was really good concept, but didn't worked out.\n\n I created the MVP in react native single handedly in 4 days. this was fun to work on cause not only i learned react native, but also i learned how BLE works, and how to integrate BLE and store data on the blockchain and making sure how to make it end to end work.We also won the web3 2022 hackathon for the best hackathon project.",
    tags: ["startup"],
    links: [
      {
        title: "Site",
        url: "https://web.archive.org/web/20230304135018/https://www.interlynk.space/"
      },
      {
        title: "White Paper",
        url: "https://web.archive.org/web/20220709180239/https://www.interlynk.space/_files/ugd/7aeff5_0f8af081f0f141a8b9c4e8fb42b57e97.pdf"
      }
    ],
    images: [
      {
        src: "/images/interlynk.jpeg",
        alt: "Interlynk"
      }
    ]
  },
  {
    title: "ASCII Video",
    date: "2022-03",
    headline: "Convert live camera feed to ASCII art",
    description: "Was fun to play with, was learning and exploring creative coding.",
    tags: ["creative coding", "project"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/KMJ-007/silver-octo-eureka"
      },
      {
        title: "Demo",
        url: "https://kmj-007.github.io/silver-octo-eureka/"
      }
    ],
    images: [
      {
        src: "/images/ascii-video.jpeg",
        alt: "Image of Ascii Art"
      }
    ]
  }
];