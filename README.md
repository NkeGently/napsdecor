# Nap's Interior Decor — Website

Built with **Next.js 15** + **Tailwind CSS** | Black & Gold luxury theme  
Dark/Light mode toggle included ☀️🌙

---

## 🚀 Quick Start

```bash
# 1. Install (use this exact command)
npm install --legacy-peer-deps

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

---

## 📧 Step 1 — Set Up EmailJS (Contact Form)

1. Open `.env.local` in the project root
2. Go to **https://www.emailjs.com** → Create free account
3. **Email Service** → Add New Service → Connect Gmail (arraknapoleon6@gmail.com) → Copy Service ID
4. **Email Template** → Create New Template → Use these variables:
   ```
   New message from: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service: {{service}}
   
   {{message}}
   ```
   Set "To Email" to: arraknapoleon6@gmail.com → Copy Template ID
5. **Account → API Keys** → Copy Public Key
6. Paste all 3 values in `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_value
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_value
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_value
   ```

---

## 🎥 Step 2 — Add Your TikTok Videos

**Getting a TikTok video ID:**
1. Go to your TikTok video on desktop/browser
2. Click Share → Copy Link → You get something like:
   `https://www.tiktok.com/@arrahnapol/video/7234567890123456789`
3. The long number at the end is your **video ID**: `7234567890123456789`

**Adding to Homepage (Recent Works section):**
Open `components/home/VideoShowcase.tsx` and replace:
```js
tiktokId: "REPLACE_WITH_TIKTOK_VIDEO_ID_1",  →  tiktokId: "7234567890123456789",
```

**Adding to Gallery:**
Open `app/gallery/page.tsx` and replace similarly.

---

## 📸 Step 3 — Add Your Own Photos

1. Put your photo files in: **`public/images/works/`**
   - Compress first at https://squoosh.app (keep under 500KB each)
   
2. In `app/gallery/page.tsx`, add items to the `portfolio` array:
```js
{
  type: "image",
  category: "Living Room",  // Living Room | Kitchen | Bedroom | Apartment | Commercial
  title: "My Project Name",
  src: "/images/works/your-photo.jpg",
  alt: "short description",
},
```

3. Remove the placeholder items (marked with comments) once you've added real ones.

---

## 🌙 Dark / Light Mode

The theme toggle button is in the top navbar (sun/moon icon).  
Settings are saved to localStorage automatically.

---

## 🌐 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to **https://vercel.com** → Import your GitHub repo
3. Add your environment variables in Vercel dashboard:
   - Settings → Environment Variables → paste your 3 EmailJS values
4. Done! Your site is live.

After deploying, update the domain in:
- `app/sitemap.ts` — change `napsinteriordecor.com` to your real domain
- `app/layout.tsx` — update the `openGraph.url`

---

## 📁 Project Structure

```
naps-interior/
├── .env.local                    ← 🔑 EmailJS keys go here
├── public/
│   └── images/
│       └── works/               ← 📸 YOUR PHOTOS go here
├── app/
│   ├── layout.tsx               ← Root layout + fonts + SEO
│   ├── globals.css              ← Dark/light theme CSS variables
│   ├── page.tsx                 ← Homepage
│   ├── about/page.tsx           ← About page
│   ├── gallery/page.tsx         ← Portfolio gallery (YOUR PHOTOS + VIDEOS)
│   ├── contact/page.tsx         ← Contact form (EmailJS)
│   ├── sitemap.ts               ← Auto SEO sitemap
│   └── robots.ts                ← SEO robots
└── components/
    ├── Navbar.tsx               ← Nav + dark/light toggle
    ├── Footer.tsx               ← Footer + social links
    ├── WhatsAppButton.tsx       ← Floating WhatsApp button
    ├── ThemeProvider.tsx        ← Dark/light mode logic
    └── home/
        ├── HeroSection.tsx      ← Hero slider (Unsplash backgrounds)
        ├── StatsSection.tsx     ← Animated counters
        ├── ServicesSection.tsx  ← Services grid
        ├── VideoShowcase.tsx    ← 3 TikTok videos
        ├── TestimonialSection.tsx
        └── CTASection.tsx
```

---

## 🔗 Social Links (already connected)

| Platform | Link |
|----------|------|
| TikTok | https://www.tiktok.com/@arrahnapol |
| Facebook | https://www.facebook.com/share/1DN5WjdXd2/ |
| WhatsApp | +237 678 66 72 22 |
| Email | arraknapoleon6@gmail.com |

---

Built with ❤️ for Nap's Interior Decor
