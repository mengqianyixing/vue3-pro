<template>
    <div class="selector">
        <SelectorInput v-model:input="inputValue" />
        <input type="text" @input="handleValueChange" />
        {{ inputValue }}
    </div>
</template>

<script lang="ts">
    import SelectorInput from './input.vue'
    import { computed, ref, watch } from 'vue'
    export default {
        name: 'Selector',
        components: {
            SelectorInput,
        },
        props: {
            placeholder: String,
        },
        setup() {
            const inputValue = ref<string>('')
            const handleValueChange = (e: Event) => {
                console.log((e.target as HTMLInputElement).value)
            }
            return {
                inputValue,
                handleValueChange,
            }
        },
    }
</script>

<style scoped>
    .selector {
        position: relative;
        width: 300px;
    }
</style>
