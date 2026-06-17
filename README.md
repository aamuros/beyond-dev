# beyond.dev — Custom Software Studio Website

A full-stack website for beyond.dev, a premium software development studio. Built with Next.js, React, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (Credentials provider)
- **Email**: Nodemailer
- **Validation**: Zod
- **Animation**: Framer Motion
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or remote)

### Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the environment file and configure your values:

```bash
cp .env.example .env
```

Edit `.env` with your database URL, email settings, and secrets.

3. Set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed with sample data
npx tsx prisma/seed.ts

# Create admin user (set ADMIN_PASSWORD in .env first)
npx tsx src/data/seed-admin.ts
```

`ADMIN_PASSWORD` must be set in `.env` before running the admin seed script.

4. Start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── (public)/           # Public website pages
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes (auth, contact)
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections
│   └── admin/              # Admin components
├── lib/                    # Utilities (auth, email, prisma, rate-limit, seo, validations)
└── data/                   # Seed scripts
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/services` | Services overview |
| `/process` | Development process |
| `/work` | Case studies listing |
| `/work/[slug]` | Individual case study |
| `/team` | Team members |
| `/pricing` | Engagement models |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/admin` | Admin dashboard |
| `/admin/login` | Admin login |

## Admin Features

- Dashboard with lead counts and recent activity
- Lead management (view, filter, status updates, delete)
- Case study CRUD
- Team member CRUD
- Testimonial CRUD

## Design

Dark-mode-first with monochrome aesthetics:
- Deep charcoal backgrounds (`#08090a`)
- White accent (`#f7f8f8`) — structure and contrast over color
- Inter + Geist Mono typography
- Scroll-reveal animations
- Fully responsive
- Accessible (keyboard nav, ARIA, reduced motion)

See [DESIGN.md](./DESIGN.md) for the full design system.

## Deployment

### Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Production server
- `npm run lint` — ESLint
- `npm run db:generate` — Generate Prisma client
- `npm run db:migrate` — Run migrations
- `npm run db:seed` — Seed database
- `npm run db:studio` — Prisma Studio
