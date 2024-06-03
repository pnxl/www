<template>
  <div id="app" class="px-8 py-4 pt-0 max-h-screen relative">
    <Header />
    <router-view v-slot="{ Component }" class="">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>
