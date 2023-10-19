<script setup lang="ts">

</script>

<template>
    <div class="flyout">
        <slot></slot>

    </div>
</template>



<style scoped>
    .flyout {
        position: fixed;
        top: 70px;
        height: calc(100vh - 70px);
        width: 20rem;
        right: -18rem;
        background-color: white;
        border-left: 1px solid #ccc;
        box-shadow: 0 0 1rem #0004;
        transition: right 0.5s ease-in-out;
        z-index: 100;
    }

    .flyout:hover, .flyout.is_active {
        right: 0;
    }
</style>