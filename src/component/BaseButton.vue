<template>
    <button :class="`${getTypeStyle(theme)} px-6 py-2 cursor-pointer rounded font-medium`" :disabled="disabled">
        <span class="inline-block flex items-center">
            <spinner v-if="spinner" class="mr-2"/>
            <slot />
        </span>
    </button>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
    name: "BaseButton",
    components: {Spinner},
    props: {
        theme: {
            type: String,
            default() {
                return 'default';
            }
        },
        spinner: {
            type: Boolean,
            default() {
                return false;
            }
        },
        disabled: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    methods: {
        getTypeStyle(type) {
            return {
                default: "hover:bg-gray-100",
                primary: "bg-blue-600 hover:bg-blue-700 text-white",
                success: "bg-green-400 hover:bg-green-500 text-white",
                danger: "bg-red-500 hover:bg-red-600 text-white",
                info: "bg-blue-200 hover:bg-blue-300",
                warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
            }[type];
        }
    }
}
</script>

<style scoped>

</style>
