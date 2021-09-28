<template>
  <div>
    <div class="absolute inset-0 w-full mt-24 top-2 p-6 overflow-x-hidden dark:text-gray-400">
      <div class="menu-links">
        <ul class="">
          <li
            v-for="navItem in $static.metadata.headerNavigation"
            :key="navItem.name"
            class="py-1"
          >
            <g-link
              class="border border-gray-300 py-3 px-4 flex rounded-md overflow-hidden bg-white items-center justify-start text-gray-900 text-xl font-bold"
              :to="navItem.link"
              :title="navItem.name"
              v-if="navItem.external != true"
              ><g-image :src="navItem.icon" class="w-6 h-6 mr-3" /> <span>{{ navItem.name }}</span></g-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
   metadata {
    siteName
    headerNavigation {
      name
      link
      external
      icon
    }
  }
}
</static-query>
<script></script>

<style></style>
