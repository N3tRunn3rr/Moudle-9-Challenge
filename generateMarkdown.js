// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'The MIT License') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'The GPL License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return 'N/A'
  }
}
// google license badges for the options we give the user

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'N/A') {
  return ' '
  } else {
    return  '*[license](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'N/A') {
    return ' '
  } else {
    return `##license: 
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  # Table of Contents
  *[description](#description)
  *[installation](#installation)
  *[usage](#usage)
  ${renderLicenseLink(data.license)}
  *[contribution](#contribution)
  *[tests](#tests)

  ${data.title}
  ##title:

  ${data.description}
  ##description:

  ${data.installation}
  ##installation:

  ${data.usage}
  ##usage:

  ${renderLicenseSection(data.license)}


  ${data.contribution}
  ##contribution:

  ${data.tests}
  ##tests:
`;
}

module.exports = generateMarkdown;
