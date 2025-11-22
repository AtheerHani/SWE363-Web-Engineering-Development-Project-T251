# حُجرة (Hujrah) — SWE363 Web Engineering Project (T251)

Project title: حُجرة (Hujrah) — Storage Unit / Space Booking Platform

Phase
-----
This repository currently contains the full Phase 4 — Front-end Development of the project. The front-end application and all UI work for this course project are implemented inside the `phase-4` folder. When the backend is ready in a later phase, the front-end will be updated to fetch live data from the API.

Description
-----------
This repository contains the front-end code for `حُجرة`, a web application for browsing and reserving storage spaces (rooms, basements, small units). The project is implemented with React and the `phase-4` folder contains the main front-end application.

Setup & Installation
--------------------
Prerequisites:
- Node.js (v16 or later recommended)
- npm (or yarn)

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd SWE363-Web-Engineering-Development-Project-T251
# install root-level tooling if needed (optional)
npm install

# install dependencies for the front-end (phase-4)
cd phase-4
npm install
```

Run the development server:

```bash
# from repo root (uses phase-4 start script)
npm run start:phase4

# or run in background (root script provided)
npm run start:phase4-bg

# or directly inside phase-4
cd phase-4
npm start
```

Build for production:

```bash
cd phase-4
npm run build
```

Usage Instructions & Examples
-----------------------------
- Open the dev server at: http://localhost:3000
- Currently the page uses hardcoded dummy data until we create the backend API.

Team
----
- Atheer Hani 
- Farah Hammad
- Dana Alyahya
- Dena Alharbi

Environment Variables & API
--------------------------

- `REACT_APP_API_URL` — Base URL for backend API (e.g. `https://api.example.com`)
- `REACT_APP_GOOGLE_MAPS_KEY` — (if used) Google Maps API key for map components

Place these in a local `.env` file at the `phase-4` folder (do NOT commit `.env`):

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_GOOGLE_MAPS_KEY=your_key_here
```

Best Practices
--------------
- Keep sensitive data out of the repository (never commit `.env` or API keys).
- Use the provided `.gitignore` to exclude `node_modules`, `build/`, IDE files, logs, and environment files.
- Make small, focused commits and keep descriptive commit messages.
- When the backend API is ready, update the front-end to fetch real reservation data instead of the current hardcoded values.

Where to find things
--------------------
- `phase-4/src/` — main React source code, components, and pages
- `phase-4/public/` — static assets and `index.html`
- `phase-4/package.json` — front-end scripts and dependencies

Contact / Support
-----------------
If you need help running the project or want to contribute, contact one of our team members mentioned above.
