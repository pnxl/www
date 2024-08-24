<template>
  <main class="min-h-screen flex flex-col gap-y-8">
    <div
      v-motion-slide-visible-once-bottom
      :delay="0"
      :duration="125"
      class="mt-24 flex flex-row justify-between"
    >
      <h3
        class="font-medium cursor-default text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        Music Portfolio
      </h3>
      <router-link
        to="/portfolio/developer"
        class="font-medium opacity-50 hover:opacity-100 hover:text-blue-600 hover:dark:text-blue-400 text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-neutral-900 dark:text-neutral-100 selection:bg-transparent"
      >
        Dev
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
              class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
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
                  :src="`/portfolio/music/${entry.index}/${image.file}`"
                  :alt="image.alt"
                  class="h-24 hover:scale-150 my-auto hover:mx-4"
                />
              </div>
            </div>
          </div>
          <p class="absolute top-0 left-0 text-left cursor-default">
            {{ String(entry.index).padStart(2, "0") }}
          </p>
          <p
            class="absolute bottom-0 text-pretty md:left-48 left-0 text-left cursor-default"
          >
            📆 {{ String(formatDate(entry.date * 1000)) }}
          </p>
          <p
            class="absolute top-0 text-pretty md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default"
          >
            ✌🏼 {{ entry.role }}
          </p>
          <a
            :href="entry.location.url"
            class="absolute bottom-0 right-0 text-right group cursor-default"
          >
            📍
            <span
              :class="
                (entry.location.url
                  ? 'group-hover:decoration-blue-500 underline cursor-pointer'
                  : 'cursor-default') + ' text-pretty '
              "
              >{{ entry.location.name }}</span
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
  date: number;
  location: EntryLocation;
}
export interface EntryImage {
  file: string;
  alt: string;
}
export interface EntryLocation {
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
    date: 0,
    location: {
      name: "Place",
      url: "URL"
    },
  },
*/

const entries: Entries = [
  {
    index: 13,
    title: "“Harmony In a Bowl Of Bakmie”",
    description: "Musical Drama",
    images: [
      {
        file: "IMG_9686.png",
        alt: "My (first) playback and audio setup during the rehearsal",
      },
      {
        file: "IMG_0058.jpg",
        alt: "My (second) playback and audio setup during the rehearsal",
      },
      {
        file: "e758e80b-9595-4887-84c6-64f6214f88b4.jpg",
        alt: "Picture of the comittees after a meeting",
      },
      {
        file: "IMG_0086.png",
        alt: "Picture of a bag full of Red Bull bought by the stage crew and I",
      },
      {
        file: "IMG_0102.png",
        alt: "The stage during load in",
      },
      {
        file: "PINV5587.jpg",
        alt: "My playback and audio setup during the show day",
      },
    ],
    role: "Audio + Playback Engineer",
    date: 1723050000,
    location: {
      name: "Gedung Kesenian Jakarta",
      url: "https://maps.app.goo.gl/EPxbGJkCZK8qbDs4A",
    },
  },
  {
    index: 12,
    title: "“Devoted To Christ”",
    description: "Music Concert",
    images: [
      {
        file: "4aea5e4411194553b08d136e47ff5737.00_00_00_00.Still001.png",
        alt: "Picture of my playback and recording setup",
      },
      {
        file: "4aea5e4411194553b08d136e47ff5737.00_00_06_07.Still002.png",
        alt: "Picture of the playback and concert",
      },
      {
        file: "4aea5e4411194553b08d136e47ff5737.00_00_15_11.Still003.png",
        alt: "Picture of the playback and concert",
      },
      {
        file: "56682731-5d00-4e3a-ad6a-d91343e6d9cf.jpg",
        alt: "The whole orchestra after rehearsal",
      },
      {
        file: "IMG_8710.jpeg",
        alt: "The choir during the concert",
      },
    ],
    role: "Playback + Recording Engineer",
    date: 1715878800,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
  {
    index: 11,
    title: "Ecstasy LIVE",
    description: "JNY CUP 2024: Reload",
    images: [
      {
        file: "IMG_7274.jpeg",
        alt: "Picture with the whole band before the show",
      },
      {
        file: "d38a6ffe-7a3a-4716-ae31-bf2991385c79.jpg",
        alt: "Picture of the band while performing",
      },
      {
        file: "451da838-3a65-4606-b57b-6e1175db4032.jpg",
        alt: "Picture of our guitarist while performing",
      },
      {
        file: "d084a24c-6867-4ba6-ad0f-0015e882361c.jpg",
        alt: "Picture of me while performing",
      },
      {
        file: "IMG_7286.jpeg",
        alt: "Me with friends after the show",
      },
    ],
    role: "Keyboardist",
    date: 1706202000,
    location: {
      name: "Jakarta Nanyang School",
      url: "https://maps.app.goo.gl/Fgtar4jaaHG2uhN19",
    },
  },
  {
    index: 10,
    title: "Christmas Carol",
    description: "with Sekolah Dian Harapan",
    images: [
      {
        file: "IMG_6386.MOV.00_00_03_25.Still018.png",
        alt: "Our drummer acting as a metronome during rehearsal",
      },
      {
        file: "20231202_175811.mp4.00_00_33_04.Still020.png",
        alt: "Me infront of my keyboard",
      },
      {
        file: "20231202_180057.jpg",
        alt: "The string orchestra",
      },
    ],
    role: "Keyboardist",
    date: 1701450000,
    location: {
      name: "Mal Taman Anggrek",
      url: "https://maps.app.goo.gl/iwCzhaxuj7KNJJkj9",
    },
  },
  {
    index: 9,
    title: "Ecstasy LIVE",
    description: "Blue Feather V",
    images: [
      {
        file: "023f50bd-a28e-4251-a193-e96b15dd9292.jpg",
        alt: "Selfie with the whole band after rehearsal",
      },
      {
        file: "c01ba67c-29e4-40d5-a445-6a0ceef786a5.jpg",
        alt: "Picture with the whole band after rehearsal",
      },
      {
        file: "header.png",
        alt: "Selfie with the whole band before the show",
      },
      {
        file: "IMG-20231023-WA0040.jpg",
        alt: "The band during the show",
      },
    ],
    role: "Keyboardist",
    date: 1697994000,
    location: {
      name: "BINUS School Simprug",
      url: "https://maps.app.goo.gl/oNpDHgvQkRZp9SEw7",
    },
  },
  {
    index: 8,
    title: "9A's First Chapel",
    description: "Student Chapel Service",
    images: [
      {
        file: "IMG_4889.jpg",
        alt: "My keyboard, drum and playback rig",
      },
      {
        file: "header.png",
        alt: "Picture with the whole 9A class",
      },
    ],
    role: "Playback, Keyboardist, Drummer",
    date: 1691427600,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
  {
    index: 7,
    title: "Multi-class Chapel Service",
    description: "Student Chapel Service",
    images: [
      {
        file: "Screenshot_2023-05-29_at_22.02.33.png",
        alt: "The band and worship leaders during rehearsal",
      },
    ],
    role: "Audio Engineer, Visual Effects Artist, Editor",
    date: 1685379600,
    location: {
      name: "Online",
    },
  },
  {
    index: 6,
    title: "8G's Second Chapel",
    description: "Student Chapel Service",
    images: [
      {
        file: "IMG_3605.jpg",
        alt: "Picture of slides and audio engineer working at front of house",
      },
      {
        file: "IMG_3608.jpg",
        alt: "The band and worship leaders during rehearsal",
      },
      {
        file: "IMG_3814.jpg",
        alt: "Picture with the whole 8G class",
      },
    ],
    role: "Audio Engineer, Confidence Monitor",
    date: 1684774800,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
  {
    index: 5,
    title: "“Moana” - Musical Drama",
    description: "Friendship Day 2022 (DH Look Alike)",
    images: [
      {
        file: "DSC08448.jpg",
        alt: "Moana and Hei-hei",
      },
      {
        file: "DSC08451.jpg",
        alt: "Moana and Maui",
      },
      {
        file: "DSC08456.jpg",
        alt: "Moana and Tamatoa",
      },
      {
        file: "DSC08463.jpg",
        alt: "Closing dance of 'Where You'll Go'",
      },
    ],
    role: "Playback Composer, Stage Designer",
    date: 1670259600,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
  {
    index: 4,
    title: "8G's First Chapel",
    description: "Student Chapel Service",
    images: [
      {
        file: "IMG_20221027_144457.jpg",
        alt: "Pianist and drummer during rehearsal",
      },
      {
        file: "IMG_20221027_172346.jpg",
        alt: "Pianist and drummer during rehearsal",
      },
      {
        file: "IMG_20221027_141609.jpg",
        alt: "Worship leaders and singers during rehearsal",
      },
      {
        file: "WhatsApp Image 2022-11-15 at 15.50.39 (2).jpeg",
        alt: "Picture with the whole 8G class",
      },
    ],
    role: "Keyboardist",
    date: 1668445200,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
  {
    index: 3,
    title: "“What A Beautiful Name It Is”",
    description: "Easter Music Competition",
    images: [
      {
        file: "Final Render (Downscaled30fps).mp4.00_00_10_28.Still014.png",
        alt: "All vocalists singing together",
      },
      {
        file: "Final Render (Downscaled30fps).mp4.00_00_46_11.Still015.png",
        alt: "Vocalists and pianist",
      },
      {
        file: "Final Render (Downscaled30fps).mp4.00_01_56_22.Still016.png",
        alt: "Vocalists and drummer",
      },
      {
        file: "Final Render (Downscaled30fps).mp4.00_03_24_19.Still017.png",
        alt: "Vocalists, launchpad lightshow, and drummer",
      },
    ],
    role: "Launchpad Lightshow",
    date: 1649782800,
    location: {
      name: "Online",
    },
  },
  {
    index: 2,
    title: "“Drown”",
    description: "Friendship Day 2021 (Music Cover Competition)",
    images: [
      {
        file: "Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_00_11_00.Still008.png",
        alt: "Launchpad lightshow and guitar for intro",
      },
      {
        file: "Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_02_53_29.Still011.png",
        alt: "Launchpad lightshow and vocalist for verse",
      },
      {
        file: "Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_03_40_06.Still012.png",
        alt: "Launchpad lightshow of the chorus",
      },
      {
        file: "Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_03_53_15.Still013.png",
        alt: "Keyboard for outro",
      },
    ],
    role: "Launchpad Lightshow, Keyboardist",
    date: 1638982800,
    location: {
      name: "Online",
    },
  },
  {
    index: 1,
    title: "“Manuk Dadali”",
    description: "I Love Indonesia",
    images: [
      {
        file: "20200221_085204.00_02_05_29.Still006.png",
        alt: "Picture of the whole performance",
      },
      {
        file: "20200221_085204.00_00_00_00.Still001.png",
        alt: "Me and my band playing together",
      },
      {
        file: "20200221_085204.00_01_46_28.Still005.png",
        alt: "Me and my band playing together but with better lighting",
      },
      {
        file: "20200221_085204.00_00_24_11.Still002.png",
        alt: "Dancers and vocalists on stage",
      },
    ],
    role: "Finger Drummer",
    date: 1582218000,
    location: {
      name: "SDH Daan Mogot",
      url: "https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9",
    },
  },
];

function formatDate(value: number) {
  let date = new Date(value);
  const d = date.toLocaleString("default", { day: "2-digit" });
  const m = date.toLocaleString("default", { month: "short" });
  const y = date.toLocaleString("default", { year: "numeric" });
  return `${d} ${m} ${y}`;
}
</script>
