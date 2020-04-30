import {
  faDatabase,
  faCubes,
  faDharmachakra,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAws,
  faAngular,
  faJava,
  faDocker,
  faNode,
  faJenkins,
  faLinkedin,
  faLinux,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const PROFILE_DATA = {
  fullName: "Nadav Avisrur",
  firstName: "Nadav",
  lastName: "Avisrur",
  title: "Software Engineer",
  phone: "0524232646",
  email: "nadavavisrur@gmail.com",
  summary:
    "I am an experienced software engineer with a passion for coding, solving problems and always looking for new challenges. I consider myself a highly motivated team player who learns fast and is driven by success. While I  was studying in a night school program and was able to be involved in 3 IOT based innovative projects and I believe that I made a considerable contribution to their success at the time.",
  socials: [
    {
      id: 1,
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/nadav-avisrur/",
    },
    {
      id: 2,
      icon: faGithub,
      url: "https://github.com/Avisrur/",
    },
  ],
  skills: [
    {
      id: 1,
      icon: faJava,
      skill: "Java",
    },
    {
      id: 2,
      icon: faReact,
      skill: "ReactJS",
    },
    {
      id: 3,
      icon: faAngular,
      skill: "Angular2",
    },
    {
      id: 4,
      icon: faNode,
      skill: "NodeJS",
    },
    {
      id: 5,
      icon: faAws,
      skill: "AWS",
    },
    {
      id: 6,
      icon: faDocker,
      skill: "Docker",
    },
    {
      id: 7,
      icon: faDharmachakra,
      skill: "Kubernetes",
    },
    {
      id: 8,
      icon: faDatabase,
      skill: "MongoDB",
    },
    {
      id: 9,
      icon: faLinux,
      skill: "Linux",
    },
    {
      id: 10,
      icon: faJenkins,
      skill: "Jenkins",
    },
    {
      id: 11,
      icon: faCubes,
      skill: "Microservices",
    },
  ],
};

export default PROFILE_DATA;
