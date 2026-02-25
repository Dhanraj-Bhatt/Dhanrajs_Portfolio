# Dhanraj's Portfolio - Gemini Context

This directory contains the source code for Dhanraj Bhatt's professional portfolio website, showcasing projects in Games, Applications, and IoT development.

## Project Overview

*   **Type:** Static Portfolio Website
*   **Main Technologies:** HTML5, CSS3, JavaScript
*   **Key Libraries:**
    *   **ScrollReveal:** Used for scroll-based reveal animations.
    *   **Remix Icons:** Icon library used for UI elements.
*   **Architecture:**
    *   `index.html`: The main entry point, featuring a profile header, project filters (tabs), and contact information.
    *   `assets/`: Contains global resources including CSS styles, JavaScript logic, images, and resume PDF.
    *   `Project-pages/`: Organized sub-directories containing detailed project showcases with their own HTML, CSS, and JS.

## Key Files and Directories

*   `index.html`: The landing page of the portfolio, featuring organized skill sections including Game Development, Web Development, Backend, and Other.
*   `assets/css/styles.css`: Main stylesheet defining the visual design and themes.
*   `assets/js/main.js`: Core logic for tab switching, theme toggling (dark/light), and ScrollReveal initialization.
*   `assets/img/`: Profile pictures and icons.
*   `assets/pdf/Dhanraj's Resume.pdf`: The downloadable resume.
*   `Project-pages/`: Contains specific project demonstrations (e.g., `01_Hand_Gesture`, `02_IOT_Video_Player`).

## Development and Usage

### Local Development
Since this is a static website, no build step or server is strictly required. To view the site locally:
1.  Open `index.html` in any modern web browser.
2.  Alternatively, use a "Live Server" extension (e.g., in VS Code) for real-time updates while editing.

### Conventions
*   **Themes:** Supports both Dark and Light modes. Theme preference is persisted in `localStorage`.
*   **Styling:** Uses a custom CSS architecture with variables for colors and layout.
*   **Project Pages:** Each project in `Project-pages/` follows a consistent structure with its own `style.css` and `javascript.js`, allowing for project-specific customization while linking back to the main portfolio.

### Scripts
*   Interactivity is primarily handled in `assets/js/main.js` for the main site and local `javascript.js` files for project detail pages.
*   Scroll animations are configured via the `ScrollReveal` object.
