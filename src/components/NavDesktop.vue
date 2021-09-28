<template>
  <header
    class="p-4 md:p-0 relative z-50 md:flex flex-row items-center justify-between sm:h-screen bg-white dark:bg-gray-800 sm:flex-col"
  >
    <div class="flex flex-col justify-between items-center w-full h-full">
      <div class="w-full">
        <g-link
          to="/"
          class="md:mt-6 mx-auto w-full flex items-center justify-center hover:opacity-50"
          title="Back to the plant index"
        >
          <img
            src="/mark.svg"
            class="w-10 lg:w-12"
            width="64"
            height="64"
            alt="Savvy Garden"
          />
        </g-link>
        <nav class="nav nav-desktop flex flex-col space-y-5 items-center mt-10 p-8">
          <ul>
            <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name">
              <g-link
                class="p-3 rounded-md"
                :to="navItem.link"
                :title="navItem.name"
                v-if="navItem.external != true"
              >
                <g-image :src="navItem.icon" />
                <span>{{ navItem.name }}</span>
              </g-link>
              <a
                class="p-3 rounded-md"
                :href="navItem.link"
                target="_blank"
                :title="navItem.name"
                v-if="navItem.external == true"
              >
                <g-image :src="navItem.icon" />
                <span>{{ navItem.name }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="relative nav hidden md:flex items-center justify-between flex-col">
      <theme-switcher v-on="$listeners" :theme="theme" />
      <g-link to="/contribute" class="p-3 rounded-md my-5 shop-link">
        <svg width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M19.374 34.527a3.891 3.891 0 01-3.709.006c-6.587-3.548-14.47-11.331-14.48-17.806a8.833 8.833 0 0116.301-4.726 8.833 8.833 0 0116.315 4.677c.01 6.475-7.85 14.282-14.427 17.849z"
              fill="#E7889D"
            />
            <path
              d="M10.004 7.882a8.833 8.833 0 00-8.82 8.845c.01 6.475 7.894 14.258 14.481 17.805 1.161.626 2.55.624 3.709-.005a32.604 32.604 0 003.578-2.274C2.44 29.418 6.162 10.773 10.004 7.882z"
              fill="#E16E7E"
            />
            <path
              d="M9.114 27.183c-4.632-.219-6.793-1.666-7.388-2.896-.617-1.275-.486-2.956.368-3.485.89.49 3.485 1.263 7.254 1.442 3.107.147 7.906-.083 13.122-2.01a2.473 2.473 0 111.715 4.638c-4.931 1.823-10.16 2.544-15.07 2.311z"
              fill="#EDA1AB"
            />
            <path
              d="M11.137 26.17a2.473 2.473 0 011.715-4.638c4.04 1.493 8.327 1.957 12.743 1.379 3.637-.476 6.249-1.514 7.278-2.08.929.45 1.288 2.055.644 3.438-.844 1.816-3.201 3.012-7.28 3.546-5.409.707-10.477.064-15.1-1.644z"
              fill="#F4C8D2"
            />
            <path
              d="M17.5 4.767a1.28 1.28 0 01-1.28-1.28V1.28a1.28 1.28 0 012.56 0v2.207a1.28 1.28 0 01-1.28 1.28z"
              fill="#8DE1CE"
            />
            <path
              d="M17.5 4.767c.438 0 .823-.22 1.054-.555-1.604-.316-2.059-2.674-1.729-4.018a1.278 1.278 0 00-.605 1.086v2.208c0 .706.573 1.28 1.28 1.28z"
              fill="#58D1B4"
            />
            <path
              d="M4.307 5.504c-.5.5-1.31.5-1.81 0L.936 3.943a1.28 1.28 0 111.81-1.81l1.561 1.561c.5.5.5 1.31 0 1.81z"
              fill="#8DAEE1"
            />
            <path
              d="M3.9 5.777C2.31 5.264 1.366 2.802 2.006 1.77A1.28 1.28 0 00.936 3.943l1.561 1.56c.38.38.938.471 1.404.274z"
              fill="#6A95D6"
            />
            <path
              d="M30.693 5.504c.5.5 1.31.5 1.81 0l1.561-1.561a1.28 1.28 0 10-1.81-1.81l-1.561 1.561c-.5.5-.5 1.31 0 1.81z"
              fill="#B39BDB"
            />
            <path
              d="M31.901 2.486l-1.208 1.208a1.28 1.28 0 001.81 1.81l.373-.373c-1.05-.36-1.305-1.91-.975-2.645z"
              fill="#8F8BD5"
            />
            <path
              d="M11.897 18.654c1.142 0 2.068-.737 2.068-1.646 0-.91-.926-1.647-2.068-1.647-1.141 0-2.067.737-2.067 1.646 0 .91.926 1.647 2.067 1.647zM23.103 18.654c1.141 0 2.067-.737 2.067-1.646 0-.91-.926-1.647-2.067-1.647-1.142 0-2.068.737-2.068 1.646 0 .91.926 1.647 2.068 1.647z"
              fill="#fff"
            />
            <path
              d="M17.5 15.258c-.82 0-1.55-.55-2.01.129-.466.69.578 1.758 2.01 1.758s2.476-1.069 2.01-1.758c-.46-.68-1.19-.129-2.01-.129zM13.102 15.822c-.498 0-.971-.216-1.299-.592a.513.513 0 01.773-.674.698.698 0 001.052 0 .513.513 0 01.773.674 1.723 1.723 0 01-1.299.592zM21.898 15.822c-.498 0-.971-.216-1.3-.592a.513.513 0 11.774-.674.698.698 0 001.052 0 .513.513 0 11.773.674 1.723 1.723 0 01-1.3.592z"
              fill="#4E5660"
            />
          </g>
          <defs>
            <clipPath id="clip0"><path fill="#fff" d="M0 0h35v35H0z" /></clipPath>
          </defs>
        </svg>
        <span>Contribute</span>
      </g-link>
      <!-- <Login /> -->
    </div>
    <slot name="below" />
  </header>
</template>

<script>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
//import Login from "~/components/Login.vue";

export default {
  components: {
    ThemeSwitcher,
    //Login,
  },
  props: {
    theme: {
      type: String,
    },
  },
};
</script>

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

<style>
a.shop-link.active,
.nav a.active--exact {
  background: #e8e8e8;
}
body[data-theme="dark"] a.shop-link.active,
body[data-theme="dark"] .nav a.active--exact {
  @apply bg-gray-900;
}
.nav ul {
  @apply space-y-4;
}
.nav a {
  @apply relative w-16 h-16 flex items-center justify-center;
}
.nav a span {
  display: none;
  position: absolute;
  top: 9px;
  left: 70px;
  background: #1a202c;
  padding: 7px 10px;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  font-size: 20px;
}
body[data-theme="dark"] .nav a span {
  @apply bg-white text-gray-900;
}
.nav a:hover span {
  display: block;
  width: auto;
  white-space: nowrap;
}
</style>
