<template>
    <label>
        {{ label }}
        <input :value="modelValue" @input="onInput" required :type="type" class="bg-gray-100 px-4 py-1 block rounded w-full">
        <small v-if="error" class="block text-red-300 text-sm">{{ error }}</small>
    </label>
</template>

<script>
export default {
    name: "BasicInput",
    props: {
        modelValue: {
            required: true,
            type: String,
        },
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default() {
                return null;
            }
        },
        error: {
            type: String,
            required: false,
            default() {
                return null;
            }
        },
    },
    methods: {
        onInput(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>
