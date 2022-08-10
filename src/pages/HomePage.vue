<template>
  <div id="home-page">
    <div class="category projects">
      <router-link to="/projects" class="link-illustration">
        <img class="illustration" src="../assets/illustrations/projects.svg" />
      </router-link>
      <TypedTitle class="typed-title">
        <p class="subtitle">Hi there,</p>
        <p class="subtitle">I’m Theo Canonne!</p>
      </TypedTitle>
      <p class="description">
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
import TypedTitle from "../components/TypedTitle.vue";
</script>

<style scoped lang="scss">
.subtitle {
  letter-spacing: 0.1em;
  font-size: 2em;
  margin: 0;
}
.experiences {
  background-color: var(--darker-color);
}

.about-me {
  background-color: var(--lighter-color);
}

.illustration {
  width: 100%;
  height: 100%;
}
.link-illustration {
  width: 100%;
  max-height: 100%;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  .btn-navigation {
    font-size: max(1.5em, 1.5vw);
    align-self: flex-end;
  }
}

.projects {
  align-items: flex-start;

  .description {
    letter-spacing: 0.1em;
    font-size: 1em;
  }
}

@media screen and (min-width: 1024px) {
  #home-page {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template:
      "projects experiences" 1fr
      "projects about-me" 1fr / 1.5fr 1fr;
  }

  .experiences {
    grid-area: experiences;
  }

  .about-me {
    grid-area: about-me;
  }

  .projects {
    grid-area: projects;

    .typed-title, .description {
      margin: 0 12%;
    }
  }

}

@media screen and (max-width: 768px) {
  #home-page {
    font-size: 0.9em;
  }
}
@media screen and (max-width: 425px) {
  #home-page {
    font-size: 0.7em;
  }
}
</style>
