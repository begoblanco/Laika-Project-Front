<script setup>
import { RouterLink, RouterView } from "vue-router";
import Chat from '@/components/home_apps/Chat.vue';
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <Chat />
  </main>
</template>

