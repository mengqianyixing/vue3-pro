<template>
    <div class="vue-demo-root flex flex-col">{{ foo }}</div>
</template>
<script lang="ts" setup>
    import { ref, computed } from 'vue'
    const foo = ref(123)
    const formatFoo = computed(() => foo.value * 2)
</script>
<style scoped></style>
