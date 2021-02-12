// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none') {
    return "";
  } else {
    return `![License](https://img.shields.io/static/v1?label=license&message=${license}&color=blueviolet)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseObj = {
    'Apache-2.0': 'http://www.apache.org/licenses/LICENSE-2.0.html','BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'LGPL-3.0': 'https://opensource.org/licenses/LGPL-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'MPL-2.0': 'https://opensource.org/licenses/MPL-2.0',
    'CDDL-1.0': 'https://opensource.org/licenses/CDDL-1.0',
    'EPL-2.0': 'https://opensource.org/licenses/EPL-2.0',
  };
  if(license === 'none') {
    return "";
  } else {
    const url = `licenseObj.${license}`
    return url;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return "";
  } else {
    renderLicenseLink(license);
    return `Notice: This application is covered under the ${license} license.\n\n [License: ${url}](${url})`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // title, licensebadge, ToC, Description, Installation, usage, contributing, tests, license section, questions
  // ToC lines: [section name](#section name)\n
  // is the \n needed? 
  // ** backticks around the whole thing **
}

module.exports = generateMarkdown;
