<template>
  <main>
    <div>
      <h1>Horizontal Collapse</h1>
      <p>Item collapsed when there isn't any height. <b>&lt;img&gt;</b> causes collapse too.</p>
      <horizontal-collapse/>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply flex flex-wrap py-12 -m-6;
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
