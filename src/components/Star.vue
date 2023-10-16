<template>
    <!--a star icon that can be clicked to indicate selection (for rating function)-->
    <span :class="{ 'selected': isSelected }" @click="starClick">
        &#9733;
    </span>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        isSelected: Boolean,    //indicates whether the star is selected
        starValue: Number,      //a numeric value associated with the star
        isClickable: Boolean    //indicates whether the star is clickable
    },
    methods: {
        starClick() {
            //handle the star click event if it is clickable
            if (isClickable) {
                $emit('starClick', starValue);
            }
        }
    }
}
</script>

<style scoped>
.selected {
    color: rgb(238, 180, 5);
}
</style>