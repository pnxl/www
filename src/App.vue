<template>
  <div
    id="app"
    class="min-h-screen min-w-full bg-neutral-100 text-neutral-700 dark:bg-black dark:text-neutral-200"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
