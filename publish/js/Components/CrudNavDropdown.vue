<template>
    <div class="pl-16" :class="{'bg-gray-100' : isOpen}" @click="toggleDropdown()">
        <div class="hover:text-blue-400 select-none cursor-pointer duration-300 py-4 block"><slot></slot><span class="text-blue-500 ml-2">{{ count }}</span></div>
            <div class="pl-5 pb-4" :class="isOpen ? 'block' : 'hidden'">
                <div v-for="item in items" class="hover:text-blue-400 duration-300 py-2" >
                    <inertia-link
                        :href=item.href>{{ item.name }}<span class="text-blue-500 ml-2">{{ item.count }}</span>
                    </inertia-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props : [
        'count',
        'items'
    ],
    data() {
      return {
          isOpen : false
      }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
    }
}
</script>


