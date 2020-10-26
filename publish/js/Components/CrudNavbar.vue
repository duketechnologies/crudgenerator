<template>
    <nav class="flex fixed w-full items-center justify-start bg-white px-12 h-16  z-10">
        <div class="flex items-center">
            <button aria-label="Open Menu" class="mr-2 p-1" @click="toggleNavbar">
                <span class="icon burger"></span>
            </button>
            <div class="bg-yellow-100 rounded text-yellow-200 font-black px-2 ml-16">
                mms
            </div>
            <div class="bg-gray-100 uppercase rounded text-gray-500 px-2 ml-1">
                {{ timestamp }}
            </div>
        </div>
        <div class="flex items-center ml-auto">
            <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
                <crud-profile-dropdown/>
            </div>
        </div>
        <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
        >
            <div
                @keydown.esc="isOpen = false"
                v-show="isOpen"
                class="z-10 fixed inset-0 transition-opacity"
            >
                <div
                    @click="isOpen = false"
                    class="absolute inset-0 bg-black opacity-50"
                    tabindex="0"
                ></div>
            </div>
        </transition>
        <aside class="transform top-0 left-0 w-1/5 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
            <div class="flex w-full items-center justify-center h-16">
                <div class="bg-yellow-100 rounded text-yellow-200 font-black px-2">
                mms
            </div>
            <div class="bg-gray-100 uppercase rounded text-gray-500 px-2 ml-1">
                {{ timestamp }}
            </div>
            </div>
            <div class="flex py-24 flex-col text-sm">
                <crud-nav-link href="/" count="7 501" >Призы</crud-nav-link>
                <crud-nav-dropdown count="18 965" :items="dropdown_items">Победители</crud-nav-dropdown>
                <crud-nav-link href="/2" count="7 501" >Lorem.</crud-nav-link>
                <crud-nav-link href="/3" count="7 501" >Lorem ipsum dolor.</crud-nav-link>
                <crud-nav-link href="/4" >Lorem.</crud-nav-link>
            </div>


            <div class="fixed bottom-0 p-16 pr-0 text-xs h-56 flex flex-col border-t border-gray-200 bord justify-between w-full">
                <crud-link href="/">Документы</crud-link>
                <crud-link href="/">Обратная связь</crud-link>
                <crud-link href="/">Обратная связь</crud-link>
            </div>
        </aside>

    </nav>
</template>

<script>
import CrudLink from '@/Components/CrudLink'
import CrudNavLink from '@/Components/CrudNavLink'
import CrudNavDropdown from '@/Components/CrudNavDropdown'
import CrudProfileDropdown from '@/Components/CrudProfileDropdown'

import moment from 'moment'

export default {
    data() {
        return {
            isOpen: false,
            timestamp: moment().format('D MMM hh:mm:ss'),
            dropdown_items : [
                {name : 'Lorem', count : '5 590', href : '/'},
                {name : 'Lorem2', count : '25 590', href : '3'}
                ]
        }
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        },
        getNow: function() {
            this.timestamp = moment().format('D MMM hh:mm:ss');
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen) document.body.style.setProperty("overflow", "hidden");
                    else document.body.style.removeProperty("overflow");
                }
            }
        }
    },
    mounted() {
        setInterval(this.getNow, 1000);
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    },
    components: {
        CrudLink,
        CrudNavLink,
        CrudNavDropdown,
        CrudProfileDropdown
    },
};
</script>
