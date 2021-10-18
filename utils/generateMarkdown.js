function renderLicenseBadge(license) {
  noSpace = license.split(" ").join("%20");
  return `[![License](https://img.shields.io/badge/License-${noSpace}-blue.svg)]`;
}

function renderLicenseLink(license) {
  if (license === "BSD 3") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "APACHE 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost 1.0") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }
}

function renderLicenseSection(license) {
  let results = "";
  for (let key of license) {
    results += renderLicenseBadge(key) + renderLicenseLink(key) + " ";
  }
  return results;
}

function generateMarkdown(data) {
  return `# ${data.title}
  

## Table of Contents
1. [ Description. ](#desc)
2. [ Installation. ](#inst)
3. [ Usage tips. ](#usage)
4. [ Contributing. ](#contr)
5. [ Tests. ](#tests)
6. [ Questions. ](#quest)

## Licenses

${renderLicenseSection(data.license)}

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
