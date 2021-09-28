<template>
<Layout>
  {{ $page.vendor.name }}
</Layout>
</template>

<script>
export default {
}
</script>

<page-query>
query Vendor ($path: String) {
	vendor (path: $path) {
        name
        slug
        image
        content
	}
}
</page-query>