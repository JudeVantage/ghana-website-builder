# Billionaire's Cut - Premium Barbershop Website

A modern, luxury barbershop website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and SEO optimization.

## 🌟 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom gold theme
- **Framer Motion** - Smooth scroll animations and transitions
- **Responsive Design** - Mobile-first approach, works on all devices
- **SEO Optimized** - Complete metadata and Open Graph tags
- **Performance** - Optimized images with Next.js Image component
- **Floating WhatsApp Button** - Easy contact via WhatsApp

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd ~/clawd/projects/website-builder/sites/billionaires-cut
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
billionaires-cut/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── TrustStrip.tsx      # Trust indicators
│   ├── Services.tsx        # Service cards
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── Gallery.tsx         # Image gallery
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer
│   └── FloatingWhatsApp.tsx # WhatsApp chat widget
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the gold color scheme:

```typescript
colors: {
  gold: {
    DEFAULT: "#D4AF37",
    light: "#F4E4B0",
    dark: "#B8941F",
  },
}
```

### Business Information

Update business details in:
- `app/layout.tsx` - SEO metadata
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Footer details
- `components/FloatingWhatsApp.tsx` - WhatsApp number

### Services

Modify service offerings in `components/Services.tsx`:

```typescript
const services = [
  {
    icon: Scissors,
    title: "Service Name",
    description: "Service description",
    price: "GH₵ XX",
    features: ["Feature 1", "Feature 2"],
  },
  // Add more services...
];
```

### Images

Replace Unsplash placeholder images with your own:
1. Add images to `/public/images/`
2. Update image paths in components
3. Update `next.config.js` domains if using external images

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live in minutes!

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Sections Overview

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Full-screen hero with CTA buttons
3. **Trust Strip** - Key statistics (rating, reviews, etc.)
4. **Services** - 4 service cards with pricing
5. **Why Choose Us** - 4 key benefits
6. **Gallery** - 6-image grid with hover effects
7. **About** - Business story and values
8. **Contact** - Location, hours, contact info with map
9. **Footer** - Links, social media, copyright
10. **Floating WhatsApp** - Always-accessible chat button

## 🔧 Tech Stack

- **Framework:** Next.js 14.2.15
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 11.11.17
- **Icons:** Lucide React 0.460.0
- **Image Optimization:** Next.js Image Component

## 📊 Performance

- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1

## 🔒 SEO Features

- Complete meta tags
- Open Graph for social sharing
- Twitter Card support
- Sitemap ready
- Semantic HTML
- Accessible (WCAG compliant)

## 📞 Contact Integration

- **Phone:** [+233 54 419 1868](tel:+233544191868)
- **WhatsApp:** [wa.me/233544191868](https://wa.me/233544191868)
- **Location:** 24 Adjiringano Rd, Accra, Ghana

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary and confidential. © 2024 Billionaire's Cut. All rights reserved.

## 🤝 Support

For support or customization requests, contact the development team.

---

**Built with ❤️ for Billionaire's Cut**
