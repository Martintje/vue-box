<script setup lang="ts"></script>

<template>
  <main class="home-view">
    <h1 class="home-view__heading">Design system kitchensink</h1>
  </main>
</template>

<style lang="scss" scoped>
@reference "../assets/main.css";

.home-view {
  @apply px-3;
  @apply bg-slate-300;
  @apply min-h-screen;

  .home-view__heading {
    @apply text-xl;
    @apply font-semibold;
    @apply py-1;
  }
}
</style>
