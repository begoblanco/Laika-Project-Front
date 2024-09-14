<script setup>
import { RouterLink, RouterView } from "vue-router";
import Notes from '@/components/home_apps/Notes.vue';
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <Notes />
  </main>
</template>
