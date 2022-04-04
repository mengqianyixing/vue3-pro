<template>
    <div class="flex justify-center items-center">
        <!--        <div-->
        <!--            class="w-[100px] h-[200px] mr-[10px] bg-pink-300"-->
        <!--            :class="{enter: isEnter}"-->
        <!--            @dragover.prevent-->
        <!--            @drop="handleDrop"-->
        <!--            @dragenter="handleEnter"-->
        <!--            @dragleave="handleLeave"-->
        <!--        ></div>-->
        <!--        <div-->
        <!--            draggable="true"-->
        <!--            class="bg-green-500 w-[50px] h-[30px]"-->
        <!--            @dragend="handleEnd"-->
        <!--        >-->
        <!--            123-->
        <!--        </div>-->
        <div
            v-for="item in myArray"
            :key="item.id"
            class="w-[50px] bg-green-500 mr-[10px]"
            draggable="true"
            @dragover="handleOver($event, item)"
            @dragstart="handleStart($event, item)"
            @drop="handleDrop($event, item)"
        >
            {{ item.name }}
        </div>
        <ul ref="root">
            {{
                foo
            }}
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref, watch, watchEffect, nextTick, computed } from 'vue'

    const myArray = ref<
        {
            type: string
            id: number
            name: string
        }[]
    >([
        { type: 'file', id: 10, name: 'item1' },
        { type: 'file', id: 20, name: 'item2' },
        { type: 'file', id: 30, name: 'item3' },
        { type: 'video', id: 40, name: 'item4' },
    ])

    const current = ref<{
        type: string
        id: number
        name: string
    }>({
        type: '',
        id: 0,
        name: '',
    })

    const handleStart = (e, item) => {
        current.value = item
    }
    const handleOver = (e, item) => {
        // if (item.type === current.value.type) {
        //     e.preventDefault()
        // }
    }
    const handleDrop = (e, item) => {
        const orginIndex = myArray.value.findIndex(
            (it) => it.id === current.value.id
        )
        myArray.value.splice(orginIndex, 1)
        const index = myArray.value.findIndex((it) => it.id === item.id)
        myArray.value.splice(index, 1, current.value)
    }
    const root = ref<HTMLButtonElement>(null)
    const foo = ref(0)
    // setInterval(() => {
    //     foo.value = Date.now()
    // }, 0)
    // const handleButtonClick = () => {
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     foo.value.push(123)
    //     console.log(root.value.childNodes, 'console.log')
    // }/
    // watchEffect(
    //     () => {
    //         console.log(root.value)
    //     },
    //     {
    //         flush: 'sync',
    //     }
    // )
</script>
<style scoped>
    .item {
        padding: 6px;
        background-color: #fdfdfd;
        border: solid 1px #eee;
        margin-bottom: 10px;
        cursor: move;
    }
    /*选中样式*/
    .chosen {
        opacity: 0.5;
        border: solid 1px #3089dc !important;
    }

    .ghost {
        border: solid 1px red !important;
    }

    .enter {
        border: solid 1px coral;
    }
</style>
