<template>
  <main
    class="overflow-y-scroll h-[calc(100vh-6.5rem)] -mb-4 -mr-4 pr-4 snap-y snap-mandatory"
  >
    <div class="h-[calc(100vh-5.5rem)] snap-start snap-always relative">
      <div class="w-full relative">
        <div class="absolute w-full">
          <div
            class="w-full absolute z-30 mt-4 h-full flex flex-col justify-center pointer-events-none"
          >
            <div
              class="flex-row w-full justify-center font-black hidden cursor-default lg:flex lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              <h1 v-motion-slide-visible-once-bottom :delay="0" :duration="125">
                H
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="62.5"
                :duration="125"
              >
                e
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="125"
                :duration="125"
              >
                y
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="187.5"
                :duration="125"
                class="-ml-5 mr-8"
              >
                ,
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="500"
                :duration="125"
              >
                I
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="562.5"
                :duration="125"
              >
                '
              </h1>
              <h1
                v-motion-slide-visible-once-bottom
                :delay="625"
                :duration="125"
                class="mr-8"
              >
                m
              </h1>
              <span
                v-motion-slide-visible-once-bottom
                :delay="750"
                :duration="125"
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
                class="bg-clip-text text-transparent animate-gradient-x"
                >Jason</span
              >
              <h1
                v-motion-slide-visible-once-bottom
                :delay="812.5"
                :duration="125"
              >
                .
              </h1>
            </div>
            <vue-writer
              :array="['Welcome to my small corner of the web.']"
              class="text-center text-3xl opacity-75 font-medium w-full h-fit"
              :iterations="'1'"
              :typeSpeed="50"
              :delay="600000"
              :start="1500"
            />
            <h2
              class="font-black text-[3rem] sm:text-[5rem] md:text-[6rem] opacity-60 cursor-default lg:hidden text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              Hey there!
            </h2>
            <h1
              class="font-black cursor-default text-[5rem] sm:text-[8rem] md:text-[9rem] lg:hidden text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              I'm
              <span
                class="bg-gradient-to-r dark:from-indigo-500 dark:to-fuchsia-500 from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
                >Jason</span
              >.
            </h1>
          </div>
          <div
            v-motion-fade-visible-once
            :delay="750"
            :duration="500"
            class="relative h-full opacity-50"
          >
            <marquee-text :duration="600" class="text-[2.5rem] font-semibold">
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text
              :duration="600"
              :reverse="true"
              class="text-[2.5rem] font-semibold"
            >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text :duration="600" class="text-[2.5rem] font-semibold">
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text
              :duration="600"
              :reverse="true"
              class="text-[2.5rem] font-semibold"
            >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text :duration="600" class="text-[2.5rem] font-semibold">
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text
              :duration="600"
              :reverse="true"
              class="text-[2.5rem] font-semibold"
            >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              ><span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text :duration="600" class="text-[2.5rem] font-semibold">
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text
              :duration="600"
              :reverse="true"
              class="text-[2.5rem] font-semibold"
            >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
            <marquee-text :duration="600" class="text-[2.5rem] font-semibold">
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Sound Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Audio Engineer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Stage Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Lighting Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Live Visuals</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >A/V Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >cool guy 😎</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Systems Administrator</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Tech Infrastructure Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Software Developer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >UI/UX Designer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Storywriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Songwriter</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Keyboardist</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Drummer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Guitar Technician</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Professional Guitar Stand</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Producer</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Production Manager</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
              <span
                class="hover:opacity-100 opacity-60 cursor-default selection:bg-transparent"
                >Playback Composer/Arranger</span
              >
              <span
                class="mx-4 opacity-60 cursor-default selection:bg-transparent"
                >&bull;</span
              >
            </marquee-text>
          </div>
          <div
            class="absolute z-10 top-0 w-full h-full bg-gradient-to-b from-neutral-100 dark:from-neutral-950 to-transparent dark:to-transparent pointer-events-none"
          ></div>
          <div
            class="absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-neutral-100 dark:from-neutral-950 to-transparent dark:to-transparent pointer-events-none"
          ></div>
          <div
            class="absolute z-10 top-0 left-0 w-[4rem] h-full bg-gradient-to-r from-neutral-100 dark:from-neutral-950 to-transparent dark:to-transparent pointer-events-none"
          ></div>
          <div
            class="absolute z-10 top-0 right-0 w-[4rem] h-full bg-gradient-to-l from-neutral-100 dark:from-neutral-950 to-transparent dark:to-transparent pointer-events-none"
          ></div>
        </div>
      </div>

      <div
        v-motion-slide-visible-once-bottom
        :delay="1000"
        class="absolute z-30 w-full -mx-4 px-4 bottom-12"
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
      class="h-[calc(100vh-5.5rem)] snap-start snap-always flex flex-col justify-center gap-y-4"
    >
      <h3
        class="font-medium cursor-default -mt-16 -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        I mainly focus on
      </h3>
      <h2
        class="font-bold -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <router-link
          to="/portfolio#design"
          class="underline decoration-blue-500 dark:decoration-indigo-500 duration-0 hover:decoration-neutral-900 dark:hover:decoration-neutral-400 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-900 dark:from-neutral-100 dark:to-neutral-100 hover:from-blue-500 hover:to-indigo-500 dark:hover:from-indigo-500 dark:hover:to-violet-500"
          >design</router-link
        ><span class="no-underline font-medium">,</span>
      </h2>
      <h2
        class="font-bold -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <router-link
          to="/portfolio#technology"
          class="underline decoration-[#7761F4] dark:decoration-[#9a59f7] duration-0 hover:decoration-neutral-900 dark:hover:decoration-neutral-400 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-900 dark:from-neutral-100 dark:to-neutral-100 hover:from-indigo-500 hover:to-violet-500 dark:hover:from-violet-500 dark:hover:to-purple-500"
          >technology</router-link
        ><span class="no-underline cursor-default font-medium">,</span>
      </h2>
      <h2
        class="font-bold -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <span class="no-underline font-medium mr-4 cursor-default">and</span>
        <router-link
          to="/portfolio#music"
          class="underline decoration-purple-500 dark:decoration-fuchsia-500 duration-0 hover:decoration-neutral-900 dark:hover:decoration-neutral-400 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-900 dark:from-neutral-100 dark:to-neutral-100 hover:from-violet-500 hover:to-purple-500 dark:hover:from-purple-500 dark:hover:to-fuchsia-500"
          >music</router-link
        ><span class="no-underline cursor-default font-medium">,</span>
      </h2>
      <h2
        class="font-light italic cursor-default -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        projects.
      </h2>
    </div>
    <div
      class="h-[calc(100vh-5.5rem)] snap-start snap-always flex flex-col justify-center gap-y-4"
    >
      <h4
        class="font-light italic cursor-default -mt-16 -my-3 text-[2rem] xl:text-[3rem] 2xl:text-[5rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        In my free time,
      </h4>
      <h3
        class="font-medium cursor-default -my-4 md:-my-5 lg:-my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        I'm learning
      </h3>
      <h2
        class="font-bold -my-4 md:-my-5 lg:-my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <span
          to="/portfolio#design"
          class="underline decoration-blue-500 dark:decoration-indigo-500 cursor-default"
          >guitar</span
        ><span class="no-underline font-medium">,</span>
      </h2>
      <h2
        class="font-bold -my-4 md:-my-5 lg:-my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <span
          class="underline decoration-[#0AAEDF] dark:decoration-[#2594F0] cursor-default"
          >live visuals</span
        ><span class="no-underline cursor-default font-medium">,</span>
      </h2>
      <h2
        class="font-bold -my-4 md:-my-5 lg:-my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        <span class="no-underline font-medium mr-4 cursor-default">and</span>
        <span
          class="underline decoration-teal-500 dark:decoration-cyan-500 cursor-default"
          >lighting</span
        ><span class="no-underline cursor-default font-medium">.</span>
      </h2>
    </div>
    <div
      class="relative h-[calc(100vh-5.5rem)] snap-start snap-always flex flex-col justify-center gap-y-16"
    >
      <div>
        <h3
          class="font-base cursor-default -mt-16 -my-4 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
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
          class="font-bold cursor-default uppercase overflow-x-hidden -my-6 lg:-my-12 text-[3.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] text-center bg-clip-text text-transparent animate-gradient-x selection:bg-transparent"
        />
        <h2
          class="font-light cursor-default -my-7 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
        >
          things <span class="italic underline font-medium">together</span>.
        </h2>
      </div>

      <div
        v-motion-slide-visible-once-bottom
        :delay="1000"
        class="absolute z-30 w-full -mx-4 px-4 bottom-12"
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
                class="text-center text-4xl opacity-100 font-medium underline hover:decoration-blue-500 dark:hover:decoration-indigo-500"
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
                class="text-center text-4xl opacity-100 font-medium underline hover:decoration-purple-500 dark:hover:decoration-fuchsia-500"
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
