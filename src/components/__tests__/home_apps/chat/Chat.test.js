// tests/ChatComponent.test.js

import { mount } from "@vue/test-utils";
import ChatComponent from "@/components/home_apps/chat/Chat.vue"; // Ajusta la ruta según corresponda
import ChatBubble from "@/components/home_apps/chat/chat_bubbles/ChatBubble.vue";
import LeftChatBubble from "@/components/home_apps/chat/chat_bubbles/LeftChatBubble.vue";
import RightChatBubble from "@/components/home_apps/chat/chat_bubbles/RightChatBubble.vue";
import { createPinia, setActivePinia } from "pinia";
import { useChatStore } from "@/stores/chatStore";
import { useLaikaStore } from "@/stores/laikaStore";

describe("ChatComponent Tests", () => {
  let pinia;
  let chatStore;
  let laikaStore;

  beforeEach(() => {
    // Configuración de Pinia
    pinia = createPinia();
    setActivePinia(pinia);
    chatStore = useChatStore();
    laikaStore = useLaikaStore();
  });

  it("renders ChatComponent and displays messages", async () => {
    // Simulamos algunos mensajes
    chatStore.messages = ["Hello!", "How are you?", "I am Laika!"];

    const wrapper = mount(ChatComponent);

    // Verifica que el componente ChatBubble se monte correctamente
    const chatBubbles = wrapper.findAllComponents(ChatBubble);
    expect(chatBubbles.length).toBe(chatStore.messages.length);
  });

  it("sends a message and updates the chat", async () => {
    const wrapper = mount(ChatComponent);
    const textarea = wrapper.find("textarea");

    // Simulamos un mensaje
    textarea.setValue("Test message");

    const sendButton = wrapper.find("button");
    await sendButton.trigger("click");

    // Verificamos que el mensaje se haya añadido al store
    expect(chatStore.messages.length).toBe(1);
    expect(chatStore.messages[0]).toBe("Test message");

    // Verificamos que la emoción de Laika se haya actualizado
    expect(laikaStore.emotion).toBeDefined();
  });

  it("renders LeftChatBubble and RightChatBubble correctly based on message id", async () => {
    chatStore.messages = ["Message from User A", "Message from User B"];

    const wrapper = mount(ChatComponent);

    await wrapper.vm.$nextTick();

    // Verifica que se muestren las burbujas de chat correctas
    const bubbles = wrapper.findAllComponents(ChatBubble);
    expect(bubbles[0].exists()).toBe(true);
    expect(bubbles[1].exists()).toBe(true);

    expect(wrapper.findComponent(LeftChatBubble).exists()).toBe(true);
    expect(wrapper.findComponent(RightChatBubble).exists()).toBe(true);
  });
});
