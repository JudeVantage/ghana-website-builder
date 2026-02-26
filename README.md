# 🇬🇭 Ghana Website Builder

**AI-powered template system for deploying professional business websites in minutes.**

Built for Ruth's web design business in Ghana, targeting local businesses (barbershops, restaurants, salons).

---

## 🎯 Project Overview

### Problem
- Manual website creation is time-consuming (hours per site)
- Copying and editing templates leads to inconsistencies
- Writing unique content for each client is repetitive
- Deployment process is manual and error-prone

### Solution
- **3 professional template variants** for barbershops
- **AI-powered content generation** using Claude API
- **Config-based customization** (no code editing required)
- **One-command deployment** to Vercel
- **2-3 minute** deployment time per site

---

## ✨ Features

### Template Variants

1. **Modern** - Clean, minimalist, professional
2. **Luxury** - Dark, premium, sophisticated
3. **Classic** - Traditional barbershop aesthetic

Each variant includes:
- ✅ Responsive hero section with CTA
- ✅ Services showcase (4+ services)
- ✅ About section with images
- ✅ Photo gallery (8 images)
- ✅ Contact information with map
- ✅ WhatsApp floating button
- ✅ Booking modal (sends to WhatsApp)
- ✅ Mobile-responsive design
- ✅ Smooth animations (Framer Motion)

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **AI:** Claude 3.5 Sonnet (Anthropic)

---

## 🚀 Quick Start

### Prerequisites

```bash
node -v    # v14 or higher
npm -v     # v6 or higher
```

### Installation

```bash
# 1. Clone repository
git clone <repo-url>
cd website-builder

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env

# 4. Login to Vercel (for deployment)
npm install -g vercel
vercel login
```

### Deploy Your First Site

```bash
# Use example config
node deploy-site.js --config config-examples/barbershop-modern.json --deploy

# Or create your own config
cp config-template.json my-client.json
# Edit my-client.json with client details
node deploy-site.js --config my-client.json --deploy
```

**Result:** Live website in 2-3 minutes! 🎉

---

## 📚 Documentation

- **[Template System Guide](./TEMPLATE-SYSTEM-GUIDE.md)** - Complete deployment guide
- **[Operations Guide](./OPERATIONS-GUIDE.md)** - Business operations & workflows
- **[Template Previews](./previews/README.md)** - Visual gallery of variants

---

## 📁 Project Structure

```
website-builder/
├── sites/
│   ├── templates/
│   │   └── barbershop/
│   │       ├── variant-1-modern/      # Modern template
│   │       ├── variant-2-luxury/      # Luxury template
│   │       └── variant-3-classic/     # Classic template
│   └── deployed/                      # Generated sites (gitignored)
│
├── config-examples/                   # Sample configurations
│   ├── barbershop-modern.json
│   ├── barbershop-luxury.json
│   └── barbershop-classic.json
│
├── previews/                          # Template screenshots
│   └── README.md
│
├── deploy-site.js                     # Main deployment script
├── config-template.json               # Configuration template
├── TEMPLATE-SYSTEM-GUIDE.md          # Complete guide
└── README.md                          # This file
```

---

## 🎨 Creating a Site

### Step 1: Choose Template

Pick from 3 variants based on client's style:
- **Modern:** Young, urban, professional
- **Luxury:** High-end, premium, executive
- **Classic:** Traditional, family-friendly

### Step 2: Create Config

```json
{
  "variant": "variant-1-modern",
  "business": {
    "name": "Sharp Cuts Barbershop",
    "tagline": "Where Style Meets Tradition",
    "phone": "0244123456",
    "whatsapp": "233244123456",
    "address": "East Legon, Accra",
    "hours": "Mon-Sat 9AM-8PM"
  },
  "services": [
    { "name": "Haircut", "price": "GH₵50" },
    { "name": "Shave", "price": "GH₵30" },
    { "name": "Beard Trim", "price": "GH₵25" },
    { "name": "Full Package", "price": "GH₵100" }
  ],
  "about": "",  // Leave empty for AI generation
  "hero": {
    "title_line1": "Fresh Cuts",
    "title_line2": "Every Time"
  }
}
```

### Step 3: Deploy

```bash
node deploy-site.js --config client-config.json --deploy
```

### Step 4: Share with Client

You'll get a live URL like: `https://sharp-cuts-barbershop.vercel.app`

---

## 🤖 AI Content Generation

The deployment script automatically generates:

1. **About Text** - Unique story for each barbershop
   - Business history and values
   - What makes them special
   - Culturally appropriate for Ghana

2. **Service Descriptions** - Professional copy for each service
   - Engaging and descriptive
   - Consistent tone across all services

### Example Output

**Input:**
```json
{
  "business": { "name": "Joe's Barbershop" },
  "services": [{ "name": "Classic Haircut", "price": "GH₵35" }]
}
```

**AI Generated:**
```
About: "Joe's Barbershop has been a cornerstone of the Osu community 
since 2010. We pride ourselves on delivering classic cuts with a 
modern touch, ensuring every client leaves looking sharp and feeling 
confident..."

Service: "Our signature classic haircut combines traditional 
techniques with contemporary styling for a timeless look that 
suits any occasion."
```

---

## 💰 Costs

### Per Site

- **AI Generation:** ~$0.10-0.20 (Claude API)
- **Hosting:** Free (Vercel Hobby tier)
- **Domain:** ~$10-15/year (optional)

### Monthly (50 sites)

- **AI Costs:** ~$10
- **Hosting:** $20 (Vercel Pro - recommended for custom domains)
- **Total:** ~$30/month

**ROI:** Charge GH₵1,000+ per site = 97% profit margin

---

## 🔧 Development

### Running Templates Locally

```bash
# Variant 1 (port 3000)
cd sites/templates/barbershop/variant-1-modern
npm install
npm run dev

# Variant 2 (port 3001)
cd sites/templates/barbershop/variant-2-luxury
npm install
npm run dev

# Variant 3 (port 3002)
cd sites/templates/barbershop/variant-3-classic
npm install
npm run dev
```

### Making Template Changes

1. Edit files in `sites/templates/barbershop/<variant>/`
2. Test locally with `npm run dev`
3. Changes apply to all future deployments

### Adding New Variants

```bash
# Copy existing variant
cp -r sites/templates/barbershop/variant-1-modern sites/templates/barbershop/variant-4-custom

# Customize:
- tailwind.config.ts (colors, fonts)
- app/globals.css (styling)
- components/*.tsx (layout, structure)

# Update deploy-site.js to recognize new variant
```

---

## 🐛 Troubleshooting

### Common Issues

**"ANTHROPIC_API_KEY not set"**
```bash
echo "ANTHROPIC_API_KEY=sk-ant-..." >> .env
```

**"Vercel CLI not installed"**
```bash
npm install -g vercel
vercel login
```

**Build fails**
```bash
# Clear caches
npm cache clean --force
rm -rf node_modules
npm install
```

**AI generation fails**
- Check API key is valid
- Verify internet connection
- Check Anthropic account has credits
- Workaround: Fill in `about` and `description` fields manually

---

## 📈 Scaling

### Process for 10+ Sites/Day

1. **Gather info** using a Google Form (name, phone, address, etc.)
2. **Batch create configs** from form responses
3. **Deploy in batches** using a bash script:
   ```bash
   for config in batch-configs/*.json; do
     node deploy-site.js --config "$config" --deploy
     sleep 5  # Rate limit friendly
   done
   ```
4. **Track deployments** in a spreadsheet

### Team Workflow

- **Sales:** Gather client info, choose template
- **Deployment:** Run script with config
- **QA:** Preview site, get client approval
- **Delivery:** Share live URL, collect payment

---

## 🎯 Roadmap

### Phase 1: Barbershops ✅
- 3 template variants
- AI content generation
- One-command deployment

### Phase 2: Restaurants (Next)
- Menu templates
- Online ordering integration
- Photo galleries for dishes

### Phase 3: Salons
- Booking system integration
- Service galleries
- Stylist profiles

### Phase 4: General Business
- Product catalogs
- Contact forms
- Blog functionality

---

## 📞 Support

For questions or issues:

1. Check [TEMPLATE-SYSTEM-GUIDE.md](./TEMPLATE-SYSTEM-GUIDE.md)
2. Review troubleshooting section above
3. Check deployment logs: `deployment-info.json` in output folder

---

## 🤝 Contributing

To contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for Ghana's digital future 🇬🇭**

_Empowering local businesses with professional web presence_
