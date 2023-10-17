<template>
    <div :id=name class="categories">
        {{ name }} ({{ count }})
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            count: Number,
        }
    }
</script>

<style scoped>
</style>