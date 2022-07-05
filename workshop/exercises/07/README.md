Now that we've got our `primary-500` CSS variable defined (and redefined!) from our plugin file, let's roll out the same approach for all shades of our colors!

Don't worry about code duplication or hard-coded values in your JS for now, let's first get an implementation that works, and we'll improve our plugin code after that!

# Exercise

1. Create all the necessary CSS variable to support all theme colors.
2. Delete the `theme-one`, `theme-two` and `theme-three` colors we had set in our Tailwind config file
3. Make each color "spread" in the themes page use the same `primary` color utilities instead!
