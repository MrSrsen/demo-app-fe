<template>
    <div role="alert" :class="`rounded-sm px-4 py-2 ${getTypeStyle(type)}`" style="border-left-width: 7px;">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Alert",
    props: {
        type: {
            required: false,
            type: String,
            default() {
                return 'default';
            },
        },
    },
    methods: {
        getTypeStyle(type) {
            return {
                default: 'bg-gray-100 border-gray-200',
                primary: 'bg-blue-400 border-gray-400',
                success: 'bg-green-100 border-green-200',
                danger: 'bg-red-100 border-red-200',
                info: 'bg-blue-100 border-blue-200',
                warning: 'bg-yellow-100 border-yellow-200',
            }[type];
        },
    },
}
</script>

<style scoped>

</style>
