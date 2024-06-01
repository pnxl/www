<template>
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
</template>
