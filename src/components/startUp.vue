<template>
    <div class="flex justify-center">
        <button class="btn btn-green">click me</button>
    </div>
</template>
<script setup></script>
<style scoped>
    .btn {
        @apply py-2 px-4 font-semibold rounded-lg shadow-md;
    }
    .btn-green {
        @apply text-white bg-green-500 hover:bg-green-700;
    }
</style>
