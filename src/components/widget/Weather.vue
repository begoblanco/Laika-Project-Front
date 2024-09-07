<template>
    <!-- Componente -->
    <div class=" min-h-screen antialiased flex items-center justify-center p-4">
      <div class="container mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        <div class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
          <div class="flex flex-col">
            <div>
              <h2 class="font-bold text-gray-600 text-center text-lg md:text-xl lg:text-2xl">Bucharest, Romania</h2>
            </div>
            <div class="my-6">
              <div class="flex flex-col items-center md:flex-row md:space-x-4">
                <div id="icon">
                  <span>
                    <svg class="w-16 h-16 md:w-20 md:h-20 fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                      </path>
                    </svg>
                  </span>
                </div>
                <div id="temp">
                  <h4 class="text-3xl md:text-4xl">12&deg;C</h4>
                  <p class="text-xs text-gray-500">Feels like +14&deg;C</p>
                </div>
              </div>
            </div>
            <div class="w-full text-right border-t-2 border-gray-100 mt-2">
              <a href="#" class="text-indigo-600 text-xs font-medium hover:underline">View more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  