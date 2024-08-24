<template>
  <main class="min-h-screen flex flex-col gap-y-8">
    <div
      v-motion-slide-visible-once-bottom
      :delay="0"
      :duration="125"
      class="mt-24 flex flex-row justify-between"
    >
      <div>
        <h3
          class="font-medium cursor-default text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          Dev <span class="hidden md:inline-block">Portfolio</span>
        </h3>
        <h3
          class="font-medium md:hidden cursor-default text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          Portfolio
        </h3>
      </div>
      <router-link
        to="/portfolio/music"
        class="font-medium opacity-50 hover:opacity-100 hover:text-blue-600 hover:dark:text-blue-400 text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        Music
      </router-link>
    </div>
    <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
    <div class="flex flex-col-reverse gap-y-8">
      <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      <div
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 28rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              Emotional Damage
            </h1>
            <div class="flex flex-row justify-center">
              <p
                class="text-center text-xl sm:text-2xl md:text-3xl font-medium opacity-75 mt-2 cursor-default md:w-2/3"
              >
                Opens a random Steven He video at the timestamp he says
                "Emotional Damage"
              </p>
            </div>
          </div>
          <p class="absolute top-0 md:left-48 left-0 text-left cursor-default">
            01
          </p>
          <p
            class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
          >
            ✨ Python
          </p>
          <p
            class="absolute top-0 text-pretty right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 Joke/Satire Script
          </p>
          <a
            href="https://github.com/pnxl/emotionaldamage"
            class="absolute bottom-0 md:right-48 right-0 text-right group"
          >
            🤖
            <span class="underline text-pretty group-hover:decoration-blue-500"
              >GitHub Repository</span
            >
          </a>
        </div>
      </div>
      <div
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 28rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              Pokaimon
            </h1>
            <div class="flex flex-row justify-center">
              <p
                class="text-center text-xl sm:text-2xl md:text-3xl font-medium opacity-75 mt-2 cursor-default md:w-2/3"
              >
                Genshin Impact themed collectible game with mechanics similar to
                Pokémon.
              </p>
            </div>

            <div class="flex justify-center mt-8 gap-x-2 relative">
              <div
                class="absolute w-8 bg-gradient-to-r left-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="absolute w-8 bg-gradient-to-l right-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="flex gap-x-2 overflow-x-scroll w-full justify-center h-48"
              >
                <img
                  src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.09.17.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.14.06.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.14.09.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.17.16.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute top-0 md:left-48 left-0 text-left cursor-default">
            02
          </p>
          <p
            class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
          >
            ✨ Vue, TypeScript, Supabase<span class="hidden md:inline-block"
              >, Tailwind CSS, Headless UI</span
            >
          </p>
          <p
            class="absolute top-0 text-pretty right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 Utility
          </p>
          <a
            href="https://pokaimon.cattolabs.com"
            class="absolute bottom-0 md:right-48 right-0 text-right group"
          >
            🌏
            <span class="underline text-pretty group-hover:decoration-blue-500"
              >Website</span
            >
          </a>
        </div>
        <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      </div>
      <div
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 28rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              catto drive
            </h1>
            <div class="flex flex-row justify-center">
              <p
                class="text-center text-xl sm:text-2xl md:text-3xl font-medium opacity-75 mt-2 cursor-default md:w-2/3"
              >
                A versatile file-sharing platform inspired by Google Drive and
                WeTransfer.
              </p>
            </div>

            <div class="flex justify-center mt-8 gap-x-2 relative">
              <div
                class="absolute w-8 bg-gradient-to-r left-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="absolute w-8 bg-gradient-to-l right-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="flex gap-x-2 overflow-x-scroll w-full justify-center h-48"
              >
                <img
                  src="../../assets/portfolio/developer/03/Screenshot 2024-06-03 at 18.21.17.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/03/Screenshot 2024-06-03 at 18.21.29.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute top-0 md:left-48 left-0 text-left cursor-default">
            03
          </p>
          <p
            class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
          >
            ✨ SolidJS, TypeScript, Supabase<span class="hidden md:inline-block"
              >, Uno CSS</span
            >
          </p>
          <p
            class="absolute top-0 text-pretty right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 Utility
          </p>
          <a
            href="https://drive.cattolabs.com"
            class="absolute bottom-0 md:right-48 right-0 text-right group"
          >
            🌏
            <span class="underline text-pretty group-hover:decoration-blue-500"
              >Website</span
            >
          </a>
        </div>
        <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      </div>
      <div
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 28rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              MIDI Message Reader
            </h1>
            <div class="flex flex-row justify-center">
              <p
                class="text-center text-xl sm:text-2xl md:text-3xl font-medium opacity-75 mt-2 cursor-default md:w-2/3"
              >
                Translates MIDI hexadecimals into human readable text.
              </p>
            </div>

            <div class="flex justify-center mt-8 gap-x-2 relative">
              <div
                class="absolute w-8 bg-gradient-to-r left-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="absolute w-8 bg-gradient-to-l right-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="flex gap-x-2 overflow-x-scroll w-full justify-center h-48"
              >
                <img
                  src="../../assets/portfolio/developer/04/Screenshot 2024-06-03 at 18.24.15.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute top-0 md:left-48 left-0 text-left cursor-default">
            04
          </p>
          <p
            class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
          >
            ✨ Vue, TypeScript
          </p>
          <p
            class="absolute top-0 text-pretty right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 Utility
          </p>
          <a
            href="https://midi.pnxl.dev"
            class="absolute bottom-0 md:right-48 right-0 text-right group"
          >
            🌏
            <span class="underline text-pretty group-hover:decoration-blue-500"
              >Website</span
            >
          </a>
        </div>
        <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      </div>
      <div
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 28rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              Handel
            </h1>
            <div class="flex flex-row justify-center">
              <p
                class="text-center text-xl sm:text-2xl md:text-3xl font-medium opacity-75 mt-2 cursor-default md:w-2/3"
              >
                Web-based point-of-sale system for people running small,
                temporary businesses - such as garage sales and pop-up shops.
              </p>
            </div>
            <div class="flex justify-center mt-8 gap-x-2 relative">
              <div
                class="absolute w-8 bg-gradient-to-r left-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="absolute w-8 bg-gradient-to-l right-0 top-0 z-10 h-full from-neutral-950 to-transparent"
              />
              <div
                class="flex gap-x-2 overflow-x-scroll w-full justify-center h-48"
              >
                <img
                  src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.25.36.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.26.24.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.26.42.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.27.35.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
                <img
                  src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.27.39.png"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute top-0 md:left-48 left-0 text-left cursor-default">
            05
          </p>
          <p
            class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
          >
            ✨ Vue, TypeScript, Supabase<span class="hidden md:inline-block"
              >, Tailwind CSS, Headless UI</span
            >
          </p>
          <p
            class="absolute top-0 text-pretty right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 Point-of-sale, Utility
          </p>
          <a
            href="https://handel.pnxl.dev"
            class="absolute bottom-0 md:right-48 right-0 text-right group"
          >
            🌏
            <span class="underline text-pretty group-hover:decoration-blue-500"
              >Website</span
            >
          </a>
        </div>
        <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MarqueeText from "vue-marquee-text-component";
// @ts-ignore
import { VueWriter } from "vue-writer";
</script>

<style>
.scroll-snap-container {
  height: 100vh;
}
</style>
