/*
  You're ready to try out the multi-theme 
  plugin in the Calendar App?
  Congratulations!

  Here are a few steps to get you going.

  ------------------------------
  
  1.  Copy the plugin code from
      https://play.tailwindcss.com/4jBnUjeVx0?file=config
      and paste it in this file.
  
      Instead of exporting the Tailwind config,
      export the actual plugin, like so:
  
      ```
      module.exports = multiThemePlugin
      ```

  ------------------------------

  2.  In this project's `tailwind.config.js` file,
      require and add the plugin to the 
      `plugins` array.

  ------------------------------
  
  3.  Start small, with one component!
      Open `components/background-decoration.jsx`.
      Try replacing all instances of `indigo` with 
      our `primary` theme color.

      What happened? Is that what you expected?

      Now add a the `data-theme="candy"` attribute to 
      the parentmost element on that component.

      Is it working?
  
  ------------------------------
  
  4.  Ready to roll out theming to the whole app?
      How about YOLO-ing a project-wide "search and replace"
      and change all instances of `indigo` to `primary`?

      After that, go in the `pages/_app.jsx` file.
      This is the "shell" that is common to all pages
      in a Next.js project.

      We could add a `data-theme` attribute there, but
      you will see a <ThemeSwitcher /> component at
      the start of the markup.

      This component takes care of adding the data-attribute
      to the <body> element, and also provides a sweet
      dropdown menu on the top-right of our app.

      You can see we're using an `activeTheme` piece of state,
      set to "base" by default, which is passed to the 
      theme switcher.

      Uncomment that <ThemeSwitcher /> line in `_app,jsx`, 
      and see what happens!
  
  ------------------------------
  */
