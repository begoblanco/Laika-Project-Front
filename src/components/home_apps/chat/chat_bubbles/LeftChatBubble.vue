<script setup>
import { toRefs } from 'vue';
import { marked } from 'marked';

const props = defineProps(['message'])
const { message } = toRefs(props);

console.log(marked.parse(message.value));
</script>

<template>
    <div class="flex mb-4 cursor-pointer">
        <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar"
                class="w-8 h-8 rounded-full" />
        </div>
        <div class="flex max-w-96 bg-violet-100 rounded-lg p-3 gap-3">
            <p class="text-gray-700" v-html="marked.parse(message)"></p>
        </div>
    </div>
</template>