# Getting Started

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Jmcarig10/palohub.git
cd palohub
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000` to see the application

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
palohub/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── court-booking/           # Court booking page
│   ├── open-play/               # Open play hub
│   ├── tournaments/             # Tournament center
│   ├── leaderboard/             # Rankings page
│   ├── community/               # Community page
│   ├── dashboards/              # User dashboards
│   ├── about/                   # About page
│   └── contact/                 # Contact page
├── components/
│   ├── Navbar.tsx               # Navigation component
│   ├── Footer.tsx               # Footer component
│   ├── Hero.tsx                 # Hero section
│   ├── UpcomingEvents.tsx        # Events showcase
│   ├── FeaturedLeaderboard.tsx   # Leaderboard preview
│   ├── CourtAvailability.tsx     # Court availability
│   └── CTASection.tsx            # Call-to-action section
├── public/                       # Static assets
├── types/                        # TypeScript definitions
├── lib/                          # Utility functions
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
└── .gitignore                    # Git ignore rules
```

## Available Routes

- `/` - Home page
- `/court-booking` - Court booking system
- `/open-play` - Open play sessions hub
- `/tournaments` - Tournament management center
- `/leaderboard` - Player rankings and statistics
- `/community` - Community and player profiles
- `/dashboards` - User dashboards (Player, Organizer, Admin)
- `/about` - About PaloHub
- `/contact` - Contact and support

## Technology Stack

- **Frontend Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Package Manager**: npm

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# API Configuration (TBD)
NEXT_PUBLIC_API_URL=http://localhost:3001

# Payment Gateways (TBD)
NEXT_PUBLIC_GCASH_API_KEY=your_key
NEXT_PUBLIC_MAYA_API_KEY=your_key
```

## Features (Planned)

- ✅ Court booking system
- ✅ Open play sessions
- ✅ Tournament management
- ✅ Player leaderboard
- ✅ Community platform
- 🔄 AI bracket generation
- 🔄 Payment integration (GCash/Maya)
- 🔄 Real-time notifications
- 🔄 Match analytics and recaps
- 🔄 PaloPoints reward system

## Contributing

1. Create a new branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Support

For questions or support, please visit [Contact Page](app/contact) or email support@palohub.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Roadmap

### Phase 1 (Current)
- Frontend UI and pages setup
- Component library development
- Navigation and routing

### Phase 2
- Backend API development (Node.js/Express)
- Database schema (PostgreSQL/MongoDB)
- User authentication and authorization

### Phase 3
- Payment integration (GCash/Maya)
- Real-time notifications
- AI features (bracket generation, match recaps)

### Phase 4
- Mobile app (React Native)
- Advanced analytics
- Community features expansion

---

**Reference**: Inspired by [CourtMaster](https://getcourtmaster.com/)
