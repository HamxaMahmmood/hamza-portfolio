export const profile = {
  name: "Hamza Mahmood",
  role: "AI Engineer",
  tagline:
    "I build LLM systems, RAG pipelines, and computer vision models that ship and run.",
  about:
    "I'm an AI engineer specializing in production LLM applications and computer vision systems. I've built RAG pipelines serving real users, deployed vision models hitting 98%+ accuracy, and automated workflows that drove measurable growth for clients. My research on compressing large vision-language models is published at ICDAR 2026, the result of a DAAD-funded collaboration with RheinMain University, Germany. I graduated from NUST in 2026 with a degree in Computer Science, and I'm looking to apply hands-on ML experience to real problems at scale.",
  email: "hamzamahmood165@gmail.com",
  phone: "+92 319 0476259",
  location: "Faisalabad, Pakistan",
  links: {
    github: "https://github.com/HamxaMahmmood",
    linkedin: "https://linkedin.com/in/hamza-mahmood-57447024a/",
  },
};

export const experience = [
  {
    org: "Deep Learning Lab, National Center of Artificial Intelligence (NCAI)",
    role: "AI Research Assistant — SEECS, NUST",
    period: "Jun 2025 – May 2026",
    points: [
      "Researcher on a DAAD-funded international project to compress large-scale Vision Language Models for efficient document understanding, in collaboration with RheinMain University, Germany.",
      "Worked on distillation of DeepSeek VL2 (a Mixture-of-Experts Vision Language Model) for document understanding.",
      "Applied pruning techniques to cut model size and reduce inference cost.",
      "Project supervised by Dr. Faisal Shafait and Dr. Momina Moetesum (NUST), in collaboration with Dr. Adrean (RheinMain University). Work led to an accepted paper at ICDAR 2026 (Vienna).",
    ],
  },
  {
    org: "Coldsend.pro",
    role: "GTM Engineer — Hybrid, Islamabad",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Sole GTM engineer responsible for designing and shipping end-to-end automation pipelines and AI agents for client products, working across N8N, Azure, and LLM APIs.",
      "Self-hosted and managed N8N on Microsoft Azure.",
      "Shipped 'Mirroi' — monitors Reddit, filters out 95% of irrelevant mentions, and drafts replies that learn from feedback. Generated 10+ leads in its first testing phase.",
      "Built a Reddit automation that cut blog posting time from 10 minutes to 20 seconds, increasing visibility and engagement by 40%.",
      "Developed a YouTube comment automation that posts timestamps under videos to increase product reach across YouTube communities.",
    ],
  },
];

export const education = [
  {
    school: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science in Computer Science",
    detail: "CGPA: 3.21",
    period: "Sept 2022 – May 2026",
  },
];

export const projects = [
  {
    title: "LiteDoc (Final Year Project)",
    tags: ["PyTorch", "CKA", "DeepSeek VL2", "MoE"],
    category: "Research",
    period: "Jun 2025 – May 2026",
    description:
      "Distilled DeepSeek VL2, a Mixture-of-Experts Vision Language Model, by pruning redundant experts using CKA similarity, then recovering accuracy via knowledge distillation. Validated on DocVQA and FUNSD using ANLS, matching the full-size model's performance at a fraction of the inference cost.",
    impact:
      "Accepted at ICDAR 2026 (Vienna). Funded by DAAD, in an international collaboration with RheinMain University, Germany. Produced a lighter, deployment-ready document AI model and a peer-reviewed pruning methodology.",
    links: [
      { label: "Live Demo", url: "https://litedoc.vercel.app/" },
      { label: "GitHub", url: "https://github.com/HamxaMahmmood" },
    ],
  },
  {
    title: "Mirroi — AI Reddit Engagement Agent",
    tags: ["N8N", "Azure OpenAI", "Pinecone", "RAG"],
    category: "Agentic AI",
    period: "Jul 2025 – Sep 2025",
    description:
      "AI-powered Reddit engagement agent built with RAG, trained on a client's documentation and blogs to deliver accurate, brand-aligned replies. A vector knowledge base in Pinecone, integrated with the Reddit API and OpenAI, enables real-time brand mention monitoring and context-aware retrieval, with a feedback loop that improves reply quality over time.",
    impact:
      "Generated 10+ qualified leads in the first testing phase and filtered out 95% of irrelevant mentions, dramatically reducing manual moderation overhead.",
    links: [
      { label: "Live", url: "https://mirroi.com/" },
      { label: "GitHub", url: "https://github.com/HamxaMahmmood" },
    ],
  },
  {
    title: "TB Diagnosis via CXR Classification & Mycobacterium Detection",
    tags: ["PyTorch", "ResNeXt", "YOLOv8", "Faster R-CNN", "Grad-CAM"],
    category: "Computer Vision",
    period: "Apr 2025 – May 2025",
    description:
      "A dual-stage diagnostic system: ResNeXt classifies chest X-rays for TB at 98.1% accuracy, with Grad-CAM providing visual explainability. Faster R-CNN and YOLOv8 detect Mycobacterium tuberculosis in sputum smear images at 97.23% accuracy for pathology-level confirmation.",
    impact:
      "A fully automated, explainable TB screening pipeline capable of supporting radiologists in low-resource settings with clinically competitive accuracy.",
    links: [{ label: "GitHub", url: "https://github.com/HamxaMahmmood" }],
  },
  {
    title: "Local RAG Chatbot for Financial Consultancy",
    tags: ["Python", "PyTorch", "CUDA", "Qwen 2.5", "LangChain"],
    category: "LLM Systems",
    period: "Nov 2025 – Dec 2025",
    description:
      "A fully local RAG-based financial education chatbot using ChromaDB for private, offline querying. Qwen 2.5 runs with 4-bit quantization (BitsAndBytes) and LoRA adapters on a GTX 1650 (4GB VRAM), with a full pipeline from web scraping and embedding generation through QLoRA fine-tuning and a Gradio UI.",
    impact:
      "Proved production-quality RAG systems can run entirely on consumer hardware, cutting inference cost to $0/query while keeping sensitive data fully on-premise.",
    links: [{ label: "GitHub", url: "https://github.com/HamxaMahmmood" }],
  },
  {
    title: "Debate Arena — Multi-Agent Debating System",
    tags: ["LangChain", "OpenAI", "Tavily", "RAG"],
    category: "Agentic AI",
    period: "Feb 2026",
    description:
      "A multi-agent debate system with three specialized LangChain agents (Pro / Con / Moderator) that conduct evidence-based debates via hybrid retrieval (Chroma + Tavily live web search) and produce citation-backed conclusions, with persistent memory and adversarial hallucination guards.",
    impact:
      "A scalable architecture for automated, factually grounded multi-perspective analysis — applicable to legal research, policy review, and enterprise decision support.",
    links: [{ label: "GitHub", url: "https://github.com/HamxaMahmmood" }],
  },
  {
    title: "Predicting Teen Internet Addiction",
    tags: ["Python", "Scikit-learn", "Random Forest", "XGBoost"],
    category: "Applied ML",
    period: "Nov 2024 – Dec 2024",
    description:
      "A predictive model for the Child Mind Institute x Kaggle competition, identifying problematic internet use among teenagers. Applied ensemble methods (Random Forest, XGBoost) with rigorous feature engineering and cross-validation to maximize generalization on the held-out test set.",
    impact: "Ranked in the top 20% globally out of thousands of submissions.",
    links: [{ label: "Kaggle", url: "https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use" }],
  },
  {
    title: "AI-Powered Receptionist with Context-Aware Speech Processing",
    tags: ["Python", "PEFT", "LLaMA-3", "RAG", "Flask"],
    category: "LLM Systems",
    period: "Sep 2024 – Dec 2024",
    description:
      "Part of the integration team for a university-deployed AI receptionist, connecting a RAG pipeline, a fine-tuned LLaMA-3 model, and TTS/STT modules into a cohesive 3D GUI system. Fine-tuned LLaMA-3 using PEFT to adopt a professional receptionist persona, improving response tone and domain relevance.",
    impact:
      "Delivered a fully functional, voice-interactive AI receptionist handling real visitor queries at SEECS, NUST — five distinct AI modules integrated into one production system.",
    links: [{ label: "GitHub", url: "https://github.com/HamxaMahmmood" }],
  },
];

export const skills = {
  Languages: ["Python", "C++", "SQL", "MATLAB"],
  "Frameworks & Libraries": [
    "LangChain",
    "LangGraph",
    "LlamaIndex",
    "N8N",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OpenCV",
    "Hugging Face Transformers",
    "FastAPI",
    "PEFT",
  ],
  "Deep Learning": [
    "CNNs",
    "Transformers",
    "VAEs",
    "GANs",
    "Image Segmentation",
    "Grad-CAM / XAI",
    "Knowledge Distillation",
    "Model Pruning",
    "QLoRA / BitsAndBytes",
  ],
  Domains: [
    "RAG",
    "Multi-Agent Systems",
    "Vector DBs (Pinecone, ChromaDB)",
    "Computer Vision",
    "Workflow Automation",
    "Prompt & Context Engineering",
    "LLM Fine-tuning",
  ],
};
