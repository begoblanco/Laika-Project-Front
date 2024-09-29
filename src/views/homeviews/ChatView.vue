<script setup>
import { RouterLink, RouterView } from "vue-router";
import Chat from '@/components/home_apps/chat/Chat.vue';
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="min-h-screen">
    <Chat />
  </main>
</template>

