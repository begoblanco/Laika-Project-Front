<script setup>
import { RouterLink, RouterView } from "vue-router";
import Clock from '@/components/widget/Clock.vue';
import Weather from '@/components/widget/Weather.vue';
import backgroundImage from "@/components/images/bg.png";
// import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <main class="h-full flex flex-col items-center justify-center bg-cover w-full" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Contenedor para Clock y Weather -->
    <div class="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-8 md:w-auto">
      <Clock />
      <Weather />
    </div>
    
    <!-- Íconos de navegación -->
    <div class="flex space-x-8 ">
      <RouterLink to="/calendar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-blue-500 hover:text-blue-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m2-5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H5z" />
        </svg>
      </RouterLink>

      <RouterLink to="/notes">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-blue-500 hover:text-blue-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h6m-7 8h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
        </svg>
      </RouterLink>

      <RouterLink to="/chat">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-blue-500 hover:text-blue-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2m10-4h-4m0 0H7m4 4h4" />
        </svg>
      </RouterLink>
    </div>
  </main>
</template>