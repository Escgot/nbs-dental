# 🦷 Dr. Nawres Ben Salah — Dental Clinic Platform

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, high-fidelity web platform for **Cabinet Dr. Nawres Ben Salah**, a modern dental clinic located in La Marsa, Tunis. Designed with a focus on luxury aesthetics, smooth animations, and seamless user experience.

---

## ✨ Key Features

- **💎 Premium Design System**: Custom glassmorphism aesthetic with a sophisticated color palette (`#253F31`, `#5E876C`).
- **📅 Interactive Booking**: A custom-built, multi-step reservation system featuring a dynamic calendar, time-slot selection, and automated summary.
- **🌍 Trilingual Support**: Full internationalization for **French, English, and Arabic** using a centralized dictionary (`translations.ts`) with RTL (Right-to-Left) layout switching.
- **📱 Ultra-Responsive**: Optimized for all devices, including a unique "card-stacking" animation for mobile services and glassmorphism UI.
- **⚡ High Performance**: Built with Vite 8 and React 19 for near-instant load times and efficient HMR.
- **🎨 Motion Experience**: Smooth reveals and micro-interactions powered by Framer Motion.
- **📍 Integrated Map & Schedule**: Live Google Maps integration and dynamic working hours display.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Utilities**: `clsx`, `tailwind-merge`, `date-fns`, `sonner` (Toasts), `vaul` (Drawers)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Escgot/nbs-dental.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Hero, Navbar, etc.)
├── ui/               # Base UI components (Radix/Shadcn)
├── Reservation/      # Booking system logic and styles
├── translations.ts   # i18n dictionary (FR, EN, AR)
├── App.tsx           # Main application entry
└── main.tsx          # Vite entry point
```

---

## 👨‍⚕️ About the Clinic

**Dr. Nawres Ben Salah** is a specialist in restorative and aesthetic dentistry. The clinic offers high-end services including:
- 🦷 Preventive Care & Scaling
- 💎 Dental Veneers (Ceramic)
- 🦷 Invisible Aligners
- ✨ Professional Teeth Whitening
- 🏗️ Dental Implants & Ceramic Crowns

**Location**: Immeuble Kmar Médical Center, La Marsa, Tunis.

---

## 📄 License

Private Project - All rights reserved.
