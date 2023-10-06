<template>
  <NuxtLayout name="default">
    <!-- cover photo -->
    <div class="mx-auto flex space-x-2">
      <div class="mt-44 pl-10 space-y-10 w-1/3">
        <h1 class="text-8xl font-semibold">Best In Style Collection For You</h1>
        <p class="text-xl font-medium border-t border-rose-700">
          We craft the, we won't say the best, But through 70 years of
          experience in the industry
        </p>
        <div>
          <button class="bg-black rounded-full py-3 px-8 text-white text-xl">
            Shop now
          </button>
        </div>
      </div>
      <img class="w-2/3" src="@/assets/images/jordan-1.jpg" />
    </div>

    <!-- new item list -->
    <div class="mt-20 p-5">
      <h1 class="text-center text-4xl font-semibold mb-5">New Arrivals</h1>
      <ListItem />
    </div>

    <div class="mt-20 p-5">
      <h1 class="text-2xl font-semibold mb-5">Just In</h1>
      <img class="mx-auto" src="@/assets/images/sabrina-collection.jpg" />
      <div class="text-center space-y-4 w-4/5 mx-auto">
        <h1 class="text-6xl font-black">MADE YOU LOOK</h1>
        <p class="text-xl font-semibold">
          Captivate 'em with craft like Sabrina Ionescu in the Sabrina 1
          'Magnetic'. With diamond effect stitching, cloud-like cushioning and
          grippy S-traction, you'll have all the comfort and control you need to
          keep your defenders on their toes.
        </p>
        <button
          class="bg-black text-white font-semibold rounded-full py-1 px-6 text-lg hover:bg-slate-400"
        >
          Shop
        </button>
      </div>
    </div>

    <!-- category -->
    <div class="mt-20 p-5">
      <h1 class="text-2xl font-semibold mb-5">The Essentials</h1>
      <div class="flex justify-between">
        <div
          class="relative hover:cursor-pointer hover:scale-105 ease-in duration-500"
        >
          <img src="@/assets/images/mens.jpg" />
          <button
            class="absolute bottom-10 left-10 bg-white rounded-full py-1 px-4 text-lg hover:bg-slate-400"
          >
            Men's
          </button>
        </div>
        <div
          class="relative hover:cursor-pointer hover:scale-105 ease-in duration-500"
        >
          <img src="@/assets/images/womens.jpg" />
          <button
            class="absolute bottom-10 left-10 bg-white rounded-full py-1 px-4 text-lg hover:bg-slate-400"
          >
            Women's
          </button>
        </div>
        <div
          class="relative hover:cursor-pointer hover:scale-105 ease-in duration-500"
        >
          <img src="@/assets/images/kids.jpg" />
          <button
            class="absolute bottom-10 left-10 bg-white rounded-full py-1 px-4 text-lg hover:bg-slate-400"
          >
            Kid's
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
