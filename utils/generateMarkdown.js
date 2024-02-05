// function to generate markdown for README
function generateMarkdown(data) {

  const {header, description, installation, usage, license, contribution, tests, github, email} = data;

  const tableOfContents = `
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  `;

  return `

  # ${header}

  ## Description
  ${description}

  ${tableOfContents}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This application is covered under the ${license} license.

  ## Contributing
  ${contribution}

  ## Tests
  ${tests}

  ## Video Overview
  [![Video](./assets/readme-gen-screenshot.png)](./assets/screencastify-video.mp4)

  ## Questions
  For questions about this project, please reach out to [${github}](https://github.com/${github}) or contact [${email}](mailto:${email}).
`;
}

module.exports = generateMarkdown;
