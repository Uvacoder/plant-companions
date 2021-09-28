<template>
  <Layout :showCart="false" :showTop="true">
    <template slot="main-top">
      <div class="flex flex-col md:flex-row md:space-x-5 md:items-stretch">
        <form
          class="bg-white dark:bg-gray-800 flex-grow border-b-4 border-gray-400 dark:border-gray-600 rounded-md overflow-hidden h-16 leading-none"
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
        <div class="flex items-stretch space-x-3 md:space-x-5 mt-3 md:mt-0">
          <ButtonGroup>
            <Button
              title="Switch to Grid Layout"
              v-on:click.native="layout = 'grid'"
              :class="{ 'bg-gray-200 dark:bg-gray-900': layout == 'grid' }"
            >
              <slot>
                <svg
                  class="stroke-current"
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2.75h3.75A.25.25 0 017 3v3.75a.25.25 0 01-.25.25H3a.25.25 0 01-.25-.25V3A.25.25 0 013 2.75zM3 11h3.75a.25.25 0 01.25.25V15a.25.25 0 01-.25.25H3a.25.25 0 01-.25-.25v-3.75A.25.25 0 013 11zM11.25 2.75H15a.25.25 0 01.25.25v3.75A.25.25 0 0115 7h-3.75a.25.25 0 01-.25-.25V3a.25.25 0 01.25-.25zM11.25 11H15a.25.25 0 01.25.25V15a.25.25 0 01-.25.25h-3.75A.25.25 0 0111 15v-3.75a.25.25 0 01.25-.25z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </slot>
            </Button>
            <Button
              title="Switch to List Layout"
              v-on:click.native="layout = 'list'"
              :class="{ 'bg-gray-200 dark:bg-gray-900': layout == 'list' }"
            >
              <slot>
                <svg
                  class="stroke-current"
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 15h15M2.5 5h15-15zm0 5h15-15z"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </slot>
            </Button>
            <Button
              title="Switch to Table Layout"
              v-on:click.native="layout = 'table'"
              :class="{ 'bg-gray-200 dark:bg-gray-900': layout == 'table' }"
            >
              <slot>
                <svg
                  class="stroke-current"
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.25v13.5m0-13.5h5.25a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H8V1.25zm0 0H2.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5H8V1.25z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </slot>
            </Button>
          </ButtonGroup>
          <DropDown :data="filterList" label="Filter" @update-list="setFilter" />
          <Burger class="flex items-center justify-center text-green-100 bg-green-600 hover:text-white hover:bg-green-700 px-6 h-full rounded-md"></Burger>

          <!-- <g-link
            to="/add"
            class="flex items-center justify-center text-green-100 bg-green-600 hover:text-white hover:bg-green-700 px-6 h-full rounded-md"
          >
            <svg
              class="fill-current w-4 h-4"
              viewBox="0 0 469.333 469.333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M437.332 192h-160V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32v160H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h160v160c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32v-160h160c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0"
              />
            </svg>
          </g-link> -->
        </div>
      </div>
    </template>
    <IndexGrid v-if="layout === 'grid'" :data="filteredPlants" />
    <IndexList v-if="layout === 'list'" :data="filteredPlants" />
    <IndexTable v-if="layout === 'table'" :data="filteredPlants" />
    <Sidebar>
      <h2 class="text-white text-3xl font-bold mb-5">Submit a plant</h2>
      <FormulateForm
        @submit="submitPlant"
        v-model="values"
        :schema="schema"
      />

    </Sidebar>
  </Layout>
</template>

<page-query>
  query Plants {
    plants: allPlant(sort: { by: "path", order: ASC }) {
      edges {
        node{
          id
          path
          title
          otherNames
          type
          friends {
            title
            path
          }
          foes {
            title
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import lowerCase from "@/filters/LowerCase";
import { mixin as clickaway } from "vue-clickaway";
import DropDown from "~/components/DropDown.vue";
import ButtonGroup from "~/components/ButtonGroup.vue";
import Button from "~/components/Button.vue";
import IndexGrid from "~/components/IndexGrid.vue";
import IndexList from "~/components/IndexList.vue";
import IndexTable from "~/components/IndexTable.vue";
import Burger from '~/components/Burger.vue';
import Sidebar from '~/components/Sidebar.vue';
import ky from 'ky'
// import { store, mutations } from '@/store.js'

export default {
  metaInfo: {
    title: "Companion Plants",
  },
  components: {
    DropDown,
    ButtonGroup,
    Button,
    IndexGrid,
    IndexList,
    IndexTable,
    Burger,
    Sidebar,
  },
  
  data() {
    return {
      values: {},
      schema: [
        {
          type: 'text',
          name: 'title',
          label: 'Enter the plant name'
        },
        {
          type: 'text',
          name: 'otherNames',
          label: 'Other names'
        },
        {
          type: 'radio',
          name: 'plantType',
          label: 'Type',
          options: {
              vegetable: 'Vegetable',
              herb: 'Herb',
              fruit: 'Fruit',
              grass: 'Grass',
              grain: 'Grain',
              flower: 'Flower'
            },
        },
        // {
        //   type: 'vue-select',
        //   name: 'friends',
        //   label: 'Friends',
        //   options: this.plantList,
        // },
        {
          type: 'text',
          name: 'friends',
          label: 'Friends'
        },
        {
          type: 'text',
          name: 'foes',
          label: 'Foes'
        },
        {
          type: 'textarea',
          name: 'notes',
          label: 'Notes'
        },
        {
          type: 'text',
          name: 'submittedBy',
          label: 'Your Name'
        },
        {
          type: 'submit',
          label: 'Submit your plant'
        }
      ],
      plantSearch: '',
      plants: null,
      filterVisible: false,
      submitSuccess: false,
      loading: false,
      filterList: [
        {
          value: '',
          label: 'Everything',
        },
        {
          value: 'Vegetable',
          label: 'Vegetables',
        },
        {
          value: 'Herb',
          label: 'Herbs',
        },
        {
          value: 'Fruit',
          label: 'Fruit',
        },
        {
          value: 'Flower',
          label: 'Flowers',
        },
        {
          value: 'Grain',
          label: 'Grain',
        },
      ],
    };
  },
  filters: {
    lowerCase,
  },
  computed: {
    plantList() {
      return this.$page.plants.edges;
    },
    filteredPlants() {
      const plantSearch = this.plantSearch.toLowerCase();
      const filterBy = this.filterBy;

      let result = this.plantList.filter((edge) => {
        return (
          edge.node.title.toLowerCase().includes(plantSearch) ||
          edge.node.otherNames.toLowerCase().includes(plantSearch)
        );
      });

      if (filterBy !== "") {
        result = result.filter((edge) => {
          if (edge.node.type) return edge.node.type == filterBy;
        });
      }

      return result;
    },
    // Testing observables
    // getLayout() {
    //   return store.layout
    // },
    // getFilter() {
    //   return store.filterBy
    // }
  },
  methods: {
    // setLayout: mutations.setLayout,
    // setFilter: mutations.setFilter,
    setLayout(val) {
      this.layout = val || this.layout;
    },
    setFilter(val) {
      this.filterBy = val;
    },
    async submitPlant () {
      try {
        this.loading = true
        const plantPayload = this.values
        // const plantPayload = { title, otherNames, plantType, friends, foes, notes, submittedBy }
        const plant = await ky.post('/api/submit-plant', { json: plantPayload }).json()
        if (plant.error) {
          // Return to stop further execution
          return this.submitSuccess = false
        }
        // Otherwise assume success
        // this.submitSuccess = true
        this.submitSuccess = plant
        console.log(plant)
        // Add submission confirmation
        this.loading = false
      } catch (e) {
        this.loading = false
        console.error(e)
      }
    }
  },
  mixins: [clickaway],
  stored: {
    layout: {
      type: String,
      key: "layout",
      default: "grid",
    },
    filterBy: {
      type: String,
      key: "filterBy",
      default: "",
    },
  },
};
</script>

<style>
.plants a:hover {
  backdrop-filter: blur(10px);
}
.item-overlay {
  @apply rounded-md overflow-hidden bg-gray-900 bg-opacity-75 transition duration-500 ease-in-out flex items-center justify-center text-white text-center whitespace-pre font-bold relative z-30;
  &:hover {
    @apply bg-green-900 bg-opacity-75 text-gray-100;
  }
}
.list-layout li {
  @apply border-b-4 overflow-hidden rounded-md shadow-lg;
}
.list-layout li a {
  @apply text-gray-700;
}
.list-layout .Herb {
  @apply border-green-500;
}
.list-layout .Grain {
  @apply border-blue-200;
}
.list-layout .Flower {
  @apply border-red-500;
}
.list-layout .Fruit {
  @apply border-blue-500;
}
.list-layout .Vegetable {
  @apply border-yellow-500;
}
.list-layout .Root {
  @apply border-purple-500;
}
.list-layout .Grass {
  @apply border-indigo-900;
}
.links a:not(:last-of-type):after {
  content: ", ";
}
body[data-theme="dark"] .item-overlay {
  @apply border border-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 opacity-75;
  &:hover {
    @apply opacity-100;
  }
}
body[data-theme="dark"] .item-overlay:hover {
  @apply opacity-100;
}

.links .no-links {
  display: none;
}
.links:hover .no-links {
  display: inline-block;
}
.formulate-input-element {
  @apply mb-4;
}
div[data-type="text"] .formulate-input-element input,
.formulate-input-element textarea {
  @apply w-full px-4 py-2 rounded-md text-black
}
div[data-type="text"] .formulate-input-wrapper label,
div[data-type="textarea"] .formulate-input-wrapper label,
#formulate---3_label {
  @apply block mb-2 mt-3 opacity-70;
}
div[data-type="textarea"] .formulate-input-wrapper textarea {
  @apply h-32;
}

div[data-type="radio"] .formulate-input-group {
  @apply flex items-start justify-start flex-wrap flex-row mt-1;
}

div[data-type="radio"] .formulate-input .formulate-input-wrapper {
  @apply flex;
}
div[data-type="radio"] .formulate-input .formulate-input-wrapper {
  @apply mb-2 mr-4;
}
.formulate-input-element--radio {
  @apply m-0
}
.formulate-input-element--radio label {
  @apply mr-1
}
.formulate-input-element button {
  @apply bg-green-700 text-green-200 font-bold block py-4 px-4 w-full rounded-md text-xl
}
</style>
