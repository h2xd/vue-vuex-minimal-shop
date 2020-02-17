<template>
  <div class="app">
    <header>
      <h1 class="title">
        {{ title }}
      </h1>
    </header>
    <Navigation />

    <div class="content">
      <transition name="fade">
        <RouterView />
      </transition>
      <transition name="fade">
        <Footer />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../scss/main.scss";
  @import "../scss/layout/main";

  .fade-enter-active {
    transition: all .5s ease-in-out;
    opacity: 1;
  }

  .fade-leave-active {
    transition: all 0s ease-in-out;
    z-index: 0;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  header {
    grid-area: header;

    .title {
      background-color: var(--color-main);
      color: var(--color-background);
      line-height: 50px;
      font-size: 1rem;
      text-align: center;
    }
  }

  .app {
    display: grid;
    grid-template-areas: "header" "content" "navigation";
    grid-template-rows: 50px 1fr 50px;

    @include for-medium-screens {
      max-width: 560px;
      margin: 0 auto;
      padding: 20px 0;

      grid-template-areas: "header navigation" "content content";
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 3rem;
    }
  }

  .content {
    grid-area: content;
    padding: 1rem 1rem 0;

    @include for-medium-screens {
      padding: 0;
    }
  }


</style>

<script>
  import Navigation from './Navigation.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'App',
    components: {
      'Navigation': Navigation,
      'Footer': Footer,
    },
    data() {
      return {
        title: 'Imgmeer',
      };
    },
  };
</script>