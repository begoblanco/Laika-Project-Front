<script setup>
import { RouterLink, RouterView } from "vue-router";
import Notes from "@/components/home_apps/notes/Notes.vue";
import Navbar from "@/components/Navbar.vue";
import backgroundImage from "@/components/images/bg.png";
</script>

<template>
  <main
    class=" h-screen bg-cover w-full"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <Navbar />
    <Notes />
  </main>
</template>
