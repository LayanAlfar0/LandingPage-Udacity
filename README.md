# Landing Page Navigation

## Project Description

This project implements a dynamic single-page application with a navigation menu that scrolls smoothly to different sections of the page. The navigation menu is generated based on the sections present in the HTML, and the active section is highlighted as you scroll through the page. The project uses basic HTML, CSS, and JavaScript to achieve a user-friendly experience.

## Features

- Dynamically builds a navigation menu based on page sections.
- Smoothly scrolls to sections when navigation links are clicked.
- Highlights the currently active section in the viewport.
- Utilizes modern JavaScript (ES6) for clean and efficient code.

## Usage

1. **Clone the repository**:

   git clone https://github.com/LayanAlfar0/LandingPage-Udacity.git
2. Navigate to the project directory:
 cd landing-page-navigation
3. Open index.html in your browser to view the landing page.

## Dependencies
HTML: Provides the structure of the page.
CSS: Styles the page and provides layout and design.
JavaScript: Handles dynamic behavior, smooth scrolling, and active section highlighting.

## Files
index.html: The main HTML file for the landing page.
css/styles.css: The stylesheet for the project.
js/app.js: The JavaScript file that contains the logic for navigation and scrolling.

## Code Example
Here's a snippet of the JavaScript code that handles smooth scrolling:
document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar__menu .menu__link');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    function makeActive() {
        let currentIndex = -1;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentIndex = index;
            }
        });
        sections.forEach(section => section.classList.remove('your-active-class'));
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentIndex !== -1) {
            sections[currentIndex].classList.add('your-active-class');
            navLinks[currentIndex].classList.add('active');
        }
    }

    navList.addEventListener('click', smoothScroll);
    window.addEventListener('scroll', makeActive);
    makeActive();
});
## Contributing
If you want to contribute to this project, please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.