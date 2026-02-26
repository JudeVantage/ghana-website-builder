# Website Builder Operations Guide - For Ruth

---

## Overview

You run a web design business creating template-based websites for local Ghanaian businesses. This guide covers everything from finding leads to delivering websites.

---

## Business Model

### Pricing Tiers

**Basic Tier:** GH₵2000 setup + GH₵100/month
- Professional website
- WhatsApp contact integration
- Gallery, services, contact sections
- Mobile responsive
- Google searchable

**Pro Tier:** GH₵3500 setup + GH₵200/month + 1.5% transaction fee
- Everything in Basic
- Online booking system (reservation modal)
- Payment processing (Paystack - Mobile Money + Cards)
- Owner dashboard for orders/bookings

### Target Categories

**Primary:**
- Barbershops / Salons
- Restaurants / Cafés
- Guest Houses / Hotels
- Event Venues

**Secondary:**
- Real Estate Agents
- Car Rentals
- Clinics / Spas
- Gyms

---

## Step-by-Step Workflow

### Phase 1: Lead Mining (10 minutes)

**What you need:**
- Apify account (API token saved in `.env` file)
- Google Sheets access
- Lead mining script

**Process:**

1. Pick a category and location
   ```bash
   cd ~/clawd/projects/website-builder
   node mine-leads.js "barbershops in Osu, Accra" barbershops 10
   ```

2. Script automatically:
   - Searches Google Maps
   - Finds businesses with 4.0+ rating, 10+ reviews
   - Checks for website presence
   - Scores and prioritizes leads
   - Saves to JSON file

3. Review results:
   - Priority A (score 60+): No website, strong ratings → BEST TARGETS
   - Priority B (score 40-59): Good candidates
   - Priority C (score <40): Already have websites, backup only

4. Add to CRM:
   - Script outputs formatted data
   - Run the Google Sheets update command (shown in output)
   - Leads appear in your "Ghana Website Leads" spreadsheet

**Daily habit:** Mine 20-30 leads per category, build pipeline of 100+ prospects

---

### Phase 2: Outreach (30 minutes/day)

**Channels:**
- WhatsApp (primary)
- Phone call (for high-value targets)
- Walk-in (if nearby)

**Script:**

> "Hello! I'm Ruth, a web designer based in Accra. I noticed [Business Name] has excellent reviews (X.X stars) but no website. I help businesses like yours get found online with professional websites. Can I show you a quick demo?"

**Demo approach:**
- Show portfolio site (your showcase with 3-4 examples per category)
- Show similar business in their category
- Emphasize: "Get found on Google, look professional, get more customers"

**Pricing conversation:**
- Start with Basic tier (GH₵2000 + GH₵100/month)
- If they want bookings/payments, mention Pro tier
- Emphasize: "You own the website, I just maintain it"

---

### Phase 3: Website Build (10-30 minutes)

**For existing category (e.g., 5th barbershop):**

1. Copy template folder:
   ```bash
   cd ~/clawd/projects/website-builder/sites
   cp -r billionaires-cut new-barbershop-name
   cd new-barbershop-name
   ```

2. Update business details in these files:
   - `app/page.tsx` - Update business name prop
   - `components/Navbar.tsx` - Phone number, WhatsApp link
   - `components/Hero.tsx` - Business name, tagline, phone
   - `components/Footer.tsx` - Name, address, phone, social links
   - `components/FloatingWhatsApp.tsx` - WhatsApp number
   - `components/BookingModal.tsx` - WhatsApp number (if Pro tier)
   - `tailwind.config.ts` - Adjust colors if needed

3. Add logo (if they have one):
   - Save to `public/images/logo.png`
   - Update Navbar to use logo instead of text

4. Replace placeholder images:
   - Hero background
   - Gallery images (6-8 photos from their Instagram or you take photos)

5. Test locally:
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:3000 and verify everything works

6. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial website for [Business Name]"
   git remote add origin [new-repo-url]
   git push -u origin main
   ```

**Time: ~10 minutes** (after you've done a few)

---

**For new category (first restaurant, first guest house, etc.):**

1. Check if there's already a template in `~/clawd/projects/website-builder/sites/`
2. If yes, copy and customize (same as above)
3. If no, request a new template build:
   - Send business details + category to Allen
   - Wait for template (~30 minutes build time)
   - Save as master template for that category
   - Use for all future clients in that category

**Time: First one ~30-40 minutes, then 10 min for repeats**

---

### Phase 4: Deploy to Vercel (5 minutes)

1. Go to https://vercel.com
2. Click "New Project"
3. Import the GitHub repository you just pushed
4. Vercel auto-detects Next.js, click "Deploy"
5. Wait 2 minutes → Site is live at `[project-name].vercel.app`

6. Show client the live link via WhatsApp
7. Get approval or feedback
8. Make adjustments if needed, push changes (Vercel auto-redeploys)

---

### Phase 5: Client Onboarding (15 minutes)

**What client needs:**

**If they want custom domain (optional, extra GH₵50/year):**
- They buy domain (e.g., billionairescut.com from NameCheap)
- You connect it to Vercel (Settings → Domains)

**If they're fine with Vercel subdomain:**
- Share link: `their-business.vercel.app`
- Explain it's professional and works perfectly

**Set up recurring payments:**
- Mobile Money standing order (GH₵100/month) OR
- Manual monthly invoice via WhatsApp

**If Pro tier (with payments):**
- Set up their Paystack account
- Add API keys to website
- Test transaction
- Explain the 1.5% fee you take

**Deliver:**
- Live website link
- Basic training (how to send link to customers)
- WhatsApp support number (yours)

---

### Phase 6: Monthly Maintenance (10 min/client/month)

**Included in GH₵100/month:**
- Keep site online (Vercel handles this automatically)
- Minor text updates (change hours, phone, add/remove service)
- Answer questions via WhatsApp
- Fix bugs if any

**NOT included (charge extra):**
- Major redesigns
- Adding new features
- Professional photoshoots
- SEO/marketing services

---

## File Structure Reference

```
~/clawd/projects/website-builder/
├── PLAYBOOK.md                    # Business model overview
├── OPERATIONS-GUIDE.md            # This file
├── mine-leads.js                  # Lead mining script
├── package.json                   # Dependencies
├── .env                           # Apify API key (keep secret!)
├── google-credentials.json        # Google Sheets access (keep secret!)
├── leads-*.json                   # Search results
└── sites/
    ├── billionaires-cut/          # Barbershop template (master)
    ├── 5ive-star-grooming/        # Barbershop template (variation)
    ├── le-petit-oiseau/           # Restaurant template (master)
    └── [new-clients]/             # Copy templates here
```

---

## Google Sheets CRM

**Spreadsheet:** "Ghana Website Leads"
**Link:** https://docs.google.com/spreadsheets/d/1Dl1DsbuZAiG6tvjexNN9FILD4YH-d9vr1TSL_WgR4V8/edit

**Sheets:**
- Barbershops (19 leads)
- Restaurants (20 leads)
- [Add new sheets for each category]

**Columns:**
- Business Name
- Category
- Priority (A/B/C)
- Lead Score
- Status (TARGET/CONTACTED/WON/LOST)
- Rating
- Reviews
- Phone
- Website
- Location
- Google Maps URL
- Template
- Notes
- Last Contact
- Next Action

**Update status as you progress:**
- TARGET → CONTACTED (after first outreach)
- CONTACTED → WON (client signed)
- CONTACTED → LOST (declined)

---

## Revenue Projections

### Conservative (10 clients in 3 months)

**Month 1:**
- 3 clients × GH₵2000 setup = GH₵6000
- Recurring: GH₵0 (first month)
- **Total: GH₵6000**

**Month 2:**
- 4 new clients × GH₵2000 = GH₵8000
- 3 existing × GH₵100/mo = GH₵300
- **Total: GH₵8300**

**Month 3:**
- 3 new clients × GH₵2000 = GH₵6000
- 7 existing × GH₵100/mo = GH₵700
- **Total: GH₵6700**

**3-month total: GH₵21,000**
**Ongoing monthly (from Month 4+): GH₵1000/month passive**

### Aggressive (30 clients in 3 months, 5 Pro tier)

**Month 3:**
- 25 Basic clients × GH₵100 = GH₵2500
- 5 Pro clients × GH₵200 = GH₵1000
- Transaction fees (estimated): GH₵500
- **Total recurring: GH₵4000/month**

**Realistic with part-time effort:** 15-20 clients in 6 months = GH₵1500-2000/month passive

---

## Tools & Accounts Needed

### Essential (Free)
- ✅ GitHub account (code storage)
- ✅ Vercel account (hosting - free tier covers 100+ sites)
- ✅ Google Sheets (CRM)
- ✅ Apify account (lead mining - free tier = 50 searches/month)

### Optional (Paid)
- Paystack account (for Pro tier clients - no upfront cost, fees per transaction)
- Domain registrar account (NameCheap, etc. - if clients want custom domains)

### Software
- Code editor installed (VS Code or similar)
- Terminal access
- Node.js installed
- Git installed

---

## Daily Routine (2-3 hours/day)

**Morning (30 min):**
- Mine 20-30 new leads
- Update CRM
- Plan outreach targets for the day

**Midday (1 hour):**
- Contact 10-15 businesses (WhatsApp/call)
- Follow up on pending conversations
- Book demos

**Afternoon (1 hour):**
- Build websites for new clients
- Make updates for existing clients
- Deploy and deliver

**Evening (30 min):**
- Answer client questions
- Plan next day

**Weekly (Sunday, 1 hour):**
- Review pipeline
- Calculate revenue
- Mine leads for new categories

---

## Common Questions & Answers

**Q: What if a client wants a completely custom design?**
**A:** Charge extra (GH₵5000+ for custom) OR politely decline and stick to templates. Your business model is volume through templates, not custom boutique work.

**Q: What if a client stops paying monthly?**
**A:** Warning via WhatsApp → Pause site after 2 months unpaid → Delete after 3 months. Keep backups. Be firm but professional.

**Q: What if a client's site breaks?**
**A:** Vercel handles uptime. If something breaks, check the code, fix it, push update. Most issues are minor (typo, wrong link). Serious issues: contact Allen for support.

**Q: Can I offer SEO or social media management?**
**A:** Yes, but as separate services with separate pricing. Don't bundle it into the GH₵100/month maintenance. Example: SEO = GH₵500/month extra.

**Q: How do I handle client photos?**
**A:** Ask them to send via WhatsApp OR take photos yourself when you visit (use phone, natural lighting). Optimize images before uploading (compress to <500KB each).

**Q: What if client requests change the website constantly?**
**A:** Set boundaries: 2 free updates per month included. After that, charge GH₵50 per update OR batch changes for next month.

---

## Red Flags (When to Say No)

- Client haggles aggressively on price (not a good fit)
- Client wants work done before payment (pay 50% upfront minimum)
- Client has bad reputation/reviews (will be difficult)
- Client wants 100% custom with template pricing (unrealistic expectations)

**Your time is valuable. Be selective.**

---

## Scaling Beyond You

**When you have 30+ clients:**
- Hire a junior developer (pay per site built - GH₵200/site)
- You focus on sales/client management
- They handle builds and updates
- You still own client relationships

**When you have 50+ clients:**
- Build a small team (2-3 developers)
- You become full-time manager/salesperson
- Potential revenue: GH₵5000-8000/month passive

---

## Contact for Support

**Technical issues:**
- Allen (via WhatsApp/Telegram)

**Business strategy:**
- Jude (via WhatsApp/Telegram)

**Keep learning:**
- Review successful client sites
- Improve templates over time
- Ask for feedback
- Iterate and grow

---

**Good luck! You have everything you need to start. Begin with 3 clients this month. Build from there.**
