# Website Builder Business - Project Spec

**Created:** 2026-02-14  
**For:** Friend's web design business  
**Purpose:** Internal template system + lead generation agent

---

## Business Model

Build websites for small local businesses (barbers, restaurants, services) using templates.

**Key insight:** Same types repeatedly → build once, deploy many

**Process:**
1. Template foundations for each business type
2. Swap: photos, copy, colors/branding, contact details
3. Charge full custom price, deliver faster, scale capacity

---

## Core Components

### 1. Template Categories

- Barbers/salons
- Restaurants/cafes
- Gyms/fitness
- Professional services (lawyers, accountants, consultants)
- Local services (plumbers, electricians)
- Retail/ecommerce
- Guest houses
- Event centers
- Car rentals

### 2. Template Components (per category)

- Hero + about section
- Services/menu
- Gallery
- Booking/contact
- Testimonials
- Location/hours
- WhatsApp widget
- Social media links

---

## Lead Generation Agent

### Agent Flow (OpenClaw Multi-Agent System)

**Agents:**
1. **Discovery Agent** → Google Maps/Places search + dedupe
2. **Qualifier Agent** → Scoring logic + website checker
3. **Content Agent** → Generate demo packs + outreach messages
4. **CRM Agent** → Write to Google Sheets, set follow-ups

---

## Agent Spec: Lead Discovery & Qualification

### 1) Discover leads by category + location

**Input:** category keywords + target areas
- Examples: "barber", "guest house", "event centre"
- Areas: "East Legon", "Osu", "Spintex", etc.

**Process:**
- Pull business candidates from Google Maps/Places for each query
- Handle variations (e.g., "salon", "beauty studio", "braids", "barber shop")
- Dedupe the same business appearing under multiple searches

**Best practice:** Use Google Places API (or compliant provider) rather than scraping Maps UI directly.

---

### 2) Extract required fields

For each business, capture:
- Business name
- Category/tag (internal category)
- Address / neighbourhood
- Google Maps link
- Rating + number of reviews
- Phone number (if present)
- Website URL (if present)
- Opening hours (optional)
- Instagram / Facebook links (if present)
- "Has WhatsApp?" (detect via phone patterns or linked buttons)
- Primary photo(s) URL (reference only)

---

### 3) Qualify: detect "good target" vs "skip"

**Target criteria:** High demand + weak web presence

**Flags to compute:**
- **High-demand signal:** rating ≥ 4.0 AND reviews ≥ 20 (tune thresholds)
- **Weak online presence:** no website field OR website looks like only a directory/IG page
- **Contactability:** phone exists OR IG exists

**Labels:**
- **TARGET** - meets thresholds + no website
- **MAYBE** - meets some thresholds, needs manual check
- **SKIP** - already has decent website / chain brand / not contactable

---

### 4) Detect "website quality"

Not just "has a website yes/no" — classify quality:

**Categories:**
- No website
- Instagram-only / Facebook-only
- Outdated / broken link
- Basic one-pager (still a potential sell)
- Good site (skip)

**How:**
- Fetch the URL
- Run quick checks: loads? mobile-friendly? has menu/booking/contact? page speed rough check
- Return simple "Website score" (0–5)

---

### 5) Prioritise: rank outreach list automatically

**Lead Score** = auto-ranking for who to contact first

**Example scoring (tune later):**
- +30 if no website
- +20 if reviews > 100
- +10 if rating > 4.3
- +10 if tourist-facing (guest house, car rental, event venue)
- +10 if has phone + IG (easy to reach)
- −30 if already has a solid site

**Output:** Lead Score + Priority: A / B / C

---

### 6) Generate "demo-ready" data pack per lead

To make templating fast, produce a mini-brief:
- One-line description of the business (from Maps)
- 5–10 services/menu items if visible
- Suggested site template type (restaurant vs venue etc.)
- Suggested CTA (WhatsApp booking vs enquiry form)

This becomes the starter content for the site.

---

### 7) Draft outreach message personalised to category

For each lead, generate:
- WhatsApp script (short)
- IG DM script (short)
- Optional call opener (one-liner)

**Personalisation tokens:**
- Business name
- Area
- What customers usually want (menu / rooms / gallery / booking)
- One specific positive signal (e.g., "saw your reviews")

---

### 8) Write everything into Google Sheets (CRM)

Push rows directly into a Sheet with consistent columns and statuses:
- Status default: NEW
- Next action: WhatsApp or IG
- Follow-up date: auto-set (e.g., +2 days)

---

### 9) Guardrails

- **Don't copy Google review photos** into a live demo site by default. Keep them as "reference" only; use placeholders until the owner agrees.
- **Use compliant data access** (Places API). Avoid brittle UI scraping that can break or violate terms.
- **Store only what you need**; don't collect unnecessary personal data.

---

## Technical Requirements

### Integrations
- Google Places API (or equivalent)
- Google Sheets API
- Optional: Instagram handle discovery via basic web search (careful with accuracy)

### Core Functions
- Query expansion + dedupe
- Lead qualification rules
- Website check + scoring
- Lead scoring + prioritisation
- Message generation
- Sheet write + follow-up scheduling

---

## Tech Stack Options

### Option 1: Webflow / WordPress
**For:** Non-technical operator
- **Pros:** She can edit herself, visual builder
- **Cons:** Less flexible, monthly costs, harder to automate

### Option 2: Next.js + Headless CMS
**For:** Technical maintenance by you
- **Pros:** Full control, better automation, cheaper at scale
- **Cons:** She can't edit directly, needs you for changes

**Recommendation:** Start with Option 1 (Webflow/WordPress) for sustainability. Migrate to Option 2 if scaling hard.

---

## API Costs

### Google Places API (official)
- ~$17/1000 searches
- Reliable, compliant, but expensive at volume

### Cheaper Alternatives

**1. Outscraper (~$0.50-2/1000 results)**
- Scrapes Google Maps programmatically
- Returns same data as Places API
- Has API, way cheaper
- Technically against Google ToS but widely used

**2. SerpAPI (~$2.50/1000 searches)**
- Google Maps scraper with API
- More reliable than DIY scraping

**3. Apify Google Maps scraper (~$1-3/1000)**
- Cloud scraping platform
- Pay per compute, not per API call
- Can be cheaper at volume

**4. OpenStreetMap Overpass API (free)**
- Open data, no API costs
- Data quality inconsistent, missing reviews/ratings/photos
- Good for basic location/contact, bad for qualification signals

**5. Yelp Fusion API (free tier: 500 calls/day)**
- Limited but free for low volume
- Good for restaurants/services, weaker coverage in some areas

**6. DIY scraping (free but fragile)**
- Selenium/Playwright to scrape Maps directly
- Free but breaks often, rate limits, can get blocked
- High maintenance

**Recommendation:** Outscraper or SerpAPI (~85-90% cheaper than official API, stable enough for MVP, programmable)

---

## Build Timeline

**MVP (with AI assistance):** 1 week  
**Full build (competent dev):** 2-3 weeks  

**Costs to run:** Mostly API calls (~$0.50-2/1000 searches with Outscraper) + minimal hosting

---

## Next Steps

1. ✅ Spec captured (this document)
2. ⏳ Find template website inspirations (styles/references)
3. ⏳ Define exact template categories needed
4. ⏳ Build lead generation agent (when in Ghana)
5. ⏳ Build template system
6. ⏳ Test with first client

---

## Notes

- This is for friend's business (not personal project)
- Build when in Ghana
- Focus on sustainability — she needs to run this herself long-term
