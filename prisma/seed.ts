import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Delete existing posts (for clean slate)
  await prisma.post.deleteMany();

  // Create engaging blog posts with realistic content
  const posts = await prisma.post.createMany({
    data: [
      // === TECH STACK BLOGS ===
      {
        title:
          "Next.js 16 App Router: Why Server-First Architecture Changed My Development Process",
        content: `When I started using Next.js 16's App Router for this blog project, I initially thought it was just another routing solution. Three months in, I realized it fundamentally changed how I think about full-stack development.

The Game Changer: Server Components
The biggest shift was embracing Server Components. Instead of fetching data on the client and managing loading states with useState and useEffect, I fetch directly in the component. My dashboard load time dropped from 2.1s to 650ms just by moving data fetching server-side. No API route boilerplate, no N+1 queries—Prisma handles it elegantly.

The Developer Experience is Incredible
With App Router, I can organize routes by folders, and Next.js automatically handles the routing. Need a dynamic route for individual blog posts? Create a folder [id] and it just works. The file-based routing feels natural and scales beautifully. I went from 45 minutes setting up complex routing to building the entire structure in 10 minutes.

Type Safety Across the Stack
Using TypeScript with Server Components means my database types flow directly through my components. Prisma generates types from my schema, and those types are available immediately in my components. Autocomplete everywhere. Zero runtime surprises.

The Mental Model Takes Time
Understanding the boundary between Server and Client Components initially confused me. But once it clicked, everything became clear. Server Components for data fetching and business logic, Client Components for interactivity. This separation creates cleaner, more maintainable code.

Performance Wins Are Real
Static Site Generation with dynamic segments is powerful. My blog posts are pre-rendered at build time using generateStaticParams, but I can revalidate on-demand. Users get instant page loads with fresh content. The best of both worlds.`,
        date: new Date("2025-11-09"),
      },
      {
        title:
          "Prisma + MongoDB: The Production-Ready Combination Nobody Talks About",
        content: `Most tutorials pair Prisma with PostgreSQL, but I've discovered Prisma with MongoDB is incredibly powerful for rapid development and real-world applications. After shipping three projects with this stack, here's why it works.

Schema Flexibility Meets Type Safety
MongoDB's schemaless nature combined with Prisma's type-safe queries gives you the best of both worlds. I can iterate quickly on my data model without running migrations, but I still get full TypeScript autocomplete and compile-time type checking. For a blog app, this means I can add new fields to posts without deployment complexity.

Zero Migration Headaches
Unlike PostgreSQL migrations, MongoDB with Prisma uses db push. Schema changes are immediate—no migration files, no deployment sequences, no rollback anxiety. During development, I added a view_count field to posts in seconds. This speed is game-changing for early-stage projects and rapid iteration.

Elegant ObjectId Handling
MongoDB's _id field could be confusing, but Prisma handles it beautifully. I use @db.ObjectId and Prisma maps everything transparently. In my code, I just use id like any other database, and Prisma handles the MongoDB specifics. No manual conversions, no hassle.

Prisma Studio is Your Best Friend
Prisma Studio provides a visual interface to explore, query, and debug MongoDB data. Instead of using MongoDB CLI or compass repeatedly, I can visualize my data right in the IDE. It's saved me countless debugging hours when building relationships and validations for the blog.

Performance is Solid
MongoDB's document model works naturally with Prisma's patterns. Queries are fast, and the Prisma Client is highly optimized. For a blog with hundreds of posts, load times are instant. The database doesn't feel like a bottleneck—it feels like a natural part of the application.

The Only Gotcha: Limited Cascade Deletes
You can't use database-level cascading deletes with MongoDB in Prisma. It's a minor limitation for most apps. For my blog, I just handle deletions in code—a few extra lines that ensure data integrity without sacrificing flexibility.`,
        date: new Date("2025-11-08"),
      },
      {
        title:
          "TypeScript in Production: How Strict Mode Caught Bugs Before Users Did",
        content: `I committed to shipping production apps with TypeScript and strict mode enabled. No JavaScript escape hatches, no any types, proper types everywhere. This blog app is built that way, and it changed how I think about code reliability.

Week 1: The Pain Was Real
Fighting the compiler, writing verbose types, questioning every TypeScript decision. The friction compared to JavaScript felt unbearable. I almost dropped strict mode. The compiler errors seemed excessive—I just wanted to ship.

Week 3: The Mindset Shift
The compiler stopped feeling like an adversary and became my partner. Type errors started catching real bugs before runtime. I refactored the entire Prisma schema confidently because TypeScript caught every affected component. I changed a post title from string to { en: string, es: string } and TypeScript highlighted every place I needed to update.

Week 5: Autocomplete Became My Superpower
TypeScript's inference is magical. I stopped thinking about types and started thinking about solutions. Most types write themselves. Hovering over a Prisma query shows exactly what data it returns. Hovering over a function shows its parameters and return type. The IDE becomes an extension of my thinking.

The Real MVP: Discoverability
Type safety is great, but the killer feature is discoverability. I don't need to search documentation or dig through source code. Every function tells me exactly what it expects and what it returns. Building the blog was faster because I spent less time in documentation and more time coding.

Production Impact
Since using strict TypeScript, production errors dropped by 70%. Most bugs were caught during development. The time I save from not chasing runtime errors pays for the upfront typing effort many times over. Strict mode forced me to think through edge cases—missing posts, invalid data, network failures.

My Advice for Teams
Enable strict mode from day one. The pain is temporary—about two weeks of adjustment. After that, your velocity increases. Your code becomes more maintainable. Your team ships with confidence.`,
        date: new Date("2025-11-07"),
      },

      // === PERSONAL BLOGS ===
      {
        title:
          "From Frontend Intern to Full Stack Developer: My Journey in 12 Months",
        content: `A year ago, I started as a Frontend Intern at AI4M Technology. Today, I'm a Full Stack Developer. This journey from June 2024 to now has taught me that growth isn't linear—it's accelerating.

The Intern Phase: Learning Performance Optimization (June – Oct 2024)
My first role was modernizing legacy frontend pages using Next.js and Tailwind. I thought frontend meant styling and components. I was wrong. I dived into Core Web Vitals, code-splitting, React.lazy, intersection-observer lazy loading, and image optimization.

The results were tangible: 22% improvement in LCP and total page load time. Bounce rate dropped by 18%. These weren't theoretical improvements—they meant real users staying on the product longer. I learned that frontend development is about understanding how code translates to user experience.

The Trainee Phase: Building Internal Tools (Oct 2024 – May 2025)
Promotion to Full Stack Trainee meant building 3 internal automation tools. No more following designs—I owned the entire process. What should the database look like? How should the API work? What's the best UX for this workflow?

I engineered integrations for 5 external REST APIs into centralized dashboards. The result: 20% reduction in time-to-insight for teams. But the real learning was systems thinking. A frontend developer focuses on components. A full-stack developer thinks about data flow, caching strategies, and how multiple systems work together.

The Full Stack Developer Phase: Shipping at Scale (May 2025 – Present)
The biggest jump happened in May. I shifted from building tools to building products for B2B clients. Seven Next.js + TypeScript applications in production. Not toys, not internal tools—customer-facing applications.

I've integrated REST APIs and Firebase, refactored data flows, implemented caching strategies that reduced average data retrieval time by 25%. I've had to learn about accessibility (WCAG AA compliance), performance under production load, and handling real-world edge cases.

The Unexpected Lesson
The technical growth was expected. What surprised me was the mindset shift. As an intern, I worried about writing perfect code. As a full stack developer, I worry about shipping value. Perfect code that doesn't ship is worthless. Fast iterations that solve real problems are worth gold.

What I Wish I Knew
Documentation matters more than I thought. Performance optimization is a skill, not luck. You grow fastest when you're uncomfortable. Asking for help isn't weakness—it's intelligence. The best teachers are the colleagues who challenge your assumptions.

Looking Forward
I'm completing my B.Tech in AI & Machine Learning this year. The combination of formal education and hands-on experience has created a unique perspective. I can build the applications. I can optimize them. I'm now learning when to apply ML to solve real problems—not just because it's trendy.

This year taught me that career growth is about saying yes to challenging projects, learning from mistakes quickly, and always asking "how can this be better?"`,
        date: new Date("2025-11-06"),
      },
      {
        title: "Building CreatorsBrain: How I Shipped an AI SaaS in 3 Weeks",
        content: `CreatorsBrain was supposed to take a month. It took 3 weeks. Not because I worked harder, but because I made smarter architectural decisions. Here's what I learned building an AI-powered SaaS.

The Idea
YouTube creators spend hours manually analyzing video performance, extracting insights, and generating titles. CreatorsBrain automates this using Claude 3.7 APIs and automated transcript processing. The concept was simple. The execution required solving interesting problems.

Why Next.js Was Non-Negotiable
I chose Next.js because I needed full-stack speed. Frontend, backend, database—all in one codebase. I used Server Components for YouTube API calls and transcript processing. The API calls happen server-side, so API keys stay secure. The performance is instant because data is already server-side when the page renders.

This architectural choice saved me days. I didn't build separate backend and frontend. I didn't worry about CORS issues or managing API state. TypeScript types flowed from my database through my API routes through my components.

Convex DB: The Unsung Hero
I chose Convex DB for several reasons. Real-time synchronization meant user data updates instantly without polling. Transactional queries meant complex operations like "create user session + update subscription status" happened atomically.

Most importantly, Convex eliminates boilerplate. No authentication logic to write, no caching to manage. Their dashboard gave me instant visibility into my data and queries.

Authentication and Monetization
I integrated Clerk for authentication because I didn't want to manage passwords and sessions. Google OAuth meant users could sign up in one click. Clerk's documentation was excellent, integration took 2 hours.

For monetization, I implemented Stripe-based subscription tiers. Free tier for 5 analyses per month. Pro tier for unlimited analyses. Stripe's API is well-designed—integration and testing took less than 4 hours.

The Result
CreatorsBrain processes thousands of YouTube videos monthly. Users pay for convenience, not just functionality. The codebase is clean, maintainable, and ready to scale.

The Real Lesson
Speed isn't about working faster—it's about removing friction. Choose the right tools. Trust frameworks to handle complex problems. Spend your time on unique value, not reinventing wheels. That's how you ship in 3 weeks.`,
        date: new Date("2025-11-05"),
      },
      {
        title:
          "Why I Lead with Frontend but Think Full Stack: A Developer's Philosophy",
        content: `At BayzCrypt, I was a Frontend Lead for their Web3 NFT marketplace. The title was frontend, but I couldn't think frontend-only. Here's why that perspective became my superpower.

The Frontend Lead Role
My responsibility was architecting the entire frontend experience for an NFT marketplace. Design systems, component libraries, wallet authentication flows, theme management. It was frontend territory.

But the marketplace needed wallet connectivity. The frontend connected to smart contracts. Transactions had to be reliable, secure, and fast. I couldn't build a good frontend without understanding the backend implications.

Learning to Think Beyond the UI
I started asking questions a pure frontend developer might skip. How does the backend scale when thousands of users interact with smart contracts simultaneously? What happens if a transaction fails mid-process? How do we handle wallet disconnections gracefully?

These questions forced me to learn Express.js, smart contract basics, and system design. I wasn't becoming a backend developer—I was becoming a developer who understood the entire system.

The Wallet Authentication Breakthrough
The marketplace had a critical problem: wallet login success rate was 73%. Users got stuck during authentication. Most Frontend Leads would say "let me redesign the flow." I went deeper.

I studied the problem from both frontend and backend. Frontend-side: were we handling all wallet types? Were we catching errors properly? Backend-side: were we validating signatures correctly? Were we handling race conditions?

The solution involved frontend improvements (better error messages, retry logic) AND backend improvements (transaction queuing, signature validation refactoring). The success rate increased to 98%. This wouldn't have happened with a frontend-only mindset.

Why Full Stack Thinking Matters
Frontend Leads who only know frontend build UIs that ignore performance implications. They design flows that are beautiful but impossible to implement efficiently. They cause unnecessary backend complexity because they didn't think through the data requirements.

Full stack thinking means asking: "How will this scale? What are the failure modes? What data does this really need?" These questions lead to better designs and smoother implementation.

The Power of Ethers.js
When I learned ethers.js (Ethereum library), it wasn't an academic exercise. I learned it because I was building wallet integration and needed to understand smart contract interactions intimately. Frontend technology that connected to blockchain infrastructure. That's where the learning became concrete.

Refactoring for Reliability
I redesigned the entire wallet authentication flow with TypeScript and ethers.js. What looked like a frontend feature (wallet login) actually required understanding cryptographic signatures, contract interactions, and error handling.

The result: wallet login success rate increased 35%. But more importantly, I understood why it increased. Not because of UI polish, but because I thought through the entire system.

My Advice for Frontend Engineers
Don't stay siloed. Learn how your code connects to databases, APIs, and infrastructure. Understand the full request lifecycle. When you know backend constraints, you design better frontends.

You'll write cleaner code. You'll anticipate bugs before they happen. You'll ship features faster because you understand the implications.

I'm still a frontend specialist—that's where my passion is. But I think full stack. That's the real superpower.`,
        date: new Date("2025-11-04"),
      },
    ],
  });

  console.log(`✅ Created ${posts.count} blog posts`);
  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
