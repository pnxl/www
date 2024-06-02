<template>
  <div
    id="app"
    class="bg-neutral-100 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 p-4 pt-0 h-screen overflow-hidden"
  >
    <Header />
    <router-view v-slot="{ Component }" class="mt-[6.5rem]">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>
