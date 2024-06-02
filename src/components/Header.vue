<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: -100 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 750,
        type: 'keyframes',
        ease: 'easeOut',
      },
    }"
    :delay="750"
    :duration="750"
    class="absolute w-full -mx-8 px-8 pt-4"
  >
    <header
      class="flex flex-row justify-between md:text-5xl sm:text-4xl text-3xl font-semibold"
    >
      <RouterLink
        to="/"
        :class="
          $route.fullPath === '/'
            ? 'italic-active opacity-100'
            : 'hover:opacity-100 opacity-65 italic-on-hover'
        "
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        :class="
          $route.fullPath === '/about'
            ? 'italic-active opacity-100'
            : 'hover:opacity-100 opacity-65 italic-on-hover'
        "
        >About</RouterLink
      >
      <RouterLink
        to="/portfolio"
        :class="
          $route.fullPath === '/portfolio'
            ? 'italic-active opacity-100'
            : 'hover:opacity-100 opacity-65 italic-on-hover'
        "
        >Portfolio</RouterLink
      >
    </header>
    <hr class="my-4 border-neutral-500 rounded-full opacity-50" />
  </div>
</template>
