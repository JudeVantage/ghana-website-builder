# 🇬🇭 Ghana Website Builder - Template System Guide

Complete guide to deploying AI-powered barbershop websites in minutes.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Template Variants](#template-variants)
3. [Configuration](#configuration)
4. [Deployment](#deployment)
5. [Customization](#customization)
6. [Troubleshooting](#troubleshooting)
7. [Costs](#costs)

---

## 🚀 Quick Start

### Prerequisites

```bash
# Required
- Node.js 14+ installed
- Anthropic API key (get from: https://console.anthropic.com)
- Vercel account (for deployment)
- Vercel CLI installed: npm install -g vercel
```

### Installation

```bash
# 1. Clone/navigate to the project
cd ~/clawd/projects/website-builder

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "ANTHROPIC_API_KEY=your_key_here" > .env

# 4. Login to Vercel
vercel login
```

---

## 🎨 Template Variants

Choose from 3 professionally designed variants:

### **Variant 1: Modern** (`variant-1-modern`)
- **Style**: Clean, minimalist, professional
- **Colors**: White/light gray + deep blue (#1E40AF)
- **Fonts**: Inter, Poppins (sans-serif)
- **Layout**: Single column, generous whitespace
- **Best for**: Modern barbershops, younger clientele, urban locations

![Modern Preview](./previews/barbershop-variant-1.png)

### **Variant 2: Luxury** (`variant-2-luxury`)
- **Style**: Premium, sophisticated, upscale
- **Colors**: Dark background (#1A1A1A) + gold (#D4AF37)
- **Fonts**: Playfair Display (serif) + Inter
- **Layout**: Full-width hero, split sections
- **Best for**: High-end barbershops, executive clients, premium pricing

![Luxury Preview](./previews/barbershop-variant-2.png)

### **Variant 3: Classic** (`variant-3-classic`)
- **Style**: Traditional, warm, authentic barbershop
- **Colors**: Earth tones (browns, creams) + red (#DC2626)
- **Fonts**: Georgia (serif) + Impact
- **Layout**: Grid-based, vintage card style
- **Best for**: Traditional barbershops, family-friendly, neighborhood shops

![Classic Preview](./previews/barbershop-variant-3.png)

---

## ⚙️ Configuration

### Step 1: Choose Your Variant

Copy one of the example configs:

```bash
# Modern style
cp config-examples/barbershop-modern.json my-client-config.json

# Luxury style
cp config-examples/barbershop-luxury.json my-client-config.json

# Classic style
cp config-examples/barbershop-classic.json my-client-config.json
```

### Step 2: Edit Configuration

Open `my-client-config.json` and fill in the details:

```json
{
  "variant": "variant-1-modern",
  "business": {
    "name": "Sharp Cuts Barbershop",          // Required
    "tagline": "Where Style Meets Tradition",  // Required
    "phone": "0244123456",                     // Required
    "whatsapp": "233244123456",                // Required (with country code)
    "address": "East Legon, Accra, Ghana",     // Required
    "hours": "Mon-Sat: 9AM-8PM, Sun: Closed"   // Required
  },
  "colors": {
    "primary": "#1E40AF",                      // Optional (variant default used)
    "secondary": "#F59E0B"                     // Optional
  },
  "services": [
    {
      "name": "Premium Haircut",               // Required
      "price": "GH₵50",                        // Required
      "description": ""                        // Leave empty for AI generation
    },
    // ... 3 more services (4 total required)
  ],
  "about": "",                                 // Leave empty for AI generation
  "hero": {
    "title_line1": "Your Style",               // Optional
    "title_line2": "Our Passion",              // Optional
    "subtitle": "Experience professional grooming" // Optional
  },
  "owner": {
    "name": "Kwame Mensah"                     // Optional (for About section)
  }
}
```

### Required Fields

- ✅ `variant` - Which template to use
- ✅ `business.name` - Shop name
- ✅ `business.tagline` - Short description
- ✅ `business.phone` - Contact number
- ✅ `business.whatsapp` - WhatsApp number (with country code)
- ✅ `business.address` - Full address
- ✅ `business.hours` - Operating hours
- ✅ `services` - Array of 4 services (name + price required)

### Optional Fields (AI Generated if Empty)

- `services[].description` - AI will generate if empty
- `about` - AI will write shop story if empty
- `hero.title_line1/2` - Uses business name if empty
- `hero.subtitle` - Uses tagline if empty

---

## 🚀 Deployment

### Method 1: Full Deploy (Build + Deploy)

Deploy directly to Vercel:

```bash
node deploy-site.js --config my-client-config.json --deploy
```

This will:
1. ✅ Load and validate config
2. ✅ Generate AI content (about text, service descriptions)
3. ✅ Copy and customize template
4. ✅ Install dependencies
5. ✅ Deploy to Vercel
6. ✅ Return live URL

**Time:** 2-3 minutes  
**Cost:** ~$0.10-0.20 (Claude API tokens)

### Method 2: Build Only (No Deploy)

Build locally to preview first:

```bash
node deploy-site.js --config my-client-config.json
```

This builds the site without deploying. You can then:

```bash
# Preview locally
cd sites/deployed/<site-folder>
npm run dev

# Deploy manually later
vercel --prod
```

### Method 3: Custom Output Path

Specify where to build:

```bash
node deploy-site.js \
  --config my-client-config.json \
  --output ~/custom/path/my-site \
  --deploy
```

---

## 🎨 Customization

### After Deployment

Sites are fully customizable. Common changes:

#### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR",
    // ...
  }
}
```

#### Update Images

Replace placeholder images in components:

```typescript
// Example: components/Hero.tsx
<Image
  src="https://your-image-url.com/photo.jpg"  // Change this
  alt="Your description"
  // ...
/>
```

#### Add/Remove Sections

Edit `app/page.tsx` to include/exclude components:

```typescript
<Services services={services} />
<About />
<Gallery />  // Comment out to remove
```

#### Modify Services

Edit directly in code or redeploy with new config.

---

## 🐛 Troubleshooting

### Error: "ANTHROPIC_API_KEY not set"

**Solution:**
```bash
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env
```

Get your key from: https://console.anthropic.com

### Error: "Vercel CLI not installed"

**Solution:**
```bash
npm install -g vercel
vercel login
```

### Error: "Template not found"

**Solution:** Check variant name in config matches exactly:
- `variant-1-modern`
- `variant-2-luxury`
- `variant-3-classic`

### Build fails during npm install

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
node deploy-site.js --config my-client-config.json
```

### AI generation fails

**Check:**
1. API key is correct
2. You have credits in Anthropic account
3. Internet connection is stable

**Workaround:** Fill in `about` and service `description` fields manually in config.

### Deployment succeeds but site doesn't work

**Check:**
1. Visit the URL in incognito mode (cache issue)
2. Check Vercel dashboard for build errors
3. Verify all required fields in config were filled

---

## 💰 Costs

### Per Site Deployment

| Item | Cost |
|------|------|
| **Claude API** | ~$0.10-0.20 |
| **Vercel Hosting** | Free (Hobby tier) |
| **Domain (optional)** | ~$10-15/year |
| **Total per site** | **~$0.15** |

### Breakdown

- **AI Content Generation**: ~1,000 tokens (about text + 4 service descriptions)
  - Claude Sonnet 4.5: $3/million input tokens, $15/million output tokens
  - Average per site: $0.10-0.20

- **Vercel Hosting**: 
  - Free tier: 100 deployments/month, unlimited bandwidth
  - Perfect for small businesses
  - Pro tier ($20/month) if you need custom domains + SSL

### Scaling

**10 sites/month:**
- AI costs: ~$2
- Hosting: Free (or $20/month for Pro)
- **Total: $2-22/month**

**50 sites/month:**
- AI costs: ~$10
- Hosting: $20/month (Pro recommended)
- **Total: ~$30/month**

---

## 🎯 Best Practices

### 1. **Gather Info Before Starting**

Create a quick form for clients:
- Business name
- Phone/WhatsApp
- Address
- Operating hours
- 4 service names + prices

### 2. **Use AI for Content**

Let the AI write:
- About section (unique for each shop)
- Service descriptions (professional + consistent)

Manual text often sounds generic. AI-generated content is engaging and tailored.

### 3. **Preview Before Deploying**

```bash
# Build without deploying
node deploy-site.js --config client.json

# Preview locally
cd sites/deployed/<folder>
npm run dev
# Visit http://localhost:3000
```

### 4. **Version Control**

Keep configs in a separate folder:

```bash
mkdir client-configs
mv client1.json client-configs/
git add client-configs/
git commit -m "Added Client 1 config"
```

### 5. **Batch Deployments**

Create a script for multiple clients:

```bash
#!/bin/bash
for config in client-configs/*.json; do
  echo "Deploying $config..."
  node deploy-site.js --config "$config" --deploy
  sleep 5  # Avoid rate limits
done
```

---

## 📞 Support

### Common Questions

**Q: Can I use my own domain?**  
A: Yes! In Vercel dashboard: Settings → Domains → Add your domain

**Q: How do I update a deployed site?**  
A: Redeploy with updated config, or edit code and run `vercel --prod`

**Q: Can I add a blog/booking system?**  
A: Yes, but requires custom development. These templates are static sites.

**Q: What if a client wants 5+ services?**  
A: Edit `app/page.tsx` to add more service objects. Template supports any number.

**Q: Can I create restaurant templates?**  
A: Yes! Copy a barbershop variant and modify for restaurant (menu, etc.)

---

## 🚀 Next Steps

1. **Test deployment** with example config:
   ```bash
   node deploy-site.js --config config-examples/barbershop-modern.json --deploy
   ```

2. **Create your first client site** using this guide

3. **Customize templates** to match your brand/client needs

4. **Expand** to restaurants, salons, other business types

---

**Made with ❤️ in Ghana 🇬🇭**

For issues or questions, check the troubleshooting section or review the code in `deploy-site.js`.
