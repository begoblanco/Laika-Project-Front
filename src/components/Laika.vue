<script setup>
import { ref } from 'vue';
import angry from '@/components/images/laika/angry.png';
import confused from '@/components/images/laika/confused.png';
import happy from '@/components/images/laika/happy.png';
import neutral from '@/components/images/laika/neutral.png';
import sad from '@/components/images/laika/sad.png';
import very_happy from '@/components/images/laika/very_happy.png';
import { useLaikaStore } from '@/stores/laikaStore';

const laikaStore = useLaikaStore();

const emotions = {
  angry: angry,
  confused: confused,
  happy: happy,
  neutral: neutral,
  thinking: neutral,
  sad: sad,
  very_happy: very_happy,
  laughing: very_happy
}

const randEmotion = () => {
  
  const keys = Object.keys(emotions);
  const randomIndex = Math.floor(Math.random() * keys.length);
  laikaStore.setEmotion(keys[randomIndex]);
}

</script>

<template>

  <!-- <div class="w-1/4 hidden lg:block"> -->
  <!-- Laika -->
  <div class="overflow-y-auto h-screen flex flex-col justify-end">
    <img @click="randEmotion" class="object-cover w-full h-full" :src="emotions[laikaStore.emotion]" />
  </div>
  <!-- </div> -->

</template>
