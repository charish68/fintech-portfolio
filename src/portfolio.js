/* Change this fileyane file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Nagalla Venkata Charish Yadav",
  title: "Hi all, I'm Charish 👋",
  subTitle: emoji(
    "An Artificial Intelligence graduate 🤖 from Amrita Vishwa Vidyapeetham with strong interest in Machine Learning, Data Science, and Full Stack Development. I enjoy building intelligent systems and solving real-world problems using AI."
  ),
  resumeLink: "", // add Google Drive resume link later
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/charish68",
  linkedin: "",
  gmail: "charish7968@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "ARTIFICIAL INTELLIGENCE & SOFTWARE DEVELOPMENT ENTHUSIAST",
  skills: [
    emoji("⚡ Build Machine Learning & AI models for real-world applications"),
    emoji("⚡ Data Analysis & Visualization using Python"),
    emoji("⚡ Develop Web Applications using React & JavaScript"),
    emoji("⚡ Work with APIs, Databases, and Deployment tools")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Data Science", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Amrita Vishwa Vidyapeetham",
      logo: require("./assets/images/education.png"),
      subHeader: "Bachelor's Degree in Artificial Intelligence",
      duration: "2021 – 2025",
      desc: "Focused on Artificial Intelligence, Machine Learning, Data Science, and Software Engineering.",
      descBullets: [
        "Machine Learning & Deep Learning",
        "Data Structures & Algorithms",
        "Python Programming & Data Analysis"
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Artificial Intelligence / ML", progressPercentage: "75%" },
    { Stack: "Python & Data Science", progressPercentage: "80%" },
    { Stack: "Web Development", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work Experience (Fresher Friendly)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Academic & Personal Projects",
      companylogo: require("./assets/images/work.png"),
      date: "2023 – 2025",
      desc: "Worked on AI, ML, and Data Science projects including prediction systems, signal processing, and web-based applications.",
      descBullets: [
        "Developed ML models using Python",
        "Performed data preprocessing & analysis",
        "Built dashboards & web apps"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "ACADEMIC & PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/project.png"),
      projectName: "Bank Stock Price Prediction",
      projectDesc:
        "Machine learning based system to predict bank stock closing prices using historical data.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/charish68"
        }
      ]
    },
    {
      image: require("./assets/images/project.png"),
      projectName: "EMG Controlled Prosthetic Arm",
      projectDesc:
        "Gesture recognition system using EMG signals, ML, and embedded systems for prosthetic control.",
      footerLink: [
        {
          name: "Project Details",
          url: ""
        }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Academic projects, certifications and technical accomplishments",
  achievementsCards: [],
  display: false
};

// Blogs Section
const blogSection = {
  display: false
};

// Talks Section
const talkSection = {
  display: false
};

// Podcast Section
const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in AI / ML or Software projects? Let’s connect!",
  number: "+91-9392688319",
  email_address: "charish7968@gmail.com"
};

// Twitter
const twitterDetails = {
  display: false
};

const isHireable = true;

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
