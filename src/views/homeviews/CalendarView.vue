<script setup>
import { RouterLink, RouterView } from "vue-router";
import Calendar from '@/components/home/Calendar.vue';
</script>

<template>
  <main>
    <RouterLink to = "/">home</RouterLink>
    <Calendar />
  </main>
</template>

