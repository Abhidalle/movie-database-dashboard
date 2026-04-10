# NextWatch - Persistent Movie Discovery Engine 🎬

NextWatch is a sleek, high-performance React application built to streamline how users discover and curate their cinematic queue. Moving beyond a standard database, NextWatch serves as a foundational prototype for a future AI-driven content studio, focusing on minimalism, speed, and data persistence.

## 🚀 Technical Highlights

- **Global State Management:** Orchestrated via the **React Context API**, ensuring a unified data stream between the discovery gallery and the user's personal queue.
- **Asynchronous Data Layer:** Fully integrated with the **TMDB API** using modern `async/await` patterns for real-time search and movie retrieval.
- **Optimized Persistence:** Implemented **Lazy State Initialization** with browser `localStorage`. This ensures saved data is retrieved synchronously during the initial mount, preventing UI flickers and redundant re-renders.
- **SPA Routing:** Managed by `react-router-dom` for seamless, zero-refresh navigation.
- **Stealth UI/UX:** A custom-built, dark-slate design system focused on content-first architecture, moving away from generic CSS templates.

## 🛠️ Tech Stack

- **Frontend:** React 18 (Hooks, Context API)
- **Build Tool:** Vite (Lightning-fast HMR)
- **Styling:** Modern CSS3 (Flexbox/Grid, Stealth-mode theme)
- **Deployment:** GitHub Codespaces / GitHub Pages

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI (MovieCard, NavBar)
├── contexts/       # Global State (MovieContext - The Brain)
├── css/            # Modular Stylesheets
├── pages/          # View Logic (Home, Favorites)
├── services/       # API Integration (TMDB fetch logic)
└── App.jsx         # Main Routing Hub
