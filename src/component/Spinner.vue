<template>
    <div class="loader inline-block" :style="{ width: `${size}px`, height: `${size}px`, borderWidth: `${size*0.15}px` }"></div>
</template>

<script>
export default {
    name: "Spinner",
    props: {
        size: {
            type: Number,
            default() {
                return 16;
            }
        }
    }
}
</script>

<style>
.loader {
    border-color: #ddd;
    border-style: solid;
    border-top-color: #999;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
