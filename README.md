# CSS Horizontal Collapse Demo

### [https://css-collapse-vue-horizontal.fuxing.dev/](https://css-collapse-vue-horizontal.fuxing.dev/)

CSS horizontal collapse can cause oddities in components rendered in the horizontal space.
An item get collapsed when there isn't any height. **&lt;img&gt;** causes collapse too.

### Why?

The short answer for this is that elements with width but without height basically equate to no width.
Once the content becomes available, height will be given and therefore it start to occupy horizontal space.
Images are loaded in an asynchronous fashion thus height available and factored in later.
In this example, flex is used and therefore 'align-items: stretch' is the default value.
Thus giving all items in the flex the same height.
However, if index 3 is loaded before index 0; height will be given to index 3 first causing the scroll left
position to be in a unexpected position.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Caveat

Demo examples written for [vue-horizontal](https://vue-horizontal.fuxing.dev).
[Nuxt](https://nuxtjs.org/) was used for this micro-site, but the principles are mostly the same for all vue or css
implementation.
