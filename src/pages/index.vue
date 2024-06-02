<template>
  <main
    class="overflow-y-scroll h-[calc(100vh-6.5rem)] -mb-4 snap-y snap-mandatory"
  >
    <div class="h-[calc(100vh-6.5rem)] snap-start snap-always relative">
      <div class="w-full relative">
        <div class="absolute w-full">
          <div
            class="w-full absolute z-30 mt-4 h-full flex flex-col justify-center pointer-events-none"
          >
            <h1
              class="font-black hidden cursor-default lg:block lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              Hey, I'm
              <span
                class="bg-gradient-to-r dark:from-indigo-500 dark:to-fuchsia-500 from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
                >Jason</span
              >.
            </h1>
            <h2
              class="font-black cursor-default text-[3rem] sm:text-[5rem] md:text-[6rem] opacity-60 cursor-default lg:hidden text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
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
          <div class="relative h-full opacity-50">
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

      <div class="absolute z-30 w-full -mx-4 px-4 bottom-8">
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
    <div class="h-[calc(100vh-6.5rem)] snap-start snap-always">
      <div class="w-full relative pt-20 h-screen">
        <div class="absolute w-full top-20">
          <div
            class="w-full absolute z-30 mt-4 h-full flex flex-col justify-center pointer-events-none"
          >
            <h1
              class="font-black hidden lg:block lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              Hey, I'm
              <span
                class="bg-gradient-to-r dark:from-indigo-500 dark:to-fuchsia-500 from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
                >Jason</span
              >.
            </h1>
            <h2
              class="font-black text-[3rem] sm:text-[5rem] md:text-[6rem] opacity-60 cursor-default lg:hidden text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              Hey there!
            </h2>
            <h1
              class="font-black text-[5rem] sm:text-[8rem] md:text-[9rem] lg:hidden text-center text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
            >
              I'm
              <span
                class="bg-gradient-to-r dark:from-indigo-500 dark:to-fuchsia-500 from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
                >Jason</span
              >.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import MarqueeText from "vue-marquee-text-component";
// @ts-ignore
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "index",
  components: {
    MarqueeText,
  },
};
</script>

<style>
.scroll-snap-container {
  height: 100vh;
}

/* * {
  @apply border border-red-500;
} */
</style>
