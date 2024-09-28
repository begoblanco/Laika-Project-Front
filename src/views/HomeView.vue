<script setup>
import { RouterLink, RouterView } from "vue-router";
import Clock from "@/components/home_widget/Clock.vue";
import backgroundImage from "@/components/images/bg.png";
import noteIcon from "@/components/icons/notes.svg";
import chatIcon from "@/components/icons/chat.svg";
import calendarIcon from "@/components/icons/calendar.svg";
import Navbar from "@/components/Navbar.vue";
import Laika from "@/components/Laika.vue";
</script>

<template>
  <Navbar />
  <main
    class="h-screen bg-cover w-full"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
  <div class="lg:flex lg:flex-column">
  <!-- Sidebar con Laika -->
  <div class="w-1/4 hidden lg:block ">
      <div class="overflow-y-auto h-screen flex flex-col items-center justify-end border-r-8 border-primary">
        <Laika />
      </div>
    </div>
  
    <div class="flex flex-col items-center ml-1 lg:w-3/4 r">
      <!-- Contenedor para clock -->
      <div
        class="mt-40 flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-8 md:w-auto"
      >
        <Clock />
      </div>

      <!-- Íconos de navegación -->
      <div class="flex mt-40 space-x-10 lg:space-x-20">
        <RouterLink :to="{name: 'calendar'}" class="flex flex-col items-center">
          <img :src="calendarIcon" alt="Calendar Icon" class="w-20 h-20" />
          <div class="mt-2 text-purple-200">Calendar</div>
        </RouterLink>

        <RouterLink :to="{name: 'notes'}" class="flex flex-col items-center">
          <img :src="noteIcon" alt="Notes Icon" class="w-20 h-20" />
          <div class="mt-2 text-purple-200">Notes</div>
        </RouterLink>

        <RouterLink :to="{name: 'chat'}" class="flex flex-col items-center">
          <img :src="chatIcon" alt="Chat Icon" class="w-20 h-20" />
          <div class="mt-2 text-purple-200">Chat</div>
        </RouterLink>
      </div>
    </div>
  </div>

  </main>
</template>
