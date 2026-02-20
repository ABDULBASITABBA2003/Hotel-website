# Non-Functional Requirements

This document outlines the technical constraints and quality attributes of the Hotel-website.

## 1. Performance
- The website shall be lightweight to ensure fast loading times on mobile devices.
- Assets (images) should be optimized for web use to minimize bandwidth consumption.

## 2. Responsiveness
- The website shall be fully responsive and optimized for mobile devices, providing a seamless experience across various screen sizes.
- A hamburger menu shall be used for navigation on smaller screens.

## 3. Usability
- The user interface shall be intuitive, with clear calls to action (e.g., search bar, subscription button).
- Typography and color schemes shall ensure readability and a professional aesthetic (using Montserrat and Urbanist fonts).

## 4. Technical Constraints (Stack Details)
- **Frontend**: The project must use standard web technologies: HTML5, CSS3, and Vanilla JavaScript (ES6+).
- **Styling**: CSS Grid and Flexbox shall be used for layout management.
- **External Dependencies**: Use Google Fonts for typography. No heavy frontend frameworks (like React or Vue) are currently required.

## 5. Maintainability
- The website's dynamic content (offers, reviews, posts) shall be managed through structured JavaScript objects/arrays to allow for easy updates without modifying the core HTML structure.

## 6. Availability
- As a static website, it should be highly available when hosted on standard web servers or CDN services (e.g., GitHub Pages, Vercel).
