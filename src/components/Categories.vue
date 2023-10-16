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
            isActive: Boolean   //indicates whether the category is active or not
        }
    }
</script>

<style scoped>
</style>