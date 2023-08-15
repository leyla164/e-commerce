<template>

<div class="mx-auto my-10 w-screen max-w-screen-xl px-4">
  <div class="flex rounded-xl bg-white py-2 px-2 text-gray-700 shadow-lg shadow-pink-200">
    <div class="my-auto mr-4 p-3 text-blue-500">
      <h1 class="text-2xl font-bold">Skincare</h1>
      <p class="mt-4 text-lg"> produk perawatan kulit yang memiliki tujuan mulai dari menenangkan, memulihkan, memperbaiki, hingga melindungi kulit.</p>
      <button type="submit" class="group mt-4 mr-2 mb-4 flex cursor-pointer text-left text-xl font-semibold leading-tight text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-7 w-7 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
    <div class="hidden h-72 w-1/2 flex-shrink-0 justify-center lg:flex">
      <img class="" src="../assets/img/pyunkang.png" alt="" />
    </div>
  </div>
</div>

<br><br>
 <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="../assets/img/AHA.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="../assets/img/cd.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="../assets//img/crox.jpg" alt="">
    </div>
</div>

<footer class="relative mt-20 bg-gray-900 px-4 pt-20">
  <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img class="h-full object-contain" src="https://i.pinimg.com/564x/4e/ab/b9/4eabb9314791a8286fe52848ef3aecff.jpg" alt="" /></div>
  <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <a href="#" class="font-medium text-white">Demo</a>
    <a href="#" class="font-medium text-white">Support</a>
    <a href="#" class="font-medium text-white">Privacy Policy</a>
    <a href="#" class="font-medium text-white">Terms & Conditions</a>
  </nav>
  <p class="py-10 text-center text-gray-300">© 2022 Boleno | All Rights Reserved</p>
</footer>

</template>