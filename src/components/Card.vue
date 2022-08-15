<template>
    <div class="card-container">
        <div class="card">
            <h2>{{ title }}</h2>
            <p>{{ title }}</p>
            <img :src="imagePath" alt="tmp" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    imagePath: String,
});

onMounted(() => {
    console.log(props)
})
</script>

<style scoped lang="scss">
.card-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    .card {
        position: relative;
        background-color: var(--darker-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 50%;
        margin-bottom: 10%;
        z-index: 10;
        border-radius: 10px 10px 0 0;

        h2 {
            font-size: 2rem;
        }

        p {
            justify-self: center;
        }

        img {
            position: absolute;
            left: 50%;
            width: 50%;
            padding: 1rem;
            bottom: 0;
            transform: translate(-50%, 100%);
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            background-color: var(--darker-color);
            width: 25%;
            height: 25%;
            bottom: -25%;
        }

        &::before {
            left: 0;
            border-bottom-left-radius: 10px;
        }

        &::after {
            right: 0;
            border-bottom-right-radius: 10px;
        }
    }
}
</style>
