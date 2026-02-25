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
*   Scroll animations are configured via the @google/gemini-cli `ScrollReveal` object.

## Progress and Optimizations (February 25, 2026)

### Image Optimization
*   **Action:** Converted all project images (PNG/JPG) to **WebP** format using ImageMagick (`magick`).
*   **Details:**
    *   `favicon.png` was kept in original format for compatibility.
    *   All references in `index.html` and project-specific HTML/CSS files were updated from `.png`/`.jpg` to `.webp`.
    *   Original image files were deleted after verification.
*   **Result:** Significant file size reductions (up to 95% for some assets like `Moksh_Matrix_logo2.webp`).

### Video Optimization
*   **Action:** Optimized all MP4 videos using **FFmpeg**.
*   **Tools Path:** `D:\Dhanraj\Unity_Prolearner\Tools\ffmpeg-2026-02-23-git-7b15039cdb-full_build\bin\ffmpeg.exe`
*   **Settings:** Used `libx264` codec, `CRF 24`, `preset fast`, and `movflags +faststart` for web compatibility and fast loading.
*   **Details:** Overwrote original `.mp4` files to maintain existing HTML/CSS references without modification.
*   **Result:** Reduced total video payload while maintaining high visual quality.

### Next Steps
*   Monitor performance improvements in the live portfolio.
*   Consider further optimizations like lazy-loading for videos or a CDN for heavy assets if needed.
