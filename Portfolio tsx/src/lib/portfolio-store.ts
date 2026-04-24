import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    github: string;
    demo: string;
}

export interface ExperienceEntry {
    id: string;
    period: string;
    title: string;
    company: string;
    points: string[];
    type: "work" | "education";
}

export interface SkillCategory {
    id: string;
    name: string;
    items: string[];
}

export interface PortfolioData {
    // Hero
    heroName: string;
    heroRole: string;
    heroTagline: string;
    heroSubtag: string;
    heroStatus: string;
    heroGithub: string;
    heroLinkedin: string;

    // About
    aboutTitle: string;
    aboutSubtitle: string;
    aboutTags: string[];
    aboutBio: string[];
    aboutProfileImage: string;

    // Projects
    projects: Project[];

    // Experience
    experienceEntries: ExperienceEntry[];

    // Skills
    skillCategories: SkillCategory[];
    skillMastery: string;
    skillProjects: string;
    skillCertifications: string;

    // Contact
    contactEmail: string;
    contactHeadline: string;
    contactSubtext: string;
}

export const defaultData: PortfolioData = {
    heroName: "Vaidnyani Thakare",
    heroRole: "Data Science Engineer | AI Engineer",
    heroTagline: "I turn raw data into decisions.",
    heroSubtag: "Building intelligence, one model at a time.",
    heroStatus: "Available for new deployment",
    heroGithub: "https://github.com/Vaidnyani19",
    heroLinkedin: "https://www.linkedin.com/in/vaidnyani-thakare-943a99359",

    aboutTitle: "DS / AI Engineer",
    aboutSubtitle: "B.Tech Chemical Engineering",
    aboutTags: ["Machine Learning", "Deep Learning", "Big Data", "Flask + APIs", "ChemE + AI"],
    aboutBio: [
        "I'm a B.Tech Chemical Engineering student at MIT Academy of Engineering, Pune, with a deep passion for Data Science, AI, and Machine Learning. I bridge the gap between chemical process knowledge and cutting-edge AI to solve complex engineering problems.",
        "I've applied ML to cybersecurity threat detection, built generative AI models for music, and worked on process optimisation projects. Currently exploring Big Data pipelines and neural network architectures for real-world deployment.",
    ],
    aboutProfileImage: "/profile.png",

    projects: [
        {
            id: "1",
            title: "Cyberthreat Detection System",
            description: "ML-powered real-time network threat detection using ensemble models. Achieved 96.4% accuracy on NSL-KDD dataset with XGBoost + Random Forest pipeline.",
            tags: ["Python", "Scikit-learn", "XGBoost", "Flask"],
            category: "ML",
            github: "#",
            demo: "#",
        },
        {
            id: "2",
            title: "AI Music Generation",
            description: "LSTM-based melody generation model trained on MIDI datasets. Generates coherent musical sequences with configurable tempo and key signatures.",
            tags: ["Python", "TensorFlow", "LSTM", "MIDI"],
            category: "GenAI",
            github: "#",
            demo: "#",
        },
        {
            id: "3",
            title: "Chemical Process Optimisation",
            description: "Applied ML regression models to optimise distillation column efficiency. Reduced energy consumption by 12% using gradient boosting on Aspen HYSYS simulation data.",
            tags: ["Python", "Scikit-learn", "Pandas", "Aspen HYSYS"],
            category: "ChemE + AI",
            github: "#",
            demo: "#",
        },
    ],

    experienceEntries: [
        {
            id: "1",
            period: "Jun 2024 — Aug 2024",
            title: "Web Development Intern",
            company: "Swaraj Asia",
            points: [
                "Designed and customised WordPress websites for client projects.",
                "Collaborated on UI/UX improvements and responsive design implementation.",
                "Managed end-to-end project delivery from brief to deployment.",
            ],
            type: "work",
        },
        {
            id: "2",
            period: "2022 — 2026",
            title: "B.Tech Chemical Engineering",
            company: "MIT Academy of Engineering, Pune",
            points: [
                "CGPA: 7.78 | Core Chemical Engineering + AI/ML specialisation.",
                "E-Cell Member: Participated in entrepreneurship events and startup pitches.",
                "Firodiya Karandak: Performed in inter-college dance competition.",
                "Completed 5+ certifications in Python, Data Analytics, Cybersecurity.",
            ],
            type: "education",
        },
    ],

    skillCategories: [
        { id: "1", name: "ML / AI", items: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "CNN · LSTM · GAN"] },
        { id: "2", name: "DATA & VIZ", items: ["NumPy · Pandas", "Matplotlib · Seaborn", "Power BI · Tableau", "SQL", "Apache Spark · Hadoop"] },
        { id: "3", name: "DEPLOYMENT", items: ["Flask · REST APIs", "Render", "Git · GitHub", "Jupyter · Colab", "Report Automation"] },
        { id: "4", name: "DOMAIN", items: ["Aspen HYSYS", "Process Simulation", "Mass Transfer", "Thermodynamics", "MATLAB (basic)"] },
    ],
    skillMastery: "Intermediate — Advanced",
    skillProjects: "3+",
    skillCertifications: "5+",

    contactEmail: "vaidnyanithakare19@gmail.com",
    contactHeadline: "Let's Build Something Intelligent",
    contactSubtext: "I'm actively looking for opportunities in Data Science, ML Engineering, and ChemE+AI applications. Reach out and let's connect.",
};

interface PortfolioStore extends PortfolioData {
    update: (patch: Partial<PortfolioData>) => void;
    reset: () => void;
}

export const usePortfolioStore = create<PortfolioStore>()(
    persist(
        (set) => ({
            ...defaultData,
            update: (patch) => set((state) => ({ ...state, ...patch })),
            reset: () => set({ ...defaultData }),
        }),
        { name: "nebula-portfolio-data" }
    )
);
