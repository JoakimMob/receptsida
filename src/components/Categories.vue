<template>
    <!--component to display category name and count-->
    <div :id=name class="categories">
        {{ name }} ({{ count }})
    </div>
</template>

<script>
    export default {
        props: {
            name: String,       //name of the category
            count: Number,      //count of items in the category
        }
    }
</script>

<style scoped>
</style>