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
                "Manuk Dadali"
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                I Love Indonesia
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/01/20200221_085204.00_02_05_29.Still006.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/01/20200221_085204.00_00_00_00.Still001.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/01/20200221_085204.00_01_46_28.Still005.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/01/20200221_085204.00_00_24_11.Still002.png"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">01</p>
            <p
              class="absolute bottom-0 text-pretty md:left-48 left-0 text-left cursor-default"
            >
              📆 21 Feb 2020
            </p>
            <p
              class="absolute top-0 text-pretty md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default"
            >
              ✌🏼 Finger Drummer
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
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
                DABIN - Drown
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                Friendship Day 2021 (Music Cover Competition)
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/02/Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_00_11_00.Still008.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/02/Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_02_53_29.Still011.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/02/Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_03_40_06.Still012.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/02/Dabin - Drown (ft. Mokita) __ Guitar × Launchpad × Acapella × Keyboard Cover.mp4.00_03_53_15.Still013.png"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">02</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 9 Dec 2021
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Launchpad Lightshow, Keyboardist
            </p>
            <a
              class="absolute bottom-0 right-0 text-right group cursor-default"
            >
              📍
              <span class="">Online</span>
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                "What A Beautiful Name It Is"
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                Easter Music Competition
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/03/Final Render (Downscaled30fps).mp4.00_00_10_28.Still014.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/03/Final Render (Downscaled30fps).mp4.00_00_46_11.Still015.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/03/Final Render (Downscaled30fps).mp4.00_01_56_22.Still016.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/03/Final Render (Downscaled30fps).mp4.00_03_24_19.Still017.png"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">03</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 13 Apr 2022
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Launchpad Lightshow
            </p>
            <a
              class="absolute bottom-0 right-0 text-right group cursor-default"
            >
              📍
              <span class="">Online</span>
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                8G's First Chapel
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/04/IMG_20221027_144457.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/04/IMG_20221027_141609.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/04/WhatsApp Image 2022-11-15 at 15.50.39 (2).jpeg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/04/IMG_20221027_172346.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/04/40729.jpg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">04</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 15 Nov 2022
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Keyboardist
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                Moana
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                DH Look Alike
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/05/DSC08448.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/05/DSC08451.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/05/DSC08456.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/05/DSC08463.jpg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">05</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 06 Dec 2022
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Playback, Stage Designer + Manager
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                8G's Second Chapel
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/06/IMG_3605.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/06/IMG_3608.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/06/IMG_3814.jpg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">06</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 23 May 2023
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Audio + Sound Engineer, Confidence Monitor
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                Cross-class Final Chapel
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/07/Screenshot_2023-05-29_at_22.02.33.png"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">07</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 30 May 2023
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Audio + Sound Engineer, Visual Effects Artist, Editor
            </p>
            <a class="absolute bottom-0 right-0 text-right group">
              📍
              <span>Online</span>
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                9A's First Chapel
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/08/header.png"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">08</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 08 Aug 2023
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Playback, Keyboardist, Drummer
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                Ecstasy LIVE
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                Blue Feather V
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/09/023f50bd-a28e-4251-a193-e96b15dd9292.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/09/c01ba67c-29e4-40d5-a445-6a0ceef786a5.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/09/D7A9DB1B-D11F-4E0E-B0A5-DDDEB885D80D.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/09/header.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/09/IMG-20231023-WA0040.jpg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">09</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 23 Oct 2023
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Keyboardist
            </p>
            <a
              href="https://maps.app.goo.gl/oNpDHgvQkRZp9SEw7"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >BINUS School Simprug</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                Christmas Carol
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                with Sekolah Dian Harapan
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/10/20231202_175811.mp4.00_00_33_04.Still020.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/10/IMG_6385.jpeg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/10/IMG_6386.MOV.00_00_03_25.Still018.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/10/IMG_6387.jpeg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">10</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 02 Dec 2023
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Keyboardist
            </p>
            <a
              href="https://maps.app.goo.gl/iwCzhaxuj7KNJJkj9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >Mal Taman Anggrek</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                ECSTASY Live
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                JNY Cup
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/11/IMG_7253.jpeg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/11/IMG_7274.jpeg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/11/IMG_7280.jpeg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/11/IMG_7286.jpeg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">11</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 26 Jan 2024
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Keyboardist
            </p>
            <a
              href="https://maps.app.goo.gl/Fgtar4jaaHG2uhN19"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >Jakarta Nanyang School</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
                "Devoted To Christ"
              </h1>
              <h1
                class="text-center text-3xl sm:text-4xl md:text-5xl font-semibold opacity-75 mt-2 cursor-default"
              >
                Music Concert
              </h1>

              <div
                class="flex justify-center mt-8 gap-x-2 overflow-x-clip relative"
              >
                <div
                  class="absolute w-8 bg-gradient-to-r left-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <div
                  class="absolute w-8 bg-gradient-to-l right-0 top-0 h-full from-neutral-950 to-transparent"
                />
                <img
                  src="../../assets/portfolio/music/12/4aea5e4411194553b08d136e47ff5737.00_00_00_00.Still001.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/12/4aea5e4411194553b08d136e47ff5737.00_00_06_07.Still002.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/12/4aea5e4411194553b08d136e47ff5737.00_00_15_11.Still003.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/12/4aea5e4411194553b08d136e47ff5737.00_00_24_18.Still004.png"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/12/56682731-5d00-4e3a-ad6a-d91343e6d9cf.jpg"
                  class="h-24"
                />
                <img
                  src="../../assets/portfolio/music/12/IMG_8710.jpeg"
                  class="h-24"
                />
              </div>
            </div>
            <p class="absolute top-0 left-0 text-left cursor-default">12</p>
            <p
              class="absolute text-pretty bottom-0 md:left-48 left-0 text-left cursor-default"
            >
              📆 17 May 2024
            </p>
            <p
              class="absolute top-0 md:right-48 right-0 text-right flex flex-col gap-y-1 cursor-default text-pretty"
            >
              ✌🏼 Playback + Recording Engineer
            </p>
            <a
              href="https://maps.app.goo.gl/xCX9uk1jpnGBSmZm9"
              class="absolute bottom-0 right-0 text-right group"
            >
              📍
              <span
                class="underline text-pretty group-hover:decoration-blue-500"
                >SDH Daan Mogot</span
              >
            </a>
          </div>
          <hr class="rounded-full opacity-50" />
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
