<template>
  <main>
    <div>
      <h1>Horizontal Collapse</h1>
      <p>
        CSS horizontal collapse can cause oddities in components rendered in the horizontal space.<br>
        An item get collapsed when there isn't any height. <b>&lt;img&gt;</b> causes collapse too.</p>

      <h3 class="text-xl font-bold mb-2">Why?</h3>
      <p>
        The short answer for this is that elements with width but without height basically equate to no width.
        Once the content becomes available, height will be given and therefore it start to occupy horizontal space.
        Images are loaded in an asynchronous fashion thus height available and factored in later.
        In this example, flex is used and therefore 'align-items: stretch' is the default value.
        Thus giving all items in the flex the same height.
        However, if index 3 is loaded before index 0; height will be given to index 3 first causing the scroll left
        position to be in a unexpected position.
      </p>

      <h1 class="mt-12">Live Demo</h1>
      <horizontal-collapse></horizontal-collapse>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply flex flex-wrap pt-12 pb-32 -m-6;
}

main > div {
  @apply w-full m-6;
}

h1 {
  @apply text-3xl font-bold;
  @apply mb-2;
}

p {
  @apply text-lg mb-4;
}
</style>
