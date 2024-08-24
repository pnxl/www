<template>
  <div id="app" class="px-8 py-4 pt-0 max-h-screen relative">
    <Header />
    <div class="overflow-y-scroll h-screen -mb-4 -mr-4 pr-4">
      <router-view v-slot="{ Component }" class="">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
