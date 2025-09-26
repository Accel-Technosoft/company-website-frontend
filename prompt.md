# React TypeScript Website Build Prompt

You are an expert React TypeScript developer. Build a professional IT company website using modern frontend technologies and best practices.

## Project Requirements

**Tech Stack:**
- Vite + React 18 + TypeScript
- Tailwind CSS for styling
- React Router DOM for routing
- React Query for data management
- Framer Motion for animations
- React Helmet Async for SEO
- Lucide React for icons

**Company Context:**
IT services company in Uganda serving SMEs, NGOs, and government offices. Services include custom software development, managed IT services, cybersecurity, web/mobile development, cloud/DevOps, data analytics, industry solutions, and IT equipment supply.

## Core Pages & Features

**Required Pages:**
1. Homepage - Hero, services overview, featured projects, testimonials
2. About - Company mission, team, certifications
3. Services - Individual service pages with detailed descriptions
4. Portfolio - Project showcase with case studies
5. Products - Hardware catalog with categories and specs
6. Blog - Resource articles and guides
7. Contact - Business information and location

**Key Features:**
- Fully responsive design (mobile-first)
- SEO optimization with metadata
- Image lazy loading and optimization
- Smooth animations and transitions
- Client-side search and filtering
- Professional UI with modern design
- Accessibility compliance (WCAG 2.1 AA)

## Data Structure

Create comprehensive mock data for:

**Services (6-8 items):**
```typescript
interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  iconName: string; // Lucide icon name
  images: string[];
  pricing?: string;
  seoMeta: SEOMeta;
}
```

**Portfolio Projects (8-12 items):**
```typescript
interface Project {
  id: string;
  title: string;
  slug: string;
  clientName?: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  techStack: string[];
  images: string[];
  publishDate: string;
  tags: string[];
  industry: string;
  seoMeta: SEOMeta;
}
```

**Products (40+ items across categories):**
```typescript
interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  specifications: Record<string, string>;
  images: string[];
  manufacturer: string;
  warranty: string;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  priceRange?: string;
  seoMeta: SEOMeta;
}

type ProductCategory = 'laptops' | 'desktops' | 'servers' | 'networking' | 'printers' | 'ups' | 'accessories';
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Header, Footer, Navigation
│   └── features/        # Feature-specific components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── data/                # Mock data files
├── types/               # TypeScript definitions
├── utils/               # Utility functions
├── styles/              # Global styles
└── assets/              # Images and static files
```

## Design Requirements

**Visual Style:**
- Modern, professional appearance
- Clean typography with good hierarchy
- Consistent color scheme (blue/tech theme)
- Subtle animations and micro-interactions
- Card-based layouts with proper spacing
- Mobile-responsive grid systems

**Components to Build:**
- Hero section with call-to-action
- Service cards with hover effects
- Project showcase with filtering
- Product grid with search/filter
- Testimonial carousel
- Contact information display
- Newsletter signup section
- Loading states and error boundaries

## SEO & Performance

**SEO Requirements:**
- Proper HTML semantic structure
- Meta tags for all pages
- Open Graph and Twitter Cards
- Structured data (JSON-LD) for organization
- XML sitemap generation
- Proper heading hierarchy (H1-H6)

**Performance Requirements:**
- Code splitting for routes
- Image optimization and lazy loading
- Bundle size optimization
- Lighthouse score > 90
- Core Web Vitals compliance

## Implementation Instructions

1. **Setup Project:**
   - Initialize Vite React TypeScript project
   - Install all required dependencies
   - Configure Tailwind CSS with custom theme
   - Setup ESLint and Prettier

2. **Create Mock Data:**
   - Generate realistic business data
   - Include Uganda-specific context
   - Add proper image placeholders
   - Create comprehensive product catalog

3. **Build Core Components:**
   - Start with layout components (Header, Footer)
   - Create reusable UI components
   - Implement page components
   - Add navigation and routing

4. **Add Interactivity:**
   - Implement search and filtering
   - Add smooth animations
   - Create responsive behaviors
   - Include loading states

5. **Optimize & Polish:**
   - Add SEO metadata
   - Implement lazy loading
   - Ensure accessibility
   - Test responsiveness

## Specific Content Guidelines

**Company Information:**
- Name: "Accel Technosoft" (or similar)
- Location: Kampala, Uganda
- Phone: +256 format
- Email: Professional domain
- Services: Focus on local market needs
- Experience: 5+ years in IT services

**Sample Service Categories:**
1. Custom Software Development - Web apps, mobile apps, APIs
2. Managed IT Services - Network management, help desk, maintenance
3. Cybersecurity Solutions - Security audits, threat monitoring, compliance
4. Cloud & DevOps - AWS/Azure migration, CI/CD, infrastructure
5. Data & Analytics - Business intelligence, data visualization, reporting
6. Industry Solutions - Healthcare, education, finance, government
7. IT Equipment Supply - Computers, servers, networking, peripherals

**Portfolio Examples:**
- Government portal development
- Banking mobile application
- School management system
- Hospital management system
- E-commerce platform
- Business automation tools

## Delivery Expectations

Provide a complete, production-ready React application with:
- All pages fully implemented
- Responsive design tested
- Mock data populated
- Navigation working
- SEO optimization complete
- TypeScript types properly defined
- Code properly organized and documented
- Build process configured
- Deployment ready

The website should look professional enough to represent a real IT company and be ready for immediate deployment to production hosting.

## Code Quality Standards

- Use TypeScript strictly (no `any` types)
- Follow React best practices and hooks patterns
- Implement proper error boundaries
- Use semantic HTML elements
- Add proper ARIA labels for accessibility
- Include loading and error states
- Write clean, maintainable code with comments
- Use consistent naming conventions

