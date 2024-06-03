<template>
  <main
    class="overflow-y-scroll h-screen -mb-4 -mr-4 pr-4 snap-y snap-proximity"
  >
    <div class="min-h-screen snap-start snap-always flex flex-col gap-y-8">
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
            <p
              class="absolute top-0 md:left-48 left-0 text-left cursor-default"
            >
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
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
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
                  Genshin Impact themed collectible game with mechanics similar
                  to Pokémon.
                </p>
              </div>

              <div class="flex justify-center mt-8 gap-x-2 relative">
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 z-10 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 z-10 h-full from-neutral-950 to-transparent"
                />
                <div class="flex gap-x-2 overflow-x-scroll">
                  <img
                    src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.09.17.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.14.06.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.14.09.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/02/Screenshot 2024-06-03 at 18.17.16.png"
                    class="h-24"
                  />
                </div>
              </div>
            </div>
            <p
              class="absolute top-0 md:left-48 left-0 text-left cursor-default"
            >
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
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
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
                <div class="flex gap-x-2 overflow-x-scroll">
                  <img
                    src="../../assets/portfolio/developer/03/Screenshot 2024-06-03 at 18.21.17.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/03/Screenshot 2024-06-03 at 18.21.29.png"
                    class="h-24"
                  />
                </div>
              </div>
            </div>
            <p
              class="absolute top-0 md:left-48 left-0 text-left cursor-default"
            >
              03
            </p>
            <p
              class="absolute bottom-0 text-pretty left-0 text-left cursor-default"
            >
              ✨ SolidJS, TypeScript, Supabase<span
                class="hidden md:inline-block"
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
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
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
                <div class="flex gap-x-2 overflow-x-scroll">
                  <img
                    src="../../assets/portfolio/developer/04/Screenshot 2024-06-03 at 18.24.15.png"
                    class="h-24"
                  />
                </div>
              </div>
            </div>
            <p
              class="absolute top-0 md:left-48 left-0 text-left cursor-default"
            >
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
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
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
                <div class="flex gap-x-2 overflow-x-scroll">
                  <img
                    src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.25.36.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.26.24.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.26.42.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.27.35.png"
                    class="h-24"
                  />
                  <img
                    src="../../assets/portfolio/developer/05/Screenshot 2024-06-03 at 18.27.39.png"
                    class="h-24"
                  />
                </div>
              </div>
            </div>
            <p
              class="absolute top-0 md:left-48 left-0 text-left cursor-default"
            >
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
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >Website</span
              >
            </a>
          </div>
          <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
        </div>
      </div>
    </div>
    <div
      class="relative h-[calc(100vh-5.5rem)] snap-start snap-always flex flex-col justify-center gap-y-16"
    >
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
          class="font-bold cursor-default uppercase overflow-x-hidden -my-4 lg:-my-12 text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[9rem] 2xl:text-[11rem] text-center bg-clip-text text-transparent animate-gradient-x selection:bg-transparent"
        />
        <h2
          class="font-light cursor-default -my-4 md:-my-5 lg:-my-7 text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          things <span class="italic underline font-medium">together</span>.
        </h2>
      </div>

      <div
        v-motion-slide-visible-once-bottom
        :delay="250"
        class="absolute z-30 left-auto right-auto w-full bottom-12"
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
    <div
      class="h-[calc(100vh-5.5rem)] snap-start snap-always flex flex-col justify-center gap-y-16"
    >
      <div class="flex flex-col -mt-6 -mb-8 gap-y-32">
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
