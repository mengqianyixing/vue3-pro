<template>
    <div class="border border-d8 w-full bg-blue-700">
        <!--        <el-scrollbar height="300">-->
        <!--            <template v-for="item in 9" :key="item">-->
        <!--                <div-->
        <!--                    class="-->
        <!--                        min-h-[117px]-->
        <!--                        p-y-[20px]-->
        <!--                        pt-[20px]-->
        <!--                        border-b-[#202020] border-b-2-->
        <!--                        pb-1-->
        <!--                    "-->
        <!--                >-->
        <!--                    <span> {{ item }} </span> <span> {{ item }} </span>-->
        <!--                </div>-->
        <!--            </template>-->
        <!--        </el-scrollbar>-->
        <!--        {{ CTime }}-->
        <!--        <h1 data-text="It's loading…">It's loading…</h1>-->
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue'
    import { useToggle } from '@vueuse/core'
    import moment from 'moment'
    import { ChatGPTAPI } from 'chatgpt'

    const time = ref(0)
    const CTime = computed(() => moment(time.value).format('hh:mm:ss'))
    onMounted(() => {
        time.value = moment(123123123).valueOf()
        setInterval(() => {
            time.value = time.value - 1000
        }, 1000)
    })
    const [show, toggleShow] = useToggle(true)
    const showTable = ref(false)
    const commentList = [
        {
            id: 11,
            user: {
                account: { id: 15 },
                nickname: 'sl',
                avatar: 'image/avatar/u15/20200227-151442.png',
                type: 'admin',
                job: '火柴人',
                signature: '我的个性签名很个性',
                background: null,
                createTime: '2021-01-11T17:25:44.000+0000',
                enableUploadHdr: true,
                enableOldStation: true,
                enableNewStation: true,
                enable48Station: true,
                enableManageHdr: true,
                enableUploadShow: true,
                enableManageShow: true,
                enableManageCollege: true,
                enableManageMaterial: true,
                enableUploadGaia48: true,
                superAdmin: true,
            },
            frameWorksId: 'f9ca89de-d365-43b6-9dc9-409a60f5f192',
            content: '123123🥶',
            originComment: null,
            timeNode: 0,
            likes: 0,
            likesState: false,
            views: 0,
            createTime: '2022-04-07T09:39:46.000+0000',
            title: null,
        },
        {
            id: 10,
            user: {
                account: { id: 15 },
                nickname: 'sl',
                avatar: 'image/avatar/u15/20200227-151442.png',
                type: 'admin',
                job: '火柴人',
                signature: '我的个性签名很个性',
                background: null,
                createTime: '2021-01-11T17:25:44.000+0000',
                enableUploadHdr: true,
                enableOldStation: true,
                enableNewStation: true,
                enable48Station: true,
                enableManageHdr: true,
                enableUploadShow: true,
                enableManageShow: true,
                enableManageCollege: true,
                enableManageMaterial: true,
                enableUploadGaia48: true,
                superAdmin: true,
            },
            frameWorksId: 'f9ca89de-d365-43b6-9dc9-409a60f5f192',
            content: '测试123123🤭',
            originComment: null,
            timeNode: 0,
            likes: 0,
            likesState: false,
            views: 0,
            createTime: '2022-04-07T09:32:53.000+0000',
            title: null,
        },
    ]

    const toggle = ref(false)

    onMounted(() => {
        // setTimeout(() => {
        //     showTable.value = true
        // }, 0)
        console.log(123, import.meta.env.VITE_OPENAI_API_KEY)
        // chat()
    })

    const test = (row) => {
        return row.createdBy.name
    }
    // const chat = async () => {
    //     const api = new ChatGPTAPI({
    //         apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    //     })
    //     const res = await api.sendMessage('你好, chatgpt')
    //     console.log(res, res.text)
    // }
</script>
<style scoped>
    body {
        background: #;
        font-family: sans-serif;
    }
    h1 {
        position: relative;
        color: rgba(0, 0, 0, 0.3);
        font-size: 5em;
    }
    h1::before {
        content: attr(data-text);
        position: absolute;
        overflow: hidden;
        /*max-width: 7em;*/
        /*width: 8em;*/
        white-space: nowrap;
        color: #fff;
        animation: loading 8s linear infinite;
    }
    @keyframes loading {
        0% {
            /*max-width: 0;*/
            width: 0;
        }
        100% {
            width: 8em;
        }
    }
</style>
