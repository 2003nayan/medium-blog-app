# 📝 Insightful App

A modern, minimalist blog application built with Next.js 16, Prisma ORM, and MongoDB. This project demonstrates clean architecture, server/client component patterns, and professional UI/UX design.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)
![MongoDB](https://img.shields.io/badge/MongoDB-Cloud-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC)

## 📋 Assignment Context

**Created for**: OneStop ESG Assignment
**Option Chosen**: Option 1 - Simple Blog App with Next.js & Prisma
**Time Spent**: 3-4 hours
**Completed**: November 2025

This project demonstrates clean architecture, modern React patterns, and production-ready code quality. See [SUBMISSION.md](SUBMISSION.md) for detailed reflection and design decisions.

## ✨ Features

- 🚀 **Next.js 16 App Router** - Modern routing with server components
- 💾 **Prisma ORM** - Type-safe database access
- 🗄️ **MongoDB** - Flexible NoSQL database
- 🎨 **Tailwind CSS 4** - Utility-first styling with latest features
- ⚡ **Server Components** - Optimal performance with server-side rendering
- 🎯 **Client Components** - Interactive UI where needed
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessible** - Semantic HTML and ARIA labels
- ⏱️ **Reading Time** - Automatic calculation per post
- 🔄 **Loading States** - Skeleton screens for better UX
- ❌ **Error Handling** - Graceful error and 404 pages
- 🌓 **Dark Mode** - System preference detection with localStorage persistence (hydration-safe)
- 🎯 **SEO Optimized** - Dynamic metadata generation for each post
- 📊 **Realistic Content** - Engaging tech articles about modern web development
- 📖 **Reading Progress** - Visual progress bar for blog posts
- 🔗 **Social Sharing** - Share posts on Twitter, LinkedIn, or copy link
- 👤 **Portfolio Link** - Clickable footer attribution

## 🏗️ Architecture

### Server Components
- `app/page.tsx` - Homepage with posts list
- `app/posts/[id]/page.tsx` - Individual post view with related posts
- `app/layout.tsx` - Root layout with navigation and footer

### Client Components
- `components/PostCard.tsx` - Interactive post preview cards
- `components/ThemeToggle.tsx` - Dark/light mode switcher with hydration safety
- `components/ReadingProgress.tsx` - Scroll-based progress indicator
- `components/ShareButtons.tsx` - Social media share functionality

### Database
- Prisma schema with Post model
- MongoDB for data persistence
- Seeded with 6 engaging tech blog posts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier) or local MongoDB

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` and add your MongoDB connection string.

4. **Push database schema**
```bash
npx prisma generate
npx prisma db push
```

5. **Seed the database** (optional but recommended)
```bash
npx prisma db seed
```

6. **Run development server**
```bash
npm run dev
```

7. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
blog-app/
├── app/
│   ├── page.tsx                 # Homepage (Server Component)
│   ├── posts/
│   │   └── [id]/
│   │       ├── page.tsx         # Post detail (Server Component)
│   │       ├── loading.tsx      # Loading skeleton
│   │       └── error.tsx        # Error boundary
│   ├── layout.tsx               # Root layout with header/footer
│   ├── not-found.tsx            # Custom 404 page
│   └── globals.css              # Global styles
├── components/
│   ├── PostCard.tsx             # Post preview card (Client Component)
│   ├── ThemeToggle.tsx          # Dark mode toggle (Client Component)
│   ├── ReadingProgress.tsx      # Reading progress bar (Client Component)
│   ├── ShareButtons.tsx         # Social sharing buttons (Client Component)
│   └── PostCardSkeleton.tsx     # Loading state skeleton
├── lib/
│   ├── prisma.ts                # Prisma client singleton
│   └── utils.ts                 # Utility functions (reading time, etc.)
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Seed data with engaging content
├── .env                         # Environment variables (not committed)
├── .env.example                 # Example environment variables
├── README.md                    # This file
└── SUBMISSION.md                # Detailed submission notes
```

## 🎨 Design Decisions

### Server vs Client Components
- **Server Components** for data fetching (faster, better SEO)
- **Client Components** only for interactivity (cards, hover effects)

### UI/UX Principles
- **Mobile-first** responsive design
- **Generous whitespace** for readability
- **Visual hierarchy** with typography and color
- **Smooth transitions** for professional feel
- **Loading states** to reduce perceived wait time
- **Error handling** for better user experience

### Performance
- Server-side rendering for initial page load
- Optimized images and assets
- Minimal client-side JavaScript
- Efficient database queries with Prisma

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| React 19 | UI library with latest features |
| TypeScript 5 | Type-safe JavaScript |
| Prisma 6 | Type-safe ORM |
| MongoDB | NoSQL database |
| Tailwind CSS 4 | Utility-first CSS framework |
| Inter Font | Modern, readable typeface |

## 📝 Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma db seed   # Seed database with sample data
```

## 🔧 Prisma Commands
```bash
npx prisma generate      # Generate Prisma Client
npx prisma db push       # Push schema to database
npx prisma studio        # Open database GUI
npx prisma db seed       # Run seed script
```

## 🎯 Assignment Requirements

This project fulfills all requirements for the OneStop ESG assignment:

✅ Next.js with App Router  
✅ Pages for listing and viewing posts  
✅ Prisma with MongoDB integration  
✅ Server and Client Components used appropriately  
✅ Clean, minimal CSS with Tailwind  
✅ Professional code structure  
✅ Comprehensive documentation

## 🚧 Future Enhancements

- [ ] Add markdown support for post content
- [ ] Implement search functionality
- [ ] Add categories/tags system
- [ ] Create admin interface for post management
- [ ] Add comments system
- [ ] Implement pagination for large post lists
- [ ] Add user authentication and profiles
- [ ] Enable draft/publish workflow

## 📄 License

This project was created as part of a technical assessment for OneStop ESG.

## 👨‍💻 Author

**Nayan Katiyara**  

---

Built with ❤️ using Next.js and Prisma