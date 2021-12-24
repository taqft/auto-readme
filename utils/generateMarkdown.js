// Copyright(c) 2021 Othneil Drew

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function generateMarkdown(data) {
  return `<div id="top"></div>
<!--
*** Credit to Othneil Drew's Best-README-Template as the base
*** for this template and concept/layout. The following is an iteration
*** from that version, and contains similar structure, with some improvements
*** to allow for easy automation of the README generation process.
*** Check it out: https://github.com/othneildrew/Best-README-Template/
*** NOTE: This template assumes there is a short project demo named "demo.gif" and a "logo.png"
*** saved in the ./assets/images/ folder within your repositiory. Adjust these as needed.
-->

<!-- PROJECT SHIELDS -->
<!--
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/${data.github}/${data.title}">
    <img src="assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">${data.title}</h3>

  <p align="center">
    ${data.description}
    <br />
    <a href="https://${data.github}.github.io/${data.title}/">View Demo</a>
    ·
    <a href="https://github.com/${data.github}/${data.title}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${data.github}/${data.title}/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)
* [Demo](#demo)

<!-- DESCRIPTION -->
## Description

* ${data.description}

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->
## Installation

* ${data.installation}

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->
## Usage

${data.usage}

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

* This application is covered under the ${data.license} license.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are greatly appreciated.

Guidelines: ${data.contributing}

If you have a suggestion that would make this better, please fork the repo and create a pull request.
You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star if you liked it!

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TESTING -->
## Testing

Simple testing instructions:

* ${data.testing}

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- QUESTIONS -->
## Questions

* Have questions?
* Reach out to me: 
* https://github.com/${data.github}/
* [${data.email}](mailto:${data.email} "My contact Email")

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT EXAMPLE -->
## Demo

[![Product Name Screen Shot][product-screenshot]](https://${data.github}.github.io/${data.title}/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/${data.github}/${data.title}.svg?style=for-the-badge
[contributors-url]: https://github.com/${data.github}/${data.title}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${data.github}/${data.title}.svg?style=for-the-badge
[forks-url]: https://github.com/${data.github}/${data.title}/network/members
[stars-shield]: https://img.shields.io/github/stars/${data.github}/${data.title}.svg?style=for-the-badge
[stars-url]: https://github.com/${data.github}/${data.title}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${data.github}/${data.title}.svg?style=for-the-badge
[issues-url]: https://github.com/${data.github}/${data.title}/issues
[license-shield]: https://img.shields.io/github/license/${data.github}/${data.title}.svg?style=for-the-badge&cacheSeconds=3600
[license-url]: https://github.com/${data.github}/${data.title}/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: assets/images/demo.gif
[portfolio-shield]: https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white
`;
}

module.exports = generateMarkdown;
