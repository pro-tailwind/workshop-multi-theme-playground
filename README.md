# Pro Tailwind: Traditional theming via the Tailwind CSS Plugin API

In this workshop, we'll take our Booking UI application and add support for multiple color themes. Those themes will work without any runtime JavaScript - it's all going to be powered by CSS.

While the theming strategy itself is JS-free in the browser, we're definitely going to use JaveScript to build our solution.

Here are the two main ingredients we'll be using:

- **CSS custom properties** (also called CSS variables)
- The **Tailwind CSS Plugin API**

This should be a fun one. Are you ready? Let's go!

---

## Workshop Outline

**1. Warm-up gymnastics!**

We don't want to pull a muscle going in cold. Before we dive into theming, let's warm those fingers up with some CSS challenges around the Booking UI app.

**2. Multi-theme support**

Once we're all warmed up, we'll dive into today's main topic. After checking that the Booking UI application is working locally, we'll start implementing support for multiple themes.

Here are a few things the process will cover:

- Creating different color theme objects, based on a Figma spec
- "Translating" color values to a string of `R` `G` `B` channel values
- Defining CSS variables with those colors
- Redefining those CSS variables within theme-specific scopes
- Extending Tailwind's color palette with new theme-agnostic colors
- Building a Tailwind CSS plugin that can be used across multiple projects
- Wiring-up a theme switcher on the front-end, to let users select their preferred theme

---

## Workshop Schedule

If you're taking the workshop in person, here's what the schedule will look like:

| Time              | What               | Length | Topic                      |
| ----------------- | ------------------ | ------ | -------------------------- |
| 1:00 PM - 1:15 PM | Intro              | 15 min | Meet & Greet, Housekeeping |
| 1:15 PM - 1:30 PM | Warm-up Gymnastics | 15 min | Tailwind CSS challenges    |
| 1:30 PM - 2:15 PM | Content            | 45 min | Theming part 1             |
| 2:15 PM - 2:30 PM | Break              | 15 min | Coffee/Snacks              |
| 2:30 PM - 4:00 PM | Content            | 90 min | Theming part 2             |
| 4:00 PM - 4:15 PM | Break              | 15 min | Coffee/Snack               |
| 4:15 PM - 5:00 PM | Content            | 45 min | Theming part 3             |

---

## Who's the teacher?

Hey!

I'm Simon, and I will be your workshop instructor. If you've watched some YouTube videos from the Tailwind Labs channel, you've most probably seen my face already!

I love utility-first CSS. I've been supporting and promoting this styling approach even before Tailwind CSS existed!

I'm a front-end developer, designer and content creator. I bring a lot of entusiasm and positive energy in everything I do, this is just how I'm wired up!

I think I'm really good at teaching stuff, and make people excited to learn new things.

I have been teaching in-person workshops for multiple senior engineering teams (Atlassian), and a constant piece of feedback I get is my workshops are exciting, fun and engaging.

And to me, that's the best way to learn!

I've been speaking at conferences, meetups, and I'm also an instructor on egghead.io

Oh, and I recently started a podcast with my new friend Jon Myers - it's called The NavBar, you should check it out!

You can connect with me on Twitter, I'm [@simonswiss](https://twitter.com/simonswiss).

I'm super excited to dive into this workshop with you.

## 🥅 Goal

By the end of this workshop, you'll have a solid understanding about the Tailwind CSS Plugin API, and how CSS variables can be used to redefine colors between theme scopes.

## 📜 Assumptions

This workshop assumes the following:

- You are already familiar with Tailwind CSS and its core concepts
- You are comfortable enough with CSS and JavaScript

### 📋 Dev Environment Requirements

You should have the following installed in your development environment:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) >= 2.34.1
- [Node](https://nodejs.org/en/download/) >= 12.18.4
