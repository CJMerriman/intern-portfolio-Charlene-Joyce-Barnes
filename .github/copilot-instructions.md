# Copilot Instructions - Charlene Barnes Frontend Portfolio

## Project Overview
This is a personal frontend portfolio project showcasing Charlene Barnes' web development skills and projects. The portfolio demonstrates modern frontend technologies and responsive design principles.

## Architecture & Structure
- **Portfolio Type**: Personal showcase website with project galleries and professional information
- **Expected Tech Stack**: Modern frontend framework (likely React, Vue, or vanilla JavaScript)
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Asset Organization**: Structured media/images folder for portfolio pieces

## Development Patterns
### File Organization
- Components should be modular and reusable
- Separate concerns: styling, logic, and markup
- Use consistent naming conventions (kebab-case for files, camelCase for variables)
- Group related files in feature-based directories

### Styling Conventions
- Implement responsive design with CSS Grid/Flexbox
- Use CSS custom properties for theming and consistent spacing
- Follow BEM methodology or similar for CSS class naming
- Optimize images for web (WebP format when possible)

### Portfolio-Specific Patterns
- **Project Showcase**: Each portfolio item should have consistent structure (title, description, tech stack, demo/code links)
- **Performance**: Lazy load portfolio images and implement smooth animations
- **Accessibility**: Ensure all interactive elements are keyboard navigable and screen reader friendly
- **SEO**: Include proper meta tags, structured data, and semantic HTML

## Key Workflows
### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Deployment
- Optimize assets before deployment
- Test responsive design across devices
- Validate accessibility compliance
- Check performance metrics (Core Web Vitals)

## Content Guidelines
- Keep project descriptions concise but informative
- Include live demo links and source code repositories
- Showcase diverse skill set across projects
- Maintain professional tone and consistent branding

## Performance Considerations
- Implement image optimization and lazy loading
- Minimize bundle size with code splitting
- Use efficient animations (transform/opacity only)
- Optimize font loading with font-display: swap

When working on this portfolio:
1. Prioritize user experience and performance
2. Ensure cross-browser compatibility
3. Implement proper error handling for external links
4. Follow accessibility best practices (WCAG guidelines)
5. Keep the design clean and focused on showcasing work