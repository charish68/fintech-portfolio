/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting Section */
const greeting = {
  username: "Nagalla Venkata Charish Yadav",
  title: "Hi all, I'm Charish 👋",
  subTitle: emoji(
    "AI & Machine Learning Engineer specializing in Deep Learning, Reinforcement Learning, Biomedical AI, and Full-Stack AI systems. Passionate about building intelligent systems that create real-world impact."
  ),
  resumeLink: "/NV_Charish_Yadav_Elite_Resume.pdf",
  displayGreeting: true
};

/* Social Media */
const socialMediaLinks = {
  github: "https://github.com/nvcharishyadav",
  linkedin: "https://linkedin.com/in/nvcharishyadav",
  gmail: "charish7968@gmail.com",
  display: true
};

/* Skills Section */
const skillsSection = {
  title: "What I do",
  subTitle: "ARTIFICIAL INTELLIGENCE • MACHINE LEARNING • FULL-STACK AI",
  skills: [
    emoji("⚡ Build Machine Learning & Deep Learning models"),
    emoji("⚡ Reinforcement Learning using Q-Learning, DQN & Policy Gradients"),
    emoji("⚡ Biomedical Signal Processing (EMG, ECG)"),
    emoji("⚡ Full-stack AI apps using React, Flask & Streamlit"),
    emoji("⚡ Data analysis, visualization & model deployment")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Scikit-Learn", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "OpenCV", fontAwesomeClassname: "fas fa-eye" },
    { skillName: "Reinforcement Learning", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-server" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

/* Education Section (NO IMAGES – VERCEL SAFE) */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Amrita Vishwa Vidyapeetham, Coimbatore",
      subHeader: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2022 – 2026",
      desc:
        "Ranked in the top 15% of the program. Active member of the Amrita AI & Robotics Club with research focus on biomedical signal processing and ethical AI.",
      descBullets: [
        "Core: Deep Learning, Computer Vision, Reinforcement Learning, NLP",
        "Electives: Biomedical Signal Processing, Ethical AI",
        "Student Developer – AI Innovation Club"
      ]
    },
    {
      schoolName: "Narayana Junior College, Vijayawada",
      subHeader: "Intermediate (MPC)",
      duration: "2020 – 2022",
      desc: "Percentage: 77%"
    },
    {
      schoolName: "Dr. KKR’s Gowtham High School, Vijayawada",
      subHeader: "SSC",
      duration: "2020",
      desc: "GPA: 10/10"
    }
  ]
};

/* Tech Stack Proficiency */
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Artificial Intelligence / ML", progressPercentage: "85%" },
    { Stack: "Python & Data Science", progressPercentage: "90%" },
    { Stack: "Reinforcement Learning", progressPercentage: "80%" },
    { Stack: "Full Stack Development", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI / Machine Learning Intern",
      company: "Labmentix",
      date: "July 2025 – Present",
      desc: "Designing predictive AI models for biomedical signal analysis and diagnostic automation.",
      descBullets: [
        "Built ML pipelines using TensorFlow & Scikit-Learn",
        "Worked on EMG anomaly detection systems",
        "Deployed ML prototypes on ESP32 microcontrollers"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Qveto Technologies",
      date: "June 2025 – September 2025",
      desc: "Developed analytics dashboards using React.js and Flask.",
      descBullets: [
        "Improved performance by 30%",
        "Built REST APIs and frontend dashboards",
        "Collaborated using Git-based workflows"
      ]
    }
  ]
};

/* Open Source */
const openSource = {
  showGithubProfile: "true",
  display: true
};

/* Projects */
const bigProjects = {
  title: "Projects",
  subtitle: "AI • ML • REINFORCEMENT LEARNING • BIOMEDICAL SYSTEMS",
  projects: [
    {
      projectName: "EMG-Controlled Prosthetic Arm",
      projectDesc:
        "AI-driven prosthetic arm using EMG signals and ML classifiers. Achieved 90% gesture recognition accuracy and showcased at Amrita TechFest 2025."
    },
    {
      projectName: "Maze Solver using Reinforcement Learning",
      projectDesc:
        "Q-Learning based maze solver with React + Flask visualization, reducing training time by 40%."
    },
    {
      projectName: "Bank Stock Closing Price Prediction",
      projectDesc:
        "ML models with MAE < 2% for bank stock prediction, deployed with Streamlit."
    },
    {
      projectName: "Traffic Control System using RL",
      projectDesc:
        "Reinforcement Learning agent trained in OpenAI Gym to reduce traffic congestion by 35%."
    },
    {
      projectName: "Drowsiness Detection System",
      projectDesc:
        "Computer vision-based alert system using OpenCV and Dlib."
    }
  ],
  display: true
};

/* Achievements & Research */
const achievementSection = {
  title: emoji("Achievements & Research 🏆"),
  subtitle: "Hackathons, Research & Leadership",
  achievementsCards: [
    {
      title: "IEEE Research Paper (In Progress)",
      subtitle:
        "Predictive Modeling of Biomedical Signals Using CNN-LSTM architectures."
    },
    {
      title: "AI for Healthcare Hackathon Finalist",
      subtitle:
        "Finalist – NVIDIA & Amrita Innovation Hub Hackathon 2025."
    },
    {
      title: "Leadership & Mentorship",
      subtitle:
        "Team Lead for AI automation project; Mentor at Amrita AI & Robotics Club."
    }
  ],
  display: true
};

/* Blogs / Talks / Podcast (Disabled) */
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

/* Resume Section */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

/* Contact */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to AI/ML roles, research, internships, and collaborations.",
  number: "+91-9392688319",
  email_address: "charish7968@gmail.com"
};

/* Twitter */
const twitterDetails = { display: false };

const isHireable = true;

/* EXPORTS */
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
