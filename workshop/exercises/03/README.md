With the app running, open the following URL in your browser:

[https://localhost:3000/themes](https://localhost:3000/themes)

You can see the code for this page in the `pages/themes.jsx` file

We'll use this page as a preview for our themes and test our implementation. Right now, it's actually not using any of our theming colors (we haven't implemented anything outside of the themes object). It's just using the "primary" color.

What we want to do now is to make each of these three color spreads use our custom theme colors.

# Exercise

Extend the Tailwind config with a new color for each theme color - and use the new utility classes on each color spread. This isn't actually how theming works, but it will let us preview our custom colors palettes.
