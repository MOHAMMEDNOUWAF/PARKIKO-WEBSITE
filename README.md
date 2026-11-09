# PARKIKO – Valet Parking Service Website

Official business website for **PARKIKO – Valet Parking Service**, providing professional, modern, and reliable valet parking operations across hospitals, hotels, shopping malls, and commercial venues.

> **Park Smart. Live Stress Free.**

---

## 🚀 Tech Stack

- **React 19** – UI library
- **Vite 8** – Next-generation frontend tooling and ultra-fast bundler
- **Tailwind CSS v4** – Modern utility-first CSS framework
- **Lucide React** – Clean and consistent iconography

---

## 📁 Project Architecture

```
parkiko-web/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │       └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar & mobile drawer
│   │   ├── Hero.jsx          # Hero section with headline & direct CTAs
│   │   ├── Services.jsx      # Hospital, Hotel & Mall valet cards
│   │   ├── HowItWorks.jsx    # 4-step horizontal/vertical workflow
│   │   ├── WhyChooseUs.jsx   # 4 core benefits & operations commitment
│   │   ├── Organizations.jsx # Healthcare, Hospitality & Retail showcase
│   │   ├── ContactCTA.jsx    # Direct WhatsApp booking & proposal form
│   │   └── Footer.jsx        # Footer with brand & contact info
│   ├── config/
│   │   └── siteConfig.js     # Centralized brand, phone & WhatsApp config
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Centralized Configuration

All contact information, WhatsApp numbers, email addresses, and services are managed centrally in:
```javascript
src/config/siteConfig.js
```

- **Contact Phone:** `+91 96455 41691`
- **WhatsApp Support:** `+91 77368 15654`
- **Email:** `parkikoadmin@gmail.com`

---

## 🛠️ Development & Build

### Install dependencies
```bash
npm install
```

### Run local development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## 📄 License
All rights reserved © PARKIKO Valet Parking Service.
