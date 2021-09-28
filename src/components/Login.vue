<template>
  <div>
    <div class="bg-gray-100 p-10 rounded-md absolute left-0 bottom-0">
      <ClientOnly>
      <div v-if="success != true">
        <h2 class="text-black text-2xl">Login</h2>
        <input type="text" v-model="email" placeholder="Enter your account email" />
        <button
          class="bg-green-600 text-green-900 h-20 px-5 inline-block"
          @click="generateLoginToken"
        >
          Submit
        </button>
        <span v-if="ajaxRequest">Please Wait ...</span>
      </div>
      <div v-else>
        You're logged in
      </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
//const axios = require("axios");

export default {
  data() {
    return {
      debug: true,
      output: "",
      success: false,
      email: "",
      base_url: "https://savvygarden.pages.dev",
      ajaxRequest: false,
    };
  },
  computed: {
    token() {
      return process.env.GRIDSOME_COMMERCEJS_PUBLICKEY;
    },
  },
  methods: {
    generateLoginToken(e) {
      const url = new URL("https://api.chec.io/v1/customers/email-token");

      let headers = {
        "X-Authorization": this.token,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };

      let body = {
        email: this.email,
        base_url: this.base_url,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
};
</script>
