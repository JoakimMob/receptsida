<template>
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
        isSelected: Boolean,
        starValue: Number,
        isClickable: Boolean
    },
    methods: {
        starClick() {
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