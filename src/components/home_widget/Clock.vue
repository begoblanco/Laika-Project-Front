<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'

const date = ref(new Date(Date.now()))

const hour = ref(date.value.getHours())
const minute = ref(date.value.getMinutes())
const second = ref(date.value.getSeconds())

const updateDate = () => {
  date.value = new Date(Date.now());
  hour.value = date.value.getHours()
  minute.value = date.value.getMinutes()
  second.value = date.value.getSeconds()
}
const intervalId = ref(null);
onMounted(() => {
      intervalId.value = setInterval(updateDate, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(intervalId.value);
    });
</script>

<template>
  <div class="text-6xl lg:text-8xl bg-dark text-secondary rounded-xl p-10 font-seven-segment">
    {{ String(hour).padStart(2, '0') }} : {{ String(minute).padStart(2, '0') }} : {{ String(second).padStart(2, '0') }}
  </div>
</template>
