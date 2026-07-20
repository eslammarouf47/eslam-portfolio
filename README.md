# Eslam Maarouf - Premium Video Editing Portfolio

A premium, production-ready portfolio website showcasing professional video editing, cinematography, and visual storytelling work. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎬 About

**Eslam Maarouf** is a professional video editor and visual storyteller specializing in:
- Cinematic video production and editing
- Color grading and color correction
- Motion graphics and visual effects
- Brand films and commercial content
- Documentary and narrative filmmaking

## 🎨 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Dark Luxury Theme** - Minimal, cinematic, Apple-inspired design
- **YouTube Integration** - Embedded video showcase
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Card support
- **Performance** - Optimized images, lazy loading, smooth scrolling
- **Production Ready** - Vercel deployment configured

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section with video background
│   ├── About.tsx           # About section with profile
│   ├── Featured.tsx        # Featured projects with YouTube videos
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills and expertise
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
public/                      # Static assets
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

## 🎥 Featured Videos

1. **Cinematic Showreel** - Professional video editing compilation
2. **Creative Motion Design** - Motion graphics and visual effects
3. **Brand Film Production** - Professional brand storytelling
4. **Documentary Style** - Cinematic narrative filmmaking

[View more on YouTube](https://www.youtube.com/@eslammarouf)

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

### Update Videos

In `src/components/Featured.tsx`, update the `projects` array with your YouTube video IDs:

```typescript
const projects = [
  {
    title: 'Your Video Title',
    category: 'Category',
    description: 'Video description',
    image: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
    video: 'https://youtu.be/VIDEO_ID',
    youtubeId: 'VIDEO_ID',
  },
]
```

### Update Content

- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Contact**: `src/components/Contact.tsx`

## 🔨 Building for Production

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

Fully responsive with breakpoints:
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

## 🔗 Links

- **LinkedIn**: [linkedin.com/in/eslam-maarouf-](https://www.linkedin.com/in/eslam-maarouf-)
- **YouTube**: [@eslammarouf](https://www.youtube.com/@eslammarouf)
- **Email**: eslammarouf47@gmail.com

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Eslam Maarouf**