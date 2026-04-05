# Marina DiPonio — Freelance Web Design Portfolio

A clean, responsive portfolio site built with plain HTML, CSS, and JavaScript.  
Hosted for free on **GitHub Pages** with a custom domain.

---

## 📁 File Structure

```
portfolio/
├── index.html       ← Main page (all 3 "pages" are in here)
├── styles.css       ← All styling
├── script.js        ← Navigation + Formspree form handler
├── images/
│   ├── logo.png     ← Your logo (already included)
│   ├── emma-screenshot.png      ← (YOU ADD THIS)
│   ├── miles-screenshot.png     ← (YOU ADD THIS)
│   └── startea-screenshot.png   ← (YOU ADD THIS)
└── README.md        ← This file
```

---

## 🖼️ Step 1: Take Full-Page Screenshots

The auto-scrolling effect uses **tall screenshot images** of each website.

1. Install the free Chrome extension **"GoFullPage"**
   → https://chrome.google.com/webstore/detail/gofullpage/fdpohaocaechififmbbbbbknoalclacl
2. Visit each of your 3 websites
3. Click the GoFullPage icon → it captures the entire page
4. Download as PNG
5. Rename and save into the `images/` folder:
   - `emma-screenshot.png`
   - `miles-screenshot.png`
   - `startea-screenshot.png`

Then open `index.html` and for each project:
- **Delete** the `<div class="placeholder-page" ...></div>` line
- **Uncomment** the `<img src="images/..." class="scroll-image" />` line above it

---

## 🔗 Step 2: Update Your Links

Open `index.html` and search for these comments to update:

- **LinkedIn URL** — Find `<!-- UPDATE: Replace # with your actual LinkedIn URL -->` and change the `href="#"` to your LinkedIn profile URL
- **Email** — Find `mailto:hello@marinadiponio.com` and change to your actual email

---

## 🚀 Step 3: Upload to GitHub

1. Go to **github.com** and sign in (or create an account)
2. Click the **+** button (top right) → **New repository**
3. Name it whatever you want (e.g., `freelance-portfolio`)
4. Keep it **Public** (required for free GitHub Pages)
5. Click **Create repository**
6. On the next screen, click **"uploading an existing file"**
7. Drag and drop ALL your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (with logo + screenshots)
8. Click **Commit changes**

---

## 🌐 Step 4: Enable GitHub Pages

1. In your repository, go to **Settings** (tab at the top)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/freelance-portfolio/`

---

## 🏷️ Step 5: Connect a Custom Domain

### A. Buy a domain
Recommended registrars (all ~$10-15/year):
- **Porkbun** (porkbun.com) — cheapest, great UI
- **Namecheap** (namecheap.com) — very popular
- **Cloudflare** (cloudflare.com/products/registrar) — at-cost pricing

### B. Add the domain in GitHub
1. In your repo → **Settings** → **Pages**
2. Under "Custom domain", type your domain (e.g., `marinadiponio.design`)
3. Click **Save**
4. Check the box **"Enforce HTTPS"** (may take a few minutes to appear)

### C. Set up DNS at your registrar
Go to your registrar's DNS settings and add these records:

**For the root domain (marinadiponio.design):**

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 185.199.108.153    |
| A     | @    | 185.199.109.153    |
| A     | @    | 185.199.110.153    |
| A     | @    | 185.199.111.153    |

**For the www subdomain:**

| Type  | Name | Value                                        |
|-------|------|----------------------------------------------|
| CNAME | www  | YOUR-USERNAME.github.io                      |

Replace `YOUR-USERNAME` with your actual GitHub username.

DNS propagation takes **10 minutes to 48 hours** (usually under 1 hour).

---

## ✏️ Making Changes Later

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes**
6. GitHub Pages will auto-update in ~1 minute

### Adding a new project:
1. Take a full-page screenshot of the new website
2. Upload it to the `images/` folder
3. In `index.html`, copy one of the existing `<!-- Project -->` blocks
4. Update the title, subtitle, tags, URL, and image path
5. Commit!

---

## 📬 Contact Form

The contact form uses **Formspree** (formspree.io).  
It's already connected to your endpoint: `https://formspree.io/f/xojppnrj`

Submissions will go directly to the email you registered with on Formspree.  
You can manage your form, view submissions, and change settings at:  
→ https://formspree.io/forms

---

Enjoy your new portfolio! ✨
