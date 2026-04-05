import { BlogPost } from "@/types";

const blogContent: Record<string, string> = {
  "welcome-to-homesorted": `
## A Better Way to Find Trades

If you've ever needed a plumber at short notice, tried to find a reliable painter through word of mouth, or spent hours scrolling Facebook groups for recommendations — you know the problem.

Finding good tradespeople in Ireland is harder than it should be. You don't know who to trust, you can't easily compare options, and the process of getting quotes feels like a full-time job.

**That's why we built HomeSorted.**

## Meet Emma, Your AI Home Concierge

HomeSorted works differently from every other home services platform. There's no app to download. No forms to fill in. No account to create.

Instead, you just message **Emma** on WhatsApp — the app you already use every day.

Tell Emma what you need in plain English. Send a photo if it helps. She'll understand what trade you need, find verified options in your area, and get you up to three quotes — usually within the hour.

Emma is powered by AI, but she feels like a helpful friend who happens to know every good tradesperson in Dublin.

## And Casey, for the Trades

On the other side of the marketplace, **Casey** is the AI business partner for tradespeople. Casey sends job offers directly to trades on WhatsApp, helps them manage quotes and invoices, and keeps their business running smoothly.

Trades don't pay to join. They only pay when they win work. No bidding wars, no monthly subscriptions just to see leads.

## Verified Trades Only

Every tradesperson on HomeSorted goes through our **Know Your Trade (KYT)** verification. This includes identity verification, insurance checks, and relevant regulatory credentials — Safe Electric for electricians, RGI for gas engineers, SEAI for energy work.

Trades also build a **Proof of Work** portfolio with verified past jobs, so you can see real examples of their work before hiring.

## Built in Ireland, for Ireland

HomeSorted is designed from the ground up for the Irish market. Eircodes, euro pricing, Irish regulatory credentials, and local trades across Dublin and beyond.

We're starting in the Greater Dublin Area and expanding nationwide. If you're a homeowner, a trade, or a property developer — **we'd love to hear from you**.

## Get Started

Ready to try it? Just open WhatsApp and message Emma. Or if you're a trade, chat with Casey to get set up.

Your home, sorted.
  `.trim(),

  "why-whatsapp-for-home-services": `
## The Problem with Home Service Apps

Every year, a new app launches promising to "fix" home services. Download the app. Create an account. Fill in a form. Upload photos. Wait for quotes. Check back later. Maybe get a response.

It's a lot of friction for something that should be simple: "I need a plumber."

We looked at how people actually communicate in Ireland. The answer was obvious.

## Everyone's Already on WhatsApp

In Ireland, WhatsApp isn't just a messaging app — it's the default communication channel. Your family group chat, your sports club, your local community group. It's where real conversations happen.

So we asked ourselves: **what if you could find a trade the same way you'd ask a friend?**

That's exactly how HomeSorted works. Open WhatsApp. Message Emma. Describe your problem in your own words — or send a photo, a voice note, whatever's easiest. Emma handles the rest.

## No App Downloads, No Forms

This matters more than you might think. The average person has 80 apps on their phone but only uses 9 daily. Asking someone to download a new app just to find a plumber is asking too much.

With HomeSorted, the barrier to entry is literally zero. If you have WhatsApp (and 95% of Irish smartphone users do), you already have everything you need.

## AI That Actually Helps

Emma isn't a simple chatbot with canned responses. She understands natural language, can extract job details from a photo description, and knows when to ask clarifying questions versus when to just get on with it.

In an emergency — burst pipe, no heating, power cut — Emma shifts into a calm, action-first mode. No unnecessary questions. Just: "We're on it. We're contacting emergency trades near you right now."

## The Same Works for Trades

Casey, the trade-facing AI, works the same way. Job offers arrive via WhatsApp with all the details a trade needs to make a quick decision. Accept or decline in one tap. No logging into a dashboard, no checking an app.

Trades who respond quickly win more jobs. And because Casey makes responding effortless, our average response time is under 15 minutes.

## What's Next

WhatsApp is our front door, but it's not our only channel. The **Trade Companion App** gives trades a visual dashboard for managing their business. The **Partner Dashboard** helps property developers and landlords manage maintenance at scale.

But for homeowners, it stays simple. Just message Emma.

**Your home, sorted.**
  `.trim(),

  "finding-reliable-trades-ireland": `
## The Challenge Every Homeowner Faces

Whether you've just moved into a new build or you're maintaining a home you've lived in for years, you'll eventually need a tradesperson. A leaking tap, a flickering light, a room that needs painting — these things come up.

The challenge isn't finding *a* trade. It's finding a *reliable* one.

## 1. Ask for Recommendations (But Verify)

Word of mouth is still the most common way Irish homeowners find trades. Ask neighbours, friends, family. Local community WhatsApp groups and Facebook groups can be goldmines.

But remember: a recommendation from a friend doesn't guarantee the trade is insured, qualified, or even available. Always do your own checks.

## 2. Check Credentials

For regulated trades, check their credentials:
- **Electricians** should be registered with Safe Electric
- **Gas engineers** should have a current RGI registration
- **Energy/BER work** should be done by SEAI-registered contractors

Ask to see their insurance certificate. A professional trade won't hesitate to show it.

## 3. Get Multiple Quotes

Never go with the first quote. Get at least two or three. This isn't about finding the cheapest — it's about understanding what's reasonable for the job.

A good quote should include:
- **Amount** (inclusive or exclusive of VAT)
- **Timeline** (how long the work will take)
- **Description** (what exactly is included)

Be wary of quotes that are significantly lower than others. There's usually a reason.

## 4. Look for Reviews and Past Work

Online reviews are useful but take them with a pinch of salt. Look for patterns rather than individual reviews. A trade with 50 verified past jobs is more reliable than one with 3 glowing testimonials.

Even better: ask to see examples of past work. Verified portfolios — where the work has been confirmed by the homeowner — are worth more than any number of testimonials.

## 5. Communicate Clearly

Before work begins, make sure you've agreed on:
- The scope of work
- The total cost (and whether it's fixed or estimated)
- The expected timeline
- Payment terms

Get this in writing, even if it's just a WhatsApp message. It protects both you and the trade.

## 6. Use a Platform That Does the Work for You

Services like HomeSorted take much of this burden off your shoulders. When you message Emma on WhatsApp, she finds verified trades in your area, gets you quotes with clear pricing, and ensures every trade has been through a Know Your Trade verification.

You still choose who to hire. But the vetting, the quote-chasing, and the coordination are handled for you.

## The Bottom Line

Finding reliable tradespeople in Ireland doesn't have to be stressful. Do your homework, get multiple quotes, check credentials, and use platforms that verify trades on your behalf.

Or just message Emma. She'll sort it.
  `.trim(),
};

export function getAllPosts(): BlogPost[] {
  const { mockBlogPosts } = require("@/data/mockBlogPosts");
  return mockBlogPosts.sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): (BlogPost & { content: string }) | null {
  const { mockBlogPosts } = require("@/data/mockBlogPosts");
  const post = mockBlogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) return null;
  return {
    ...post,
    content: blogContent[slug] || "",
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  if (category === "All") return posts;
  return posts.filter((p) => p.category === category);
}
