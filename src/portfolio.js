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
    emoji("⚡ Reinforcement Learning (Q-Learning, DQN, Policy Gradients)"),
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

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Amrita Vishwa Vidyapeetham",
      logo: require("./assets/images/education.png"),
      subHeader: "Bachelor's Degree in Artificial Intelligence",
      duration: "2021 – 2025",
      desc:
        "Focused on Artificial Intelligence, Machine Learning, Data Science, and Software Engineering.",
      descBullets: [
        "Machine Learning & Deep Learning",
        "Data Structures & Algorithms",
        "Python Programming & Data Analysis"
      ]
    }
  ]
};

/* Tech Stack */
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
      desc:
        "Designing predictive AI models for biomedical signal analysis and diagnostic automation.",
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
      desc:
        "Developed analytics dashboards using React.js and Flask.",
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
        "AI-driven prosthetic arm using EMG signals and ML classifiers. Achieved 90% gesture recognition accuracy.",
      footerLink: []
    },
    {
      projectName: "Maze Solver using Reinforcement Learning",
      projectDesc:
        "Q-Learning based maze solver with React + Flask visualization.",
      footerLink: []
    },
    {
      projectName: "Bank Stock Closing Price Prediction",
      projectDesc:
        "ML models with MAE < 2% deployed using Streamlit.",
      footerLink: []
    },
    {
      projectName: "Traffic Control System using Reinforcement Learning",
      projectDesc:
        "RL agent trained to reduce traffic congestion.",
      footerLink: []
    },
    {
      projectName: "Drowsiness Detection System",
      projectDesc:
        "Computer vision-based alert system using OpenCV and Dlib.",
      footerLink: []
    }
  ],
  display: true
};

/* Achievements */
const achievementSection = {
  title: emoji("Achievements & Research 🏆"),
  subtitle: "Hackathons, Research & Leadership",
  achievementsCards: [
    {
      title: "IEEE Research Paper (In Progress)",
      subtitle:
        "Predictive Modeling of Biomedical Signals using CNN-LSTM architectures.",
      image: null,
      footerLink: []
    },
    {
      title: "AI for Healthcare Hackathon Finalist",
      subtitle:
        "Finalist – NVIDIA & Amrita Innovation Hub Hackathon 2025.",
      image: null,
      footerLink: []
    },
    {
      title: "Leadership & Mentorship",
      subtitle:
        "Team Lead for AI automation project; Mentor at Amrita AI & Robotics Club.",
      image: null,
      footerLink: []
    }
  ],
  display: true
};

/* Blogs / Talks / Podcast */
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

/* Resume */
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
