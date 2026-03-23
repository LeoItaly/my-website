import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
import {
  ArrowLeft,
  ExternalLink,
  Search,
  Zap,
  Brain,
  Palette,
  Code,
  MessageSquare,
  FileText,
  Music,
  Video,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundEffects from "../components/animations/BackgroundEffects";

interface AITool {
  id: string;
  name: string;
  categories: string[];
  description: string;
  url: string;
  pricing: "Free" | "Freemium" | "Paid" | "Open Source";
  date: string; // Date discovered (for sorting only)
  tags: string[];
  features: string[];
  icon: React.ReactNode;
  isNew?: boolean;
  isPopular?: boolean;
}

const AIToolsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "date" | "newest">("name");

  const aiTools: AITool[] = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      categories: ["Text Generation", "Code Generation"],
      description:
        "Advanced language model for conversation, writing, and content creation.",
      url: "https://chat.openai.com",
      pricing: "Freemium",
      date: "2023-04-01",
      tags: ["Conversation", "Writing", "Code", "Analysis"],
      features: [
        "Real-time chat",
        "Code generation",
        "Creative writing",
        "Problem solving",
      ],
      icon: <MessageSquare className="h-6 w-6" />,
      isPopular: true,
    },
    {
      id: "midjourney",
      name: "Midjourney",
      categories: ["Image Generation"],
      description:
        "AI-powered image generation from text descriptions with artistic styles.",
      url: "https://midjourney.com",
      pricing: "Paid",
      date: "2023-03-15",
      tags: ["Art", "Design", "Creative", "Visual"],
      features: [
        "Text-to-image",
        "Style customization",
        "High resolution",
        "Artistic styles",
      ],
      icon: <Palette className="h-6 w-6" />,
      isPopular: true,
    },
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      categories: ["Code Generation", "Productivity"],
      description:
        "AI pair programmer that helps write code faster and with fewer errors.",
      url: "https://github.com/features/copilot",
      pricing: "Paid",
      date: "2023-02-20",
      tags: ["Programming", "Development", "IDE", "Productivity"],
      features: [
        "Code completion",
        "Function generation",
        "Documentation",
        "Multi-language support",
      ],
      icon: <Code className="h-6 w-6" />,
      isPopular: true,
    },
    {
      id: "claude",
      name: "Claude",
      categories: ["Text Generation", "Code Generation", "Machine Learning"],
      description:
        "Advanced AI assistant with strong reasoning and analysis capabilities.",
      url: "https://claude.ai",
      pricing: "Freemium",
      date: "2023-01-10",
      tags: ["Analysis", "Reasoning", "Writing", "Research"],
      features: [
        "Document analysis",
        "Complex reasoning",
        "Code review",
        "Research assistance",
      ],
      icon: <Brain className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "dalle",
      name: "DALL-E",
      categories: ["Image Generation"],
      description:
        "AI system that creates realistic images and art from natural language descriptions.",
      url: "https://openai.com/dall-e-2",
      pricing: "Paid",
      date: "2022-12-01",
      tags: ["Art", "Creative", "Visual", "Design"],
      features: [
        "Text-to-image",
        "Image editing",
        "Variations",
        "High quality",
      ],
      icon: <Palette className="h-6 w-6" />,
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      categories: ["Productivity", "Text Generation"],
      description:
        "AI-powered writing and organization assistant integrated into Notion workspace.",
      url: "https://notion.so",
      pricing: "Freemium",
      date: "2022-11-15",
      tags: ["Productivity", "Writing", "Organization", "Collaboration"],
      features: [
        "Content generation",
        "Task automation",
        "Knowledge management",
        "Team collaboration",
      ],
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "synthesia",
      name: "Synthesia",
      categories: ["Video Generation", "Audio Generation"],
      description:
        "AI video generation platform for creating professional videos with virtual avatars.",
      url: "https://synthesia.io",
      pricing: "Paid",
      date: "2022-10-20",
      tags: ["Video", "Avatar", "Presentation", "Training"],
      features: [
        "AI avatars",
        "Text-to-speech",
        "Custom backgrounds",
        "Multi-language",
      ],
      icon: <Video className="h-6 w-6" />,
    },
    {
      id: "jasper",
      name: "Jasper",
      categories: ["Content Creation", "Text Generation", "Productivity"],
      description:
        "AI content creation platform for marketing, blogs, and business content.",
      url: "https://jasper.ai",
      pricing: "Paid",
      date: "2022-09-10",
      tags: ["Marketing", "Content", "SEO", "Business"],
      features: [
        "Blog writing",
        "Marketing copy",
        "SEO optimization",
        "Brand voice",
      ],
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "runway",
      name: "Runway",
      categories: ["Video Editing", "Video Generation", "Image Generation"],
      description:
        "AI-powered video editing platform with advanced generative capabilities.",
      url: "https://runwayml.com",
      pricing: "Freemium",
      date: "2022-08-15",
      tags: ["Video", "Editing", "Creative", "Professional"],
      features: [
        "AI video editing",
        "Motion tracking",
        "Background removal",
        "Style transfer",
      ],
      icon: <Video className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "huggingface",
      name: "Hugging Face",
      categories: ["Machine Learning", "Code Generation"],
      description:
        "Open-source platform for machine learning models, datasets, and AI research.",
      url: "https://huggingface.co",
      pricing: "Open Source",
      date: "2022-07-20",
      tags: ["ML", "Open Source", "Research", "Models"],
      features: [
        "Model hosting",
        "Dataset sharing",
        "Inference API",
        "Community",
      ],
      icon: <Brain className="h-6 w-6" />,
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      categories: ["Audio Generation"],
      description:
        "AI voice generation and text-to-speech platform with natural-sounding voices.",
      url: "https://elevenlabs.io",
      pricing: "Freemium",
      date: "2022-06-10",
      tags: ["Audio", "Voice", "TTS", "Podcast"],
      features: [
        "Voice cloning",
        "Text-to-speech",
        "Voice design",
        "Multi-language",
      ],
      icon: <Music className="h-6 w-6" />,
    },
    {
      id: "leonardo",
      name: "Leonardo.ai",
      categories: ["Image Generation"],
      description:
        "AI art generation platform with advanced customization and control options.",
      url: "https://leonardo.ai",
      pricing: "Freemium",
      date: "2022-05-15",
      tags: ["Art", "Design", "Creative", "Customization"],
      features: [
        "Custom models",
        "Image editing",
        "Style training",
        "Commercial use",
      ],
      icon: <Palette className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "perplexity",
      name: "Perplexity AI",
      categories: ["Text Generation", "Machine Learning"],
      description:
        "AI-powered search engine that provides conversational answers with sources.",
      url: "https://perplexity.ai",
      pricing: "Freemium",
      date: "2023-05-01",
      tags: ["Search", "Research", "Conversation", "Sources"],
      features: [
        "Real-time search",
        "Source citations",
        "Conversational interface",
        "Multiple perspectives",
      ],
      icon: <MessageSquare className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "stable-diffusion",
      name: "Stable Diffusion",
      categories: ["Image Generation", "Machine Learning"],
      description:
        "Open-source image generation model for creating high-quality images from text.",
      url: "https://stability.ai",
      pricing: "Open Source",
      date: "2022-08-22",
      tags: ["Open Source", "Image Generation", "Customizable", "Local"],
      features: [
        "Text-to-image",
        "Image-to-image",
        "Inpainting",
        "Local deployment",
      ],
      icon: <Palette className="h-6 w-6" />,
    },
    {
      id: "cursor",
      name: "Cursor",
      categories: ["Code Generation", "Productivity"],
      description:
        "AI-powered code editor with built-in chat and code generation capabilities.",
      url: "https://cursor.sh",
      pricing: "Freemium",
      date: "2023-06-15",
      tags: ["Code Editor", "AI Chat", "Development", "Productivity"],
      features: [
        "AI code completion",
        "Built-in chat",
        "Code explanation",
        "Multi-language support",
      ],
      icon: <Code className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "pika-labs",
      name: "Pika Labs",
      categories: ["Video Generation"],
      description:
        "AI video generation platform for creating short videos from text and images.",
      url: "https://pika.art",
      pricing: "Freemium",
      date: "2023-07-01",
      tags: ["Video", "Short-form", "Creative", "Social Media"],
      features: [
        "Text-to-video",
        "Image-to-video",
        "Style transfer",
        "Social media ready",
      ],
      icon: <Video className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "gamma",
      name: "Gamma",
      categories: ["Productivity", "Content Creation"],
      description:
        "AI-powered presentation and document creation platform with smart templates.",
      url: "https://gamma.app",
      pricing: "Freemium",
      date: "2023-03-20",
      tags: ["Presentations", "Documents", "Templates", "Collaboration"],
      features: [
        "AI presentations",
        "Smart templates",
        "Real-time collaboration",
        "Export options",
      ],
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "replicate",
      name: "Replicate",
      categories: ["Machine Learning", "Code Generation"],
      description:
        "Platform for running and deploying machine learning models in the cloud.",
      url: "https://replicate.com",
      pricing: "Freemium",
      date: "2022-09-15",
      tags: ["ML Models", "Cloud", "API", "Deployment"],
      features: [
        "Model hosting",
        "API access",
        "Scalable infrastructure",
        "Easy deployment",
      ],
      icon: <Brain className="h-6 w-6" />,
    },
    {
      id: "suno",
      name: "Suno",
      categories: ["Audio Generation"],
      description:
        "AI music generation platform for creating original songs and compositions.",
      url: "https://suno.ai",
      pricing: "Freemium",
      date: "2023-08-10",
      tags: ["Music", "Composition", "Creative", "Original"],
      features: [
        "Text-to-music",
        "Genre selection",
        "Instrument control",
        "Commercial licensing",
      ],
      icon: <Music className="h-6 w-6" />,
      isNew: true,
    },
    {
      id: "browse-ai",
      name: "Browse AI",
      categories: ["Productivity", "Machine Learning"],
      description:
        "AI-powered web scraping and data extraction tool with no-code interface.",
      url: "https://browse.ai",
      pricing: "Freemium",
      date: "2023-04-15",
      tags: ["Web Scraping", "Data Extraction", "Automation", "No-code"],
      features: [
        "Visual scraper",
        "Data extraction",
        "Automated workflows",
        "API integration",
      ],
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "tome",
      name: "Tome",
      categories: ["Productivity", "Content Creation"],
      description:
        "AI-powered storytelling platform for creating interactive presentations and narratives.",
      url: "https://tome.app",
      pricing: "Freemium",
      date: "2023-01-25",
      tags: ["Storytelling", "Presentations", "Interactive", "Narrative"],
      features: [
        "AI storytelling",
        "Interactive elements",
        "Visual narratives",
        "Collaboration tools",
      ],
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "synthesia-studio",
      name: "Synthesia STUDIO",
      categories: ["Video Generation", "Audio Generation"],
      description:
        "Professional AI video creation platform with custom avatars and enterprise features.",
      url: "https://synthesia.io/studio",
      pricing: "Paid",
      date: "2022-11-01",
      tags: ["Enterprise", "Custom Avatars", "Professional", "Training"],
      features: [
        "Custom avatars",
        "Enterprise security",
        "Brand customization",
        "Analytics dashboard",
      ],
      icon: <Video className="h-6 w-6" />,
    },
    {
      id: "whisper",
      name: "Whisper",
      categories: ["Audio Generation", "Machine Learning"],
      description:
        "Open-source speech recognition system for accurate transcription and translation.",
      url: "https://openai.com/research/whisper",
      pricing: "Open Source",
      date: "2022-09-21",
      tags: [
        "Speech Recognition",
        "Transcription",
        "Translation",
        "Open Source",
      ],
      features: [
        "Speech-to-text",
        "Multi-language",
        "High accuracy",
        "Local deployment",
      ],
      icon: <Music className="h-6 w-6" />,
    },
    {
      id: "figma-ai",
      name: "Figma AI",
      categories: ["Productivity", "Image Generation"],
      description:
        "AI-powered design assistant integrated into Figma for faster design workflows.",
      url: "https://figma.com",
      pricing: "Freemium",
      date: "2023-09-01",
      tags: ["Design", "UI/UX", "Collaboration", "Prototyping"],
      features: [
        "AI design suggestions",
        "Component generation",
        "Layout optimization",
        "Design system help",
      ],
      icon: <Palette className="h-6 w-6" />,
      isNew: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Tools", icon: <Zap className="h-4 w-4" /> },
    {
      id: "text-generation",
      name: "Text Generation",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      id: "image-generation",
      name: "Image Generation",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      id: "code-generation",
      name: "Code Generation",
      icon: <Code className="h-4 w-4" />,
    },
    {
      id: "video-generation",
      name: "Video Generation",
      icon: <Video className="h-4 w-4" />,
    },
    {
      id: "productivity",
      name: "Productivity",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      icon: <Brain className="h-4 w-4" />,
    },
    {
      id: "audio-generation",
      name: "Audio Generation",
      icon: <Music className="h-4 w-4" />,
    },
  ];

  const filteredTools = aiTools
    .filter((tool) => {
      const matchesCategory =
        activeFilter === "all" ||
        tool.categories.some(
          (category) =>
            category.toLowerCase().replace(" ", "-") === activeFilter
        );
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return b.date.localeCompare(a.date);
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>AI Tools Directory - Curated Collection of AI Tools</title>
        <meta
          name="description"
          content="A curated collection of the most useful AI tools I've discovered. From text generation to image creation, find the perfect AI assistant for your needs."
        />
        <meta
          name="keywords"
          content="AI tools, artificial intelligence, text generation, image generation, code generation, video generation, productivity, machine learning, audio generation, ChatGPT, Midjourney, Claude, DALL-E"
        />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="AI Tools Directory - Curated Collection of AI Tools"
        />
        <meta
          property="og:description"
          content="A curated collection of the most useful AI tools I've discovered. From text generation to image creation, find the perfect AI assistant for your needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/ai-tools" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image-ai-tools.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Tools Directory - Curated Collection of AI Tools"
        />
        <meta
          name="twitter:description"
          content="A curated collection of the most useful AI tools I've discovered. From text generation to image creation, find the perfect AI assistant for your needs."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/twitter-image-ai-tools.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/ai-tools" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "AI Tools Directory",
            description:
              "A curated collection of the most useful AI tools I've discovered. From text generation to image creation, find the perfect AI assistant for your needs.",
            url: "https://yourdomain.com/ai-tools",
            numberOfItems: aiTools.length,
            itemListElement: aiTools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: tool.name,
                description: tool.description,
                url: tool.url,
                applicationCategory: tool.categories.join(", "),
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            })),
          })}
        </script>
      </Helmet>

      <BackgroundEffects />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                to="/papers"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Papers</span>
              </Link>
            </nav>

            {/* Papers Link */}
            <div className="mb-8">
              <Link
                to="/papers"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <BookOpen className="h-4 w-4" />
                <span>View Research Papers</span>
              </Link>
            </div>

            <header>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Tools Directory
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                A curated collection of the most useful AI tools I've
                discovered. From text generation to image creation, find the
                perfect AI assistant for your needs.
              </p>
            </header>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section
        className="px-4 sm:px-6 lg:px-8 mb-12"
        aria-label="Search and filter tools"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="search-tools" className="sr-only">
                Search AI tools
              </label>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="search-tools"
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                aria-describedby="search-description"
              />
              <div id="search-description" className="sr-only">
                Search through AI tools by name, description, or tags
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label htmlFor="sort-tools" className="sr-only">
                Sort tools by
              </label>
              <select
                id="sort-tools"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "date" | "newest")
                }
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                style={{
                  color: "white",
                }}
              >
                <option value="name" style={{ color: "black" }}>
                  Sort by Name
                </option>
                <option value="date" style={{ color: "black" }}>
                  Sort by Date
                </option>
                <option value="newest" style={{ color: "black" }}>
                  Sort by Newest
                </option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-8">
            <h2 className="sr-only">Filter by category</h2>
            <div
              className="flex flex-wrap gap-3"
              role="group"
              aria-label="Category filters"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-pressed={activeFilter === category.id}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section
        className="px-4 sm:px-6 lg:px-8 pb-20"
        aria-label="AI tools collection"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.article
                key={tool.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:border-purple-400/50"
              >
                {/* Tool Icon and Name */}
                <header className="flex items-center space-x-3 mb-4">
                  <div
                    className="p-2 bg-purple-500/20 rounded-lg text-purple-400"
                    aria-hidden="true"
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {tool.categories.join(", ")}
                    </p>
                  </div>
                </header>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="sr-only">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 text-xs rounded-full text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-xs rounded-full text-gray-300">
                        +{tool.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <footer className="flex items-center justify-end">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-300 group-hover:scale-105"
                    aria-label={`Visit ${tool.name} website`}
                  >
                    <span>Visit</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </footer>
              </motion.article>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
              role="status"
              aria-live="polite"
            >
              <div className="text-gray-400 text-lg">
                No AI tools found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIToolsPage;
