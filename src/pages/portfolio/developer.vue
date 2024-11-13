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
    <div class="flex flex-col gap-y-8">
      <div
        v-for="entry in entries"
        class="gap-y-8 flex flex-col"
        v-motion-fade-visible-once
        :duration="100"
      >
        <div class="relative" style="height: 32rem">
          <div
            class="absolute top-auto bottom-auto left-auto right-auto w-full h-full flex flex-col justify-center"
          >
            <h1
              class="text-center mt-10 text-4xl sm:text-5xl md:text-6xl font-semibold cursor-default"
            >
              {{ entry.title }}
            </h1>
            <h2
              v-if="entry.description"
              class="text-center text-xl sm:text-2xl md:text-3xl max-w-[56rem] mx-auto font-medium opacity-75 mt-2 cursor-default"
            >
              {{ entry.description }}
            </h2>

            <div
              v-if="entry.images"
              class="flex justify-center mt-8 gap-x-2 relative"
            >
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
                  v-for="image in entry.images"
                  :src="`/portfolio/developer/${entry.index}/${image.file}`"
                  :alt="image.alt"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute bottom-0 left-0 text-left cursor-default">
            {{ String(entry.index).padStart(2, "0") }}
          </p>
          <p
            class="absolute top-0 text-pretty md:left-48 left-0 text-left cursor-default"
          >
            ✨ {{ entry.languages.join(", ") }}
          </p>
          <p
            class="absolute bottom-0 text-pretty md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 {{ entry.role }}
          </p>
          <a
            :href="entry.link.url"
            class="absolute top-0 right-0 text-right group cursor-default"
          >
            🌐
            <span
              :class="
                (entry.link.url
                  ? 'group-hover:decoration-blue-500 underline cursor-pointer'
                  : 'cursor-default') + ' text-pretty '
              "
              >{{ entry.link.name }}</span
            >
          </a>
        </div>
        <hr :delay="0" :duration="125" class="rounded-full opacity-50 my-0" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
export type Entries = Entry[];

export interface Entry {
  index: number;
  title: string;
  description?: string;
  images?: EntryImage[];
  role: string;
  languages: string[];
  link: EntryLink;
}

export interface EntryImage {
  file: string;
  alt: string;
}

export interface EntryLink {
  name: string;
  url?: string;
}

/* {
    index: 0,
    title: "Title",
    description: "Description",
    images: [
      {
        file: "File",
        alt: "Description",
      },
    ],
    role: "Role",
    languages: ["Language"],
    link: {
      name: "Website",
      url: "URL"
    },
  },
*/

const entries: Entries = [
  {
    index: 6,
    title: "Sustainable Catering",
    description:
      "Part of a project for Chemistry where we needed to find solutions for pollution.",
    images: [
      {
        file: "Screenshot 2024-11-12 at 07.58.08.jpeg",
        alt: "Website homepage",
      },
      {
        file: "Screenshot 2024-11-12 at 07.58.16.jpeg",
        alt: "Section 1",
      },
      {
        file: "Screenshot 2024-11-12 at 07.58.23.jpeg",
        alt: "Section 2",
      },
      {
        file: "Screenshot 2024-11-12 at 07.58.30.jpeg",
        alt: "Section 3",
      },
    ],
    role: "Assignment, Movement",
    languages: ["Remix", "TypeScript", "Tailwind CSS"],
    link: {
      name: "Website",
      url: "https://sustainable-catering.pages.dev/",
    },
  },
  {
    index: 5,
    title: "Handel",
    description:
      "Web-based point-of-sale system for people running small, temporary businesses - such as garage sales and pop-up shops.",
    images: [
      {
        file: "Screenshot 2024-06-03 at 18.25.36.jpeg",
        alt: "Website homepage",
      },
      {
        file: "Screenshot 2024-06-03 at 18.26.24.jpeg",
        alt: "The main screen",
      },
      {
        file: "Screenshot 2024-06-03 at 18.26.42.jpeg",
        alt: "Order summary",
      },
      {
        file: "Screenshot 2024-06-03 at 18.27.35.jpeg",
        alt: "Current order tracking",
      },
      {
        file: "Screenshot 2024-06-03 at 18.27.39.jpeg",
        alt: "Kitchen screen UI",
      },
    ],
    role: "Point-of-sale, Utility",
    languages: ["Vue", "TypeScript", "Supabase", "Tailwind CSS"],
    link: {
      name: "Website",
      url: "https://handel.pnxl.dev/",
    },
  },
  {
    index: 4,
    title: "MIDI Message Reader",
    description: "Translates MIDI hexadecimals into human readable text.",
    images: [
      {
        file: "Screenshot 2024-06-03 at 18.24.15.jpeg",
        alt: "The utility",
      },
    ],
    role: "Utility",
    languages: ["Vue", "TypeScript"],
    link: {
      name: "Website",
      url: "https://midi-message-reader.pnxl.dev/",
    },
  },
  {
    index: 3,
    title: "catto drive",
    description:
      "A versatile file-sharing platform inspired by Google Drive and WeTransfer.",
    images: [
      {
        file: "Screenshot 2024-06-03 at 18.21.17.jpeg",
        alt: "Main landing page",
      },
      {
        file: "Screenshot 2024-06-03 at 18.21.29.jpeg",
        alt: "Login page",
      },
    ],
    role: "Utility",
    languages: ["SolidJS", "TypeScript", "Supabase", "Uno CSS"],
    link: {
      name: "Website",
      url: "https://drive.cattolabs.com/",
    },
  },
  {
    index: 2,
    title: "Pokaimon",
    description:
      "Genshin Impact themed collectible game with mechanics similar to Pokémon.",
    images: [
      {
        file: "Screenshot 2024-06-03 at 18.09.17.jpeg",
        alt: "Main game interface",
      },
      {
        file: "Screenshot 2024-06-03 at 18.14.06.jpeg",
        alt: "Game's character shop",
      },
      {
        file: "Screenshot 2024-06-03 at 18.14.09.jpeg",
        alt: "User's profile interface",
      },
      {
        file: "Screenshot 2024-06-03 at 18.17.16.jpeg",
        alt: "Game fighting interface",
      },
    ],
    role: "Game",
    languages: ["Vue", "TypeScript", "Supabase", "Tailwind CSS"],
    link: {
      name: "Website",
      url: "https://pokaimon.cattolabs.com/",
    },
  },
  {
    index: 1,
    title: "“Emotional Damage”",
    description:
      "Opens a random Steven He video at the timestamp he says “Emotional Damage”",
    role: "Joke/Satire",
    languages: ["Python"],
    link: {
      name: "Git Repository",
      url: "https://github.com/pnxl/emotionaldamage",
    },
  },
];
</script>
