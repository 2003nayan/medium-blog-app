# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Medium-style blog application built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and Prisma with MongoDB. The app displays blog posts in a card grid layout and allows users to read individual posts.

## Development Commands

- **Start dev server**: `npm run dev` (runs at http://localhost:3000)
- **Build**: `npm run build`
- **Start production**: `npm start`
- **Lint**: `npm run lint`

## Prisma/Database Commands

- **Generate Prisma Client**: `npx prisma generate`
- **Push schema changes**: `npx prisma db push` (for MongoDB - no migrations)
- **Seed database**: `npx prisma db seed` (creates 5 sample blog posts)
- **Open Prisma Studio**: `npx prisma studio`
- **Reset database**: `npx prisma db push --force-reset`

Note: This project uses MongoDB, so Prisma migrations are not applicable. Use `prisma db push` to sync schema changes.

### First-Time Setup
1. Ensure `.env` file has `DATABASE_URL` with MongoDB connection string (must include database name: `mongodb+srv://...mongodb.net/DATABASE_NAME?...`)
2. Run `npx prisma generate` to generate Prisma Client
3. Run `npx prisma db push` to sync schema with MongoDB
4. Run `npx prisma db seed` to populate with sample data

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Tailwind CSS 4
- **Database**: MongoDB via Prisma ORM
- **TypeScript**: Strict mode enabled
- **Additional**: dotenv for environment variables, ts-node for seed script

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Home page (lists all blog posts)
  - `posts/[id]/page.tsx` - Individual post page (Server Component with ISR)
  - `posts/[id]/loading.tsx` - Loading state for post pages
  - `posts/[id]/error.tsx` - Error boundary for post pages
  - `not-found.tsx` - Custom 404 page
  - `globals.css` - Tailwind styles
- `components/` - React components
  - `PostCard.tsx` - Client Component for post preview cards
- `lib/` - Utility code
  - `prisma.ts` - Singleton Prisma Client instance (prevents connection exhaustion)
- `prisma/` - Database schema and seeding
  - `schema.prisma` - Prisma schema with Post model (MongoDB)
  - `seed.ts` - Database seeding script (creates 5 sample posts)
- `public/` - Static assets
- `prisma.config.ts` - Prisma configuration file (uses dotenv)

### Database Schema
The `Post` model in [prisma/schema.prisma](prisma/schema.prisma) includes:
- `id` - MongoDB ObjectId (auto-generated)
- `title`, `content` - String fields for post data
- `date` - DateTime field for post date (used for sorting/display)
- `createdAt`, `updatedAt` - DateTime fields (auto-managed)

### Key Patterns

#### Prisma Client Singleton
[lib/prisma.ts](lib/prisma.ts) implements a singleton pattern to prevent database connection exhaustion in development. Import `prisma` from this file, not directly from `@prisma/client`.

#### Server Components with Direct DB Access
- [app/page.tsx](app/page.tsx) - Fetches all posts directly in Server Component
- [app/posts/[id]/page.tsx](app/posts/[id]/page.tsx) - Fetches single post directly in Server Component
- Uses `generateStaticParams()` for Static Site Generation (ISR)

#### Client Components
[components/PostCard.tsx](components/PostCard.tsx) is marked with `'use client'` because it uses interactive Link components with hover states. Keep Client Components minimal.

#### Database Seeding
[prisma/seed.ts](prisma/seed.ts) is configured in package.json with ts-node to seed the database with 5 sample blog posts about web development topics.

### Key Configuration
- Path alias `@/*` maps to root directory
- TypeScript target: ES2017
- MongoDB connection string in `.env` as `DATABASE_URL` (must include database name)
- ESLint uses Next.js config with TypeScript support
- Prisma config uses dotenv to load environment variables

## Environment Variables

Required environment variable in `.env`:
- `DATABASE_URL` - MongoDB connection string (format: `mongodb+srv://user:pass@host/DATABASE_NAME?options`)

## Important Notes

- This is a MongoDB-based project - do not attempt to use SQL migrations
- The project uses the Next.js App Router (not Pages Router)
- Tailwind CSS v4 is configured via PostCSS
- All components are Server Components by default unless marked with `'use client'`
- [prisma.config.ts](prisma.config.ts) loads `.env` via `import "dotenv/config"` - this is required for Prisma CLI commands
- Always import Prisma from [lib/prisma.ts](lib/prisma.ts), not directly from `@prisma/client`
- MongoDB connection strings must include the database name between the host and query parameters
