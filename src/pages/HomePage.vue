<template>
  <div id="home-page">
    <div class="category projects">
      <router-link to="/projects" class="link-illustration">
        <img class="illustration" src="../assets/illustrations/projects.svg" />
      </router-link>
      <div class="title-typewritted">
        <h2>Hi there,</h2>
        <h2>I’m Theo Canonne!</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        tristique eu risus vitae facilisis. Nulla quis nisi in lectus tristique
        aliquet at nec sem.
      </p>
      <ButtonNavigation
        class="btn-navigation"
        path="/projects"
        text="My Projects"
      />
    </div>
    <div class="category experiences half-page">
      <router-link to="/experiences" class="link-illustration">
        <img
          class="illustration"
          src="../assets/illustrations/experiences.svg"
        />
      </router-link>
      <ButtonNavigation
        class="btn-navigation"
        path="/experiences"
        text="My Experiences"
      />
    </div>
    <div class="category about-me half-page">
      <router-link to="/about-me" class="link-illustration">
        <img class="illustration" src="../assets/illustrations/about-me.svg" />
      </router-link>
      <ButtonNavigation
        class="btn-navigation"
        path="/about-me"
        text="About Me"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonNavigation from "../components/ButtonNavigation.vue";
</script>

<style scoped lang="scss">
#home-page {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template:
    "projects experiences" 1fr
    "projects about-me" 1fr / 1.5fr 1fr;
}

@media screen and (max-width: 1100px) {
  #home-page {
    grid-template:
      "projects" auto
      "experiences" auto
      "about-me" auto / 1fr;

    .category.projects {
      .illustration {
        padding-top: 3rem;
        margin-bottom: 1rem;
      }
      min-height: 600px;
    }
    .category.half-page {
      min-height: 300px;
    }
  }
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .btn-navigation {
    font-size: max(1.5em, 1.5vw);
  }
}
.projects {
  grid-area: projects;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    letter-spacing: 0.1em;
    font-size: 2em;
  }

  p {
    letter-spacing: 0.1em;
    font-size: 1em;
  }

  .title-typewritted,
  p {
    margin: 0% 12%;
    flex-shrink: 0;
    font-size: 1.2em;
  }

  .btn-navigation {
    align-self: flex-end;
  }
}
.experiences {
  grid-area: experiences;
  background-color: var(--darker-color);
}

.about-me {
  grid-area: about-me;
  background-color: var(--lighter-color);
}

.half-page {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.illustration {
  width: 100%;
  height: 100%;
}
.link-illustration {
  width: 100%;
  max-height: 100%;
}


.title-typewritted {
  h2 {
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
        animation: typing var(--time-typing) steps(9, end) forwards, typingBorderBlink var(--typing-speed) step-end 4;
    }
    &:nth-child(2)::after {
        animation: typing calc(var(--typing-speed) * 5) steps(17, end) forwards, typingBorderBlink var(--typing-speed ) step-end infinite;
        animation-delay: calc(var(--typing-speed) * 4 + .2s);
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
  from, to { border-color: transparent }
  50% { border-color: var(--font-color); }
}
</style>
