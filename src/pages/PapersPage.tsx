import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  Eye,
  Search,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundEffects from "../components/animations/BackgroundEffects";

// Import thumbnail images
import fiqaBiometricThumb from "../assets/thumbnails/fiqa-biometric.png";
import lifeExpectancyThumb from "../assets/thumbnails/life-expectancy-ml.png";
import uxEngineeringThumb from "../assets/thumbnails/ux-engineering.png";
import webglReflectionsThumb from "../assets/thumbnails/webgl-reflections.png";
import ddpmMnistThumb from "../assets/thumbnails/ddpm-mnist.png";
import deepLearningCVThumb from "../assets/thumbnails/deep-learning-cv.png";
import moodwisePDIThumb from "../assets/thumbnails/moodwise-pdi.png";
import gothenticThumb from "../assets/thumbnails/gothentic-ux.png";
import gymbuddyThumb from "../assets/thumbnails/gymbuddy-ux.png";
import safedriveThumb from "../assets/thumbnails/safedrive-ux.png";
import ddpmPosterThumb from "../assets/thumbnails/ddpm-poster.png";
import segmentationPosterThumb from "../assets/thumbnails/segmentation-poster.png";
import objectDetectionThumb from "../assets/thumbnails/object-detection.png";

interface Paper {
  id: string;
  title: string;
  type: "paper" | "poster";
  category: string;
  date: string;
  course: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  tags: string[];
  featured: boolean;
  abstract?: string;
  keyContributions?: string[];
  technologies?: string;
  outcome?: string;
}

const PapersPage: React.FC = () => {
  // Add useEffect for scrolling to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when component mounts

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all-papers");
  const [searchTerm, setSearchTerm] = useState("");
  const [previewPaper, setPreviewPaper] = useState<Paper | null>(null);

  // Sample papers data with corrected thumbnail paths
  const papers: Paper[] = [
    {
      id: "fiqa-biometric",
      title:
        "Facial Image Quality Assessment for Improved Face Recognition Systems",
      type: "paper",
      category: "Computer Vision",
      date: "2024",
      course: "Biometric Systems (MSc)",
      description:
        "Comprehensive analysis of FIQA techniques and bias mitigation in face recognition pipelines.",
      thumbnail: fiqaBiometricThumb,
      pdfUrl: "./src/assets/papers/fiqa-biometric-systems.pdf",
      tags: ["Face Recognition", "FIQA", "Bias Mitigation", "Computer Vision"],
      featured: true,
      abstract:
        "Surveyed modern FIQA techniques and proposed research directions to boost robustness, interpretability and bias mitigation in face-recognition pipelines.",
      keyContributions: [
        "Comprehensive comparison of seven SOTA FIQA models on five public benchmarks",
        "Highlighted alignment and demographic-bias pitfalls with AI-KD knowledge-distillation strategy",
        "Summarised emerging pixel-level explainability techniques for actionable feedback",
      ],
      technologies:
        "Python 3, PyTorch, OpenCV, SHAP, StyleGAN2 latent-space analysis",
      outcome:
        "Accepted in Lecture Notes in Informatics (GI); serves as reading material for the Biometric Systems course lab.",
    },
    {
      id: "life-expectancy-ml",
      title: "Life-Expectancy Prediction & Development Classification",
      type: "paper",
      category: "Machine Learning",
      date: "2024",
      course: "Introduction to Machine Learning and Data Mining (MSc)",
      description:
        "Cleaned and modelled 2,860 health & economy observations to explain life-span disparities and classify developed vs developing states.",
      thumbnail: lifeExpectancyThumb,
      pdfUrl: "./src/assets/papers/machine-learning.pdf",
      tags: [
        "Machine Learning",
        "Regression",
        "Classification",
        "PCA",
        "Cross-Validation",
      ],
      featured: true,
      abstract:
        "Comprehensive ML project using WHO dataset with 21 attributes × 2,864 rows covering 179 countries (2000-2015). Implemented dual objectives: regression for life expectancy prediction and classification for development status.",
      keyContributions: [
        "Rigorous data preprocessing pipeline with standardization and outlier detection",
        "PCA implementation showing developed nations form tight clusters in principal components space",
        "Regularized Linear Regression achieving MAE ≈ 1.8 years with optimal λ≈0.01",
        "Statistical validation using nested 10-fold CV and paired t-tests",
      ],
      technologies:
        "Python 3.11, scikit-learn, pandas, matplotlib, NumPy, statistical testing frameworks",
      outcome:
        "Delivered 10-page comprehensive report with reproducible Jupyter notebook. Methodology adopted as template for course cohorts 2024-25.",
    },
    {
      id: "ux-engineering",
      title: "User Experience Engineering: Next-Generation Interface Design",
      type: "paper",
      category: "UX Research",
      date: "2024",
      course: "User Experience Engineering (MSc)",
      description:
        "Comprehensive UX design course developing four innovative interface prototypes using lean methodology, biometric integration, and cognitive computing principles.",
      thumbnail: uxEngineeringThumb,
      pdfUrl: "./src/assets/papers/ux-engineering.pdf",
      tags: [
        "UX Design",
        "Prototyping",
        "User Research",
        "Biometric Interfaces",
        "Design Thinking",
      ],
      featured: true,
      abstract:
        "Project-driven application of lean UX methods to design cognitive computing interfaces, combining business canvas modeling with hierarchical user story mapping for agile development and MVP validation.",
      keyContributions: [
        "Developed systematic iterative design process using focus groups and usability testing",
        "Applied lean methodology and business canvas modeling for user needs validation",
        "Integrated biometric measurements into UX prototypes for adaptive experiences",
        "Conducted comprehensive user research including focus groups and workshops",
      ],
      technologies:
        "Design Thinking methodology, Lean UX, Agile development, biometric sensors, AR/VR prototyping tools",
      outcome:
        "Successfully delivered four comprehensive UX prototypes with validated user research, demonstrating proficiency in next-generation interface design.",
    },
    {
      id: "webgl-reflections",
      title: "Real-Time Planar Reflections in WebGL",
      type: "paper",
      category: "Computer Graphics",
      date: "2024",
      course: "Computer Graphics (MSc)",
      description:
        "Built a four-stage rasterisation pipeline that mirrors geometry, blends translucency, clips correctly and runs at 60 fps in the browser using WebGL and custom GLSL shaders.",
      thumbnail: webglReflectionsThumb,
      pdfUrl: "./src/assets/papers/planar-reflections-webgl.pdf",
      tags: [
        "WebGL",
        "GLSL",
        "Computer Graphics",
        "Real-Time Rendering",
        "JavaScript",
      ],
      featured: true,
      abstract:
        "Comprehensive implementation of planar reflection system in WebGL 1.0 with custom GLSL shaders, focusing on real-time performance while maintaining visual quality through advanced graphics programming techniques.",
      keyContributions: [
        "Geometry mirroring using 4×4 reflection matrix with mathematical derivation",
        "Translucent reflector rendering with proper blending for realistic appearance",
        "Stencil buffer gating system preventing reflection leakage",
        "Oblique near-plane clipping through projection matrix modification",
        "Performance optimization achieving ≤2ms per frame rendering",
      ],
      technologies:
        "WebGL 1.0, GLSL shaders, JavaScript, gl-matrix.js, Chrome DevTools",
      outcome:
        "Successfully implemented real-time planar reflection system running at 60fps with clean architecture supporting easy WebGPU migration.",
    },
    {
      id: "ddpm-mnist",
      title: "Denoising Diffusion Probabilistic Models on MNIST",
      type: "paper",
      category: "Machine Learning",
      date: "2024",
      course: "Deep Learning (MSc)",
      description:
        "Compared linear, cosine & sigmoid noise schedules plus Classifier-Free Guidance, pushing FID down to 0.46 on MNIST through comprehensive DDPM implementation from scratch.",
      thumbnail: ddpmMnistThumb,
      pdfUrl: "./src/assets/papers/ddpm-mnist-report.pdf",
      tags: [
        "Deep Learning",
        "DDPMs",
        "PyTorch",
        "Generative AI",
        "U-Net",
        "Diffusion Models",
      ],
      featured: true,
      abstract:
        "Comprehensive implementation and evaluation of Denoising Diffusion Probabilistic Models with systematic comparison of noise scheduling strategies, timestep optimization, and Classifier-Free Guidance integration on MNIST dataset.",
      keyContributions: [
        "Complete DDPM implementation with U-Net architecture featuring residual blocks and attention",
        "Systematic comparison of three noise schedulers showing 35% improvement",
        "Classifier-Free Guidance implementation achieving FID of 0.464",
        "Comprehensive experimental validation with 60k/10k MNIST split",
      ],
      technologies:
        "PyTorch, Python, U-Net architecture, MNIST dataset, Adam optimizer, MSE loss",
      outcome:
        "Successfully achieved state-of-the-art FID score of 0.464 on MNIST with comprehensive analysis presented in academic poster format.",
    },
    {
      id: "hotdog-classification-poster",
      title:
        "Deep Learning in Computer Vision: Multi-Domain Applications (Poster)",
      type: "poster",
      category: "Computer Vision",
      date: "2024",
      course: "Deep Learning in Computer Vision (MSc)",
      description:
        "Poster presenting three deep learning projects: binary CNN classification (HotDog/Not HotDog), medical image segmentation, and real-time pothole detection, with ablation studies and performance analysis.",
      thumbnail: deepLearningCVThumb,
      pdfUrl: "./src/assets/papers/hotdog-classification-poster.pdf",
      tags: [
        "Deep Learning",
        "Computer Vision",
        "CNNs",
        "Object Detection",
        "Segmentation",
      ],
      featured: false,
      abstract:
        "Visual summary of three computer vision projects: HotDog/Not HotDog classification, medical image segmentation, and pothole detection, including architectures, metrics, and ablation studies.",
      keyContributions: [
        "Custom CNN architecture development and systematic dropout optimization",
        "Medical image segmentation with U-Net variants and loss function comparison",
        "Real-time pothole detection system with region proposals and validation accuracy",
        "Transfer learning benchmarking and explainable AI analysis",
      ],
      technologies:
        "PyTorch, CNNs, U-Net, R-CNN, ResNet, DenseNet, Selective Search, data augmentation, transfer learning, medical imaging",
      outcome:
        "Delivered three comprehensive projects with academic poster presentations; achieved competitive performance and detailed ablation studies.",
    },
    {
      id: "moodwise-pdi",
      title: "MoodWise: Tracking Mood, Weather & Activity",
      type: "paper",
      category: "UX Research",
      date: "2024",
      course: "Personal Data Interaction for Mobile and Wearables (MSc)",
      description:
        "Logs morning/evening mood, activities and daily weather, then turns them into calendar heat-maps & insight cards to fight seasonal low mood through personal informatics.",
      thumbnail: moodwisePDIThumb,
      pdfUrl: "./src/assets/papers/moodwise-personal-data.pdf",
      tags: [
        "React Native",
        "Personal Informatics",
        "Mobile App",
        "Data Visualization",
        "UX Research",
      ],
      featured: true,
      abstract:
        "Complete personal informatics system development including React Native mobile prototype, comprehensive UX evaluation with multiple user studies, and HCI experiment comparing visualization approaches for personal data interaction.",
      keyContributions: [
        "Designed and developed React Native mobile app with one-tap emoji mood logging",
        "Created comprehensive data visualization suite with calendar views and statistical dashboard",
        "Implemented personal informatics lifecycle following Li et al. model",
        "Conducted systematic UX evaluation with usability studies and HCI experiments",
        "Built privacy-aware architecture with local data storage",
      ],
      technologies:
        "React Native, JavaScript, mobile prototyping, data visualization, SQLite local storage",
      outcome:
        "Successfully delivered high-fidelity mobile prototype with comprehensive paper documentation and video demonstration. Validated design through multiple user studies.",
    },
    {
      id: "gothentic",
      title: "Gothentic: Authentic Travel Community Platform",
      type: "paper",
      category: "UX Research",
      date: "2024",
      course: "User Experience Engineering (MSc)",
      description:
        "Community platform where verified travellers share authentic micro-blogs and quick-tips, enabling others to build tailor-made trips from trusted local insights.",
      thumbnail: gothenticThumb,
      pdfUrl: "./src/assets/papers/gothentic-ux.pdf",
      tags: [
        "UX Research",
        "Community Platform",
        "Travel",
        "Micro-Blogs",
        "Personalization",
      ],
      featured: false,
      abstract:
        "A platform that leverages collective knowledge for authentic travel planning, offering micro-blogs, quick-tips, and a verified traveller system to ensure content quality and trust.",
      keyContributions: [
        "Verified traveller system ensuring authentic, unbiased content quality",
        "Micro-blog format optimized for quick consumption and trip planning",
        "Filter system by country/city with seamless external booking integration",
        "Community moderation system designed to deter sponsored posts and maintain authenticity",
      ],
      technologies:
        "React, Node.js, MongoDB, UX research methods, community moderation tools",
      outcome:
        "Iterative testing led to simplified interface, focusing on blog credibility and reading experience optimization.",
    },
    {
      id: "gymbuddy",
      title: "GymBuddy: Social Robot for Personalized Fitness Feedback",
      type: "paper",
      category: "UX Research",
      date: "2024",
      course: "User Experience Engineering (MSc)",
      description:
        "Mobile social-robot that follows beginners around the gym, uses computer-vision to correct form and keeps them motivated through real-time pose analysis and personalized feedback.",
      thumbnail: gymbuddyThumb,
      pdfUrl: "./src/assets/papers/gymbuddy-ux.pdf",
      tags: [
        "UX Research",
        "Robotics",
        "Computer Vision",
        "Fitness",
        "Personalized Feedback",
      ],
      featured: false,
      abstract:
        "A mobile robot that provides real-time feedback and motivation to gym beginners, leveraging computer vision for form correction and a lean UX process for iterative design.",
      keyContributions: [
        "Focus-group iterations uncovered key pain-points including placement and accessibility issues",
        "Think-aloud testing led to rep-count progress bar and eye animations that follow users",
        "Lean Canvas defined sharp value proposition: real-time feedback, personalised plan, empathetic support",
        "Ethical design avoiding nagging behavior with user-tunable voice/volume and privacy-protected camera data",
      ],
      technologies:
        "Python, OpenCV, React Native, UX research, robotics prototyping",
      outcome:
        "Usability score increased after color, font and navigation fixes; validated concept for gym-beginner segment with clear roadmap for wristband integration.",
    },
    {
      id: "safedrive",
      title: "SafeDrive: In-Cab AI Fatigue Detection for Truck Drivers",
      type: "paper",
      category: "UX Research",
      date: "2024",
      course: "User Experience Engineering (MSc)",
      description:
        "In-cab AI system that detects truck-driver fatigue using IR camera analysis of head-pose, eyelid movement, and yawns, triggering adaptive alerts.",
      thumbnail: safedriveThumb,
      pdfUrl: "./src/assets/papers/safedrive-ux.pdf",
      tags: [
        "UX Research",
        "AI",
        "Fatigue Detection",
        "Truck Safety",
        "Computer Vision",
      ],
      featured: false,
      abstract:
        "AI-powered system for early detection of driver fatigue, using IR camera and progressive alarm system, validated through focus groups and think-aloud testing.",
      keyContributions: [
        "Dashboard plug-in with IR camera for non-intrusive fatigue detection",
        "Progressive alarm system: light alerts, audio warnings, rest area recommendations",
        "Focus group validation reshaped tone, palette, and AI camera communication",
        "Voice controls prioritized over touch interaction for safety during driving",
      ],
      technologies:
        "Python, OpenCV, IR camera hardware, UX research, embedded systems",
      outcome:
        "Validated facial-recognition flow through high-fidelity think-aloud testing with 5 users in simulated cab environment, with ethical dark-pattern audit ensuring driver agency.",
    },
    {
      id: "ddpm-poster",
      title: "Denoising Diffusion Probabilistic Models: Generative AI (Poster)",
      type: "poster",
      category: "Machine Learning",
      date: "2024",
      course: "Deep Learning (MSc)",
      description:
        "Poster summarizing a comprehensive DDPM implementation, comparing noise schedules and classifier-free guidance on MNIST.",
      thumbnail: ddpmPosterThumb,
      pdfUrl: "./src/assets/papers/ddpm-poster.pdf",
      tags: [
        "Deep Learning",
        "DDPMs",
        "Generative AI",
        "U-Net",
        "Diffusion Models",
      ],
      featured: false,
      abstract:
        "Visual summary of DDPMs, including mathematical background, scheduler comparison, and classifier-free guidance results on MNIST.",
      keyContributions: [
        "Complete DDPM implementation with U-Net architecture",
        "Systematic comparison of three noise schedulers: Linear, Cosine, Sigmoid",
        "Classifier-Free Guidance achieving FID of 0.464",
        "Comprehensive experimental validation and visualizations",
      ],
      technologies:
        "PyTorch, Python, U-Net, MNIST dataset, Adam optimizer, MSE loss",
      outcome:
        "Achieved state-of-the-art FID score of 0.464 on MNIST; presented as academic poster.",
    },
    {
      id: "object-detection-poster",
      title: "Smart Roads: Real-Time Pothole Detection (Poster)",
      type: "poster",
      category: "Computer Vision",
      date: "2024",
      course: "Deep Learning in Computer Vision (MSc)",
      description:
        "Poster presenting a real-time pothole detection system using CNNs and region proposal methods, with performance evaluation and ablation studies.",
      thumbnail: objectDetectionThumb,
      pdfUrl: "./src/assets/papers/pothole-detection-poster.pdf",
      tags: [
        "Computer Vision",
        "Object Detection",
        "CNNs",
        "Smart Roads",
        "Deep Learning",
      ],
      featured: false,
      abstract:
        "Overview of a real-time pothole detection pipeline, including CNN architecture, selective search, edge boxes, and classification accuracy.",
      keyContributions: [
        "Developed and evaluated CNN-based pothole detection system",
        "Implemented region proposal methods: Selective Search and Edge Boxes",
        "Ablation studies on data imbalance and parameter tuning",
        "Comprehensive performance metrics and real-world validation",
      ],
      technologies:
        "PyTorch, CNNs, region proposal algorithms, data augmentation",
      outcome:
        "Achieved high validation accuracy and robust detection in real-world scenarios; presented as academic poster.",
    },
    {
      id: "segmentation-poster",
      title:
        "Segmentation Perspectives: From Skin Lesions to Retinal Blood Vessels (Poster)",
      type: "poster",
      category: "Computer Vision",
      date: "2024",
      course: "Deep Learning in Computer Vision (MSc)",
      description:
        "Poster comparing segmentation approaches for medical images, including U-Net architectures, ablation studies, and weakly supervised methods.",
      thumbnail: segmentationPosterThumb,
      pdfUrl: "./src/assets/papers/medical-segmentation-poster.pdf",
      tags: [
        "Computer Vision",
        "Segmentation",
        "Medical Imaging",
        "U-Net",
        "Ablation Study",
      ],
      featured: false,
      abstract:
        "Visual summary of segmentation methods for skin lesions and retinal vessels, including datasets, architectures, metrics, and ablation studies.",
      keyContributions: [
        "Compared encoder-decoder and U-Net architectures for segmentation",
        "Ablation studies on retinal and skin lesion datasets",
        "Explored weakly supervised segmentation with clicks and random sampling",
        "Comprehensive performance metrics and visualizations",
      ],
      technologies:
        "PyTorch, U-Net, medical image datasets, ablation study frameworks",
      outcome:
        "Demonstrated effective segmentation across domains; presented as academic poster.",
    },
  ];

  const categories = [
    "all-papers",
    "all-posters",
    "Computer Vision",
    "Machine Learning",
    "UX Research",
    "Computer Graphics",
  ];

  const filteredPapers = papers.filter((paper) => {
    let matchesFilter = false;
    if (activeFilter === "all-papers") {
      matchesFilter = paper.type === "paper";
    } else if (activeFilter === "all-posters") {
      matchesFilter = paper.type === "poster";
    } else if (activeFilter === "all") {
      matchesFilter = true;
    } else {
      matchesFilter = paper.category === activeFilter;
    }
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black overflow-x-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        <main className="relative pt-20">
          {/* Header Section */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            {/* Back to Home */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </motion.div>

            {/* Page Title */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Research Publications
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Papers & Posters
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A collection of my research papers, academic posters, and
                technical publications spanning computer vision, deep learning,
                UX research, and data science.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category === "all-papers"
                        ? "All Papers"
                        : category === "all-posters"
                        ? "All Posters"
                        : category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Papers Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="sync">
                {filteredPapers.map((paper) => (
                  <motion.div
                    key={paper.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    {/* Paper Thumbnail */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      <motion.img
                        src={paper.thumbnail}
                        alt={`${paper.title} thumbnail`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.button
                          onClick={() => setPreviewPaper(paper)}
                          className="flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Quick Preview
                        </motion.button>
                      </div>
                    </div>

                    {/* Paper Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          {paper.date} • {paper.course}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2 leading-tight">
                        {paper.title}
                      </h3>

                      <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {paper.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {paper.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                        {paper.tags.length > 3 && (
                          <span className="px-3 py-1 text-xs font-medium bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30 whitespace-nowrap">
                            +{paper.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto pt-4">
                        <motion.button
                          onClick={() => setPreviewPaper(paper)}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Details
                        </motion.button>

                        <motion.a
                          href={paper.pdfUrl}
                          download
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredPapers.length === 0 && (
              <motion.div variants={itemVariants} className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No papers found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </motion.div>
        </main>

        <Footer />
      </div>

      {/* Paper Preview Modal */}
      <AnimatePresence>
        {previewPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setPreviewPaper(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-purple-500/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {previewPaper.course} • {previewPaper.date}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {previewPaper.title}
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          previewPaper.type === "paper"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-green-500/20 text-green-300 border border-green-500/30"
                        }`}
                      >
                        {previewPaper.type === "paper"
                          ? "Research Paper"
                          : "Academic Poster"}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
                        {previewPaper.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setPreviewPaper(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    Abstract
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {previewPaper.abstract}
                  </p>

                  {previewPaper.keyContributions && (
                    <>
                      <h3 className="text-lg font-semibold text-purple-300 mb-3">
                        Key Contributions
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                        {previewPaper.keyContributions.map(
                          (contribution, index) => (
                            <li key={index} className="leading-relaxed">
                              {contribution}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}

                  {previewPaper.technologies && (
                    <>
                      <h3 className="text-lg font-semibold text-purple-300 mb-3">
                        Technologies Used
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {previewPaper.technologies}
                      </p>
                    </>
                  )}

                  {previewPaper.outcome && (
                    <>
                      <h3 className="text-lg font-semibold text-purple-300 mb-3">
                        Outcome & Impact
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {previewPaper.outcome}
                      </p>
                    </>
                  )}

                  {/* Tags Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">
                      Keywords & Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {previewPaper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-8 pt-6 border-t border-gray-700">
                    <motion.a
                      href={previewPaper.pdfUrl}
                      download
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Full Paper
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PapersPage;
