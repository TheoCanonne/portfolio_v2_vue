<template>
  <div class="title-typewritted">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title-typewritted {
  :slotted(> *) {
    position: relative;
    width: max-content;
    --typing-speed: 0.5s;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--main-color);
      border-left: 4px solid red;
      border-color: transparent;
    }

    &:nth-child(1)::after {
      --time-typing: calc(var(--typing-speed) * 3);
      animation: typing var(--time-typing) steps(9, end) forwards,
        typingBorderBlink var(--typing-speed) step-end 4;
    }
    &:nth-child(2)::after {
      animation: typing calc(var(--typing-speed) * 5) steps(17, end) forwards,
        typingBorderBlink var(--typing-speed) step-end infinite;
      animation-delay: calc(var(--typing-speed) * 4 + 0.2s);
    }
  }
}

@keyframes typing {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@keyframes typingBorderBlink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--font-color);
  }
}
</style>
