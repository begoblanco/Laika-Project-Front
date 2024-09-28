<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  router.push("/");
};
</script>

<template>
  <nav class="bg-primary dark:bg-primary sticky w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <RouterLink :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/components/icons/stars.svg" class="h-8" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-200">Laika</span>
        <img src="/src/components/icons/stars.svg" class="h-8" />
      </RouterLink>

      <button @click="handleLogout" class="flex items-center space-x-2 rtl:space-x-reverse">
        <img src="/src/components/icons/logout.svg" alt="Logout" class="h-8 w-8 cursor-pointer" />
      </button>
    </div>
  </nav>
</template>
