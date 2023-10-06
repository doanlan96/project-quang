<template>
  <section
    class="flex justify-between z-10 top-0 w-full h-16 border-b bg-white lg:py-2.5"
  >
    <NuxtLink class="p-2 pl-5 hover:cursor-pointer" to="/shop">
      <h1 class="text-3xl font-black">Tradewood</h1>
    </NuxtLink>
    <div class="p-2 w-1/3 flex justify-around">
      <NuxtLink to="">Exclusive</NuxtLink>
      <div>Accessories</div>
      <div>New Arrivals</div>
    </div>
    <div class="p-2 pr-10 flex justify-around space-x-4 text-xl">
      <NuxtLink to="/shop/cart">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </NuxtLink>
      <span class="text-slate-300">|</span>
      <div class="group">
        <font-awesome-icon icon="fa-solid fa-user" />
        <UserItem />
      </div>
    </div>
  </section>
</template>
