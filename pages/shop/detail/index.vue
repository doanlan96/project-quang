<template>
  <NuxtLayout name="default">
    <section class="py-10 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 mx-auto">
        <div class="flex flex-wrap mb-24 -mx-4">
          <!-- item photos -->
          <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div class="sticky top-0 overflow-hidden">
              <div class="relative mb-6 lg:mb-10 lg:h-96">
                <img
                  class="object-contain w-full lg:h-full"
                  :src="currentShownImage"
                  alt=""
                />
              </div>
              <div class="flex-wrap hidden -mx-2 md:flex">
                <div
                  v-for="(image, index) in item.images"
                  :key="index"
                  class="w-1/2 p-2 sm:w-1/4"
                >
                  <a
                    v-if="currentShownImage === image"
                    class="block border border-black dark:border-gray-700"
                  >
                    <img
                      class="object-contain w-full lg:h-28"
                      :src="image"
                      alt=""
                    />
                  </a>
                  <a
                    v-else
                    class="block border border-gray-200 hover:border-black dark:border-gray-700"
                    @click="changeShownImage(image)"
                  >
                    <img
                      class="object-contain w-full lg:h-28"
                      :src="image"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- product detail -->
          <di v class="w-full px-4 md:w-1/2 space-y-8">
            <div class="font-medium">
              <div class="mb-4">
                <p class="text-3xl">{{ item.name }}</p>
                <p class="text-xl text-slate-500">{{ item.category }}</p>
              </div>
              <p class="text-3xl">{{ item.price }}</p>
            </div>
            <!-- select size -->
            <div class="">
              <h1 class="text-xl font-medium mb-4">Select size</h1>
              <div class="grid grid-cols-3 gap-2 justify-items-center">
                <div
                  v-for="(shoesSize, index) in shoesSizes"
                  :key="index"
                  class="w-full"
                >
                  <button
                    v-if="currentSize.label === shoesSize.label"
                    class="border border-black text-xl w-full p-4"
                    @click="sizeUpdate(shoesSize)"
                  >
                    {{ shoesSize.label }}
                  </button>
                  <button
                    v-else
                    class="border border-gray-300 text-xl w-full p-4"
                    @click="sizeUpdate(shoesSize)"
                  >
                    {{ shoesSize.label }}
                  </button>
                </div>
              </div>
            </div>

            <!-- button -->
            <div>
              <button
                class="w-full bg-black text-white font-semibold rounded-full py-4 text-lg hover:bg-slate-400"
              >
                Add to Bag
              </button>
            </div>

            <!-- item description -->
            <p>
              The radiance lives on in the Nike Air Force 1 '07, the basketball
              original that puts a fresh spin on what you know best: durably
              stitched overlays, clean finishes and the perfect amount of flash
              to make you shine.
            </p>
          </di>
        </div>
      </div>
      <!-- related product -->
      <div class="mt-20 p-5">
        <h1 class="text-2xl font-semibold mb-5 text-center">
          Related Products
        </h1>
        <ListItem />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const item = {
  name: 'Nike Air Force 1',
  category: "Men's Shoes",
  price: '4.000.000đ',
  images: [
    '/_nuxt/assets/images/nike-air-force-1-low-white.jpg',
    '/_nuxt/assets/images/af1-2.jpg',
    '/_nuxt/assets/images/af1-3.jpg',
    '/_nuxt/assets/images/af1-4.jpg',
    '/_nuxt/assets/images/af1-5.jpg',
  ],
}

// item's images
const currentShownImage = ref(item.images[0])
const changeShownImage = (image: string) => {
  currentShownImage.value = image
}

// shoes sizes
const shoesSizes = [
  { value: 1, label: 'EU 37' },
  { value: 2, label: 'EU 38' },
  { value: 3, label: 'EU 39' },
  { value: 4, label: 'EU 40' },
  { value: 5, label: 'EU 41' },
  { value: 6, label: 'EU 42' },
  { value: 7, label: 'EU 43' },
  { value: 8, label: 'EU 44' },
]
const currentSize = ref({ value: 0, label: '' })
const sizeUpdate = (value: { value: number; label: string }) => {
  currentSize.value = value
}
</script>
