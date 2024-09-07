<script setup>
import { RouterLink, RouterView } from "vue-router";
import Notes from '@/components/home/Notes.vue';
</script>

<template>
  <main>
    <RouterLink to = "/">home</RouterLink>
    <Notes />
  </main>
</template>
