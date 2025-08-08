# Colwell - Assessment Task

A modern, responsive landing page built upon this [Figma Design](https://www.figma.com/design/wYRfa6hKqnE4t7djxCrNJv/Front-End-Developer---Technical-Assessment-Task?node-id=0-1&t=uYQz4dsKP5USbGeq-1) with Next.js, featuring smooth animations, dark theme design, and mobile-first approach.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Font**: Poppins (Google Fonts)
- **Image Optimization**: Next.js Image component

## 📦 Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── global/             # Reusable UI components
│   │   ├── app-button.tsx  # Button component with variants
│   │   ├── app-card.tsx    # Card component
│   │   └── content-wrapper.tsx # Container wrapper with responsive padding
│   ├── layout/             # Layout components
│   │   ├── app-footer.tsx  # Footer with social links
│   │   └── header/         # Header components
│   │       ├── app-header.tsx    # Main header with scroll effects
│   │       └── header-links.tsx  # Navigation links
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx      # Hero section with animated elements
│   │   ├── features-section.tsx  # Features grid with animations
│   │   ├── trustedBy-section.tsx # Company logos section
│   │   ├── joinUs-section.tsx    # CTA section with gradient
│   │   └── contact-section.tsx   # Contact form section
│   └── feature-programs-circle.tsx # Circular feature visualization
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
├── lib/
│   └── utils.ts           # Utility functions (clsx + tailwind-merge)
└── types/
    └── index.ts           # TypeScript type definitions
```
