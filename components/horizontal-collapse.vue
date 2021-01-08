<template>
  <div>
    <div class="flex flex-wrap -m-2 pt-4">
      <button v-for="(item, index) in items" :key="index"
              @click="item.collapsed = !item.collapsed"
              :class="{toggled: !item.collapsed}">
        Toggle {{ index }}
      </button>
    </div>

    <div class="mt-4">
      <div class="flex items-center" v-for="auto in autos" :key="auto.index">
        Toggling
        <button :class="{toggled: !items[auto.index].collapsed}">Toggle {{ auto.index }}</button>
        <p>
          in <b>{{ auto.countdown }}</b> seconds.
        </p>
      </div>
    </div>

    <div>
      <h4>For reference, mirroring collapsed position and how it moves when content is available.</h4>
      <vue-horizontal responsive ref="a" @scroll-debounce="onScrollDebounce">
        <div class="item" v-for="(item, index) in items" :key="index">
          {{ index }}
        </div>
      </vue-horizontal>
    </div>

    <div>
      <h4>Horizontal collapsed, causes oddities.</h4>
      <vue-horizontal responsive ref="b" @scroll-debounce="onScrollDebounce">
        <div class="item relative" v-for="(item, index) in items" :key="index">
          <img :src="item.collapsed ? '' : item.img">
          <div class="absolute bg-gray-800 bg-opacity-25 inset-0 items-center justify-center">
            <div>{{ index }}</div>
          </div>
        </div>
      </vue-horizontal>
    </div>

    <div>
      <h4>With min-height, fixes it issues.</h4>

      <vue-horizontal responsive ref="c" @scroll-debounce="onScrollDebounce">
        <div class="item relative non-collapsed" v-for="(item, index) in items" :key="index">
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

interface Item {
  img: string;
  collapsed: boolean;
}

interface Auto {
  index: number;
  countdown: number;
  interval: number;
}

interface HorizontalCollapse {
  items: Item[];
  autos: Auto[];
  intervalId: any;
}

export default Vue.extend({
  data(): HorizontalCollapse {
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
      autos: [
        {index: 3, interval: 8, countdown: 8},
        {index: 6, interval: 19, countdown: 19},
      ],
      intervalId: null,
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.autos.forEach(auto => {
        auto.countdown -= 1

        if (auto.countdown === 0) {
          this.items[auto.index].collapsed = !this.items[auto.index].collapsed
          auto.countdown = auto.interval
        }
      })
    }, 1000)
  },
  destroyed() {
    clearInterval(this.intervalId)
  },
  methods: {
    onScrollDebounce({left}: any) {
      const horizontals: any[] = [this.$refs.a, this.$refs.b]
      horizontals.forEach(h => h.scrollToLeft(left))
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

h4 {
  @apply text-xl font-semibold mt-10 mb-4;
}

.item {
  min-height: initial !important;
  @apply bg-gray-800 rounded overflow-hidden;
  @apply font-semibold text-xl text-white text-center leading-loose;
}

.item.non-collapsed {
  min-height: 1px !important;
}
</style>
