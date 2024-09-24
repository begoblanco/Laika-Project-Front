<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import kudryavka from "../../components/images/kudryavka.png";
import { useAuthStore } from '../../stores/auth.js';

const username = ref("");
const password = ref("");
const textAlert = ref("");

const route = useRoute();
const router = useRouter();

const store = useAuthStore();

const modifyRegister = () => {
  if (loginChange.register == false) loginChange.setRegister(true);
  else loginChange.setRegister(false);
};

async function login() {
  if (username.value != "" && password.value != "")
    try {
      const response = await store.login(username.value, password.value);

      if (response.message == "Logged") {
        store.user.id = response["id"];
        store.user.isAuthenticated = true;
        store.user.username = response["username"];
        store.user.role = response["roles"];

        localStorage.setItem("id", response["id"]);
        localStorage.setItem("username", response["username"]);
        localStorage.setItem("role", response["roles"]);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem(
          "token",
          btoa(`${username.value}:${password.value}`)
        );

        const redirectPath = route.query.redirect || "/";
        router.push(redirectPath);
      } else textAlert.value = "Incorrect username or password!";
    } catch (error) {
      textAlert.value = "Error trying to login, please try again.";
    }
  else textAlert.value = "User or Password not by null!";
}
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
            <p class="mt-3 text-white">Sign in to access your account</p>
          </div>
          <div class="mt-8">
            <form @submit.prevent="login">
              <div>
                <label for="username" class="block mb-2 text-sm text-white"
                  >Username</label
                >
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
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-white"
                    >Password</label
                  >
                </div>
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
              <!-- <div v-if="errorMessage" class="mt-4 text-center text-red-500">
                  <span v-html="errorMessage"></span>
                </div> -->
              <div class="mt-6">
                <button
                  type="submit"
                  class="bg-secondary font-poppins w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md hover:bg-random-50 focus:outline-none focus:bg-random-50 focus:ring focus:ring-random-50 focus:ring-opacity-50"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p class="mt-6 text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="/register"
                class="text-secondary focus:outline-none focus:underline hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
