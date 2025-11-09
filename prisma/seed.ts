import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Delete existing posts (for clean slate)
  await prisma.post.deleteMany();

  // Create engaging blog posts with realistic content
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "Why React Server Components Are a Game Changer",
        content: `After building production apps with React Server Components for six months, I can confidently say they've fundamentally changed how I architect applications. Here's what I've learned.

The biggest shift is mental: you start thinking server-first. Instead of fetching data on the client and managing loading states, you fetch directly in your components. No useState, no useEffect, no loading spinners for initial data.

Performance wins are real. My dashboard load time dropped from 2.3s to 800ms by moving data fetching to the server. Users see content immediately, not loading skeletons.

The developer experience is incredible. Accessing databases, file systems, and APIs directly in components feels natural. No more API route boilerplate for simple data fetching.

The learning curve exists, though. Understanding the boundary between server and client components takes time. But once it clicks, you'll wonder how you built apps before.

Server Components aren't a silver bullet - you still need client components for interactivity. The magic is using both together effectively.`,
        date: new Date("2025-10-15"),
      },
      {
        title: "Building This Blog: Next.js 16 + Prisma + MongoDB",
        content: `I built this blog application as a technical assignment, and it turned into a great learning experience. Here's what I discovered along the way.

The stack is modern: Next.js 16, React 19, Prisma ORM, and MongoDB. I chose MongoDB for its flexibility and Prisma for type-safe database queries. The combination works beautifully.

Server Components handle all data fetching. Each page directly queries the database without API routes. This simplifies architecture and improves performance. The code is cleaner and easier to maintain.

I implemented Static Site Generation (ISR) for blog posts using generateStaticParams. Posts are pre-rendered at build time but can be revalidated. Best of both worlds: speed and freshness.

Error boundaries and loading states were essential. The app handles missing posts gracefully with a custom 404 page. Loading skeletons provide visual feedback during navigation.

TypeScript caught so many bugs during development. The type safety between Prisma and React components is incredible. Autocomplete works everywhere.

Tailwind CSS 4 made styling effortless. The new syntax is cleaner, and the utility-first approach keeps styles consistent without writing custom CSS.

The entire project took about 4 hours from start to finish. Modern tools make building production-ready applications remarkably fast.`,
        date: new Date("2025-11-07"),
      },
      {
        title: "The Prisma + MongoDB Combination Nobody Talks About",
        content: `Everyone talks about Prisma with PostgreSQL, but Prisma with MongoDB is underrated. After using it in production, here's why it works so well.

Schema flexibility meets type safety. MongoDB's schemaless nature combined with Prisma's type-safe queries gives you the best of both worlds. You can iterate quickly while maintaining code quality.

No migration headaches. With MongoDB, you use db push instead of migrations. Schema changes are immediate. This speeds up development significantly, especially in early stages.

The @db.ObjectId mapping is crucial. Prisma handles MongoDB's _id field elegantly. You work with id in your code, Prisma handles the mapping. No manual conversions needed.

Prisma Studio works beautifully with MongoDB. You get a visual interface to explore your data, run queries, and debug issues. It's saved me countless hours.

Performance is solid. MongoDB's document model works naturally with Prisma's relation loading. Queries are fast, and the generated Prisma Client is optimized.

The only gotcha: you can't use some Prisma features like database-level cascading deletes. But for most applications, this limitation is minor.`,
        date: new Date("2025-10-28"),
      },
      {
        title: "Lessons from 100 Days of TypeScript",
        content: `I committed to using TypeScript exclusively for 100 days. No JavaScript files, strict mode enabled, proper types everywhere. Here's what happened.

Week 1 was painful. Fighting the compiler, writing verbose types, questioning every decision. I almost quit. The friction felt unbearable compared to JavaScript's freedom.

Week 3: the compiler became a partner. Type errors started catching real bugs before runtime. Refactoring became fearless. I could change interfaces and fix all affected code with confidence.

Week 6: I stopped thinking about types. TypeScript's inference is magical. Most types write themselves. I only annotate when necessary, usually function parameters and return types.

Week 10: I can't imagine going back. The IDE experience is transformative. Autocomplete everywhere, inline documentation, instant error detection. I'm significantly more productive.

The killer feature isn't type safety—it's discoverability. Hovering over a function shows exactly what it expects and returns. No more digging through documentation or source code.

Type safety is a welcome side effect. Most of my bugs were caught at compile time. Production errors dropped noticeably. TypeScript paid for itself in prevented bugs alone.

My advice: embrace strict mode from day one. The pain is temporary. The benefits are permanent. Your future self will thank you.`,
        date: new Date("2025-10-20"),
      },
      {
        title: "Mastering Async/Await: Patterns I Wish I Knew Earlier",
        content: `Async/await transformed JavaScript, but I spent years using it wrong. These patterns would have saved me countless debugging hours.

Pattern 1: Always use try/catch in async functions. Unhandled promise rejections are silent killers. Wrap your awaits in try/catch blocks or use a global error boundary. Your logs will thank you.

Pattern 2: Promise.all for parallel operations. Don't await in loops—you're running operations sequentially. Use Promise.all to run them in parallel. My API response time dropped from 3s to 500ms with this one change.

Pattern 3: Promise.allSettled when you need all results. Unlike Promise.all, it doesn't fail fast. You get every result, whether fulfilled or rejected. Perfect for batch operations where some failures are acceptable.

Pattern 4: Avoid async in forEach. Array.forEach doesn't handle async well. Use for...of instead, or map with Promise.all. This bug cost me a production incident.

Pattern 5: Be careful with Promise.race. It resolves with the first settled promise but doesn't cancel others. Those operations still run in the background, consuming resources.

The mental model: await pauses execution, but doesn't block the thread. Other code continues running. Understanding this prevents race conditions and timing bugs.

Modern JavaScript is beautiful. But async/await has sharp edges. These patterns keep you safe.`,
        date: new Date("2025-11-02"),
      },
      {
        title: "CSS in 2025: Tailwind vs Vanilla - My Honest Take",
        content: `I've shipped projects with both Tailwind and vanilla CSS. After three years, here's my brutally honest comparison.

Tailwind wins for speed. Building UIs is 3x faster with utility classes. No context switching between files, no naming fatigue, no specificity battles. You style directly in JSX and move on.

Vanilla CSS wins for learning. Understanding the box model, flexbox, grid, and cascade makes you a better developer. Tailwind abstracts these concepts. You can be productive without deeply understanding CSS.

Tailwind's constraint system is genius. The limited color palette, spacing scale, and size options create consistency effortlessly. Your UI looks cohesive without design skills.

Vanilla CSS gives complete control. Custom animations, complex layouts, and unique designs are easier. Tailwind's utility approach has limits. Sometimes you need raw CSS power.

The bundle size argument is outdated. Tailwind v4's engine purges unused styles aggressively. Production CSS is tiny. This concern is no longer relevant.

My workflow: Tailwind for 90% of styling, vanilla CSS for complex components. Use @apply sparingly—it defeats Tailwind's purpose. Style in JSX for most cases.

The real question isn't which is better—it's which fits your team. Tailwind standardizes styling across developers. Vanilla CSS requires more discipline and design skills.

I choose Tailwind for projects, vanilla CSS for learning. Both have their place.`,
        date: new Date("2025-10-25"),
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
