<script setup>
import backgroundImage from "@/components/images/bg.png";
</script>

<template>
  <section class="relative">
    <div
      class="w-full py-20"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="w-full max-w-7xl mx-auto px-2 lg:px-8">
        <div class="grid grid-cols-12 gap-8 max-w-4xl mx-auto xl:max-w-full">
          <div class="col-span-12 xl:col-span-5">
            <h2 class="text-3xl leading-tight text-purple-200 mb-4">
              Upcoming Events!
            </h2>
            
            <div class="flex gap-5 flex-col">
              <div class="p-6 rounded-xl bg-white">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <p class="text-base font-medium text-gray-900">
                      Jan 10,2020 - 10:00 - 11:00
                    </p>
                  </div>
                  <div class="dropdown relative inline-flex">
                    <button
                      type="button"
                      data-target="dropdown-default"
                      class="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-black rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="4"
                        viewBox="0 0 12 4"
                        fill="none"
                      >
                        <path
                          d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707"
                          stroke="currentcolor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="dropdown-default"
                      class="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full -left-10 w-max mt-2 hidden"
                      aria-labelledby="dropdown-default"
                    >
                      <ul class="py-2">
                        <li>
                          <a
                            class="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium"
                            href="javascript:;"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            class="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium"
                            href="javascript:;"
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h6 class="text-xl leading-8 font-semibold text-black mb-1">
                  Meeting with a friends
                </h6>
                <p class="text-base font-normal text-gray-600">
                  Meet-Up for Travel Destination Discussion
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1"
          >
            <div
              class="flex flex-col md:flex-row gap-4 items-center justify-between mb-5"
            >
              <div class="flex items-center gap-4">
                <h5 class="text-xl leading-8 font-semibold text-gray-900">
                  January 2024
                </h5>
                <div class="flex items-center">
                  <button
                    class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                        stroke="currentcolor"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.00236 3.99707L10.0025 7.99723L6 11.9998"
                        stroke="currentcolor"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center rounded-md p-1 bg-purple-50 gap-px">
                <button
                  class="py-2.5 px-5 rounded-lg bg-purple-50 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Day
                </button>
                <button
                  class="py-2.5 px-5 rounded-lg bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Week
                </button>
                <button
                  class="py-2.5 px-5 rounded-lg bg-purple-50 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Month
                </button>
              </div>
            </div>
            <div class="border border-purple-200 rounded-xl">
              <div
                class="grid grid-cols-7 rounded-t-3xl border-b border-purple-200"
              >
                <div
                  class="py-3.5 border-r rounded-tl-xl border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Sun
                </div>
                <div
                  class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Mon
                </div>
                <div
                  class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Tue
                </div>
                <div
                  class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Wed
                </div>
                <div
                  class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Thu
                </div>
                <div
                  class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Fri
                </div>
                <div
                  class="py-3.5 rounded-tr-xl bg-purple-50 flex items-center justify-center text-sm font-medium text-primary"
                >
                  Sat
                </div>
              </div>
              <div class="grid grid-cols-7 rounded-b-xl">
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50"
                >
                  <span class="text-xs font-semibold text-gray-400">27</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">28</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">29</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">30</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">31</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">1</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">2</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">3</span>
                  <div
                    class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50"
                  >
                    <p
                      class="hidden xl:block text-xs font-medium text-primary mb-px"
                    >
                      Meeting
                    </p>
                    <span
                      class="hidden xl:block text-xs font-normal text-primary whitespace-nowrap"
                      >10:00 - 11:00</span
                    >
                    <p class="xl:hidden w-2 h-2 rounded-full bg-primary"></p>
                  </div>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">4</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">5</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">6</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white relative border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">7</span>
                  <div
                    class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-emerald-50"
                  >
                    <p
                      class="hidden xl:block text-xs font-medium text-emerald-600 mb-px whitespace-nowrap"
                    >
                      Developer Meetup
                    </p>
                    <span
                      class="hidden xl:block text-xs font-normal text-emerald-600 whitespace-nowrap"
                      >10:00 - 11:00</span
                    >
                    <p
                      class="xl:hidden w-2 h-2 rounded-full bg-emerald-600"
                    ></p>
                  </div>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">8</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span
                    class="text-xs font-semibold text-primary sm:text-white sm:w-6 sm:h-6 rounded-full sm:flex items-center justify-center sm:bg-primary"
                    >9</span
                  >
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">10</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">11</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">12</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">13</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">14</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">15</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">16</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">17</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">18</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">19</span>
                  <div
                    class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-sky-50"
                  >
                    <p
                      class="hidden xl:block text-xs font-medium text-sky-600 mb-px whitespace-nowrap"
                    >
                      Developer Meetup
                    </p>
                    <span
                      class="hidden xl:block text-xs font-normal text-sky-600 whitespace-nowrap"
                      >10:00 - 11:00</span
                    >
                    <p class="xl:hidden w-2 h-2 rounded-full bg-sky-600"></p>
                  </div>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">20</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">21</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">22</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">23</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">24</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">25</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">26</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">27</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">28</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">29</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-b border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">30</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-white border-r border-purple-200 rounded-bl-xl transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-900">31</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">1</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">2</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">3</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 relative bg-gray-50 border-r border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">4</span>
                  <div
                    class="absolute top-9 bottom-1 left-3.5 p-1.5 xl:px-2.5 h-max rounded bg-purple-50"
                  >
                    <p
                      class="hidden xl:block text-xs font-medium text-primary mb-px whitespace-nowrap"
                    >
                      Friends Meet
                    </p>
                    <span
                      class="hidden xl:block text-xs font-normal text-primary whitespace-nowrap"
                      >09:00 - 13:42</span
                    >
                    <p class="xl:hidden w-2 h-2 rounded-full bg-primary"></p>
                  </div>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-purple-200 transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">5</span>
                </div>
                <div
                  class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-purple-200 rounded-br-xl transition-all duration-300 hover:bg-purple-50 cursor-pointer"
                >
                  <span class="text-xs font-semibold text-gray-400">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
