<template>
    <div class="flex flex-col justify-center items-center">
        <input v-model="value1" type="input" @input="handleInput" />
    </div>
</template>

<script setup>
    import { ref, watch, watchEffect } from 'vue'
    const value1 = ref('')
    const props = defineProps({
        input: {
            type: String,
        },
    })
    const emits = defineEmits(['update:input'])
    const handleInput = (e) => {
        emits('update:input', e.target.value)
    }
    // git ceshi
    //test main
    //text main2
    //text main3
</script>
<style scoped></style>
