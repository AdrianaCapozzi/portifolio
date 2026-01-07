# Copilot Instructions for Portfolio Project

## Project Overview
This is a static personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools are used. The site is hosted on GitHub Pages with a custom domain (`www.adrianacapozzidb.com`).

## Architecture
- **index.html**: Main structure with semantic sections (hero, formacao, projetos, experiencia, etc.)
- **style.css**: Custom styles with red color palette (#c4170c), responsive design, and dark mode
- **script.js**: Interactive features including carousels, popups, and theme toggle
- **img/**: Custom retro gamer icons used throughout (star.png for titles, heart.png for lists)

## Key Conventions
- **Language**: All content and comments in Portuguese (pt-BR)
- **Color Scheme**: Primary red (#c4170c) for backgrounds and accents, white text on red sections
- **Icons**: Custom PNG icons from `img/` folder, positioned with CSS (e.g., `img/star.png` in h2 titles)
- **Lists**: Use `heart-list` class for bullet points with heart icons via CSS pseudo-elements
- **Sections**: Red banner sections use `faixa-vermelha` class
- **Navigation**: Fixed navbar with smooth scroll to section IDs

## Patterns to Follow
- **Titles**: `<h2><img src="img/star.png" alt="Icon" class="icon icon-title">Title</h2>`
- **Inline Icons**: `<img src="img/icon.png" alt="Alt" class="icon-text"> Text`
- **Carousels**: Manual navigation with left/right arrow buttons, display:block/none for slides
- **Popups**: Overlay with flex centering, shown/hidden via display property
- **Hover Effects**: Scale transform (1.1) with CSS transitions
- **Accessibility**: ARIA labels on interactive elements, alt text on images

## Development Workflow
- Edit HTML/CSS/JS directly in the repository
- Test locally by opening `index.html` in browser
- Commit changes and push to deploy via GitHub Pages
- No build step required

## Adding Content
- New sections: Add `<section id="new-section" class="faixa-vermelha">` with corresponding navbar link
- Projects: Use `<article class="projeto">` structure with period, description, and `heart-list` for contributions
- Images: Place in `img/` folder, reference with relative paths

## JavaScript Features
- Photo zoom on click (scale 1.1)
- Time-based greeting in popup
- Slideshow for congress images (4s interval)
- Project carousel with arrow controls
- Welcome popup after 60s page load
- Dark mode toggle via body class

## Deployment
- CNAME file sets custom domain
- GitHub Pages serves static files directly</content>
<parameter name="filePath">/workspaces/portifolio/.github/copilot-instructions.md