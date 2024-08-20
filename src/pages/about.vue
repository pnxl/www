<template>
  <main class="overflow-y-scroll h-screen -mb-4 -mr-4 pr-4">
    <div class="min-h-screen flex flex-col gap-y-8 pt-4">
      <h6
        v-motion-slide-visible-once-bottom
        :delay="0"
        class="font-medium cursor-default text-3xl mt-24 md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        I'm Jason, a 15-year-old guy based in Indonesia, who loves to do a lot
        of things; ranging from visuals, computers, and sound.
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
        Of course, being a 15-year-old boy, I've still got lots of exciting
        things to learn about in this life.
      </h6>
      <h6
        v-motion-slide-visible-once-bottom
        :delay="100"
        class="font-medium cursor-default text-3xl md:text-4xl lg:text-5xl md:w-2/3 text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        I love to share what I can do with my skills, and I try to volunteer in
        as much activities as I can. I'm always glad to help my clients, and I
        always try to do my best.
      </h6>
    </div>
    <div class="relative h-screen flex flex-col justify-center gap-y-16">
      <div>
        <h3
          class="font-base cursor-default -mt-16 -my-4 text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          Let's make
        </h3>
        <vue-writer
          :array="[
            'amazing',
            'breathtaking',
            'miraculous',
            'incredible',
            'astonishing',
            'spectacular',
            'marvelous',
            'remarkable',
            'outstanding',
            'phenomenal',
          ]"
          :iterations="'1'"
          :typeSpeed="100"
          style="
            background-image: linear-gradient(
              to right,
              #ec4899,
              #a855f7,
              #6366f1,
              #0ea5e9,
              #14b8a6
            );
          "
          class="font-bold cursor-default uppercase overflow-x-hidden -my-4 lg:-my-12 text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[9rem] 2xl:text-[11rem] text-center bg-clip-text text-transparent animate-gradient-x selection:bg-transparent"
        />
        <h2
          class="font-light cursor-default -my-4 md:-my-5 lg:-my-7 text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          things <span class="italic underline font-medium">together</span>.
        </h2>
        <div
          v-motion-slide-visible-once-bottom
          :delay="250"
          class="absolute z-30 left-auto right-auto w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 384 512"
            class="mx-auto mt-12 md:mt-32 animate-bounce-b opacity-50"
          >
            <path
              fill="currentColor"
              d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="h-screen flex flex-col justify-center gap-y-16">
      <div class="flex flex-col -mb-8 gap-y-32">
        <div class="flex flex-col gap-y-6">
          <p
            class="text-center text-xl opacity-100 w-full h-fit cursor-default"
          >
            If you want to work with me, or just say hello,
          </p>
          <div class="flex flex-col gap-y-2">
            <p
              class="text-center text-lg opacity-50 w-full h-fit cursor-default"
            >
              Drop me a DM at
            </p>
            <div class="w-full flex justify-center flex-row cursor-default">
              <a
                href="https://www.instagram.com/poonxal"
                class="text-center text-4xl opacity-100 font-medium underline hover:decoration-pink-500"
                >@poonxal</a
              >
            </div>
          </div>
          <div class="flex flex-col gap-y-2">
            <p
              class="text-center text-lg opacity-50 w-full h-fit cursor-default"
            >
              Or send me an e-mail on
            </p>
            <div class="w-full flex justify-center flex-row cursor-default">
              <a
                href="mailto:jason@pnxl.dev"
                class="text-center text-4xl opacity-100 font-medium underline hover:decoration-teal-500"
                >jason@pnxl.dev</a
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-auto">
          <p class="text-center opacity-50 w-full h-fit cursor-default">
            Copyright © Jason Fang
          </p>
          <p class="text-center opacity-50 w-full h-fit cursor-default">
            (2024), All Rights Reserved
          </p>
        </div>
      </div>
    </div>
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
