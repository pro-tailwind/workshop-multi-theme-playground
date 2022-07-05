So - we have a cross-theme `primary-500` color working! We could carry on like that and implement the rest of the `50` to `900` shades.

But let's pause for a second. Notice how we're doing some of our work in a CSS file, and some of our work in the Tailwind config. That's not a huge deal, but it would be nice to collocate all of this.

Further, if we intended to port some of this functionality to other projects using Tailwind, putting stuff in a CSS file is not going to work too well.

Instead, let's us the Tailwind CSS Plugin API to do all our work in one plugin file!

# Exercise

In the root of the `workshop` project, create a `multi-theme-plugin.js` file.

For now, try to generate some CSS that applies the `text-transform: uppercase` CSS to the `body` element of our project.
