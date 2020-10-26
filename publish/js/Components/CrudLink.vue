<template>
    <inertia-link class="hover:text-blue-400 duration-300" :href=href><slot></slot></inertia-link>
</template>

<script>
export default {
    props : [ 'href' ]
}
</script>


