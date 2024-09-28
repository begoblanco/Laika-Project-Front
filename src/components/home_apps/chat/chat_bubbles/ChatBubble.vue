<script setup>
import LeftChatBubble from "./LeftChatBubble.vue";
import RightChatBubble from "./RightChatBubble.vue";

import { toRefs } from 'vue';

const props = defineProps({ id: Number, message: String })
const { message, id } = toRefs(props);
</script>

<template>
    <RightChatBubble v-if="id % 2 == 0" :message="message"></RightChatBubble>
    <LeftChatBubble v-if="id % 2 != 0" :message="message"></LeftChatBubble>
</template>