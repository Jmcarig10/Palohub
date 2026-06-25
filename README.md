# PaloHub - Intelligent Pickleball Court Booking & Tournament Management

An all-in-one web platform for streamlining pickleball court operations, tournament management, and community engagement.

## 🎯 Features

- **Court Booking System** - Real-time availability and online payments (GCash/Maya)
- **Open Play Hub** - Join public sessions with queuing and capacity tracking
- **Tournament Management** - AI-powered bracket generation and match scheduling
- **Leaderboard & Rankings** - Elo rating system and PaloPoints rewards
- **Player Community** - Profiles, match history, achievements
- **AI Performance Center** - Match analysis and personalized recaps
- **Admin Dashboard** - Revenue tracking, fraud detection, user management

## 🚀 Tech Stack

- **Frontend:** Next.js 14+, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **State Management:** TBD (Context API / Redux)
- **Backend:** TBD (Node.js / Express / Python)
- **Database:** TBD (PostgreSQL / MongoDB)

## 📁 Project Structure

```
palohub/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── court-booking/     # Court booking page
│   ├── open-play/         # Open play hub
│   ├── tournaments/        # Tournament center
│   ├── leaderboard/       # Rankings & leaderboard
│   ├── community/         # Community page
│   ├── dashboards/        # User dashboards
│   ├── about/             # About us
│   └── contact/           # Contact page
├── components/            # Reusable React components
├── public/                # Static assets
├── styles/                # Global styles
├── lib/                   # Utilities & helpers
├── types/                 # TypeScript definitions
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── .gitignore
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Jmcarig10/palohub.git
cd palohub

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser and navigate to http://localhost:3000
```

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

MIT

## 📧 Contact

For questions or support, please visit our [Contact Page](./app/contact)

---

**Reference:** Inspired by [CourtMaster](https://getcourtmaster.com/)
