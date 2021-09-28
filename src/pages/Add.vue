<template>
  <Layout :showTop="false">
    <div class="bg-white rounded-md overflow-hidden">
      <iframe
        class="relative z-10 airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrDR1v3BfyL3IaiX?backgroundColor=green"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="1354"
        style="background: transparent; border: 1px solid #ccc"
      ></iframe>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Contribute to the Companion Planting database",
      script: [
        {
          src: "https://static.airtable.com/js/embed/embed_snippet_v1.js",
          async: true,
          defer: true,
          type: "text/javascript",
        },
      ],
    };
  },
};
</script>
