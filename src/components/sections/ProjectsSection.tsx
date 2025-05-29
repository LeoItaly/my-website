import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  FileText,
  Rocket,
  Brain,
  Code,
  Database,
} from "lucide-react";
import ProjectDetail from "./ProjectDetail";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  paper?: string;
  featured: boolean;
  type: string;
  course: string;
  role: string;
  paperAvailable: boolean;
  snippet: string;
  motivation: string;
  scope: string;
  keyContributions: string[];
  technologies: string;
  outcome: string;
  futureWork: string;
  whatILearned: string[];
  paperUrl?: string;
  posterUrl?: string;
  posterUrls?: string[];
  projectGithub?: string;
  additionalGithub?: string[];
  subProjects?: {
    id: string;
    title: string;
    description: string;
    motivation: string;
    keyFeatures: string[];
    outcome: string;
    paperUrl: string;
  }[];
}

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const projectCategories = [
    {
      id: "all",
      label: "All Projects",
      icon: Rocket,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: "ai-ml",
      label: "AI/ML",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "data-science",
      label: "Data Science",
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "research",
      label: "Research",
      icon: FileText,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const projects: Project[] = [
    {
      id: "fiqa-biometric-systems",
      title:
        "Facial Image Quality Assessment for Improved Face Recognition Systems",
      category: "research",
      description:
        "Surveyed modern FIQA techniques and proposed research directions to boost robustness, interpretability and bias mitigation in face-recognition pipelines.",
      image: "./src/assets/images/fiqa.jpg",
      tags: [
        "FIQA",
        "Face Recognition",
        "PyTorch",
        "OpenCV",
        "SHAP",
        "Research",
      ],
      github: "",
      paper: "./src/assets/papers/fiqa-biometric-systems.pdf",
      featured: true,
      type: "research",
      course: "Biometric Systems (MSc)",
      role: "Lead researcher & sole author",
      paperAvailable: true,
      snippet:
        "Surveyed modern FIQA techniques and proposed research directions to boost robustness, interpretability and bias mitigation in face-recognition pipelines.",
      motivation:
        "Low-quality face images sharply degrade recognition accuracy. Pre-screening with FIQA allows systems to discard or down-weight problematic samples.",
      scope:
        "Reviewed 40+ papers; categorised methods into analytical, regression-based and quality-aware (see taxonomy on page 3, Fig. 1) and contrasted FIQA with the newer Interpretable FQA paradigm (table on page 8). 02238-s240095-EFS",
      keyContributions: [
        "Comprehensive comparison of seven SOTA FIQA models (MagFace, FaceQNet, SER-FIQ, DifFIQA,...) on five public benchmarks (LFW, CPLFW, etc.).",
        "Highlighted alignment and demographic-bias pitfalls; showcased AI-KD knowledge-distillation strategy that boosts pAUC by ≈ 5 % (table on page 9–10).",
        "Summarised emerging pixel-level explainability techniques (SHAP-based heat-maps, deletion/insertion curves) for actionable feedback in capture pipelines.",
      ],
      technologies:
        "Python 3, PyTorch, OpenCV, SHAP, StyleGAN2 latent-space analysis, Zotero (refs), Elicit & Litmaps (literature mapping), Jenni AI (draft optimisation).",
      outcome:
        "Accepted in Lecture Notes in Informatics (GI); serves as reading material for the Biometric Systems course lab.",
      futureWork:
        "Build a multimodal FIQA module (face + iris) and integrate bias-mitigation frameworks (EQBM, L2RT-FIQA) into a demo access-control system.",
      whatILearned: [
        "Crafting evaluation protocols (EDC & pAUC curves) that remain model-agnostic.",
        "Translating dense research into actionable design guidelines for practitioners.",
        "Leveraging knowledge-distillation to transfer robustness against mis-alignment.",
      ],
    },
    {
      id: "image-analysis-dtu",
      title: "Image Analysis: From Medical Imaging to Computer Vision",
      category: "ai-ml",
      description:
        "Comprehensive exploration of digital image analysis including medical imaging, statistical methods, and performance evaluation across multiple practical exercises.",
      image: "./src/assets/images/image-analysis.jpg",
      tags: [
        "Image Processing",
        "Medical Imaging",
        "PCA",
        "Classification",
        "Segmentation",
        "Python",
      ],
      github: "https://github.com/LeoItaly/Image-analysis",
      featured: false,
      type: "project",
      course: "Image Analysis (MSc)",
      role: "Student & Implementer",
      paperAvailable: false,
      snippet:
        "Gained solid understanding of digital images, implementation of image analysis algorithms, and evaluation of performance across medical and computer vision applications.",
      motivation:
        "With the explosion of image analysis in self-driving cars, medical diagnostics, and treatment planning, understanding fundamental image processing techniques became essential for modern AI applications.",
      scope:
        "Comprehensive coursework covering digital image fundamentals, medical imaging modalities (X-ray, CT, MRI), algorithm implementation, and performance evaluation through hands-on exercises and practical implementations.",
      keyContributions: [
        "Implemented core image analysis algorithms including point processing, filtering, morphology, and BLOB analysis from scratch.",
        "Developed medical image processing pipelines for X-ray, CT, and MRI data with proper acquisition understanding.",
        "Built classification systems using extracted image features with statistical methods like PCA for dimensionality reduction.",
        "Created segmentation and registration algorithms with performance evaluation using confusion matrices and clinical endpoints.",
        "Designed custom image analysis solutions for specific objectives using appropriate training data and feature selection.",
      ],
      technologies:
        "Python, NumPy, OpenCV, scikit-learn, matplotlib, medical imaging libraries, statistical analysis tools, performance evaluation frameworks.",
      outcome:
        "Successfully completed all course exercises demonstrating proficiency in image analysis fundamentals, medical imaging principles, and algorithm performance optimization.",
      futureWork:
        "Apply learned techniques to develop advanced medical image analysis systems, integrate deep learning approaches with traditional methods, and explore real-time image processing for clinical applications.",
      whatILearned: [
        "Fundamental properties of digital images and medical imaging modalities.",
        "Implementation and optimization of image analysis algorithms for various applications.",
        "Statistical methods for feature extraction and classification in image-based systems.",
        "Performance evaluation techniques using ground-truth datasets and clinical endpoints.",
        "Design principles for selecting appropriate algorithms based on specific image analysis objectives.",
      ],
    },
    {
      id: "computer-vision-dtu",
      title: "Computer Vision: 3D Geometry and Surface Reconstruction",
      category: "ai-ml",
      description:
        "Comprehensive exploration of computer vision fundamentals including 3D geometry, camera calibration, feature matching, and RANSAC algorithm implementation.",
      image: "./src/assets/images/computer.vision.jpg",
      tags: [
        "Computer Vision",
        "3D Geometry",
        "Camera Calibration",
        "RANSAC",
        "Feature Matching",
        "Python",
      ],
      github: "https://github.com/LeoItaly/computer-vision",
      featured: false,
      type: "project",
      course: "Computer Vision (MSc)",
      role: "Student & Implementer",
      paperAvailable: false,
      snippet:
        "Developed theoretical and practical understanding of computer vision problems through implementation of core algorithms for 3D reconstruction and camera geometry.",
      motivation:
        "Computer vision methods are essential for digital entertainment, mapping, industrial sensors, and robot navigation. Understanding the mathematical foundations enables solving complex visual perception problems.",
      scope:
        "Comprehensive coursework covering perspective camera geometry, 3D surface reconstruction, camera calibration, feature detection, and correspondence matching with practical implementations in Python.",
      keyContributions: [
        "Implemented linear methods for camera estimation and calibration from multiple viewpoints.",
        "Developed RANSAC algorithm for robust estimation in presence of outliers and noise.",
        "Created correspondence matching systems between 2D image points to estimate 3D scene structure.",
        "Built one and two view geometry algorithms for estimating camera positions and 3D points.",
        "Implemented feature detection and matching pipelines using common computer vision libraries.",
        "Performed systematic performance analysis and optimization of computer vision algorithms.",
      ],
      technologies:
        "Python, OpenCV, NumPy, matplotlib, camera calibration tools, 3D geometry libraries, RANSAC implementations, feature detection frameworks.",
      outcome:
        "Successfully completed all exercises demonstrating proficiency in 3D computer vision, camera geometry, and robust algorithm implementation with performance evaluation.",
      futureWork:
        "Integrate deep learning approaches with classical computer vision methods, develop real-time 3D reconstruction systems, and apply techniques to robotics and autonomous navigation.",
      whatILearned: [
        "Mathematical foundations of perspective camera geometry and 3D reconstruction.",
        "Implementation and optimization of robust algorithms like RANSAC for real-world applications.",
        "Camera calibration techniques and their impact on 3D estimation accuracy.",
        "Feature detection and matching strategies for establishing correspondences across views.",
        "Systematic performance analysis methodologies for computer vision algorithms.",
      ],
    },
    {
      id: "machine-learning-life-expectancy",
      title: "Life-Expectancy Prediction & Development Classification",
      category: "data-science",
      description:
        "Cleaned and modelled 2,860 health & economy observations to explain life-span disparities and classify developed vs developing states using rigorous ML pipeline.",
      image: "./src/assets/images/machine-learning.jpg",
      tags: [
        "Machine Learning",
        "Regression",
        "Classification",
        "PCA",
        "Cross-Validation",
        "Python",
      ],
      github: "https://github.com/LeoItaly/machine-learning",
      paper: "./src/assets/papers/machine-learning.pdf",
      featured: true,
      type: "research",
      course: "Introduction to Machine Learning and Data Mining (MSc)",
      role: "Data lead & primary author",
      paperAvailable: true,
      snippet:
        "Cleaned and modelled 2,860 health & economy observations to explain life-span disparities and to separate developed vs developing states.",
      motivation:
        "Understanding factors that influence life expectancy and economic development status is crucial for public health policy and international aid allocation. Machine learning provides powerful tools to identify key predictive features and build robust models.",
      scope:
        "Comprehensive ML project using WHO dataset with 21 attributes × 2,864 rows covering 179 countries (2000-2015). Implemented dual objectives: regression for life expectancy prediction and classification for development status.",
      keyContributions: [
        "Rigorous data preprocessing pipeline including sanity checks, standardization, and outlier detection using z-scores (|z| > 3).",
        "Comprehensive EDA with correlation analysis revealing strong negative links between mortality metrics and life span.",
        "PCA implementation showing developed nations form tight clusters in first 2 principal components space.",
        "Regularized Linear Regression achieving MAE ≈ 1.8 years with optimal λ≈0.01 through hyperparameter tuning.",
        "Neural network implementation (1 hidden unit) providing comparable accuracy with non-linearity capabilities.",
        "Statistical validation using nested 10-fold CV and paired t-tests confirming model significance (p < 0.05).",
        "McNemar test analysis showing ANN outperforms logistic regression by ~4pp accuracy for classification.",
      ],
      technologies:
        "Python 3.11, scikit-learn, pandas, matplotlib, NumPy, statistical testing frameworks, GitHub CI for automated testing and linting.",
      outcome:
        "Delivered 10-page comprehensive report with reproducible Jupyter notebook. Methodology adopted as template for course cohorts 2024-25, demonstrating real-world impact.",
      futureWork:
        "Integrate Gradient-Boosted Trees for improved performance, implement SHAP for feature attribution analysis, and publish cleaned dataset on Kaggle for community use.",
      whatILearned: [
        "Rigorous preprocessing can improve model accuracy more than sophisticated algorithms.",
        "Nested cross-validation prevents optimistic bias during hyperparameter tuning.",
        "Even simple neural networks can rival linear models with proper feature engineering.",
        "Statistical validation is essential for confirming model performance beyond baseline.",
        "Feature importance analysis reveals actionable insights for policy recommendations.",
      ],
    },
    {
      id: "geometric-data-analysis-dtu",
      title: "Geometric Data Analysis and Processing",
      category: "ai-ml",
      description:
        "Comprehensive exploration of geometric data processing including point clouds, triangle meshes, surface representations, and differential geometry algorithms.",
      image: "./src/assets/images/geometric-data.jpg",
      tags: [
        "Geometric Processing",
        "Point Clouds",
        "Triangle Meshes",
        "Surface Analysis",
        "3D Graphics",
        "Python",
      ],
      github:
        "https://github.com/LeoItaly/Geometric-Data-Analysis-and-Processing",
      featured: false,
      type: "project",
      course: "Geometric Data Analysis and Processing (MSc)",
      role: "Student & Algorithm Implementer",
      paperAvailable: false,
      snippet:
        "Implemented algorithms for processing geometric data including point clouds, triangle meshes, and implicit surfaces with applications in 3D modeling and FEM simulation.",
      motivation:
        "Modern applications in 3D scanning, modeling, and simulation require sophisticated geometric processing techniques. Understanding surface representations and differential geometry is essential for computer graphics, CAD, and scientific computing.",
      scope:
        "Weekly programming assignments covering surface representations, spectral analysis, differential geometry, mesh operations, point cloud registration, and geometric visualization using Python implementations.",
      keyContributions: [
        "Implemented multiple surface representations including triangle meshes, distance fields, and point clouds with conversion algorithms.",
        "Developed spectral analysis methods for triangle meshes using Laplace-Beltrami operator analogous to Fourier analysis.",
        "Created mesh simplification and optimization algorithms for reducing geometric complexity while preserving features.",
        "Built point cloud registration system using ICP (Iterative Closest Point) method for aligning 3D datasets.",
        "Implemented Delaunay triangulation algorithms for 2D point sets and 3D surface parameterization.",
        "Developed noise removal and smoothing techniques for polygonal meshes using differential geometry principles.",
        "Created volume-based processing methods and implicit surface polygonization algorithms.",
      ],
      technologies:
        "Python, NumPy, SciPy, matplotlib, OpenGL/computer graphics libraries, geometric processing frameworks, mesh manipulation tools, 3D visualization systems.",
      outcome:
        "Successfully completed all weekly assignments demonstrating proficiency in geometric algorithm implementation, surface analysis, and 3D data processing with effective visualization.",
      futureWork:
        "Apply geometric processing to real-world 3D scanning applications, integrate machine learning with geometric analysis, and develop real-time mesh processing for interactive applications.",
      whatILearned: [
        "Multiple surface representation paradigms and their trade-offs for different applications.",
        "Differential geometry principles applied to discrete surface analysis and processing.",
        "Spectral methods for geometric analysis providing frequency-domain insights into mesh properties.",
        "Registration and alignment techniques essential for combining multiple 3D datasets.",
        "Effective visualization strategies for making complex geometric data accessible and interpretable.",
      ],
      subProjects: [
        {
          id: "gymbuddy",
          title: "GymBuddy",
          description:
            "Mobile social-robot that follows beginners around the gym, uses computer-vision to correct form and keeps them motivated through real-time pose analysis and personalized feedback.",
          motivation:
            "Beginners lack affordable coaching; wrong form leads to injuries and demotivation. GymBuddy robot bridges that gap with real-time pose analysis, personalised plans and upbeat feedback.",
          keyFeatures: [
            "Focus-group iterations uncovered key pain-points including placement and accessibility issues",
            "Think-aloud testing led to rep-count progress bar and eye animations that follow users",
            "Lean Canvas defined sharp value proposition: real-time feedback, personalised plan, empathetic support",
            "Ethical design avoiding nagging behavior with user-tunable voice/volume and privacy-protected camera data",
          ],
          outcome:
            "Usability score increased after color, font and navigation fixes; validated concept for gym-beginner segment with clear roadmap for wristband integration.",
          paperUrl: "./src/assets/papers/gymbuddy-ux.pdf",
        },
        {
          id: "instanttranslate",
          title: "InstantTranslate",
          description:
            "AR glasses that live-translate written signs and dialogue in 50+ languages for travellers using eye-gaze interaction and hand-gesture controls.",
          motivation:
            "Travellers struggle with menus, signs and live conversations; phone apps demand hands and attention. AR solution provides hands-free, context-aware translation.",
          keyFeatures: [
            "Real-time text and speech translation overlaid directly in field of view",
            "Eye-gaze acts as mouse pointer for intuitive selection without hand interaction",
            "Left-hand radial menu designed specifically for non-verbal users",
            "Stare-to-translate functionality reduces input burden and cognitive load",
          ],
          outcome:
            "Peer-voted winning concept with validated two-way dialogue illustration, comprehensive wireframes addressing usability issues through color-coding and speaker labels.",
          paperUrl: "./src/assets/papers/instanttranslate-ux.pdf",
        },
        {
          id: "safedrive",
          title: "SafeDrive",
          description:
            "In-cab AI system that detects truck-driver fatigue using IR camera analysis of head-pose, eyelid movement, and yawns, triggering adaptive alerts.",
          motivation:
            "US truckers may drive 8 hours before breaks; 91,000 fatigue-related crashes occur yearly. AI-powered early detection can prevent accidents through progressive intervention.",
          keyFeatures: [
            "Dashboard plug-in with IR camera for non-intrusive fatigue detection",
            "Progressive alarm system: light alerts, audio warnings, rest area recommendations",
            "Focus group validation reshaped tone, palette, and AI camera communication",
            "Voice controls prioritized over touch interaction for safety during driving",
          ],
          outcome:
            "Validated facial-recognition flow through high-fidelity think-aloud testing with 5 users in simulated cab environment, with ethical dark-pattern audit ensuring driver agency.",
          paperUrl: "./src/assets/papers/safedrive-ux.pdf",
        },
        {
          id: "gothentic",
          title: "Gothentic",
          description:
            "Community platform where verified travellers share authentic micro-blogs and quick-tips, enabling others to build tailor-made trips from trusted local insights.",
          motivation:
            "Fully-packaged tours lack authenticity; DIY research is time-consuming and often biased by viral hotspots. Platform connects authentic local knowledge with personalized trip planning.",
          keyFeatures: [
            "Verified traveller system ensuring authentic, unbiased content quality",
            "Micro-blog format optimized for quick consumption and trip planning",
            "Filter system by country/city with seamless external booking integration",
            "Community moderation system designed to deter sponsored posts and maintain authenticity",
          ],
          outcome:
            "Iterative testing led to simplified interface removing confusing map view and AI cost-estimator, focusing on blog credibility and reading experience optimization.",
          paperUrl: "./src/assets/papers/gothentic-ux.pdf",
        },
      ],
    },
    {
      id: "user-experience-engineering-dtu",
      title: "User Experience Engineering: Next-Generation Interface Design",
      category: "data-science",
      description:
        "Comprehensive UX design course developing four innovative interface prototypes using lean methodology, biometric integration, and cognitive computing principles.",
      image: "./src/assets/images/ux.engineering.jpg",
      tags: [
        "UX Design",
        "Prototyping",
        "User Research",
        "Biometric Interfaces",
        "Design Thinking",
        "MVP",
      ],
      featured: true,
      type: "research",
      course: "User Experience Engineering (MSc)",
      role: "UX Designer & Researcher",
      paperAvailable: true,
      snippet:
        "Developed four innovative UX prototypes for next-generation interfaces incorporating biometric data, cognitive computing, and systematic user validation through iterative design processes.",
      motivation:
        "Next-generation interfaces require new UX paradigms that incorporate biometric data, cognitive computing, and adaptive user experiences. Traditional design methods need evolution to handle emerging technologies and unfamiliar interaction challenges.",
      scope:
        "Project-driven application of lean UX methods to design cognitive computing interfaces, combining business canvas modeling with hierarchical user story mapping for agile development and MVP validation.",
      keyContributions: [
        "Developed systematic iterative design process using focus groups, think-aloud protocols, and usability testing across four distinct projects.",
        "Applied lean methodology and business canvas modeling to validate user needs and market segments for emerging interface paradigms.",
        "Integrated biometric measurements (heart rate, eye tracking, facial recognition) into UX prototypes for adaptive user experiences.",
        "Conducted comprehensive user research including focus groups, workshops, and external user testing to validate design decisions.",
        "Created data-driven design processes using verifiable hypotheses and rapid measurement techniques for UX decision making.",
        "Addressed ethical design considerations including privacy, dark patterns, and accessibility across all prototype developments.",
      ],
      technologies:
        "Design Thinking methodology, Lean UX, Agile development, biometric sensors, AR/VR prototyping tools, user testing frameworks, business canvas modeling, story mapping techniques.",
      outcome:
        "Successfully delivered four comprehensive UX prototypes with validated user research, demonstrating proficiency in next-generation interface design and systematic UX engineering processes.",
      futureWork:
        "Scale validated prototypes to production environments, integrate advanced AI and machine learning for enhanced cognitive computing interfaces, and develop comprehensive design systems for biometric UX.",
      whatILearned: [
        "Systematic application of lean methodology to UX design for emerging technology interfaces.",
        "Integration of biometric data into user experience design while maintaining ethical and privacy standards.",
        "Data-driven UX decision making through hypothesis formulation and rapid validation techniques.",
        "Stakeholder communication through UX prototyping across diverse technical and business audiences.",
        "Scalability considerations when transitioning digital products from development to production phases.",
      ],
      subProjects: [
        {
          id: "gymbuddy",
          title: "GymBuddy",
          description:
            "Mobile social-robot that follows beginners around the gym, uses computer-vision to correct form and keeps them motivated through real-time pose analysis and personalized feedback.",
          motivation:
            "Beginners lack affordable coaching; wrong form leads to injuries and demotivation. GymBuddy robot bridges that gap with real-time pose analysis, personalised plans and upbeat feedback.",
          keyFeatures: [
            "Focus-group iterations uncovered key pain-points including placement and accessibility issues",
            "Think-aloud testing led to rep-count progress bar and eye animations that follow users",
            "Lean Canvas defined sharp value proposition: real-time feedback, personalised plan, empathetic support",
            "Ethical design avoiding nagging behavior with user-tunable voice/volume and privacy-protected camera data",
          ],
          outcome:
            "Usability score increased after color, font and navigation fixes; validated concept for gym-beginner segment with clear roadmap for wristband integration.",
          paperUrl: "./src/assets/papers/gymbuddy-ux.pdf",
        },
        {
          id: "instanttranslate",
          title: "InstantTranslate",
          description:
            "AR glasses that live-translate written signs and dialogue in 50+ languages for travellers using eye-gaze interaction and hand-gesture controls.",
          motivation:
            "Travellers struggle with menus, signs and live conversations; phone apps demand hands and attention. AR solution provides hands-free, context-aware translation.",
          keyFeatures: [
            "Real-time text and speech translation overlaid directly in field of view",
            "Eye-gaze acts as mouse pointer for intuitive selection without hand interaction",
            "Left-hand radial menu designed specifically for non-verbal users",
            "Stare-to-translate functionality reduces input burden and cognitive load",
          ],
          outcome:
            "Peer-voted winning concept with validated two-way dialogue illustration, comprehensive wireframes addressing usability issues through color-coding and speaker labels.",
          paperUrl: "./src/assets/papers/instanttranslate-ux.pdf",
        },
        {
          id: "safedrive",
          title: "SafeDrive",
          description:
            "In-cab AI system that detects truck-driver fatigue using IR camera analysis of head-pose, eyelid movement, and yawns, triggering adaptive alerts.",
          motivation:
            "US truckers may drive 8 hours before breaks; 91,000 fatigue-related crashes occur yearly. AI-powered early detection can prevent accidents through progressive intervention.",
          keyFeatures: [
            "Dashboard plug-in with IR camera for non-intrusive fatigue detection",
            "Progressive alarm system: light alerts, audio warnings, rest area recommendations",
            "Focus group validation reshaped tone, palette, and AI camera communication",
            "Voice controls prioritized over touch interaction for safety during driving",
          ],
          outcome:
            "Validated facial-recognition flow through high-fidelity think-aloud testing with 5 users in simulated cab environment, with ethical dark-pattern audit ensuring driver agency.",
          paperUrl: "./src/assets/papers/safedrive-ux.pdf",
        },
        {
          id: "gothentic",
          title: "Gothentic",
          description:
            "Community platform where verified travellers share authentic micro-blogs and quick-tips, enabling others to build tailor-made trips from trusted local insights.",
          motivation:
            "Fully-packaged tours lack authenticity; DIY research is time-consuming and often biased by viral hotspots. Platform connects authentic local knowledge with personalized trip planning.",
          keyFeatures: [
            "Verified traveller system ensuring authentic, unbiased content quality",
            "Micro-blog format optimized for quick consumption and trip planning",
            "Filter system by country/city with seamless external booking integration",
            "Community moderation system designed to deter sponsored posts and maintain authenticity",
          ],
          outcome:
            "Iterative testing led to simplified interface removing confusing map view and AI cost-estimator, focusing on blog credibility and reading experience optimization.",
          paperUrl: "./src/assets/papers/gothentic-ux.pdf",
        },
      ],
    },
    {
      id: "computer-graphics-webgl",
      title: "Real-Time Planar Reflections in WebGL",
      category: "ai-ml",
      description:
        "Built a four-stage rasterisation pipeline that mirrors geometry, blends translucency, clips correctly and runs at 60 fps in the browser using WebGL and custom GLSL shaders.",
      image: "./src/assets/images/computer.graphics.jpg",
      tags: [
        "WebGL",
        "GLSL",
        "Computer Graphics",
        "Real-Time Rendering",
        "JavaScript",
        "Shaders",
      ],
      github: "https://github.com/LeoItaly/computer-graphics",
      paper: "./src/assets/papers/planar-reflections-webgl.pdf",
      featured: true,
      type: "research",
      course: "Computer Graphics (MSc)",
      role: "Lead Developer & Co-Researcher",
      paperAvailable: true,
      snippet:
        "Built a four-stage rasterisation pipeline that mirrors geometry, blends translucency, clips correctly and runs at 60 fps in the browser.",
      motivation:
        "Mirrors, calm water and polished floors all need convincing reflections, yet classic WebGL lacks built-in support. The goal was to craft a lightweight technique that looks physically plausible but still fits a real-time budget.",
      scope:
        "Comprehensive implementation of planar reflection system in WebGL 1.0 with custom GLSL shaders, focusing on real-time performance while maintaining visual quality through advanced graphics programming techniques.",
      keyContributions: [
        "Geometry mirroring using 4×4 reflection matrix R about chosen plane with mathematical derivation and implementation.",
        "Translucent reflector rendering with α < 1 and SRC_ALPHA/ONE_MINUS_SRC_ALPHA blending for realistic surface appearance.",
        "Stencil buffer gating system preventing reflection leakage beyond reflector surface boundaries.",
        "Oblique near-plane clipping through projection matrix modification for efficient GPU-based geometry culling.",
        "Single-pass Phong shading implementation for both original objects and mirrored twins.",
        "Performance optimization achieving ≤2ms per frame rendering on mid-range hardware.",
      ],
      technologies:
        "WebGL 1.0, GLSL shaders, JavaScript, gl-matrix.js for matrix operations, Chrome DevTools for performance profiling, custom rasterization pipeline, stencil buffer techniques.",
      outcome:
        "Successfully implemented real-time planar reflection system running at 60fps with clean architecture supporting easy WebGPU migration. Demonstrated with teapot example showing crisp reflections with proper transparency and clipping.",
      futureWork:
        "Implement curved or multi-bounce reflections via screen-space ray marching, WebGPU rewrite with WGSL and depth-prepass for larger scenes, and integration with educational demos for reflection vs refraction teaching.",
      whatILearned: [
        "Advanced WebGL programming techniques including stencil buffer manipulation and custom projection matrices.",
        "Real-time graphics optimization strategies balancing visual quality with performance constraints.",
        "Mathematical foundations of 3D reflection transformations and their efficient GPU implementation.",
        "Graphics pipeline architecture design for modular and maintainable rendering systems.",
        "Performance profiling and optimization techniques for browser-based graphics applications.",
      ],
    },
    {
      id: "deep-learning-ddpm",
      title: "Denoising Diffusion Probabilistic Models on MNIST",
      category: "ai-ml",
      description:
        "Compared linear, cosine & sigmoid noise schedules plus Classifier-Free Guidance, pushing FID down to 0.46 on MNIST through comprehensive DDPM implementation from scratch.",
      image: "./src/assets/images/deep.learning.jpg",
      tags: [
        "Deep Learning",
        "DDPMs",
        "PyTorch",
        "Generative AI",
        "U-Net",
        "Diffusion Models",
      ],
      github: "https://github.com/LeoItaly/deep-learning",
      paper: "./src/assets/papers/ddpm-mnist-report.pdf",
      featured: true,
      type: "research",
      course: "Deep Learning (MSc)",
      role: "Lead Researcher & Developer",
      paperAvailable: true,
      posterUrl: "./src/assets/papers/ddpm-poster.pdf",
      projectGithub: "https://github.com/LeoItaly/DDPM-DL",
      snippet:
        "Compared linear, cosine & sigmoid noise schedules plus Classifier-Free Guidance, pushing FID down to 0.46 on MNIST.",
      motivation:
        "Diffusion models have overtaken GANs for crisp image synthesis. Re-implemented DDPMs from scratch to understand forward (noise) and reverse (denoise) Markov chains and test how noise schedules, timestep count and class guidance affect quality.",
      scope:
        "Comprehensive implementation and evaluation of Denoising Diffusion Probabilistic Models with systematic comparison of noise scheduling strategies, timestep optimization, and Classifier-Free Guidance integration on MNIST dataset.",
      keyContributions: [
        "Complete DDPM implementation from scratch with U-Net architecture featuring residual blocks, self-attention, and sinusoidal timestep embeddings.",
        "Systematic comparison of three noise schedulers: Linear (FID: 7.82), Cosine (FID: 5.74), and Sigmoid (FID: 5.04) showing 35% improvement.",
        "Classifier-Free Guidance implementation achieving FID of 0.464 with guidance weight w=1, demonstrating quality-diversity trade-off control.",
        "Comprehensive experimental validation with 60k/10k MNIST split, 20 epochs training, and MSE loss optimization.",
        "Mathematical derivation and implementation of forward and reverse diffusion processes with detailed scheduler formulations.",
        "Performance analysis across different timestep counts (1000 steps optimal) and guidance weights with diversity collapse detection.",
      ],
      technologies:
        "PyTorch, Python, U-Net architecture, MNIST dataset, Adam optimizer, MSE loss, sinusoidal embeddings, attention mechanisms, mathematical modeling of stochastic processes.",
      outcome:
        "Successfully achieved state-of-the-art FID score of 0.464 on MNIST with comprehensive analysis presented in academic poster format. Methodology demonstrates deep understanding of generative modeling principles.",
      futureWork:
        "Scale to larger 64×64 datasets (Fashion-MNIST, CIFAR-10), migrate to PyTorch 2.2 Diffusion API, implement advanced scheduling techniques, and explore multi-modal conditioning approaches.",
      whatILearned: [
        "Mathematical foundations of stochastic diffusion processes and their discrete approximations.",
        "Advanced PyTorch implementation techniques for complex generative architectures.",
        "Systematic experimental design for comparing generative model variants.",
        "Classifier-Free Guidance principles for controllable generation without sacrificing diversity.",
        "Academic presentation and visualization techniques for complex technical concepts.",
        "Performance optimization strategies for training large generative models.",
      ],
    },
    {
      id: "deep-learning-computer-vision",
      title: "Deep Learning in Computer Vision: Multi-Domain Applications",
      category: "ai-ml",
      description:
        "Comprehensive exploration of CNN architectures across classification, segmentation, and object detection with three distinct projects showcasing modern deep learning techniques.",
      image: "./src/assets/images/deep.learning.cv.jpg",
      tags: [
        "Deep Learning",
        "Computer Vision",
        "CNNs",
        "Object Detection",
        "Segmentation",
        "PyTorch",
      ],
      featured: false,
      type: "research",
      course: "Deep Learning in Computer Vision (MSc)",
      role: "Lead Developer & Researcher",
      paperAvailable: false,
      posterUrls: [
        "./src/assets/papers/hotdog-classification-poster.pdf",
        "./src/assets/papers/medical-segmentation-poster.pdf",
        "./src/assets/papers/pothole-detection-poster.pdf",
      ],
      projectGithub: "https://github.com/rjarvi/IDLCV_23_HotDog",
      additionalGithub: ["https://github.com/Ealbagp/Object-Detection"],
      snippet:
        "Developed three comprehensive computer vision projects: binary CNN classification, medical image segmentation, and real-time object detection with state-of-the-art architectures.",
      motivation:
        "Computer vision tasks traditionally solved with hand-crafted features now leverage deep learning for superior performance. Understanding how to apply CNNs across different domains - from binary classification to complex segmentation and detection - is essential for modern AI applications.",
      scope:
        "Three distinct projects covering the spectrum of computer vision tasks: HotDog/Not HotDog binary classification with custom CNN architecture, medical image segmentation using U-Net variants, and real-time pothole detection with region-based object detection.",
      keyContributions: [
        "Custom CNN architecture development from 3-conv baseline to 6-conv/3-FC with systematic dropout optimization (p=0.25 conv, p=0.55 FC).",
        "Medical image segmentation across two domains: retinal vessel (565×584px) and dermoscopic lesion (576×767px) using patch-based training.",
        "Comprehensive loss function comparison: BCE, weighted BCE, Focal Loss (α=0.4, γ=2.5), and Dice Loss with U-Net achieving best performance.",
        "Real-time pothole detection system with Selective Search region proposals (k=5, σ=0.6, minSize=200) achieving 86.9% validation accuracy.",
        "Transfer learning benchmarking: custom model (81.1%) vs ResNet-18 (90.4%) with detailed performance analysis.",
        "Weakly-supervised learning experiments using point-level labels via K-means clustering vs random sampling.",
        "Explainable AI implementation with saliency maps revealing dataset diversity issues and model decision patterns.",
      ],
      technologies:
        "PyTorch, CNNs, U-Net, R-CNN, ResNet, DenseNet, Selective Search, data augmentation, transfer learning, medical imaging, computer vision pipelines, explainable AI techniques.",
      outcome:
        "Successfully delivered three comprehensive projects with academic poster presentations. Achieved competitive performance across all domains with detailed ablation studies and performance analysis. Demonstrated mastery of modern deep learning techniques for computer vision.",
      futureWork:
        "Implement Faster R-CNN for improved object detection, explore attention mechanisms for better segmentation performance, develop multi-modal fusion approaches, and integrate real-time deployment optimizations.",
      whatILearned: [
        "Architecture design principles for different computer vision tasks and their specific requirements.",
        "Advanced data augmentation strategies and their impact on model generalization and overfitting.",
        "Loss function selection and optimization for class-imbalanced datasets across different domains.",
        "Transfer learning trade-offs between custom architectures and pre-trained models.",
        "Medical imaging preprocessing techniques including patch-based training for memory efficiency.",
        "Region proposal methods and their impact on object detection performance.",
        "Explainable AI techniques for understanding model behavior and identifying dataset biases.",
      ],
    },
    {
      id: "sentiment-analysis-research",
      title: "Sentiment Analysis Research",
      category: "research",
      description:
        "Published research on multilingual sentiment analysis using transformer models. Achieved 94% accuracy across 5 languages.",
      image: "/src/assets/images/sentiment.jpg",
      tags: ["BERT", "NLP", "PyTorch", "Research", "Transformers"],
      github: "https://github.com/yourusername/multilingual-sentiment",
      paper: "https://arxiv.org/paper/yourpaper",
      featured: true,
      type: "research",
      course: "Natural Language Processing (MSc)",
      role: "Research Team Lead",
      paperAvailable: true,
      snippet:
        "Published research on multilingual sentiment analysis using transformer models. Achieved 94% accuracy across 5 languages.",
      motivation:
        "To improve sentiment analysis across multiple languages while maintaining high accuracy and reducing computational costs.",
      scope:
        "Developed and evaluated transformer-based models for sentiment analysis across 5 major languages.",
      keyContributions: [
        "Implemented a novel attention mechanism for cross-lingual transfer learning",
        "Achieved 94% accuracy across all target languages",
        "Reduced model size by 40% while maintaining performance",
      ],
      technologies:
        "PyTorch, Hugging Face Transformers, BERT, XLM-RoBERTa, Python, AWS",
      outcome: "Published in top-tier NLP conference with 50+ citations",
      futureWork:
        "Extend to more languages and explore few-shot learning approaches",
      whatILearned: [
        "Advanced transformer architectures and attention mechanisms",
        "Cross-lingual transfer learning techniques",
        "Model optimization and deployment strategies",
      ],
    },
    {
      id: "ecommerce-analytics",
      title: "E-Commerce Analytics Platform",
      category: "fullstack",
      description:
        "Full-stack web application with real-time analytics dashboard, user authentication, and AI-powered product recommendations.",
      image: "/src/assets/images/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "TypeScript", "D3.js"],
      github: "https://github.com/yourusername/ecommerce-analytics",
      featured: false,
      type: "project",
      course: "Web Development (BSc)",
      role: "Full Stack Developer",
      paperAvailable: false,
      snippet:
        "Full-stack web application with real-time analytics dashboard, user authentication, and AI-powered product recommendations.",
      motivation:
        "To create a comprehensive analytics platform for e-commerce businesses to track and optimize their performance.",
      scope:
        "Developed a full-stack application with real-time analytics, user authentication, and AI-powered recommendations.",
      keyContributions: [
        "Implemented real-time data visualization using D3.js",
        "Built secure user authentication system",
        "Developed AI-powered product recommendation engine",
      ],
      technologies: "React, Node.js, MongoDB, TypeScript, D3.js, AWS, Redis",
      outcome: "Successfully deployed and serving 5+ e-commerce clients",
      futureWork:
        "Add more advanced analytics features and machine learning capabilities",
      whatILearned: [
        "Real-time data processing and visualization",
        "Secure authentication and authorization",
        "Scalable architecture design",
      ],
    },
    {
      id: "stock-prediction",
      title: "Stock Price Prediction Model",
      category: "data-science",
      description:
        "LSTM-based model for predicting stock prices with 87% accuracy. Includes data preprocessing pipeline and interactive visualization.",
      image: "/src/assets/images/stock.jpg",
      tags: ["LSTM", "Pandas", "Scikit-learn", "Plotly", "Python"],
      github: "https://github.com/yourusername/stock-prediction",
      featured: false,
      type: "project",
      course: "Machine Learning (MSc)",
      role: "Data Scientist",
      paperAvailable: false,
      snippet:
        "LSTM-based model for predicting stock prices with 87% accuracy. Includes data preprocessing pipeline and interactive visualization.",
      motivation:
        "To develop an accurate and interpretable model for stock price prediction using deep learning techniques.",
      scope:
        "Built and evaluated an LSTM-based model for stock price prediction with comprehensive data preprocessing.",
      keyContributions: [
        "Implemented custom LSTM architecture for time series prediction",
        "Developed robust data preprocessing pipeline",
        "Created interactive visualization dashboard",
      ],
      technologies: "Python, PyTorch, Pandas, Scikit-learn, Plotly, AWS",
      outcome: "Achieved 87% prediction accuracy on test data",
      futureWork: "Incorporate sentiment analysis from news and social media",
      whatILearned: [
        "Time series analysis and prediction",
        "Deep learning for financial data",
        "Data visualization and interpretation",
      ],
    },
    {
      id: "medical-cv",
      title: "Computer Vision for Medical Imaging",
      category: "ai-ml",
      description:
        "CNN model for detecting pneumonia in chest X-rays with 96% accuracy. Deployed as a web service for healthcare professionals.",
      image: "/src/assets/images/medical.jpg",
      tags: ["PyTorch", "OpenCV", "Medical AI", "Flask", "Docker"],
      github: "https://github.com/yourusername/medical-cv",
      featured: true,
      type: "project",
      course: "Computer Vision (MSc)",
      role: "AI Engineer",
      paperAvailable: false,
      snippet:
        "CNN model for detecting pneumonia in chest X-rays with 96% accuracy. Deployed as a web service for healthcare professionals.",
      motivation:
        "To assist healthcare professionals in early detection of pneumonia using deep learning.",
      scope:
        "Developed and deployed a CNN-based model for pneumonia detection in chest X-rays.",
      keyContributions: [
        "Implemented custom CNN architecture for medical imaging",
        "Achieved 96% accuracy in pneumonia detection",
        "Deployed model as a web service using Flask and Docker",
      ],
      technologies: "PyTorch, OpenCV, Flask, Docker, AWS, DICOM",
      outcome: "Successfully deployed in 3 hospitals for pilot testing",
      futureWork:
        "Extend to other respiratory conditions and improve explainability",
      whatILearned: [
        "Medical image processing and analysis",
        "Model deployment in healthcare settings",
        "Ethical considerations in medical AI",
      ],
    },
    {
      id: "realtime-chat",
      title: "Real-time Chat Application",
      category: "fullstack",
      description:
        "Scalable real-time chat application with WebSockets, user authentication, and message encryption.",
      image: "/src/assets/images/chat.jpg",
      tags: ["Socket.io", "React", "Express", "Redis", "JWT"],
      github: "https://github.com/yourusername/realtime-chat",
      featured: false,
      type: "project",
      course: "Web Development (BSc)",
      role: "Full Stack Developer",
      paperAvailable: false,
      snippet:
        "Scalable real-time chat application with WebSockets, user authentication, and message encryption.",
      motivation:
        "To create a secure and scalable real-time chat application with modern web technologies.",
      scope:
        "Developed a full-stack chat application with real-time messaging capabilities.",
      keyContributions: [
        "Implemented WebSocket-based real-time messaging",
        "Built secure user authentication with JWT",
        "Added end-to-end message encryption",
      ],
      technologies: "React, Node.js, Socket.io, Redis, JWT, AWS",
      outcome: "Successfully deployed and serving 10,000+ users",
      futureWork: "Add video chat and file sharing capabilities",
      whatILearned: [
        "Real-time communication protocols",
        "WebSocket implementation",
        "Secure message encryption",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300">
              <Rocket className="w-4 h-4 mr-2" />
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
          >
            My Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From AI research to full-stack applications, explore my journey of
            building innovative solutions that bridge theory and practice.
          </motion.p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
              }`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}

                    {project.paper && (
                      <motion.a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Paper
                      </motion.a>
                    )}

                    <motion.button
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      More Insights
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my complete portfolio of projects, contributions to
              open-source, and ongoing experiments in AI/ML and full-stack
              development.
            </p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject!}
      />
    </section>
  );
};

export default ProjectsSection;
