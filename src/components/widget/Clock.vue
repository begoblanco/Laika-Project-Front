<template>
	<div class="flex flex-col justify-center items-center w-full h-full p-4">
	  <div id="clock"
		class="bg-[#111] p-3 shadow-[0_6px_10px_-3px_black] flex flex-col justify-center scale-x-50 scale-y-50 sm:scale-x-75 sm:scale-y-75 md:scale-90 lg:scale-100">
		<div class="flex flex-row justify-center w-full h-full gap-2">
		  <!-- Digito hora 1 -->
		  <div class="digit digit-h-1 flex flex-col justify-around px-5 min-h-full ">
			<div class="flex flex-row justify-center translate-y-5 ">
			  <div class="display-1 bg-gray-900 "></div>
			</div>
			<div class="flex flex-row justify-between translate-y-2 ">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 "></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-col justify-center">
			  <div class="display-3 bg-gray-900 scale-y-[.7]"></div>
			</div>
			<div class="flex flex-row justify-between -translate-y-2">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900"></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-row justify-center -translate-y-[20px]">
			  <div class="display-4 bg-gray-900"></div>
			</div>
		  </div>
  
		  <!-- Digito hora 2 -->
		  <div class="digit digit-h-2 flex flex-col justify-around px-5 min-h-full ">
			<div class="flex flex-row justify-center translate-y-5 ">
			  <div class="display-1 bg-gray-900 "></div>
			</div>
			<div class="flex flex-row justify-between translate-y-2 ">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 "></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-col justify-center">
			  <div class="display-3 bg-gray-900 scale-y-[.7]"></div>
			</div>
			<div class="flex flex-row justify-between -translate-y-2">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900"></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-row justify-center -translate-y-[20px]">
			  <div class="display-4 bg-gray-900"></div>
			</div>
		  </div>
  
		  <!-- Separador de puntos -->
		  <div class="flex flex-col justify-center gap-10 animate-pulse drop-shadow-[0_0px_7px_rgba(89,161,255,1)] grow">
			<div class="w-6 h-6 bg-[#3080FF] rounded-sm"></div>
			<div class="w-6 h-6 bg-[#3080FF] rounded-sm"></div>
		  </div>
  
		  <!-- Digito minuto 1 -->
		  <div class="digit digit-m-1 flex flex-col justify-around px-5 min-h-full ">
			<div class="flex flex-row justify-center translate-y-5 ">
			  <div class="display-1 bg-gray-900 "></div>
			</div>
			<div class="flex flex-row justify-between translate-y-2 ">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 "></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-col justify-center">
			  <div class="display-3 bg-gray-900 scale-y-[.7]"></div>
			</div>
			<div class="flex flex-row justify-between -translate-y-2">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900"></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-row justify-center -translate-y-[20px]">
			  <div class="display-4 bg-gray-900"></div>
			</div>
		  </div>
  
		  <!-- Digito minuto 2 -->
		  <div class="digit digit-m-2 flex flex-col justify-around px-5 min-h-full ">
			<div class="flex flex-row justify-center translate-y-5 ">
			  <div class="display-1 bg-gray-900 "></div>
			</div>
			<div class="flex flex-row justify-between translate-y-2 ">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 "></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-col justify-center">
			  <div class="display-3 bg-gray-900 scale-y-[.7]"></div>
			</div>
			<div class="flex flex-row justify-between -translate-y-2">
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900"></div>
			  </div>
			  <div class="flex flex-col justify-center">
				<div class="display-2 bg-gray-900 -scale-x-100"></div>
			  </div>
			</div>
			<div class="flex flex-row justify-center -translate-y-[20px]">
			  <div class="display-4 bg-gray-900"></div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  

  <style scoped>
  .display-1,
  .display-2,
  .display-3,
  .display-4 {
    transition: all 100ms linear;
  }

  .display-1 {
    clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%);
    height: 20px;
    width: 120px;
  }

  .display-2 {
    clip-path: polygon(0% 0%, 100% 15%, 100% 85%, 15% 100%);
    height: 100px;
    width: 20px;
  }

  .display-3 {
    clip-path: polygon(18% 0%, 85% 0%, 95% 50%, 82% 100%, 20% 100%, 7% 50%);
    height: 30px;
    width: 120px;
  }

  .display-4 {
    clip-path: polygon(30% 0%, 75% 0%, 95% 100%, 5% 100%);
    height: 20px;
    width: 120px;
  }
</style>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const classes = {
      outerGlow: "drop-shadow-[0_0px_4px_rgba(48,128,255,1)]",
      on: "bg-[#3080FF]",
      off: "bg-gray-900"
    };

    const orderTable = {
      "0": [0, 1, 2, 4, 5, 6],
      "1": [2, 5],
      "2": [0, 2, 3, 4, 6],
      "3": [0, 2, 3, 5, 6],
      "4": [1, 2, 3, 5],
      "5": [0, 1, 3, 5, 6],
      "6": [0, 1, 3, 4, 5, 6],
      "7": [0, 2, 5],
      "8": [0, 1, 2, 3, 4, 5, 6],
      "9": [0, 1, 2, 3, 5, 6]
    };

    let h1Cells, h2Cells, m1Cells, m2Cells;

    const getCells = (parent) => {
      if (!parent) return null;
      return [
        parent.children[0],
        parent.children[1]?.children[0],
        parent.children[1]?.children[1],
        parent.children[2],
        parent.children[3]?.children[0],
        parent.children[3]?.children[1],
        parent.children[4]
      ];
    };

    const setHours = (number) => {
      const digits = to2Digits(number);
      setDigit(h1Cells.value, digits[0]);
      setDigit(h2Cells.value, digits[1]);
    };

    const setMinutes = (number) => {
      const digits = to2Digits(number);
      setDigit(m1Cells.value, digits[0]);
      setDigit(m2Cells.value, digits[1]);
    };

    const to2Digits = (number) => number.toString().padStart(2, 0);

    const setDigit = (cells, number) => {
      if (!cells) return;
      const order = orderTable[number];
      for (let i = 0; i < cells.length; i++) {
        turnCell(cells[i], order.includes(i));
      }
    };

    const turnCell = (cell, on) => {
      if (!cell || !cell.children[0]) return;
      if (on) {
        cell.children[0].classList.remove(classes.off);
        cell.children[0].classList.add(classes.on);
        cell.classList.add(classes.outerGlow);
      } else {
        cell.children[0].classList.remove(classes.on);
        cell.children[0].classList.add(classes.off);
        cell.classList.remove(classes.outerGlow);
      }
    };

    const prev = ref({
      h: null,
      m: null
    });

    onMounted(() => {
      h1Cells = ref(getCells(document.querySelector('.digit-h-1')));
      h2Cells = ref(getCells(document.querySelector('.digit-h-2')));
      m1Cells = ref(getCells(document.querySelector('.digit-m-1')));
      m2Cells = ref(getCells(document.querySelector('.digit-m-2')));

      setInterval(() => {
        const date = new Date();
        if (prev.value.h !== date.getHours()) {
          prev.value.h = date.getHours();
          setHours(date.getHours());
        }
        if (prev.value.m !== date.getMinutes()) {
          prev.value.m = date.getMinutes();
          setMinutes(date.getMinutes());
        }
      }, 300);
    });
  }
};
</script>