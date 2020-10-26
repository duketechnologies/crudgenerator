<template>
    <div class="relative">
        <button @click="toggleDropdown()" >
            <span class="icon profile"></span>
        </button>
        <div class="absolute right-0 mt-2 bg-white" :class="isOpen ? 'block' : 'hidden'">
            <a href="#" class="block px-10 py-4 text-sm hover:text-blue-500 duration-300">Мой профиль</a>
            <a href="#" class="block mx-10 py-4 text-gray-700 hover:text-gray-900 text-center rounded bg-gray-100 text-sm duration-300">Выход</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "CrudProfileDropdown",
    data() {
        return {
            isOpen : false
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    }
}
</script>
<style scoped>
    div.absolute{
        width: 334px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.07);
        padding: 8px 0 30px;
    }
</style>
