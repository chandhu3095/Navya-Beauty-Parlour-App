# 💄 Navya Beauty Parlour - Web & Mobile App

A modern, elegant **Beauty Parlour website** and mobile app designed and developed by **me**, combining my creative ideas with **ChatGPT's assistance** for technical guidance.

This project showcases my **frontend development skills** using the latest technologies, along with APK conversion for mobile usage.

---

## ✨ Features
- 🖼️ Elegant UI built with **ShadCN UI** & **Tailwind CSS**
- 📱 Fully responsive design (Web + Mobile)
- 📋 Service listings with premium styling
- 💬 WhatsApp direct booking integration
- 📅 Backend booking API (optional) to showcase full-stack skills
- 📦 Built with Vite for blazing-fast performance
- 📲 APK version available for direct mobile installation

---

## 🛠️ Tech Stack
- **Vite** (React + TypeScript)
- **Tailwind CSS**
- **ShadCN UI**
- **Capacitor** (for APK build)
- **Node.js / Express / MongoDB** (for optional backend booking system)

---

## 📂 Project Structure

navya-beauty-parlour/
│
├── src/ # Frontend source code
│ ├── assets/ # Images and media
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # ShadCN UI components
│ │ ├── BookingForm.tsx # Booking form component
│ │ └── Hero.tsx # Main landing section
│ ├── pages/ # App pages
│ ├── App.tsx # Main app file
│ └── main.tsx # Entry point
│
├── backend/ # Optional backend API
│ ├── models/ # Mongoose models (User, Booking)
│ ├── controllers/ # Express controllers
│ ├── routes/ # API routes
│ ├── config/ # DB connection
│ └── server.js # Server entry
│
├── android/ # Capacitor Android project
│
├── public/ # Public static assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md


---

## 🚀 Running the Project Locally
```bash
# 1️⃣ Clone the repository
git clone https://github.com/<yourusername>/navya-beauty-parlour.git

# 2️⃣ Navigate into the project
cd navya-beauty-parlour

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run development server
npm run dev

# 📱 Building the Mobile APK
npm run build && npx cap sync android && cd android && gradlew.bat assembleDebug


---

If you paste this into your **README.md** file and push to GitHub, your **Project Structure** will appear exactly as a **vertical tree** instead of a paragraph.  

Do you want me to also **push this README directly to your GitHub repo** so it’s live?
