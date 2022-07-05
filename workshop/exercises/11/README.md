We're going to try implmement our theming solution to the entire app - but first, let's enable a theme switcher, so we can easily test our different themes!

# Exercise

1. in `pages/_app.jsx`, uncomment the `<ThemeSwitcher />` line to enable it.
2. Update the array of themes in that `components/theme-switcher.jsx` component to use your specific theme names
3. Do the necessary to honour the `activeTheme` state throughout the whole application!

# Extra Credit

The Booking UI App has a `TimezonePicker` component, which renders in a "portal", right before the closing `</body>` tag.

Even if putting the `data-theme` attribute to the parentmost wrapper of the `_app.jsx` file, the portal will still not be a child of that element. And therefore, the modal "overlay" will always use the default theme's color, no matter what the active theme is!

Because of how Next.js renders the `<body>` element on the server only (see custom `_document` documentation), it's not totally straightforward to add a `data-attribute` on the `<body>`.

One workaround we could do would be to pass the `activeTheme` state to the `TimezonePicker` component, and then set another `data-theme` attribute in that `TimezonePicker` component. But that's a few extra steps.

It's still possible to add the `data-attribute` to the `<body>` tag, but we'll just need to do it via a `useEffect` hook.

Basically, everytime the `activeTheme` changes, our `useEffect` hook will set the appropriate `data-theme` attribute value on the `body` tag!
