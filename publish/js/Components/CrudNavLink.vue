<template>
        <inertia-link class="hover:text-blue-400 pl-16 duration-300 py-4"
                      :class="{'border-r-2 border-blue-500': $inertia.page.url.startsWith(href)}"
                      :href=href><slot></slot><span class="text-blue-500 ml-2">{{ count }}</span></inertia-link>
</template>

<script>
export default {
    props : [
        'href',
        'count'
    ]
}
</script>


