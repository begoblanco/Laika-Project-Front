<script setup>
import { ref, onMounted, onUpdated } from "vue";
import bgImage from "@/components/images/bg.png";
import { useChatStore } from "@/stores/chatStore";
import ChatBubble from "./chat_bubbles/ChatBubble.vue";
import Laika from "@/components/Laika.vue";
import { useLaikaStore } from "@/stores/laikaStore";

const chatStore = useChatStore();
const laikaStore = useLaikaStore();
const currentMessage = ref('');
const chatContainer = ref(null);

const sendMessage = async () => {
  if (currentMessage.value) {
    const message = currentMessage.value;
    currentMessage.value = '';
    const emotion = await chatStore.sendMessage(message);
    laikaStore.setEmotion(emotion);
    scrollToBottom(); 
  }
};

// autoscroll
const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

// Ejecutar el autoscroll
onUpdated(() => {
  scrollToBottom();
});

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-1/4 hidden lg:block" :style="{ backgroundImage: `url(${bgImage})` }">
      <Laika />
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 bg-dark flex flex-col h-screen">
      <!-- Chat Header
      <header class="bg-secondary p-4 text-white sticky top-0 z-10">
        <h1 class="text-2xl font-semibold">Laika-Chan</h1>
      </header> -->

      <!-- Chat Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 ">
        <ChatBubble v-for="(message, i) in chatStore.messages" :message="message" :id="i" :key="i" />
      </div>

      <!-- Chat Input -->
      <footer class="bg-dark border-t border-secondary p-4 w-full">
        <div class="flex">
          <textarea v-model="currentMessage"
            class="flex-1 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-violet-500 resize-none"
            rows="1"
          />
          <button class="bg-violet-500 text-white px-4 py-2 rounded-md ml-2" @click="sendMessage">
            Send
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
