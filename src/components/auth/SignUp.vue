<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import kudryavka from "../../components/images/kudryavka.png";

const username = ref("");
const password = ref("");
const password2 = ref("");
const errorMessage = ref(null);

const router = useRouter(); 

const register = async () => {
  if (password.value === password2.value) {
    try {
      const response = await axios.post(import.meta.env.VITE_API_ENDPOINT + "/auth/register", {
        username: username.value,
        password: password.value,
      });
      console.log("Registration successful:", response.data);
      router.push("/"); 
    } catch (error) {
      console.error("Registration error:", error);
      errorMessage.value = error.response?.data?.message || "An error occurred during registration.";
    }
  } else {
    errorMessage.value = "Passwords do not match.";
  }
};
</script>

<template>
  <div class="bg-primary">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        :style="{ backgroundImage: `url(${kudryavka})` }"
      ></div>
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-5xl font-poppins font-bold text-center text-white">
              Laika-Chan is waiting for you!
            </h2>
            <p class="mt-3 text-white">Sign up to meet her!</p>
          </div>
          <div class="mt-8">
            <form @submit.prevent="register">
              <div>
                <label for="username" class="block mb-2 text-sm text-white">Username</label>
                <input
                  v-model="username"
                  type="text"
                  required
                  name="username"
                  id="username"
                  placeholder="Your Username"
                  class="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 bg-transparent border border-white rounded-md focus:ring-secondary focus:outline-secondary focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <label for="password" class="block mb-2 text-sm text-white">Password</label>
                <input
                  v-model="password"
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 bg-transparent border border-white rounded-md focus:ring-secondary focus:outline-secondary focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <label for="password2" class="block mb-2 text-sm text-white">Confirm Password</label>
                <input
                  v-model="password2"
                  type="password"
                  required
                  name="password2"
                  id="password2"
                  placeholder="Confirm Your Password"
                  class="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 bg-transparent border border-white rounded-md focus:ring-secondary focus:outline-secondary focus:ring focus:ring-opacity-40"
                />
              </div>

              <div v-if="errorMessage" class="mt-4 text-center text-red-500">
                <span v-html="errorMessage"></span>
              </div>

              <div class="mt-6">
                <button
                  type="submit"
                  class="bg-secondary font-poppins w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md hover:bg-random-50 focus:outline-none focus:bg-random-50 focus:ring focus:ring-random-50 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p class="mt-6 text-sm text-center text-gray-400">
              Already have an account?
              <a href="/" class="text-secondary focus:outline-none focus:underline hover:underline">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
