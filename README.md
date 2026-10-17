# IMPETUS.AI — Annual AI/ML Symposium & Model-Building Challenge

> **"We Build. We Become."**

Welcome to the official repository for the **IMPETUS.AI** website. IMPETUS.AI is a premier inter-college coding and machine-learning challenge organized by the students of III Year Department of AIML & Cyber Security in association with **Epoch - 01** at Sree Sakthi Engineering College, Coimbatore.

---

## 📌 Table of Contents

- [About the Event](#-about-the-event)
- [Organized in Association with Epoch - 01](#-organized-in-association-with-epoch---01)
- [Epoch Members & Team](#-epoch-members--team)
- [Faculty Coordinators](#-faculty-coordinators)
- [Venue Details](#-venue-details)
- [Event Rules](#-event-rules)
- [Registration](#-registration)
- [Live Countdown Timer](#-live-countdown-timer)
- [Technical Architecture & Performance](#-technical-architecture--performance)
- [Project File Structure](#-project-file-structure)
- [Getting Started](#-getting-started)

---

## 🚀 About the Event

**IMPETUS.AI** bridges the gap between academic theory and real-world industry practice. The challenge encourages participants to build real-world machine learning projects from scratch using VS Code and open-source libraries, with a special focus on Edge AI.

### Key Highlights
- **Focus on Edge AI:** Demonstrating that machine learning models can run locally and efficiently on resource-constrained devices.
- **Hands-on Development:** Teams build their solutions using industry-standard libraries (NumPy, Pandas, Scikit-Learn, OpenCV, etc.) within Visual Studio Code.
- **Evaluation & Pitch:** Participants demonstrate their working pipeline and articulate model architecture to expert judges.
- **Tech Expo Showcase:** Outstanding projects earn an opportunity to be showcased at the upcoming Tech Expo.

---

## ⚡ Organized in Association with Epoch - 01

> *"Beginning a new epoch in artificial intelligence."*

**Epoch - 01** is a student-driven technical collective from the Department of AIML & Cyber Security dedicated to fostering technical excellence, collaborative innovation, and hands-on engineering experience.

---

## 👥 Epoch Members & Team

| Member ID | Name | Year & Department | Role / Responsibility |
| :--- | :--- | :--- | :--- |
| **Member 01** | **Sachin** | III Year AIML | **Team Leader** |
| **Member 02** | **Arockia Arun Jose** | III Year AIML | **Technical Lead** |
| **Member 03** | **Rajavarshan** | III Year AIML | **Networking Lead** |
| **Member 04** | **Dhesigan** | III Year AIML | **Design Lead** |
| **Member 05** | **Kishore Krishna** | III Year AIML | **Documentation Lead** |
| **Member 06** | **Jeevanraj** | III Year AIML | **Systems Administration** |
| **Member 07** | **Kishore Kumar** | III Year AIML | **Event Operations Coordinator** |
| **Member 08** | **Karanraj** | III Year AIML | **Outreach Coordinator** |

---

## 🎓 Faculty Coordinators

**Department of AIML & Cyber Security**, Sree Sakthi Engineering College

- **Event Coordinator:** Mr. Sivashankaran
- **Class Advisor:** Dr. P Shree Nandhini
- **Head of Department:** Ms. R Mohana Santhiya (HOD)

---

## 📍 Venue Details

- **Date:** 24 October 2026
- **Time:** 09:00 AM – 04:30 PM IST
- **Location:** CC LABS, Sree Sakthi Engineering College, Coimbatore

---

## 📜 Event Rules

1. Use only approved AI tools (e.g., ChatGPT, Claude, or Gemini) for guidance, code generation, debugging, and documentation.
2. Participants must build the project themselves; AI tools serve strictly as assistants.
3. Follow the complete machine learning pipeline (Data Preprocessing, Model Training, Evaluation, and Deployment).
4. Development environment must strictly be **Visual Studio Code (VS Code)**.
5. No VS Code AI coding extensions or auto-completion plugins are permitted during competition hours.
6. External AI coding assistants (Antigravity, Cursor, Windsurf, GitHub Copilot, Replit AI, etc.) are prohibited.
7. Internet access is restricted to approved AI tools and official technical documentation.
8. Teams must explain their code, model architecture, dataset, and pipeline during evaluation.
9. Datasets must be legally sourced, open-access, or provided by the event organizers with proper attribution.
10. Final submissions must include complete project source code, trained model artifacts, README, and pipeline documentation.

---

## 📝 Registration

Secure your spot for the IMPETUS.AI challenge:
👉 **[Register Now via Google Forms](https://forms.gle/Av6NxwszdfoJqSBJ8)**

Registration assistance and queries:
- **Phone:** +91 80151 70849 / +91 98430 93148
- **Email:** impetus.ssec@gmail.com

---

## ⏱️ Live Countdown Timer

The hero section features a real-time countdown timer displaying **Days**, **Hours**, **Minutes**, and **Seconds** with:
- **Cybernetic Digital Displays:** Monospaced, tabular numbers with glowing indicators.
- **Adaptive DOM Updates:** Updates every second with differential DOM diffing to eliminate unnecessary browser repaints.
- **Dynamic Status Indicator:** Automatically updates with an active glowing pulse dot and transitions to a live event state.

---

## 🛠️ Technical Architecture & Performance

The website is engineered for speed, mobile responsiveness, and visual polish using vanilla web technologies:

- **HTML5:** Semantic, accessible markup with preloaded Largest Contentful Paint (LCP) elements and descriptive metadata.
- **CSS3:** Custom cybernetic design system with CSS custom properties (variables), glassmorphic backdrops, smooth transitions, and responsive grid layouts.
- **JavaScript (ES6+):** Zero-dependency, lightweight script deferred for fast page parsing, featuring:
  - Mobile slide-out navigation drawer with backdrop overlay and keyboard (`Esc`) control.
  - Live synchronized event countdown timer.
  - Passive event listeners (`{ passive: true }`) for silky-smooth 60fps mobile scrolling.
- **Performance & Asset Optimizations:**
  - Modern WebP image formats with over 97% payload reduction.
  - Explicit `width` and `height` dimensions on all images to ensure **zero Cumulative Layout Shift (CLS)**.
  - Native `loading="lazy"` and `decoding="async"` for below-the-fold assets.
  - Full `@media (prefers-reduced-motion: reduce)` accessibility support.
  - Mobile layout verified for viewports from 360px up to 4K displays with zero horizontal overflow.

---

## 📂 Project File Structure

```
impetus_registration_site/
├── images/                   # Optimized WebP image assets
│   ├── CLG_logo.webp         # College navigation logo
│   ├── logo.webp             # IMPETUS hero logo (preloaded LCP)
│   ├── robot_bg.webp         # Futuristic background blueprint
│   ├── epoch_member_1.webp   # Jeevanraj (Systems Administration)
│   ├── epoch_member_2.webp   # Sachin (Team Leader)
│   ├── epoch_member_3.webp   # Kishore Kumar (Event Operations)
│   ├── epoch_member_4.webp   # Arockia Arun Jose (Technical Lead)
│   ├── epoch_member_5.webp   # Rajavarshan (Networking Lead)
│   ├── epoch_member_6.webp   # Karanraj (Outreach Coordinator)
│   ├── epoch_member_7.webp   # Dhesigan (Design Lead)
│   ├── epoch_member_8.webp   # Kishore Krishna (Documentation Lead)
│   ├── event_coordinator.webp# Event Coordinator photo
│   ├── class_advisor.webp    # Class Advisor photo
│   ├── hod.webp              # Head of Department photo
│   └── venue.webp            # Venue campus view
├── index.html                # Semantic HTML5 page structure
├── style.css                 # Cybernetic CSS styling, design system & media queries
├── script.js                 # Responsive navigation drawer & countdown timer logic
└── README.md                 # Project documentation
```

---

## 💻 Getting Started

### Local Development
To run and preview the website locally without any build step:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jeevanraj1302/impetus_registration_site.git
   cd impetus_registration_site
   ```

2. **Serve the directory:**
   - **Using Python 3:**
     ```bash
     python -m http.server 8000
     ```
   - **Using VS Code Live Server:** Right-click `index.html` and select **"Open with Live Server"**.
   - **Direct Browser:** Double-click `index.html` in your file explorer.

3. Open `http://localhost:8000` in your web browser.

---

© 2026 IMPETUS.AI — Department of AIML & Cyber Security, Sree Sakthi Engineering College. All rights reserved.
