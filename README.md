# 🌌 Nebula Tech-Noir Portfolio

A premium, interactive Data Science & AI Engineering portfolio built with Next.js, Framer Motion, and TailwindCSS. Featuring a high-fidelity "Nebula" aesthetic with real-time editing capabilities and automated contact handling.

## 🚀 Key Features

- **Interactive Navigation**: Sliding cursor navigation with edge-detection and smooth page transitions.
- **Profile Editor**: Built-in `/profile` dashboard to live-edit every section of the portfolio (persisted via Zustand & LocalStorage).
- **Automated Contact Form**: Integrated with Nodemailer and Gmail API for direct-to-inbox lead generation.
- **Responsive Design**: Fluid layouts optimized for all devices with premium glassmorphism effects.
- **Tech-Noir Aesthetic**: Custom-built design system with scanlines, dot-matrix backgrounds, and electric cyan accents.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Forms**: [Nodemailer](https://nodemailer.com/)

## 📦 Deployment (Vercel)

1. **Environment Variables**:
   Set the following in your Vercel Project Settings:
   - `GMAIL_USER`: Your Gmail address.
   - `GMAIL_APP_PASSWORD`: Your 16-character Google App Password.

2. **Deploy**:
   The project is ready for one-click deployment on Vercel.

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Create a `.env.local` file with your `GMAIL_USER` and `GMAIL_APP_PASSWORD`.

3. **Run Dev Server**:
   ```bash
   npm run dev
   ```

---
Built by **Vaidnyani Thakare**
