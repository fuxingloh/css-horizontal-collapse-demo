<template>
  <div>
    <div class="flex flex-wrap -m-2 pt-4">
      <button v-for="(item, index) in items" :key="index"
              @click="item.collapsed = !item.collapsed"
              :class="{toggled: !item.collapsed}">
        Toggle {{ index }}
      </button>
    </div>

    <div class="mt-4 flex items-center">
      Toggling
      <button :class="{toggled: !items[index].collapsed}">Toggle {{index}}</button>
      <p>
        in <b>{{ countdown }}</b> seconds.
      </p>
    </div>

    <div class="mt-8">
      <vue-horizontal responsive ref="a" @scroll-debounce="onScrollDebounce">
        <div class="item" v-for="(item, index) in items" :key="index">
          {{ index }}
        </div>
      </vue-horizontal>
    </div>

    <div class="mt-8">
      <vue-horizontal responsive ref="b" @scroll-debounce="onScrollDebounce">
        <div class="item relative" v-for="(item, index) in items" :key="index">
          <img :src="item.collapsed ? '' : item.img">
          <div class="absolute bg-gray-800 bg-opacity-25 inset-0 items-center justify-center">
            <div>{{ index }}</div>
          </div>
        </div>
      </vue-horizontal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      items: [
        {img: '/img/hanson-lu-ShUDNP6EV-I-unsplash.jpg', collapsed: true},
        {img: '/img/lily-banse-e1Rc28R4qoA-unsplash.jpg', collapsed: true},
        {img: '/img/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg', collapsed: true},
        {img: '/img/sergio-sala-VbB6HYunm04-unsplash.jpg', collapsed: true},
        {img: '/img/hoch3media-oUo_qauFRms-unsplash.jpg', collapsed: true},
        {img: '/img/david-vives-_cbdlNbWvWg-unsplash.jpg', collapsed: true},
        {img: '/img/benn-mcguinness-_FKNQ9jWARU-unsplash.jpg', collapsed: true},
        {img: '/img/hoch3media-oUo_qauFRms-unsplash.jpg', collapsed: true},
        {img: '/img/david-vives-_cbdlNbWvWg-unsplash.jpg', collapsed: true},
        {img: '/img/benn-mcguinness-_FKNQ9jWARU-unsplash.jpg', collapsed: true},
      ],
      countdown: 10,
      index: 4,
      intervalId: null,
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.countdown -= 1

      if (this.countdown === 0) {
        this.items[this.index].collapsed = !this.items[this.index].collapsed
        this.countdown = 10
      }
    }, 1000)
  },
  methods: {
    onScrollDebounce({left}) {
      this.$refs.a.scrollToLeft(left)
      this.$refs.b.scrollToLeft(left)
    },
  }
})
</script>

<style scoped>
button {
  @apply m-2;
  @apply px-4 py-1 bg-gray-200 rounded;
  @apply font-medium;
}

button.toggled {
  @apply bg-gray-800 text-white;
}

.item {
  min-height: initial !important;
  @apply bg-gray-800 rounded overflow-hidden;
  @apply font-semibold text-xl text-white text-center leading-loose;
}
</style>
