<template>
  <form
    class="sticky top-0 bg-white dark:bg-gray-900 flex-grow border-b-4 border-gray-400 dark:border-gray-600 focus-within:bg-white focus-within:border-teal-500 rounded-md overflow-hidden h-16 leading-none"
  >
    <input
      name="search"
      aria-label="Search"
      v-model="plantSearch"
      :v-bind="plantSearch"
      autocomplete="off"
      class="hidden md:block bg-none appearance-none rounded-md focus:outline-none block w-full px-5 pb-0 h-full text-xl"
      type="search"
      :placeholder="`Search our growing database of ${$page.plants.edges.length} companion plants`"
      autofocus
    />
    <input
      name="search"
      aria-label="Search"
      v-model="plantSearch"
      :v-bind="plantSearch"
      autocomplete="off"
      class="block md:hidden bg-none appearance-none rounded-md focus:outline-none block w-full px-5 pb-0 h-16 text-xl"
      type="search"
      :placeholder="`Search ${$page.plants.edges.length} companion plants`"
      autofocus
    />
  </form>
</template>
