const DUMMY_DATA = [
  {
    name: "ChatGPT",
    thumbnail:
      "https://ai-finder.fra1.cdn.digitaloceanspaces.com/logos/ChatGPT-OpenAI.jpg?tr=w-128,h-128",
    tagline: "Optimizing language models for dialogue",
    description:
      "OpenAI has released a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.",
    link: "https://chat.openai.com/",
    pricing: "Free",
    tags: ["Chat", "Writing"],
    keyFeatures: [
      "Conversational AI that can talk about any topic and do complex tasks",
      "Choose between different models based on your needs (multiple GPT 3.5 versions and GPT 4)",
      "GPT 4 API that can connect to thousands of services to bring the power of the Large Language Model to your workflows and tasks",
    ],
  },
  {
    name: "Midjourney",
    thumbnail:
      "https://ph-files.imgix.net/25878109-5a7a-4b7b-924e-877109a0824f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
    tagline: "Create AI generated images from a text prompt",
    description:
      'Midjourney lets you create images (paintings, digital art, logos and much more) simply by writing a prompt. Try to prompt it: - "A deep ocean monster" - "The dawn of a universe" - "The iron throne" And check out its results',
    link: "https://www.midjourney.com/home/",
    pricing: "Paid",
    tags: ["Image"],
    keyFeatures: [
      "Text prompt to AI image generation",
      "Endless potential with prompts and four images per prompt output",
      "High-resolution output",
    ],
  },
  {
    name: "AI Painter",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "Transform your photos into stunning artwork",
    description:
      "AI Painter is a powerful tool that uses AI to transform your photos into beautiful paintings and artwork. Whether you want to recreate classic masterpieces or add artistic filters to your own photos, AI Painter has got you covered.",
    link: "https://www.aipainter.com/",
    pricing: "Paid",
    tags: ["Image"],
    keyFeatures: [
      "Photo to painting conversion",
      "Various painting styles and filters",
      "High-quality artistic output",
    ],
  },
  {
    name: "DataBot",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "Your personal data assistant",
    description:
      "DataBot is an AI-powered data assistant that helps you manage and analyze your data efficiently. It can clean, visualize, and make predictions based on your datasets, saving you time and effort in data-related tasks.",
    link: "https://www.databot.ai/",
    pricing: "Paid",
    tags: ["Chat", "SMM"],
    keyFeatures: [
      "Data cleaning and preprocessing",
      "Data visualization",
      "Predictive analytics",
    ],
  },
  {
    name: "CodeCraft",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-powered code generation and optimization",
    description:
      "CodeCraft is an advanced AI tool for software developers, assisting them in generating code snippets, optimizing algorithms, and automatically debugging their programs. It speeds up the development process and improves code quality.",
    link: "https://www.codecraft.io/",
    pricing: "Paid",
    tags: ["Code"],
    keyFeatures: [
      "Code generation from natural language descriptions",
      "Algorithm optimization",
      "Automated debugging",
    ],
  },
  {
    title: "FinanceBot",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-powered financial advisor",
    description:
      "FinanceBot is an intelligent financial advisor that helps you make better investment decisions, manage your portfolio, and stay updated with real-time market trends. It combines cutting-edge AI with financial expertise.",
    link: "https://www.financebot.com/",
    price: "Free",
    tags: ["Audio"],
    keyFeatures: [
      "Personalized investment recommendations",
      "Portfolio management",
      "Market analysis and insights",
    ],
  },
  {
    name: "HealthCareAI",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-driven healthcare solutions",
    description:
      "HealthCareAI is a platform that utilizes artificial intelligence to improve patient care, diagnose medical conditions accurately, and assist healthcare professionals in making informed decisions.",
    link: "https://www.healthcareai.com/",
    pricing: "Paid",
    tags: ["Writing"],
    keyFeatures: [
      "Medical image analysis",
      "Disease diagnosis and prediction",
      "Clinical decision support",
    ],
  },
  {
    name: "VideoGenius",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-powered video creation",
    description:
      "VideoGenius is a revolutionary AI tool for video creators. It automates the video production process, from scriptwriting to video editing, allowing content creators to focus on their creativity while leaving the technicalities to AI.",
    link: "https://www.videogenius.com/",
    pricing: "Free",
    tags: ["Video"],
    keyFeatures: [
      "Automated scriptwriting",
      "Video editing and post-production",
      "Customizable video templates",
    ],
  },
  {
    name: "VoiceMaster",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-driven voice modulation",
    description:
      "VoiceMaster is an AI tool that empowers voice artists and content creators to modify their voices for various characters and projects. With VoiceMaster, you can easily create character voices or professional voiceovers.",
    link: "https://www.voicemaster.ai/",
    pricing: "Free",
    tags: ["Audio"],
    keyFeatures: [
      "Voice modulation and customization",
      "Large library of voice presets",
      "Realistic character voices",
    ],
  },
  {
    name: "CodeSecure",
    thumbnail:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg",
    tagline: "AI-based code security",
    description:
      "CodeSecure is a powerful AI tool that analyzes your codebase for security vulnerabilities, potential exploits, and weaknesses. It helps you fortify your applications and ensures a higher level of code security.",
    link: "https://www.codesecure.com/",
    pricing: "Paid",
    tags: ["Code", "SMM", "Chat"],
    keyFeatures: [
      "Code vulnerability scanning",
      "Real-time security feedback",
      "Secure code recommendations",
    ],
  },
];

export default DUMMY_DATA;
