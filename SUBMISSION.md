# OneStop ESG Internship Assignment - Submission

**Applicant**: Nayan Katiyara

**Position**: Software Engineering Intern

**Option Chosen**: Option 1 - Simple Blog App

**Submission Date**: November 9, 2025

**Time Spent**: ~5 hours

---

## 📋 Project Overview

I built a modern blog application using Next.js 16 (App Router), React 19, Prisma ORM, and MongoDB. The app showcases clean architecture, server/client component patterns, and professional UI/UX design with dark mode support.

**Live Features**:
- 📝 Blog post listing and detailed views
- 🌓 Dark mode with system preference detection
- ⚡ Server Components for optimal performance
- 🎨 Responsive design with Tailwind CSS 4
- 🔄 Loading states and error boundaries
- 📱 Mobile-first approach
- ♿ Accessible UI with semantic HTML

---

## 🏗️ Architecture Decisions

### 1. **Server vs Client Components**

**Server Components** (app/page.tsx, app/posts/[id]/page.tsx):
- Direct database access without API routes
- Better performance and SEO
- Reduced JavaScript bundle size
- Used for data fetching and static content

**Client Components** (components/PostCard.tsx, components/ThemeToggle.tsx):
- Interactive elements only (hover effects, dark mode toggle)
- Minimal client-side JavaScript
- Marked with `'use client'` directive

### 2. **Database Architecture**

**Prisma Singleton Pattern** (lib/prisma.ts):
- Prevents database connection exhaustion in development
- Single PrismaClient instance reused across requests
- Production-ready pattern

**MongoDB Schema**:
- Simple Post model with title, content, date fields
- ObjectId for primary keys
- Timestamps for created/updated tracking

### 3. **Static Site Generation (ISR)**

Implemented `generateStaticParams()` for post pages:
- Pre-renders all blog posts at build time
- Fast page loads with static HTML
- Can revalidate on-demand if needed

### 4. **Dark Mode Implementation**

**System Preference Detection**:
- Checks `prefers-color-scheme` media query
- Stores user preference in localStorage
- Inline script prevents flash of incorrect theme
- Smooth transitions between themes

---

## 🚀 Beyond the Requirements

While the assignment asked for basic functionality, I added several enhancements to demonstrate production-ready thinking:

### ✨ **Enhanced Features**

1. **Realistic Blog Content**
   Instead of generic "Lorem ipsum" posts, I curated 6 engaging tech articles about:
   - React Server Components
   - Building this project (meta!)
   - Prisma + MongoDB patterns
   - TypeScript lessons
   - Async/await best practices
   - Tailwind vs vanilla CSS

2. **Dark Mode**
   - System preference detection
   - LocalStorage persistence
   - No flash of incorrect theme
   - Smooth color transitions
   - Updated scrollbar styling

3. **SEO Optimization**
   - Dynamic metadata generation
   - Unique titles and descriptions per post
   - Open Graph ready

4. **Loading & Error States**
   - Skeleton loading screens
   - Custom 404 page
   - Error boundaries with recovery options

5. **Professional UI/UX**
   - Reading time calculation
   - Responsive grid layout
   - Hover animations
   - Clear visual hierarchy

---

## 💭 Challenges & Solutions

### Challenge 1: **Tailwind CSS 4 Breaking Changes**
**Problem**: The gradient syntax changed from `bg-gradient-to-r` to `bg-linear-to-r` in Tailwind v4.
**Solution**: Updated all gradient classes to use the new syntax. Learned to check version-specific documentation.

### Challenge 2: **Dark Mode Theme Flash**
**Problem**: Initial page load showed light theme briefly before switching to dark.
**Solution**: Added inline `<script>` in `<head>` to apply dark class before React hydration. This runs immediately on page load.

### Challenge 3: **Next.js 15+ Params Handling**
**Problem**: Dynamic route params became async in Next.js 15+.
**Solution**: Used `await params` pattern in both `generateMetadata()` and page component. Kept code future-proof.

### Challenge 4: **Seed Data Quality**
**Problem**: Generic blog posts looked fake and uninspiring.
**Solution**: Wrote realistic, engaging content based on my actual development experiences. Added variety in length and topics.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.1 | React framework with App Router |
| React | 19.2.0 | UI library |
| TypeScript | 5.x | Type-safe development |
| Prisma | 6.19.0 | Type-safe ORM |
| MongoDB | Atlas | NoSQL database |
| Tailwind CSS | 4.x | Utility-first styling |

---

## 📝 What I Learned

1. **Server Components are powerful**: Direct database access in components simplifies architecture significantly. No need for API routes for simple data fetching.

2. **Prisma + MongoDB works great**: The combination of MongoDB's flexibility and Prisma's type safety is underrated. Development speed is excellent.

3. **Dark mode needs careful implementation**: Theme flash prevention requires understanding of React hydration and DOM rendering lifecycle.

4. **Small details matter**: Realistic content, smooth transitions, and proper loading states make the difference between a demo and a product.

5. **TypeScript catches bugs early**: The type safety between Prisma schema and React components prevented numerous runtime errors during development.

---

## 🎯 If I Had More Time

Given additional time, I would add:

1. **Search Functionality** (1 hour)
   Client-side filtering by title/content with debounced input

2. **Tags/Categories** (2 hours)
   Organize posts by topics, filter by category

3. **Pagination** (1 hour)
   For scalability when post count grows

4. **Markdown Support** (2 hours)
   Rich text formatting with code syntax highlighting

5. **RSS Feed** (30 min)
   Auto-generated feed for blog readers

6. **Performance Monitoring** (1 hour)
   Web Vitals tracking, analytics integration

However, I consciously avoided scope creep to stay within the 2-4 hour guideline and focus on code quality over feature quantity.

---

## 🚀 Running the Project

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your MongoDB connection string

# Generate Prisma Client and sync schema
npx prisma generate
npx prisma db push

# Seed the database with blog posts
npx prisma db seed

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure Highlights

```
├── app/
│   ├── layout.tsx           # Root layout with header/footer, dark mode script
│   ├── page.tsx             # Homepage - lists all posts (Server Component)
│   ├── not-found.tsx        # Custom 404 page
│   └── posts/[id]/
│       ├── page.tsx         # Post detail with ISR (Server Component)
│       ├── loading.tsx      # Loading skeleton
│       └── error.tsx        # Error boundary
├── components/
│   ├── PostCard.tsx         # Post preview card (Client Component)
│   └── ThemeToggle.tsx      # Dark mode toggle (Client Component)
├── lib/
│   └── prisma.ts            # Prisma singleton pattern
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Realistic blog content
└── README.md                # Comprehensive documentation
```

---

## ✅ Assignment Requirements Checklist

- [x] Next.js with App Router
- [x] Pages for listing and viewing posts
- [x] Prisma with MongoDB integration
- [x] Server and Client Components used appropriately
- [x] Clean, minimal CSS with Tailwind
- [x] Professional code structure
- [x] Comprehensive README with setup instructions
- [x] `.env.example` included
- [x] Public GitHub repository

---

## 🙏 Final Thoughts

This assignment was a great opportunity to demonstrate both technical skills and product thinking. I focused on:

1. **Code Quality**: Clean, readable, maintainable code
2. **Architecture**: Proper use of Next.js patterns and best practices
3. **User Experience**: Dark mode, loading states, realistic content
4. **Documentation**: Clear README and this reflection document

I aimed to build something I'd be proud to show in production, not just a technical demo. Every decision—from the Prisma singleton pattern to dark mode implementation—reflects production-ready thinking.

Thank you for the opportunity to work on this assignment. I look forward to discussing my implementation and approach!

---

**Repository**: https://github.com/2003nayan/medium-blog-app

**Contact**: nayankatiyara03@gmail.com

**Portfolio**: https://nayankatiyara.in/