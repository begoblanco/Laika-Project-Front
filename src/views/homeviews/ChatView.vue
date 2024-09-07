<script setup>
import { RouterLink, RouterView } from "vue-router";
import Chat from '@/components/home/Chat.vue';
</script>

<template>
  <main>
    <RouterLink to = "/">home</RouterLink>
    <Chat />
  </main>
</template>

