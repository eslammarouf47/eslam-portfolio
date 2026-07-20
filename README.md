# Eslam Maarouf - Premium Portfolio Website

A premium, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎬 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Dark Luxury Theme** - Minimal, cinematic, Apple-inspired design
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Card support
- **Performance** - Optimized images, lazy loading, smooth scrolling
- **Production Ready** - Vercel deployment configured

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles and animations
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── Hero.tsx            # Hero section with video background
│   │   ├── About.tsx           # About section with profile
│   │   ├── Featured.tsx        # Featured projects portfolio
│   │   ├── Experience.tsx      # Experience timeline
│   │   ├── Skills.tsx          # Skills and expertise
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eslammarouf47/eslam-portfolio.git
cd eslam-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  'dark-bg': '#090909',      // Background
  'dark-card': '#141414',    // Card background
  'dark-text': '#F5F5F5',    // Text color
}
```

### Fonts

The project uses:
- **Space Grotesk** - Headlines and bold text
- **Inter** - Body text and descriptions

Customize in `src/app/layout.tsx`

### Content

Update content in individual component files:
- Hero content: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Projects: `src/components/Featured.tsx`
- Experience: `src/components/Experience.tsx`
- Skills: `src/components/Skills.tsx`
- Contact: `src/components/Contact.tsx`

### Videos and Images

Replace placeholder URLs with your own:

```typescript
// In components
src="https://your-video-url.mp4"
image="https://your-image-url.jpg"
```

## 🔧 Building for Production

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px and up
- Tablet: 768px and up (md)
- Desktop: 1024px and up (lg)
- Large Desktop: 1280px and up (xl)

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

## ⚡ Performance

- Image optimization with Next.js Image
- Code splitting with lazy loading
- Smooth scrolling behavior
- CSS animations using Framer Motion
- Minimal bundle size

## 🎬 Animations

The site features:
- Fade-in animations
- Blur reveal effects
- Parallax scrolling
- Hover effects on cards
- Cursor glow effects
- Smooth page transitions

## 📊 SEO

- Meta tags for title and description
- OpenGraph tags for social sharing
- Twitter Card support
- Structured data ready
- Sitemap ready
- Robots.txt configuration

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please reach out or create an issue in the repository.

---

**Built with ❤️ by Eslam Maarouf**