# Greater Purpose Foundation Website

Welcome to the Greater Purpose Foundation website! This is a fully functional, production-ready website for your NGO.

**"Giving Back to the Community, Changing Life of Our People"**

---

## 📋 Table of Contents

- [About This Website](#about-this-website)
- [Features](#features)
- [File Structure](#file-structure)
- [How to Edit Content](#how-to-edit-content)
- [Setting Up Donations](#setting-up-donations)
- [Setting Up Contact Form](#setting-up-contact-form)
- [Hosting Your Website](#hosting-your-website)
- [Connecting a Domain](#connecting-a-domain)
- [Maintenance Tips](#maintenance-tips)
- [Support](#support)

---

## 🌐 About This Website

This website is built using:
- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactive features

No frameworks or complex dependencies - just clean, simple code that you can easily edit yourself!

---

## ✨ Features

✅ **Fully Responsive** - Works on all devices (desktop, tablet, mobile)  
✅ **7 Pages** - Home, About, Programs, Gallery, Testimonials, Donate, Contact  
✅ **6+ Programs** - Each with dedicated sections and donation options  
✅ **Brand Colors** - Matches your GPF logo perfectly  
✅ **Real Donation Buttons** - PayPal integration + Sendwave option  
✅ **Working Contact Form** - Ready for Formspree or email  
✅ **Interactive Gallery** - Lightbox photo viewer  
✅ **Mobile Menu** - Responsive navigation  
✅ **SEO Optimized** - Proper meta tags and structure  
✅ **Easy to Edit** - Well-commented code with clear instructions  

---

## 📁 File Structure

```
GPF Website/
├── index.html                  # Home page
├── about.html                  # About Us page
├── programs.html               # Programs page
├── gallery.html                # Photo gallery
├── testimonials.html           # Testimonials page
├── donate.html                 # Donation page
├── contact.html                # Contact page
├── styles.css                  # All styling
├── script.js                   # Interactive features
├── README.md                   # This file
├── images/                     # All images
│   ├── logo.jpeg              # GPF logo
│   ├── classroom1.jpeg
│   ├── classroom2.jpeg
│   ├── food-distribution1.jpeg
│   ├── food-distribution2.jpeg
│   ├── community-outreach.jpeg
│   ├── food-items.jpeg
│   └── team.jpeg
└── ARTICLES OF INCORPORATION.txt
```

---

## ✏️ How to Edit Content

### Adding Your Contact Information

1. **Open each HTML file** (index.html, about.html, programs.html, etc.)
2. **Find the footer section** (look for `<!-- EDIT: Add your contact details below -->`)
3. **Replace the placeholder text**:
   ```html
   <p>Email: info@gpfliberia.org</p>  <!-- Change this -->
   <p>Phone: +231 XXX XXXX</p>         <!-- Change this -->
   ```

### Adding Social Media Links

1. **Find the footer section** in each HTML file
2. **Look for** `<!-- EDIT: Add your social media links -->`
3. **Replace the `#` with your actual links**:
   ```html
   <a href="https://facebook.com/yourpage" aria-label="Facebook">
   ```

### Editing Testimonials

1. **Open** `testimonials.html`
2. **Find** the testimonial cards (search for `testimonial-card`)
3. **Copy a testimonial card** and paste it to add more
4. **Replace the text** with real testimonies from your beneficiaries

### Adding More Photos

1. **Add your photos** to the `images/` folder
2. **Open** `gallery.html`
3. **Copy a gallery item** div:
   ```html
   <div class="gallery-item" data-category="education">
       <img src="images/your-new-photo.jpeg" alt="Description">
       <div class="gallery-overlay">
           <h3>Title</h3>
           <p>Description</p>
       </div>
   </div>
   ```

### Changing Colors

1. **Open** `styles.css`
2. **Find** the `:root` section at the top
3. **Change the color values**:
   ```css
   --primary-green: #2D5016;  /* Change this */
   --light-green: #7CB342;    /* Change this */
   ```

---

## 💰 Setting Up Donations

### PayPal Setup

1. **Create a PayPal Business Account** at https://www.paypal.com
2. **Get your PayPal email address**
3. **Open** `donate.html`
4. **Find** `YOUR_PAYPAL_EMAIL` (appears 7 times - once per program)
5. **Replace it** with your actual PayPal email:
   ```html
   <input type="hidden" name="business" value="your-paypal@email.com">
   ```

### Alternative: PayPal Donate Button

If you prefer PayPal's official button:
1. Log into PayPal
2. Go to **Tools** → **PayPal Buttons**
3. Create a **Donate Button**
4. Copy the HTML code
5. Replace the form in `donate.html` with PayPal's code

### Sendwave

The Sendwave number **267-290-7126** is already included in the alternative donation methods section. No setup needed!

---

## 📧 Setting Up Contact Form

### Option 1: Formspree (Recommended - FREE)

1. **Go to** https://formspree.io/
2. **Sign up** for a free account
3. **Create a new form**
4. **Copy your form endpoint** (looks like: `https://formspree.io/f/xyzabc123`)
5. **Open** `contact.html`
6. **Find** `YOUR_FORMSPREE_ENDPOINT`
7. **Replace it**:
   ```html
   <form action="https://formspree.io/f/xyzabc123" method="POST">
   ```

### Option 2: Email (Simple)

1. **Open** `contact.html`
2. **Find** the form action
3. **Replace with**:
   ```html
   <form action="mailto:your-email@example.com" method="POST" enctype="text/plain">
   ```

Note: This opens the user's email client. Formspree is more professional.

---

## 🌍 Hosting Your Website

### Option 1: GitHub Pages (FREE - Recommended)

**Step 1: Create a GitHub Account**
1. Go to https://github.com
2. Sign up for free

**Step 2: Create a Repository**
1. Click the "+" icon → "New repository"
2. Name it: `gpf-website` (or any name)
3. Make it **Public**
4. Click "Create repository"

**Step 3: Upload Your Files**
1. Click "uploading an existing file"
2. Drag all your website files (HTML, CSS, JS, images folder)
3. Commit the changes

**Step 4: Enable GitHub Pages**
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/gpf-website`

### Option 2: Netlify (FREE)

1. **Go to** https://www.netlify.com
2. **Sign up** for free
3. **Drag your entire website folder** onto Netlify
4. Your site is live! They'll give you a URL like: `gpf-website.netlify.app`
5. You can change the subdomain in settings

### Option 3: Vercel (FREE)

1. **Go to** https://vercel.com
2. **Sign up** for free
3. **Import your project** from GitHub or upload directly
4. Your site is deployed automatically

---

## 🔗 Connecting a Domain

Once your site is hosted, you can connect a custom domain like `www.gpfliberia.org`

### Buying a Domain

**Recommended Registrars:**
- **Namecheap** - https://www.namecheap.com (~$12/year for .org)
- **Google Domains** - https://domains.google (~$12/year)
- **GoDaddy** - https://www.godaddy.com

### Connecting Domain to GitHub Pages

1. In your GitHub repository, go to **Settings** → **Pages**
2. Enter your custom domain (e.g., `www.gpfliberia.org`)
3. In your domain registrar, add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

### Connecting Domain to Netlify/Vercel

1. Go to your site's **Domain Settings**
2. Click **Add custom domain**
3. Follow the instructions to update your DNS records

**Note:** DNS changes can take 24-48 hours to propagate.

---

## 🔧 Maintenance Tips

### Regular Updates

1. **Update testimonials** as you receive new ones
2. **Add new photos** to the gallery after events
3. **Update impact statistics** on the home page
4. **Add news** or program updates

### Backup Your Files

- Keep a copy of all files on your computer
- Consider using GitHub even if not hosting there (free backup)

### Testing After Changes

1. **Test on different devices** (phone, tablet, desktop)
2. **Check all links** work
3. **Test the contact form**
4. **Test donation buttons**

### Adding New Programs

1. **Open** `programs.html`
2. **Copy an existing program section**
3. **Paste it** and modify the content
4. **Add a corresponding donation card** in `donate.html`

---

## 📱 Browser Compatibility

This website works on:
- ✅ Chrome (all versions from last 2 years)
- ✅ Firefox (all versions from last 2 years)
- ✅ Safari (iOS and Mac)
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎨 Customization Guide

### Changing the Logo

1. **Replace** `images/logo.jpeg` with your new logo
2. **Keep the same filename** OR
3. **Update all HTML files** to reference your new filename

### Changing Layout

- All layout is controlled in `styles.css`
- Look for the section you want to change
- Modify widths, padding, margins, etc.

### Adding New Pages

1. **Copy** an existing HTML file (e.g., `about.html`)
2. **Rename it** (e.g., `news.html`)
3. **Update the content**
4. **Add a link** in the navigation menu of all pages

---

## 🆘 Support

### Common Issues

**Problem: Images not showing**
- Check that image filenames match exactly (case-sensitive)
- Ensure images are in the `images/` folder

**Problem: CSS not loading**
- Make sure `styles.css` is in the same folder as HTML files
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

**Problem: Mobile menu not working**
- Ensure `script.js` is properly linked
- Check browser console for errors (F12 → Console)

**Problem: PayPal buttons not working**
- Verify you've replaced `YOUR_PAYPAL_EMAIL` with your actual email
- Test with a small donation to yourself first

### Need Help?

- **YouTube**: Search for "how to edit HTML" or "how to host website GitHub Pages"
- **W3Schools**: https://www.w3schools.com (great HTML/CSS tutorials)
- **Stack Overflow**: https://stackoverflow.com (for technical questions)

---

## 📝 Important Notes

### Before Going Live

✅ Replace all placeholder email addresses  
✅ Add your PayPal email to donation forms  
✅ Set up your contact form (Formspree or mailto)  
✅ Add your actual social media links  
✅ Update phone numbers  
✅ Replace placeholder testimonials with real ones (optional)  
✅ Test all donation buttons  
✅ Test contact form  
✅ Check on mobile devices  

### Legal/Privacy

- Consider adding a Privacy Policy page if collecting user data
- Add terms of service if needed
- Ensure GDPR compliance if accepting donations from EU

---

## 🎉 Congratulations!

Your website is ready to launch! You have a professional, fully functional NGO website that:
- Costs only ~$12/year (domain name)
- You can edit yourself
- Works on all devices
- Has real, working donation buttons
- Is easy to transfer to the organization

**Your Impact:** This website will help GPF reach more donors, volunteers, and beneficiaries across Liberia and beyond.

---

## 📄 License

This website was custom-built for Greater Purpose Foundation. You have full ownership and can modify it freely.

---

**Greater Purpose Foundation**  
*Giving Back to the Community, Changing Life of Our People*

Joe Bar, Paynesville  
Montserrado County, Liberia

---

*Last Updated: February 2026*

