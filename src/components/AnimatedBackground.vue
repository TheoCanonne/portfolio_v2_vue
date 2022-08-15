<template>
  <div class="background-filler"></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    class="wave first"
    preserveAspectRatio="none"
  >
    <path
      fill-opacity="1"
      d="M0,224L40,202.7C80,181,160,139,240,144C320,149,400,203,480,229.3C560,256,640,256,720,245.3C800,235,880,213,960,192C1040,171,1120,149,1200,154.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    class="wave second"
    preserveAspectRatio="none"
  >
    <path
      fill-opacity="1"
      d="M0,224L40,202.7C80,181,160,139,240,144C320,149,400,203,480,229.3C560,256,640,256,720,245.3C800,235,880,213,960,192C1040,171,1120,149,1200,154.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    class="wave third"
    preserveAspectRatio="none"
  >
    <path
      fill-opacity="1"
      d="M0,224L40,202.7C80,181,160,139,240,144C320,149,400,203,480,229.3C560,256,640,256,720,245.3C800,235,880,213,960,192C1040,171,1120,149,1200,154.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const MINIMUM_BACKGROUND_HEIGHT = 5;
let backgroundHeight = ref("0%");

onMounted(() => {
  document.addEventListener("scroll", manageScrollEvent);
  manageScrollEvent();
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", manageScrollEvent);
});

function manageScrollEvent() {
  backgroundHeight.value = `${
    MINIMUM_BACKGROUND_HEIGHT +
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      90
  }%`;
}
</script>

<style scoped lang="scss">
.background-filler {
  position: fixed;
  width: 200%;
  background-color: var(--lighter-color);
  height: v-bind("backgroundHeight");
  transition: all 0.2s ease-out;
  bottom: 0;
  z-index: 0;
}
.wave {
  position: fixed;
  width: 200%;
  transition: all 0.2s ease-out;
  bottom: v-bind("backgroundHeight");
  z-index: 0;
  height: 50%;

  &.first {
      animation: 20s ease-in-out infinite alternate animateWave;
  }

  &.second {
      animation: 20s ease-in-out 3s infinite alternate animateWave;
      animation-direction: reverse;
      opacity: 0.5;
  }
  &.third {
      animation: 20s ease-in-out 5s infinite alternate animateWave;
      opacity: 0.12;
  }

  path {
    width: 200%;
    fill: var(--lighter-color);
  }

  @keyframes animateWave {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}
</style>
