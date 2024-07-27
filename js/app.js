/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const header = document.querySelector('.page__header');
const scrollToTopButton = document.getElementById('scroll-to-top');
let scrollTimeout;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNav() {
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.getAttribute('data-nav');
        navLink.href = `#${section.id}`;
        navLink.classList.add('menu__link');
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
}

function setActiveSection() {
    let activeSection;
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            activeSection = section;
        }
    });

    if (activeSection) {
        sections.forEach(section => section.classList.remove('your-active-class'));
        activeSection.classList.add('your-active-class');

        const activeLink = document.querySelector(`a[href="#${activeSection.id}"]`);
        document.querySelectorAll('.menu__link').forEach(link => link.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
    }
}

function hideNavBar() {
    header.classList.add('hidden');
}

function showNavBar() {
    header.classList.remove('hidden');
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(hideNavBar, 2000);
}

function toggleScrollToTopButton() {
    if (window.scrollY > window.innerHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

function smoothScroll(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSection(event) {
    const button = event.target;
    const sectionContent = button.nextElementSibling;
    if (sectionContent.style.display === 'none') {
        sectionContent.style.display = 'block';
        button.textContent = 'Collapse Section';
    } else {
        sectionContent.style.display = 'none';
        button.textContent = 'Expand Section';
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the navigation menu
buildNav();

// Add event listeners
document.addEventListener('scroll', () => {
    setActiveSection();
    showNavBar();
    toggleScrollToTopButton();
});

navList.addEventListener('click', smoothScroll);

scrollToTopButton.addEventListener('click', scrollToTop);

sections.forEach(section => {
    const button = section.querySelector('.toggle-section');
    button.addEventListener('click', toggleSection);
});

/**
 * End Main Functions
 */

