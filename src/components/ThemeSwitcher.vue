<template>
  <a
    role="button"
    @click.prevent="toggleTheme()"
    :aria-label="'Toggle ' + nextTheme"
    :title="'Toggle ' + nextTheme"
    class="toggle-theme"
  >
    <div class="block md:hidden">
      <svg
        v-if="theme === 'light'"
        width="20"
        height="20"
        fill="none"
        class="stroke-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 10.658A7.5 7.5 0 119.342 2.5a5.833 5.833 0 008.158 8.158v0z"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-if="theme === 'dark'"
        width="20"
        height="20"
        fill="none"
        class="stroke-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clip-path="url(#clip0)"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M10 14.167a4.167 4.167 0 100-8.334 4.167 4.167 0 000 8.334zM10 .833V2.5M10 17.5v1.667M3.517 3.517L4.7 4.7M15.3 15.3l1.183 1.183M.833 10H2.5M17.5 10h1.667M3.517 16.483L4.7 15.3M15.3 4.7l1.183-1.183"
          />
        </g>
        <defs>
          <clipPath id="clip0"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath>
        </defs>
      </svg>
    </div>
    <div class="hidden md:block">
      <svg
        v-if="theme === 'light'"
        width="46"
        height="46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g clip-path="url(#clip1)">
            <path
              d="M23 35c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
              fill="#FFD83B"
            />
            <path
              d="M18.798 18.62a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM28.82 19.416a1.671 1.671 0 100-3.342 1.671 1.671 0 000 3.342zM22.72 24.47a1.47 1.47 0 100-2.94 1.47 1.47 0 000 2.94zM24.378 27.873a.618.618 0 100-1.236.618.618 0 000 1.236zM16.546 23.142a.618.618 0 100-1.236.618.618 0 000 1.236z"
              fill="#F3C432"
            />
            <path
              d="M29.393 12.857a11.93 11.93 0 011.857 6.393c0 6.627-5.372 12-12 12a11.93 11.93 0 01-6.393-1.857C14.983 32.758 18.726 35 23 35c6.628 0 12-5.373 12-12 0-4.274-2.242-8.018-5.607-10.143z"
              fill="#F3C432"
            />
            <path
              d="M23.363 33.435a.828.828 0 100-1.656.828.828 0 000 1.656z"
              fill="#E8AF2A"
            />
            <path
              d="M18.39 28.481a1.225 1.225 0 100-2.45 1.225 1.225 0 000 2.45z"
              fill="#F3C432"
            />
            <path
              d="M30.703 27.864a1.226 1.226 0 100-2.451 1.226 1.226 0 000 2.45z"
              fill="#E8AF2A"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0"><path fill="#fff" d="M0 0h46v46H0z" /></clipPath>
          <clipPath id="clip1">
            <path fill="#fff" transform="translate(11 11)" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-if="theme === 'dark'"
        class="opacity-75 hover:opacity-100"
        width="46"
        height="46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 33.502c6.043 0 10.943-4.899 10.943-10.943 0-6.043-4.9-10.943-10.943-10.943-6.044 0-10.943 4.9-10.943 10.943 0 6.044 4.9 10.943 10.943 10.943z"
          fill="#FFB829"
        />
        <path
          d="M27.004 40.12L23 33.532l-4.004 6.586-.756-7.672-6.467 4.185L14.42 29.4l-7.646.978 5.528-5.375L5 22.56l7.302-2.444-5.53-5.374 7.647.978-2.646-7.233 6.467 4.186L18.996 5 23 11.586 27.004 5l.756 7.672 6.467-4.185-2.646 7.232 7.646-.977-5.529 5.373L41 22.56l-7.302 2.444 5.53 5.375-7.648-.978 2.647 7.233-6.467-4.186-.756 7.672zm-6.94-11.459l.466 4.726L23 29.324l2.47 4.062.465-4.725 3.991 2.583-1.635-4.468 4.713.602-3.404-3.309 4.51-1.51-4.51-1.51 3.404-3.308-4.713.602 1.635-4.468-3.99 2.583-.466-4.725L23 15.795l-2.47-4.062-.465 4.725-3.991-2.583 1.635 4.468-4.713-.602 3.405 3.308-4.511 1.51 4.51 1.51-3.403 3.309 4.711-.602-1.634 4.468 3.99-2.583z"
          fill="#FDDD66"
        />
        <path
          d="M23 31.222a8.663 8.663 0 100-17.326 8.663 8.663 0 000 17.326z"
          fill="#FFB829"
        />
      </svg>
      <span v-if="theme === 'light'">Switch to Dark Mode</span>
      <span v-if="theme === 'dark'">Switch to Light Mode</span>
    </div>
  </a>
</template>

<script>
let themes = ["light", "dark"];
export default {
  props: {
    theme: {
      type: String,
    },
  },
  computed: {
    nextTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    },
  },
  methods: {
    toggleTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      window.__setPreferredTheme(themes[nextIndex]);
      this.$emit("setTheme", themes[nextIndex]);
    },
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== "undefined") this.$emit("setTheme", window.__theme);
  },
};
</script>
