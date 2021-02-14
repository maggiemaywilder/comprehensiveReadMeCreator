// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseUrl = renderLicenseLink(license);
  if(license === 'none') {
    return "";
  } else {
    const newLi = `${license.split('-').join('%20')}`
    return `[![License](https://img.shields.io/badge/license-${newLi}-blueviolet.svg)](${licenseUrl})`;
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseArr = [{
    name: 'Apache-2.0',
    link: 'http://www.apache.org/licenses/LICENSE-2.0.html'
  },
  {
    name: 'BSD-3-Clause',
    link: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    name: 'BSD-2-Clause',
    link: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
    name: 'GPL-3.0',
    link: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  },
  {
    name: 'LGPL-3.0',
    link: 'https://opensource.org/licenses/LGPL-3.0'
  },
  {
    name: 'MIT',
    link: 'https://opensource.org/licenses/MIT'
  },
  {
    name: 'MPL-2.0',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    name: 'CDDL-1.0',
    link: 'https://opensource.org/licenses/CDDL-1.0'
  },
  {
    name: 'EPL-2.0',
    link: 'https://opensource.org/licenses/EPL-2.0'
  }];
  if(license === 'none') {
    return "";
  } else {
    let licenseUrl = licenseArr.find(e => e.name === license);
    return licenseUrl.link;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseUrl = renderLicenseLink(license);
  if(license === 'none') {
    return "";
  } else {
    const licenseSection = `Notice: This application is covered under the ${license} license.\n\n [License: ${license}](${licenseUrl})`;
    return licenseSection;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const liSection = renderLicenseSection(data.license);

  const content = `# ${data.projectTitle}\n
${badge}\n\n
## Table of Contents\n
[Project Description](#description)\n 
[Installation Guide](#installation-guide)\n
[Usage Iinformation](#usage-information)\n
[Contribution Guidelines](#contribution-guidelines)\n
[Testing Instructions](#testing-instructions)\n
[License Information](#license-information)\n
[Questions](#questions)\n\n
## Description\n
${data.description}\n
## Installation Guide\n
${data.dependencies}\n
## Usage Information\n
${data.usageInfo}\n
## Contribution Guidelines\n
${data.contribution}\n
## Testing Instructions\n
${data.testInstructions}\n
## License Information\n
${liSection}\n
## Questions\n
If you have any questions, please feel free to reach out via one of the following avenues.\n
#### Contact info\n
[My GitHub](https://github.com/${data.username})\n
[My email](mailto:${data.emailAddress})`;
  return content;
}

module.exports = generateMarkdown;
