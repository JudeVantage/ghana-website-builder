# Website Builder Business — Full Setup Guide

**From Zero to First Website**

This guide takes you from a fresh Windows computer to running a website-building business. No coding experience required.

---

# Part 1: Setting Up Your Computer

## Step 1: Install Node.js

### What is Node.js?

Node.js runs JavaScript code on your computer. Normally JavaScript only works inside web browsers, but Node lets us run scripts and tools locally.

**For this business, Node.js lets us:**
- Run the lead mining script (pulls businesses from Google Maps)
- Build and preview websites locally
- Install tools with one command

**Simple analogy:** Microsoft Word opens `.docx` files. Node.js runs `.js` files.

### How to Install

1. Go to: **https://nodejs.org**

2. Click **"Download Node.js (LTS)"** or select:
   - Version: **LTS** (Long Term Support = stable)
   - OS: **Windows**
   
3. Click **"Windows Installer (.msi)"**

4. Run the downloaded file

5. Click through the installer:
   - Next → Accept terms → Next → Next → Install
   - Say **Yes** if Windows asks for permission

6. **Restart your computer**

### Verify Installation

1. Press `Windows key`, type **cmd**, press Enter

2. Type these commands (press Enter after each):
   ```
   node --version
   ```
   Should show: `v24.x.x` or similar
   
   ```
   npm --version
   ```
   Should show: `11.x.x` or similar

✅ **Node.js complete** — You can now run JavaScript tools

---

## Step 2: Install Git

### What is Git?

Git tracks changes to files over time. Think of it like "track changes" in Microsoft Word, but for entire folders.

**For this business, Git lets us:**
- Deploy websites to the internet (Vercel uses Git)
- Keep backups of all our work
- Undo mistakes easily

### How to Install

1. Go to: **https://git-scm.com/download/win**

2. Download should start automatically
   - If not, click "Click here to download manually"

3. Run the downloaded file

4. **Click Next through everything** — default settings are fine
   - Don't change any options
   - Just keep clicking Next → Next → Install

5. Click **Finish**

### Verify Installation

1. **Close** any open Command Prompt windows

2. Open a **new** Command Prompt (Windows key → cmd → Enter)

3. Type:
   ```
   git --version
   ```
   Should show: `git version 2.x.x`

✅ **Git complete** — You can now track files and deploy websites

---

## Step 3: Install VS Code (Code Editor)

### What is VS Code?

VS Code is where you'll view and edit files. It's like Microsoft Word, but for code and website files.

**For this business, VS Code lets us:**
- Edit website content (text, prices, contact info)
- View the project files in an organized way
- Run commands without switching windows

### How to Install

1. Go to: **https://code.visualstudio.com**

2. Click the big **"Download for Windows"** button

3. Run the downloaded file

4. Accept the agreement, click Next

5. **Important:** Check these boxes when you see them:
   - ✅ Add "Open with Code" action to Windows Explorer file context menu
   - ✅ Add "Open with Code" action to Windows Explorer directory context menu
   - ✅ Add to PATH

6. Click Install → Finish

### Verify Installation

1. Press `Windows key`, type **code**, press Enter

2. VS Code should open (blue icon, says "Visual Studio Code")

✅ **VS Code complete** — You have a code editor

---

## Step 4: Create Project Folder

### What is this?

A dedicated folder for all your website business files — scripts, templates, leads, everything in one place.

### How to Set Up

1. Open **File Explorer** (Windows key + E)

2. Go to your **Documents** folder

3. Right-click → **New** → **Folder**

4. Name it: `website-builder`

5. Double-click to open it

6. Right-click inside the empty folder → **Open in Terminal**
   - Or: Open Command Prompt, type `cd Documents\website-builder`

✅ **Project folder ready**

---

# Part 2: Setting Up Accounts

## Step 5: Create Apify Account (Lead Mining)

### What is Apify?

Apify runs "scrapers" — programs that automatically collect data from websites. We use it to pull business info from Google Maps.

**For this business:**
- Searches Google Maps for businesses
- Extracts: name, rating, reviews, phone, address, website
- Returns data we can filter and use

**Cost:** Free tier gives 30 scrapes/month. Paid plans from $49/month for more.

### How to Set Up

1. Go to: **https://apify.com**

2. Click **Sign Up** (top right)

3. Sign up with Google or email

4. Once logged in, click your **profile icon** (top right)

5. Click **Settings** → **Integrations**

6. Find **Personal API Tokens**

7. Click **+ Create new token**
   - Name it: `website-builder`
   - Click Create

8. **Copy the token** (looks like: `apify_api_xxxxxxxxxxxx`)

9. Save it somewhere safe (you'll need it later)

✅ **Apify account ready** — You can mine leads from Google Maps

---

## Step 6: Create Google Cloud Account (CRM Spreadsheet)

### What is this for?

We'll store leads in Google Sheets. To let our scripts automatically add leads, we need a "service account" — like a robot assistant that can edit spreadsheets.

### How to Set Up

1. Go to: **https://console.cloud.google.com**

2. Sign in with your Google account

3. You'll see "Google Cloud" dashboard

4. Click **Select a project** (top left) → **New Project**
   - Name: `website-builder`
   - Click Create

5. Wait for it to create (30 seconds)

6. Make sure your new project is selected (top left dropdown)

### Enable Google Sheets API

7. In the search bar at top, type: **Google Sheets API**

8. Click on **Google Sheets API** result

9. Click **Enable**

### Create Service Account

10. In search bar, type: **Service Accounts**

11. Click **Service Accounts** (under IAM & Admin)

12. Click **+ Create Service Account**
    - Name: `sheets-bot`
    - Click Create and Continue

13. For "Grant access" — skip it, click **Continue**

14. For "Grant users access" — skip it, click **Done**

### Get the Key File

15. Click on your new service account (`sheets-bot@...`)

16. Click **Keys** tab

17. Click **Add Key** → **Create new key**

18. Select **JSON** → Click Create

19. A file downloads (like `website-builder-xxxxx.json`)

20. **Move this file** to your `Documents\website-builder` folder

21. Rename it to: `google-credentials.json`

### Note the Email

22. Go back to Service Accounts list

23. Copy the service account email (looks like: `sheets-bot@website-builder.iam.gserviceaccount.com`)

24. Save this email — you'll need to share spreadsheets with it

✅ **Google Cloud ready** — Your scripts can now edit Google Sheets

---

## Step 7: Create Vercel Account (Website Hosting)

### What is Vercel?

Vercel hosts websites on the internet for free. When you deploy, they give you a live URL anyone can visit.

**For this business:**
- Hosts unlimited websites (free tier)
- Automatic HTTPS (secure)
- Fast global delivery
- Deploy with one command

### How to Set Up

1. Go to: **https://vercel.com**

2. Click **Sign Up**

3. **Sign up with GitHub** (recommended) or email
   - If you don't have GitHub: go to https://github.com, create account first

4. Once logged in, you're ready (we'll deploy later)

✅ **Vercel account ready** — You can put websites on the internet

---

## Step 8: Get AI Access (Website Generation)

### What is this for?

We use AI to generate website code. You describe what you want, it writes the code.

### Option A: Claude API (Recommended)

1. Go to: **https://console.anthropic.com**

2. Sign up / Sign in

3. Click **API Keys** in sidebar

4. Click **Create Key**
   - Name: `website-builder`

5. Copy the key (starts with `sk-ant-...`)

6. Add billing ($5 minimum, usage-based)

**Cost:** ~$0.01-0.05 per website generated

### Option B: OpenAI API

1. Go to: **https://platform.openai.com**

2. Sign up / Sign in

3. Click **API Keys** in sidebar

4. Click **Create new secret key**

5. Copy the key (starts with `sk-...`)

6. Add billing ($5 minimum)

### Option C: Cursor (Easiest for Beginners)

1. Go to: **https://cursor.com**

2. Download and install Cursor

3. Sign up (free tier works, Pro is $20/month)

4. Use AI chat built into the editor

✅ **AI access ready** — You can generate websites

---

# Part 3: Setting Up the Project

## Step 9: Install Project Files

### Open Your Project Folder in VS Code

1. Open VS Code

2. Click **File** → **Open Folder**

3. Navigate to `Documents\website-builder`

4. Click **Select Folder**

### Open Terminal in VS Code

5. In VS Code, click **Terminal** → **New Terminal**
   - A panel opens at bottom

### Install the Lead Mining Tool

6. In the terminal, type:
   ```
   npm init -y
   ```
   This creates a `package.json` file (project settings)

7. Then type:
   ```
   npm install apify-client googleapis
   ```
   This installs:
   - `apify-client` — Talks to Apify for scraping
   - `googleapis` — Talks to Google Sheets

### Create Environment File

8. In VS Code, click **File** → **New File**

9. Save it as `.env` (yes, starting with a dot)

10. Add these lines (replace with YOUR keys):
    ```
    APIFY_TOKEN=apify_api_your_token_here
    GOOGLE_CREDENTIALS_PATH=./google-credentials.json
    ```

11. Save the file

✅ **Project configured** — Dependencies installed, credentials ready

---

## Step 10: Create the Lead Mining Script

### What Does This Script Do?

1. Searches Google Maps for a business type + location
2. Filters for: 4+ stars, 20+ reviews, no website
3. Scores and ranks the leads
4. Outputs a file you can import to Google Sheets

### Create the Script

1. In VS Code, create a new file: `mine-leads.js`

2. Paste this code:

```javascript
const { ApifyClient } = require('apify-client');
require('dotenv').config();

// Initialize Apify client
const client = new ApifyClient({
    token: process.env.APIFY_TOKEN,
});

// CONFIGURE YOUR SEARCH HERE
const SEARCH_QUERY = 'Barbershops in East Legon, Accra';
const MIN_RATING = 4.0;
const MIN_REVIEWS = 10;

async function mineLeads() {
    console.log(`🔍 Searching for: ${SEARCH_QUERY}`);
    console.log('⏳ This takes 1-2 minutes...\n');

    // Run Google Maps scraper
    const run = await client.actor('nwua9Gu5YrADL7ZDS').call({
        searchStringsArray: [SEARCH_QUERY],
        maxCrawledPlacesPerSearch: 30,
        language: 'en',
        includeWebResults: false,
    });

    // Get results
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    
    console.log(`📊 Found ${items.length} businesses\n`);

    // Filter and score leads
    const leads = items
        .filter(place => {
            const rating = place.totalScore || 0;
            const reviews = place.reviewsCount || 0;
            const hasWebsite = place.website && place.website.length > 0;
            
            return rating >= MIN_RATING && reviews >= MIN_REVIEWS;
        })
        .map(place => {
            // Calculate lead score
            let score = 0;
            if (!place.website) score += 30;  // No website = hot lead
            if (place.reviewsCount > 100) score += 20;
            if (place.reviewsCount > 50) score += 10;
            if (place.totalScore >= 4.5) score += 10;
            if (place.totalScore >= 4.3) score += 5;

            return {
                name: place.title,
                rating: place.totalScore,
                reviews: place.reviewsCount,
                phone: place.phone || 'N/A',
                address: place.address,
                website: place.website || 'NONE',
                score: score,
                priority: score >= 60 ? 'A' : score >= 40 ? 'B' : 'C',
                mapsUrl: place.url,
            };
        })
        .sort((a, b) => b.score - a.score);

    // Display results
    console.log('🎯 QUALIFIED LEADS:\n');
    console.log('Priority A (Hot):');
    leads.filter(l => l.priority === 'A').forEach(l => {
        console.log(`  ⭐ ${l.name} (${l.rating}★, ${l.reviews} reviews) - ${l.website === 'NONE' ? 'NO WEBSITE' : 'Has website'}`);
    });
    
    console.log('\nPriority B (Warm):');
    leads.filter(l => l.priority === 'B').forEach(l => {
        console.log(`  📍 ${l.name} (${l.rating}★, ${l.reviews} reviews)`);
    });

    console.log('\nPriority C (Cool):');
    leads.filter(l => l.priority === 'C').forEach(l => {
        console.log(`  📌 ${l.name} (${l.rating}★, ${l.reviews} reviews)`);
    });

    // Save to file
    const filename = `leads-${Date.now()}.json`;
    require('fs').writeFileSync(filename, JSON.stringify(leads, null, 2));
    console.log(`\n✅ Saved ${leads.length} leads to ${filename}`);
    
    return leads;
}

// Run it
mineLeads().catch(console.error);
```

3. Save the file

### Install Additional Dependency

4. In terminal:
   ```
   npm install dotenv
   ```

✅ **Lead mining script ready**

---

## Step 11: Run Your First Lead Search

### Edit the Search Query

1. Open `mine-leads.js`

2. Find this line near the top:
   ```javascript
   const SEARCH_QUERY = 'Barbershops in East Legon, Accra';
   ```

3. Change it to whatever you want to search:
   - `'Restaurants in Osu, Accra'`
   - `'Hair salons in Kumasi'`
   - `'Guest houses in Cape Coast'`

### Run the Script

4. In VS Code terminal, type:
   ```
   node mine-leads.js
   ```

5. Wait 1-2 minutes (the scraper is searching Google Maps)

6. You'll see results printed:
   ```
   🔍 Searching for: Barbershops in East Legon, Accra
   ⏳ This takes 1-2 minutes...

   📊 Found 25 businesses

   🎯 QUALIFIED LEADS:

   Priority A (Hot):
     ⭐ Billionaire's Cut (5.0★, 63 reviews) - NO WEBSITE
     ⭐ HeadQuarters Styling (4.6★, 25 reviews) - NO WEBSITE
   
   Priority B (Warm):
     📍 Silver Haircut (4.3★, 71 reviews)
   
   ✅ Saved 18 leads to leads-1771234567890.json
   ```

7. A JSON file is created with all the lead details

✅ **First leads mined!**

---

# Part 4: Building Websites

## Step 12: Set Up Website Template

### Create Template Folder

1. In VS Code, right-click in the file explorer

2. **New Folder** → name it `templates`

3. Inside `templates`, create another folder: `barbershop`

### Initialize Next.js Project

4. In terminal:
   ```
   cd templates/barbershop
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
   ```

5. When prompted:
   - Would you like to use TypeScript? **Yes**
   - Would you like to use ESLint? **Yes**
   - Would you like to use Tailwind CSS? **Yes**
   - Would you like to use `src/` directory? **No**
   - Would you like to use App Router? **Yes**
   - Would you like to customize the import alias? **No**

6. Wait for installation (2-3 minutes)

### Test It Works

7. In terminal:
   ```
   npm run dev
   ```

8. Open browser to: **http://localhost:3000**

9. You should see the Next.js welcome page

10. Press `Ctrl + C` in terminal to stop

✅ **Template project created**

---

## Step 13: Generate Website with AI

### Using the AI to Build

Now we use AI to generate the actual website. You can use:
- Claude (console.anthropic.com)
- ChatGPT (chat.openai.com)
- Cursor (built-in AI)

### The Prompt

Copy this prompt and fill in the business details:

```
Create a professional website for a barbershop with these details:

Business Name: [NAME]
Location: [ADDRESS]
Phone: [PHONE NUMBER]
WhatsApp: [WHATSAPP NUMBER]

Requirements:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Sections: Navbar, Hero, Services, Gallery (placeholder), About, Contact, Footer
- Floating WhatsApp button (links to wa.me/[NUMBER])
- Color scheme: Dark/premium (black, gold accents)
- Mobile responsive
- SEO meta tags

Services offered:
- Haircut - GH₵50
- Beard Trim - GH₵30
- Hair & Beard Combo - GH₵70
- Kids Cut - GH₵40

Make it modern and clean. The hero should have a strong headline and clear call-to-action.
```

### Apply the Generated Code

1. AI will give you code for multiple files

2. Replace the contents of files in your template:
   - `app/page.tsx` — Main page
   - `app/layout.tsx` — Layout wrapper
   - `app/globals.css` — Styles

3. Create any new component files AI suggests

4. Run `npm run dev` to preview

5. Iterate with AI: "Make the hero bigger" / "Change colors to blue" / etc.

✅ **Website generated**

---

## Step 14: Deploy to Vercel

### First Time Setup

1. In terminal (inside your website folder):
   ```
   npm install -g vercel
   ```

2. Then:
   ```
   vercel login
   ```

3. It opens browser — log in to your Vercel account

### Deploy

4. In terminal:
   ```
   vercel
   ```

5. Answer the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name? (Press Enter for default, or type a name)
   - Directory? **./**.  (Press Enter)
   - Override settings? **N**

6. Wait for deployment (1-2 minutes)

7. You'll get a URL like: `https://your-project-name.vercel.app`

8. **That's your live website!**

### Share with Client

9. Copy the URL

10. Send to client: "I built you a preview website: [URL]"

✅ **Website is live on the internet**

---

# Part 5: The Business Workflow

## Daily Routine

### Morning (30 mins): Mine Leads

1. Open VS Code
2. Edit `mine-leads.js` — change search query
3. Run `node mine-leads.js`
4. Review results, pick 3-5 Priority A leads

### Midday (2-3 hours): Build Sites

1. For each lead:
   - Copy template folder
   - Fill in AI prompt with their details
   - Generate and customize site
   - Deploy to Vercel
2. Save URLs

### Afternoon (1 hour): Outreach

1. WhatsApp/call each business:
   ```
   "Hi! I noticed [Business Name] doesn't have a website. 
   I actually built you a preview — check it out: [URL]
   
   If you like it, I can customize it with your real photos 
   and content. Let me know!"
   ```

2. Track responses in Google Sheets

### Evening: Follow Up

1. Check for responses
2. Schedule calls with interested leads
3. Close deals

---

## Pricing Guide

| Package | Setup | Monthly | Includes |
|---------|-------|---------|----------|
| Basic | GH₵2,000 | GH₵100 | Website + WhatsApp booking |
| Pro | GH₵3,500 | GH₵200 | Basic + Payment processing |

---

## Revenue Projections

| Clients | Monthly Revenue | Your Time |
|---------|-----------------|-----------|
| 5 | GH₵500/month | 5 hrs/week |
| 10 | GH₵1,000/month | 8 hrs/week |
| 20 | GH₵2,000/month | 12 hrs/week |
| 30 | GH₵3,000/month | 15 hrs/week |

---

# Troubleshooting

## "command not found" errors

- Close and reopen Command Prompt/terminal
- Restart computer
- Reinstall the tool

## Script fails to run

- Check `.env` file has correct API keys
- Make sure you ran `npm install`
- Check for typos in code

## Website won't deploy

- Make sure you're logged into Vercel (`vercel login`)
- Check for build errors in terminal
- Run `npm run build` locally first to test

## Need help?

Ask the AI to debug: "I'm getting this error: [paste error]. How do I fix it?"

---

# Quick Reference

## Commands Cheat Sheet

```bash
# Check installations
node --version
npm --version
git --version

# Run lead mining
node mine-leads.js

# Start local website preview
npm run dev

# Deploy to Vercel
vercel

# Stop running server
Ctrl + C
```

## Key Files

```
website-builder/
├── .env                    # Your API keys (keep secret!)
├── google-credentials.json # Google service account
├── mine-leads.js          # Lead mining script
├── leads-XXXXX.json       # Mined leads
└── templates/
    └── barbershop/        # Website template
        ├── app/
        │   ├── page.tsx   # Main page
        │   └── layout.tsx # Layout
        └── package.json
```

---

**End of Tutorial**

You now have everything needed to:
1. ✅ Mine leads from Google Maps
2. ✅ Generate professional websites with AI
3. ✅ Deploy to the internet for free
4. ✅ Run a website-building business

Go get clients! 🚀
