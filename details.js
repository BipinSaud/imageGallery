// Interactive Photo Gallery Information
const projectTitle = "Interactive Photo Gallery";
const teamMembers = [
  "Aayush Man Singh",
  "Bipin Saud",
  "Medha Upadhayay",
  "Sumit Sainju",
];
const githubRepo = "https://github.com/BipinSaud/imageGallery";
const hostedUrl = "https://interactive-image-gallery-web.netlify.app/";

// Team Roles
let roles = {
  "Aayush Man Singh": "Testing & Deployment",
  "Bipin Saud": "Project Lead,Functionality(javascript)",
  "Medha Upadhayay": "Styling(Design/CSS)",
  "Sumit Sainju": "Structuring(HTML/Markup)",
};

//Project Details Display Logic
let displayProjectDetails = () => {
  console.log(`Project: ${projectTitle}`);
  console.log(`GitHub Repo: ${githubRepo}`);
  console.log(`Hosted URL: ${hostedUrl}`);
  console.log("Team Members and Roles:");
  teamMembers.forEach((member) => {
    console.log(`- ${member}: ${roles[member]}`);
  });
};

// Display the project details
displayProjectDetails();
