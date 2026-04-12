# Faina Shpiler — The Rainbow Canvas
## GitHub Pages Portfolio — Setup & Usage Guide

---

## 📁 Folder Structure

```
fainashpiler.github.io/
├── index.html                    ← Homepage (hero + 9 category tiles)
├── about.html                    ← About page
├── contact.html                  ← Contact page
├── style.css                     ← Shared styles (all pages)
├── shared.js                     ← Shared JavaScript (cursor, nav, lightbox)
├── faina_photo.jpg               ← Your portrait photo
│
├── categories/
│   ├── the-fur-and-the-feathers.html
│   ├── human-stories.html
│   ├── shared-identities.html
│   ├── on-the-move.html
│   ├── serene-spaces.html
│   ├── bloom.html
│   ├── abstract.html
│   ├── hearts.html
│   └── circles-of-light.html
│
├── images/
│   ├── the-fur-and-the-feathers/   ← Drop paintings here
│   ├── human-stories/
│   ├── shared-identities/
│   ├── on-the-move/
│   ├── serene-spaces/
│   ├── bloom/
│   ├── abstract/
│   ├── hearts/
│   └── circles-of-light/
│
└── category-covers/
    ├── the-fur-and-the-feathers.jpg  ← Cover image for homepage tile
    ├── human-stories.jpg
    ├── shared-identities.jpg
    ├── on-the-move.jpg
    ├── serene-spaces.jpg
    ├── bloom.jpg
    ├── abstract.jpg
    ├── hearts.jpg
    └── circles-of-light.jpg
```

---

## 🚀 One-Time GitHub Setup

### Step 1: Push files to your repo

```bash
# In terminal, navigate to this folder
cd path/to/fainashpiler

# Initialize git and push
git init
git remote add origin https://github.com/fshpiler/fainashpiler.github.io.git
git add .
git commit -m "Phase 2: Multipage site"
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo on GitHub: `github.com/fshpiler/fainashpiler.github.io`
2. Click **Settings** (top tab)
3. Click **Pages** (left sidebar)
4. Under "Source", select **"Deploy from a branch"**
5. Choose branch: **main**, folder: **/ (root)**
6. Click **Save**

Your site will be live at `https://fshpiler.github.io/fainashpiler.github.io/` within a few minutes.

### Step 3: Point your custom domain

1. In GitHub Pages settings, add your custom domain: `fainashpiler.com`
2. Log in to Wix (where your domain is registered)
3. Go to Domains → DNS Settings
4. Delete any existing A records pointing to Netlify
5. Add these new A records:
   ```
   Type: A    Host: @    Value: 185.199.108.153
   Type: A    Host: @    Value: 185.199.109.153
   Type: A    Host: @    Value: 185.199.110.153
   Type: A    Host: @    Value: 185.199.111.153
   Type: CNAME Host: www  Value: fshpiler.github.io
   ```
6. Wait 10–30 minutes for DNS to propagate
7. Back in GitHub Pages settings, check "Enforce HTTPS"

---

## 🖼️ Adding New Paintings (Zero Code Changes)

### Adding a painting to a category:

1. Go to your repo on GitHub.com
2. Navigate to `images/` → choose the category folder (e.g. `images/bloom/`)
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop your `.jpg` files
5. Scroll down → click **"Commit changes"**

**That's it.** The painting appears on the category page automatically. No code edits needed.

### Adding a cover image for a category tile (homepage):

1. Navigate to `category-covers/` in your repo
2. Upload a file named exactly matching the category slug:
   - `the-fur-and-the-feathers.jpg`
   - `human-stories.jpg`
   - `shared-identities.jpg`
   - `on-the-move.jpg`
   - `serene-spaces.jpg`
   - `bloom.jpg`
   - `abstract.jpg`
   - `hearts.jpg`
   - `circles-of-light.jpg`
3. Commit — the homepage tile updates immediately.

### Image tips:
- **Format**: JPG preferred (smaller file size)
- **Max width**: 2400px is plenty (resize before uploading)
- **File size**: Try to keep under 1 MB each for fast loading
- **File names**: Use underscores or hyphens, no spaces
  - ✅ `sleeping_cat.jpg`
  - ✅ `sleeping-cat.jpg`
  - ❌ `sleeping cat.jpg`

---

## 🔄 How Dynamic Loading Works

Each category page uses the **GitHub Contents API**:

```
https://api.github.com/repos/fshpiler/fainashpiler.github.io/contents/images/bloom
```

This returns a list of all files in the folder. The page then builds the masonry grid
from that list — sorted alphabetically, displayed in 3 columns (desktop) or 2 (tablet)
or 1 (mobile).

**Rate limit**: The API allows 60 requests/hour without a token. For a personal portfolio 
this is never an issue. Each page visit = 1 API call.

---

## 🔒 Taking the Old Site Offline (faina.github.io)

To take the old `faina.github.io` offline:
1. Go to `github.com/fshpiler/faina.github.io`
2. Click **Settings**
3. Scroll down to the "Danger Zone"
4. Click **"Change repository visibility"** → **Private**

The site goes offline. The code is safe but no longer publicly accessible.

---

## ✏️ Making Text Edits

To edit the About bio, exhibitions list, or any text:

1. Go to the file on GitHub (e.g., `about.html`)
2. Click the **pencil icon** (Edit)
3. Make your changes
4. Scroll down → **"Commit changes"**

---

## 📌 Category Folder → Slug Reference

| Category Name | Folder Name |
|---|---|
| The Fur and the Feathers | `the-fur-and-the-feathers` |
| Human Stories | `human-stories` |
| Shared Identities | `shared-identities` |
| On the Move | `on-the-move` |
| Serene Spaces | `serene-spaces` |
| Bloom | `bloom` |
| Abstract | `abstract` |
| Hearts | `hearts` |
| Circles of Light | `circles-of-light` |
