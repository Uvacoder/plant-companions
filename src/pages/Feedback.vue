<template>
<Layout>
    <template slot="middle">
        <g-link to="/" class="hidden md:flex items-center relative lg:-ml-24">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <strong class="text-xl leading-none mt-1 border-b-4 pt-2 pb-1 border-transparent hover:border-gray-400">Back to Plant Index</strong>
        </g-link>
    </template>
    <iframe class="rounded-md overflow-hidden relative z-10" src="https://airtable.com/embed/shrBWx4T0qeUwTIeK?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="1257" style="background: transparent; border: 1px solid #ccc;"></iframe>
</Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Feedback'
    }
}
</script>
