// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ projTitle, projDesc, installInstruct, usageInfo, projContrib, testDirects, Selection, userGhub, userEmail }) =>

    `# ${projTitle}
   
       //*Badge
   
   A brief description of your Project:
   
   ## ${projDesc}
   
   Installation Instructions/Dependencies:
   
    ## ${installInstruct}
   
   Usage Info:
   
    ## ${usageInfo}
   
   How to run the program:
   
    ### ${testDirects}
   
   ## License:
   
    ### This project is licensed under the ${Selection} License
   
   ## Acknowledgments
   
   ### ${projContrib}

   ## Questions

     #### My GitHub username is: ${userGhub}

     #### Please contact me at : ${userEmail}
   
   `
  return `# ${data.title}       `

;


export default generateMarkdown;



