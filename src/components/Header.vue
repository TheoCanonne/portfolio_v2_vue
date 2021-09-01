<template>
<div id="header">
    <h1>Web Developper</h1>
    <ul class="links">
        <li>My Projects</li>
        <li>My Experiences</li>
        <li>About Me</li>
        <li>Contact</li>
    </ul>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    #header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        h1 {
            font-weight: 500;
            font-size: 2.5em;
        }

        .links {
            list-style: none;
            display: flex;
            gap: .8rem;

            li {
                display: none;
            }
        }
    }
</style>
