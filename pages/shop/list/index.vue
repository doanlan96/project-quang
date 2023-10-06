<template>
  <NuxtLayout name="default">
    <section class="p-10">
      <div class="p-10 flex justify-between w-full mb-5 z-30 bg-white">
        <h1 class="text-2xl font-medium">Men's</h1>
        <div>
          <Pagination />
        </div>
      </div>
      <section class="flex">
        <Sorter />
        <div class="w-10/12 relative">
          <ListItem />
        </div>
      </section>
    </section>
  </NuxtLayout>
</template>
