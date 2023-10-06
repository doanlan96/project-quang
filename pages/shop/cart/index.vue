<template>
  <NuxtLayout name="default">
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">3 Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Size
            </h3>
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Price
            </h3>
          </div>
          <!-- product -->
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" src="@/assets/images/af1-2.jpg" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Nike Air Force 1</span>
                <span class="text-gray-500 text-xs">Mens's shoes</span>
              </div>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">42</span>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <div class="text-center w-1/5 text-xl">
              <button class="hover:text-red-500">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" src="@/assets/images/af1-3.jpg" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Nike Air Force 1</span>
                <span class="text-gray-500 text-xs">Mens's shoes</span>
              </div>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">42</span>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <div class="text-center w-1/5 text-xl">
              <button class="hover:text-red-500">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" src="@/assets/images/af1-4.jpg" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Nike Air Force 1</span>
                <span class="text-gray-500 text-xs">Mens's shoes</span>
              </div>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">42</span>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <div class="text-center w-1/5 text-xl">
              <button class="hover:text-red-500">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Subtotal</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase"
              >Shipping</label
            >
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="border-t mt-8">
            <div
              class="flex font-semibold justify-between py-6 text-sm uppercase"
            >
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button
              class="bg-black font-semibold hover:bg-gray-800 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
