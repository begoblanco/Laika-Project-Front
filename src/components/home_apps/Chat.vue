<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import bgImage from "@/components/images/bg.png";

// Estado del menú visible/invisible
const isMenuVisible = ref(false);

// Función para alternar la visibilidad del menú
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// Función para cerrar el menú si se hace clic fuera de él
const handleClickOutside = (event) => {
  const menuButton = document.querySelector("button");
  const menuDropdown = document.querySelector("[v-if='isMenuVisible']");

  if (
    !menuButton.contains(event.target) &&
    !menuDropdown?.contains(event.target)
  ) {
    isMenuVisible.value = false;
  }
};

// Añadir y remover el evento al montar y desmontar el componente
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <!-- component -->
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div
      class="w-1/4 hidden lg:block"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <!-- Sidebar Header -->

      <!-- Laika -->
      <div class="overflow-y-auto h-screen flex flex-col justify-end">
        <img class="object-cover w-full h-full" src="../images/CGKD10ah.png" />
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 bg-dark">
      <!-- Chat Header -->
      <header class="bg-secondary p-4 text-white">
        <h1 class="text-2xl font-semibold">Laika-Chan</h1>
        <!-- <div class="relative">
          <button id="menuButton" class="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z"
              />
            </svg>
          </button> -->
        <!-- Menu Dropdown -->
        <!-- <div
            id="menuDropdown"
            class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
          >
            <ul class="py-2 px-3">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                  >Option 1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                  >Option 2</a
                >
              </li> -->
        <!-- Add more menu options here -->
        <!-- </ul>
          </div>
        </div> -->
      </header>

      <!-- Chat Messages -->
      <div class="h-screen overflow-y-auto p-4 pb-36">
        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-violet-100 rounded-lg p-3 gap-3">
            <p class="text-gray-700">Hey, how's it going?</p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-violet-400 text-white rounded-lg p-3 gap-3"
          >
            <p>Hi Laika! I'm good. How about you?</p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <footer
        class="bg-dark border-t border-secondary p-4 absolute bottom-0 w-full lg:w-3/4"
      >
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-violet-500"
          />
          <button class="bg-violet-500 text-white px-4 py-2 rounded-md ml-2">
            Send
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
