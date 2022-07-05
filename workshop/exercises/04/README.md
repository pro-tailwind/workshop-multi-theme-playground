We can preview our color themes in the app - but we have not implemented anything that resembles theming! What we want is to use the exact same color classes for all themes, and have the colors change based on the active theme.

We could achieve that with JavaScript on the client, but since Tailwind CSS is a CSS framework with no runtime, we should try and see if we can do this with CSS only instead.

And turns out, we can! We'll use **CSS custom properties** (or CSS variables) to do that.

# Exercise

We'll focus just on the `500` color shade to get started. We'll implement the rest later.

1. In the `styles/tailwind.css` file, define a CSS variable for our cross-theme `primary-500` color.
2. In the Tailwind config, create a new `primary` color key. Add a `500` shade to it, and consume the CSS variable you've just created!

Instead of having three new keys in the Tailwind config file's colors object, try to make it work by defing only one key, called `primary`.
