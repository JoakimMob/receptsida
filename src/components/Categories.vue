<template>
    <!--component to display category name and count-->
    <div :id=name class="categories">
        {{ name }} ({{ count }})
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            count: Number,
            isActive: Boolean
        }
    }
</script>

<style scoped>
</style>