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
function generateMarkdown(data) {
  return `# ${data.title}

table of contents
sections entitled Description, Table of Contents, Installation, 
Usage, License, Contributing, Tests, and Questions
Table of Contents
1. [ Description. ](#desc)
2. [ Installation. ](#inst)
3. [ Usage tips. ](#usage)
4. [ Contributing. ](#contr)
5. [ Tests. ](#tests)
6. [ Questions. ](#quest)

${data.license}

<a name="desc"></a>
## 1. Description

${data.description}

<a name="inst"></a>
## 2. Installation

${data.installation}

<a name="usage"></a>
## 3. Usage tips

${data.usage}

<a name="contr"></a>
## 4. Contributing

${data.contributing}

<a name="tests"></a>
## 5. Tests

${data.tests}

<a name="quest"></a>
## 6. Questions
for any other questions about this project contact me via..

Github: https://github.com/${data.githubUser}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
