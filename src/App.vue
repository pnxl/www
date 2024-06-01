<template>
  <div
    id="app"
    class="min-h-screen min-w-full bg-neutral-100 text-neutral-700 dark:bg-black dark:text-neutral-200 p-4"
  >
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>
