const generateMarkdown = ({ projTitle, projDesc, installInstruct, usageInfo, projContrib, testDirects, userLicense, userAk, userGHub, userEmail }) =>


`# ${projTitle}
   
![${userLicense}](https://raster.shields.io/badge/${userLicense}-green)

## A brief description of your Project:

   #### ${projDesc}

## Installation Instructions/Dependencies:

   #### ${installInstruct}

## Usage Info:

   #### ${usageInfo}

## How to run the program:

   #### ${testDirects}

## License:

   #### This project is licensed under ${userLicense}

## Contribution Guidelines:

   #### ${projContrib}

## Acknowledgments

   #### ${userAk}

## Questions?

  ##### My GitHub username is: ${userGHub}

  #### or

  ##### Please contact me at : ${userEmail}
   
   `
;

export default generateMarkdown;



