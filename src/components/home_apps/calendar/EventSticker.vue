<script setup>
import { toRefs } from 'vue';

const props = defineProps(['event']);
const { event } = toRefs(props);
</script>

<template>
    <div class="text-xs bg-purple-100 mx-2">
        <div>{{ event.title }}</div>
        <!-- <div>{{ event.start_date }}</div>-->
    </div>
</template>