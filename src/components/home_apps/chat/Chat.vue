<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import bgImage from "@/components/images/bg.png";
import { useChatStore } from "@/stores/chatStore";
import ChatBubble from "./chat_bubbles/ChatBubble.vue";
import Laika from "@/components/Laika.vue";
import { useLaikaStore } from "@/stores/laikaStore";

const chatStore = useChatStore();
const laikaStore = useLaikaStore();

const currentMessage = ref('');

const sendMessage = async () => {
  if (currentMessage.value) {
    const message = currentMessage.value;
    currentMessage.value = '';
    const emotion = await chatStore.sendMessage(message);
    laikaStore.setEmotion(emotion);
  }
}

</script>

<template>
  <!-- component -->
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div class="w-1/4 hidden lg:block" :style="{ backgroundImage: `url(${bgImage})` }">
      <!-- Sidebar Header -->

      <!-- Laika -->
      <Laika />
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 bg-dark">
      <!-- Chat Header -->
      <header class="bg-secondary p-4 text-white">
        <h1 class="text-2xl font-semibold">Laika-Chan</h1>
      </header>

      <!-- Chat Messages -->
      <div class="h-screen overflow-y-auto p-4 pb-36">
        <ChatBubble v-for="message, i in chatStore.messages"
          :message="message.replace(/\\n/g, '<br>').replace(/\n/g, '<br>')" :id="i" v-bind:key="i" />
      </div>
      <!-- Chat Input -->
      <footer class="bg-dark border-t border-secondary p-4 absolute bottom-0 w-full lg:w-3/4">
        <div class="flex items-center">
          <form @submit.prevent>
            <textarea type="text" v-model="currentMessage"
              class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-violet-500"></textarea>
            <button class="bg-violet-500 text-white px-4 py-2 rounded-md ml-2" @click="sendMessage">
              Send
            </button>
          </form>
        </div>
      </footer>
    </div>
  </div>
</template>
