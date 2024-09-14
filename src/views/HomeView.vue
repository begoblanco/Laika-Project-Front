<script setup>
import { RouterLink, RouterView } from "vue-router";
import Clock from "@/components/home_widget/Clock.vue";
import backgroundImage from "@/components/images/bg.png";
import noteIcon from "@/components/icons/notes.svg";
import chatIcon from "@/components/icons/chat.svg";
import calendarIcon from "@/components/icons/calendar.svg";
// import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main
    class="h-screen flex flex-col items-center justify-center bg-cover w-full"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
  
    <!-- Contenedor -->
    <div
      class="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-8 md:w-auto"
    >
      <Clock />
    </div>

    <!-- Íconos de navegación -->
    <div class="flex mt-10 space-x-10">
      <RouterLink to="/calendar">
        <img :src="calendarIcon" alt="Calendar Icon" class="w-10 h-10" />
      </RouterLink>

      <RouterLink to="/notes">
        <img :src="noteIcon" alt="Notes Icon" class="w-10 h-10" />
      </RouterLink>

      <RouterLink to="/chat">
        <img :src="chatIcon" alt="Chat Icon" class="w-10 h-10" />
      </RouterLink>
    </div>
  </main>
</template>
