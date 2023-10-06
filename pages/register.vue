<template>
  <main>
    <section
      class="container mx-auto flex flex-wrap items-center justify-center px-5 py-24 text-white"
    >
      <form
        class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg bg-[#b87f7f] p-8 md:mt-0 md:w-1/2 lg:w-2/6"
      >
        <h2 class="mb-5 text-lg font-medium text-[#276eb1]">Register</h2>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="bg-[#fff] text-black w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="text-sm leading-7">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            class="bg-[#fff] text-black w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="confirmPassword" class="text-sm leading-7"
            >Confirm password</label
          >
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            class="bg-[#fff] text-black w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <button
          type="submit"
          class="rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none"
        >
          Submit
        </button>
        <span
          class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
          >error</span
        >
        <p class="mt-3 text-xs">Do you have an account yet?</p>
        <nuxt-link
          class="w-fit text-sm text-[#276eb1] hover:text-[#42b883]"
          to="/authentication/login"
          >Login</nuxt-link
        >
      </form>
    </section>
  </main>
</template>
