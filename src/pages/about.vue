<template>
  <main class="min-h-screen flex flex-col gap-y-8">
    <h6
      v-motion-slide-visible-once-bottom
      :delay="0"
      class="font-medium cursor-default text-3xl mt-24 md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
    >
      I'm Jason, a 15-year-old guy based in Indonesia, who loves to do a lot of
      things; ranging from visuals, computers, and sound.
    </h6>
    <h6
      v-motion-slide-visible-once-bottom
      :delay="250"
      class="font-medium cursor-default text-3xl md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
    >
      Most of the skills I have stems from my enjoyment over a broader topic
      that includes that skill.
    </h6>
    <h6
      v-motion-slide-visible-once-bottom
      :delay="500"
      class="font-medium cursor-default text-3xl md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
    >
      I learned to code over my love of computers; and I learned how to mix
      sound because I've always loved live sound scenarios.
    </h6>
    <h6
      v-motion-slide-visible-once-bottom
      :delay="750"
      class="font-medium cursor-default text-3xl md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
    >
      Of course, being a 15-year-old boy, I've still got lots of exciting things
      to learn about in this life.
    </h6>
    <h6
      v-motion-slide-visible-once-bottom
      :delay="100"
      class="font-medium cursor-default text-3xl md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
    >
      I love to share what I can do with my skills, and I try to volunteer in as
      much activities as I can. I'm always glad to help my clients, and I always
      try to do my best.
    </h6>
  </main>
</template>

<script lang="ts">
import MarqueeText from "vue-marquee-text-component";
// @ts-ignore
import { VueWriter } from "vue-writer";

export default {
  name: "index",
  components: {
    MarqueeText,
    VueWriter,
  },
};
</script>

<style>
.scroll-snap-container {
  height: 100vh;
}
</style>
