<template>
  <div>
    <header>
      <div class="container">
        <h4>CSS Horizontal Collapse</h4>
      </div>
    </header>

    <div>
      <div class="container">
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply mx-auto px-6;
}

header {
  @apply py-3 bg-gray-800 border-b;
  @apply text-xl font-semibold text-white;
}
</style>
