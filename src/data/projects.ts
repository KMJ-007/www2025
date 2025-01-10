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
    title: "Bindi Sheth",
    date: "2025-01",
    headline: "Created a website for Bindi Sheth to showcase her work, she is documentary and fashion photographer.",
    description: "I met Bindi Sheth accidently. we shared lot of common rabbit holes which i found interesting. I really liked her work and the stories she tells through her work, her art collection is really good. I’m really thankful to have made a new friend with whom I can share my curiosity. I usually don't design or create website for people, but this was fun to do.",
    tags: ["Design", "website"],
    links: [
      {
        title: "Website",
        url: "https://bindisheth.com"
      },
      {
        title: "Checkout her work",
        url: "https://www.instagram.com/sheth.bindi"
      }
    ],
    images: [
      {
        src: "/images/bindi_sheth.jpeg",
        alt: "Bindi Sheth"
      }
    ]
  },
  {
    title: "WTFATHON",
    date: "2024-09",
    headline: "I hosted stupidathon where 30 people gathered to make stupid things.",
    description: "I was bored with same stupid hackathon happening, where the original fun and ethos were lost, people were just doing the hackathon for the sack of it, and for putting in the resume.\n and sponsors were just throwing the client's project in the name of hackathon, it was became just a shit show!\n I hated it, so rather than just bitching about it, i decided to do something about it.\n I hosted stupidathon where 30 people gathered to make stupid things. and people made some really stupid things, and enjoyed it, there was no prize, no judges, just fun and enjoyment.",
    tags: ["hackathon", "event"],
    links: [
      {
        title: "Stupid Things",
        url: "https://www.wtfuckathon.com/"
      },
      {
        title: "PHOTOS",
        url: "https://photos.app.goo.gl/DFWB8B6vFBcBxiE57"
      }
    ],
    images: [
      {
        src: "/images/wtfathon_poster.jpeg",
        alt: "WTFATHON"
      },
      {
        src: "/images/wtfathon.jpeg",
        alt: "WTFATHON"
      },
      {
        src: "/images/pull_ups.mp4",
        alt: "Pull ups"
      },
      {
        src: "/images/weight_machine.mp4",
        alt: "Weight Machine"
      },
    ]
  },
  {
    title: "LazyGH",
    date: "2024-09",
    headline: "TUI for managing multiple GitHub accounts easily",
    description: "I was tired of switching between multiple GitHub accounts, so i decided to make a TUI for managing multiple GitHub accounts easily. I made it in rust in just one night, and got really roasted on the reddit, for not properly implementing the security features.",
    tags: ["rust", "project"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/KMJ-007/lazygh"
      },
      {
        title: "Download",
        url: "https://kmj-007.github.io/lazygh/"
      },
    ],
    images: [
      {
        src: "/images/lazygh.gif",
        alt: "LazyGH"
      }
    ]
  },
  {
    title: "Zeta",
    date: "2024-06",
    headline: "Solving financial literacy through AI",
    description: "Won hackathon at IIT Gandhinagar by building a solution for financial literacy. Created a dual approach: 1) A gamified community platform for tech-savvy users to share experiences and learn from peers 2) A voice-based AI system using GROQ for rural users to get financial advice in their local language through simple phone calls. Built the backend and LLM integration using Python and Twilio for call handling. The platform helps reduce financial fraud, improves access to government schemes, and makes financial education accessible to illiterate users.",
    tags: ["AI", "Fintech", "Hackathon", "GROQ", "Python"],
    links: [
      {
        title: "Blog",
        url: "https://kmj-007.github.io/project/Finnovate-Zeta/"
      }
    ],
    images: [
      {
        src: "https://www.youtube.com/watch?v=nqWEmMi3Ml0",
        type: "youtube",
        videoId: "nqWEmMi3Ml0",
        alt: "Finnovate"
      },
      {
        src: "/images/iit_g.jpeg",
        alt: "Zeta"
      },
      {
        src: "/images/newspaper.webp",
        alt: "Zeta"
      }
    ]
  },
  {
    title: "Misato AI Companion",
    date: "2024-03",
    headline: "AI companion designed to combat GenZ loneliness and promote mental well-being",
    description: "Built during Ingenious Hackathon 5.0, Misato is an AI companion that helps GenZ combat loneliness and mental health issues. It features a 3D model interface for natural interaction, real-time conversations using LLMs, and text-to-speech capabilities. The system includes a dashboard to connect users with family and friends, alerting them when someone needs support. Key features include deep conversation capabilities, personalized interactions, and a bias-free approach to mental health support. Built using Python, Next.js, ElevenLabs for voice synthesis, and Llama.",
    tags: ["AI", "Mental Health", "Next.js", "Python", "ElevenLabs", "Llama", "Hackathon"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/KMJ-007/misato-ai-companion"
      },
      {
        title: "Devfolio",
        url: "https://devfolio.co/projects/misato-ai-companion-e5bb"
      },
      {
        title: "Demo",
        url: "https://www.youtube.com/clip/UgkxNJoE8hYOH3y9Y10JrLV3x33d100ROyRh"
      }
    ],
    images: [
      {
        src: "/images/misato.jpeg",
        alt: "Misato AI Companion"
      }
    ]
  },
  {
    title: "RustyScheme",
    date: "2024-01",
    headline: "Built a Lisp interpreter in Rust as my first project",
    description: "After completing half of the Rust book and rustlings exercises, I wanted to build something practical to gain confidence. Created a Lisp interpreter that handles lexing (converting program text to tokens), parsing (converting tokens to recursive list structure), and evaluation. The project helped me better understand Rust concepts like traits, reference pointers, and error handling. Features include support for basic Lisp operations with plans to add floating-point values and better error handling.",
    tags: ["Rust", "Interpreter", "Lisp", "Systems Programming"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/KMJ-007/RustyScheme"
      },
      {
        title: "Reddit",
        url: "https://www.reddit.com/r/rust/comments/1ae52te/built_a_lisp_interpreter_in_rust_roast_my_code/"
      },
    ],
    images: [
    
    ]
  },
  {
    title: "Hackclub Workshop",
    date: "2023-12",
    headline: "Creative coding workshop at epoch delhi hackclub.",
    description: "Hackclub organised a EPOCH hackathon, which was really good experience, i flew to delhi to participate, i am part of hackclub from 11th std, and seeing other hackclubers and making new friends was awesome. \n I took workshop on creative coding and taught others what is creative coding and what you can do with it.",
    tags: ["Creative Coding", "Workshop"],
    images: [
      {
        src: "/images/epoch.jpg",
        alt: "Hackclub epoch"
      }
    ]
  },
  {
    title: "Snapcraft",
    date: "2023-11",
    headline: "AI-powered product photography enhancement tool for e-commerce businesses",
    description: "Built a SaaS platform that helps businesses create professional product photos using AI. The tool automatically removes backgrounds, enhances image quality, and generates Instagram-ready product images in seconds. Key features include one-click background removal, AI image enhancement, and WhatsApp integration for easy access. The platform is specifically designed for small businesses and garment workshops who need professional product photos but don't have expertise in DALL-E or Midjourney.",
    tags: ["AI", "Diffusion Model", "E-commerce"],
    links: [
      {
        title: "Website",
        url: "https://snapcraft.shipmyapp.in/"
      }
    ],
    images: [
      {
        src: "/images/snapcraft.jpeg",
        alt: "Snapcraft"
      }
    ]
  },
  {
    title: "DistillClassifier",
    date: "2023-08",
    headline: "Tool to generate synthetic training data for classification tasks using LLMs",
    description: "Built during ANARCHY October 2023 Hackathon, DistillClassifier is built on top of LLM-VM to generate synthetic training data using LLMs. The tool helps distill LLM knowledge into smaller, faster classification models. Features include customizable data generation, flexible model selection, and direct integration with Hugging Face for dataset publishing.",
    tags: ["LLM", "Synthetic Data", "Hackathon"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/daspartho/DistillClassifier"
      }
    ],
    images: [
      {
        src: "/images/distillclassifier.png",
        alt: "DistillClassifier"
      }
    ]
  },
  {
    title: "WarpLearn-Research Paper buddy",
    date: "2023-04",
    headline: "Interactive AI tool for understanding and summarizing complex documents like research papers and legal contracts",
    description: "Built during Hack-NU-thon 4.0, WarpLearn makes it easier to work with long documents by providing an interactive way to learn and summarize complex content. The tool uses vector embeddings and ML algorithms to enable real-time Q&A within document context. Features include PDF loading and splitting, persistent vector storage using Qdrant database, and an intuitive UI for document interaction. Won Grand Prize First at the hackathon. Built with FastAPI, React, Langchain, and Hugging Face.",
    tags: ["AI","project","Hackathon"],
    links: [
      {
        title: "Youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Devfolio",
        url: "https://devfolio.co/projects/warplearn-a56b"
      }
    ],
    images: [
      {
        src: "/images/warplearn.jpeg",
        alt: "WarpLearn Interface"
      }
    ]
  },
  // {
  //   title: "AR-Direction-compass",
  //   date: "2023-03",
  //   headline: "A decentralized cross-device model training system for large-scale ML.",
  //   description: "A decentralized cross-device model training system with model and tensor parallelism to reduce compute needed to train large models. The system enables efficient distribution of model training across multiple devices, optimizing resource utilization and reducing training time through innovative parallelization techniques.",
  //   tags: ["AR", "hackathon"],
  //   links: [
  //     {
  //       title: "producthunt",
  //       url: "#"
  //     }
  //   ],
  //   images: [
  //     {
  //       src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
  //       alt: "Sample project image 1"
  //     }
  //   ]
  // },
  {
    title: "Smart Agent",
    date: "2022-09",
    headline: "Record keeping solution for all the textile agents to manage their business, 1700cr GMV till date(31st Dec 2024)",
    description: "I was the first intern to join the smartagent, I did everything, From making the first version of the app to rewriting it 3 times, from going on sales, giving demo to the clients, to making the wanted changes in forward-deployed engineer's way of working, I learned a lot of how b2b business works, and lot of business jargons, and how trust and privacy can't be compromised!",
    tags: ["internship"],
    links: [
      {
        title: "Demo",
        url: "https://online.smartagent.one/home"
      }
    ],
    images: [
      {
        src: "/images/smartagent.jpeg",
        alt: "Smart Agent"
      },
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
    headline: "Simple Vscode Extension to get rid of all console logs in your code",
    description: "",
    tags: ["project"],
    links: [
      {
        title: "Github",
        url: "https://github.com/KMJ-007/purgeconsole"
      },
      {
        title: "Download",
        url: "https://marketplace.visualstudio.com/items?itemName=KaranJanthe.purgeConsole"
      }
    ],
    images: [
      {
        src: "/images/purgeconsole.gif",
        alt: "PurgeConsole"
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