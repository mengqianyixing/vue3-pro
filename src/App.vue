<template>
    <div id="id">
        <MyDraggable />
        <button @click="show = !show">Toggle render</button>

        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>
<script setup>
    import MyDraggable from '@/components/my-draggable.vue'
    import { ref } from 'vue'

    const show = ref(false)
</script>

<style scoped>
    .container {
        width: 500px;
        height: 1000px;
        margin: 200px auto;
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>
