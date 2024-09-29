<script setup>
import { RouterLink, RouterView } from "vue-router";
import Calendar from '@/components/home_apps/calendar/Calendar.vue';
import Navbar from "@/components/Navbar.vue";
import backgroundImage from '@/components/images/bg.png';
</script>

<template>
  <Navbar />
  <main class="h-screen bg-cover w-full"
  :style="{ backgroundImage: `url(${backgroundImage})` }">
    <Calendar />
  </main>
</template>

