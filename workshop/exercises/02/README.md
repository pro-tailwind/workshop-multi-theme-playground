# Exercise

Now, we want to add our own custom color palette.

Of course, we could re-use other colors from the default Tailwind color palette. But just for fun, let's come up with our own. It will likely give us some appreciation for the amount of work that went into curating Tailwind's default color palette!

Since we're implementing theme support to an existing app, we should stick to the naming "convention" of `50` to `900` for our new colors. But it's worh nothing you're not restricted to this, the colors can be named anything you want.

Unless you want to create color shades by hand (plot twist: we don't have time for that in today's workshop!), here are a few cool tools you might want to explore:

- [Coolors.co](https://coolors.co/), an absolutely amazing resource to generate colors for almost any situation
- GitHub's Primer Design System recently came up with an experimental tool called [Primer Prism](https://primer.style/prism). One of the great things about it is that every suggested palette has very similar aspects in terms of intensity, lightness, darkness, which makes those palettes "swappable" fairly easily - a crucial point for theming.
- If you want a Tailwind CSS specific tool - there are many out there - one that I enjoy is [UI Colors](https://uicolors.app/). I like that you can hit the space bar to generate a new color, preview the shades through a bunch of UI components. And of course, the exported code is matching what we're trying to do, since it's a tool built for Tailwind CSS.

Use what you want. We'll only spend 5 minutes on this, so don't get too carried away. Create two extra themes in `themes.js`. You can name them what you want, and make sure the properties match the default theme: a `primary` object with shades from `50` to `900` inside the `colors` key.
