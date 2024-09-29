<script setup>
import backgroundImage from "@/components/images/bg.png";
import CalendarCard from "./CalendarCard.vue";
import UpcomingEvents from "./UpcomingEvents.vue";
</script>

<template>
  <section class="relative">
    <div class="w-full py-20" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="w-full max-w-7xl mx-auto px-2 lg:px-8">
        <div class="grid grid-cols-12 gap-8 max-w-4xl mx-auto xl:max-w-full">
          <UpcomingEvents />
          <CalendarCard />
        </div>
      </div>
    </div>
  </section>
</template>
