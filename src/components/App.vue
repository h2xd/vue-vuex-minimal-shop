<template>
  <div class="app">
    <header>
      <h1 class="title">
        {{ title }}
      </h1>
    </header>
    <navigation />

    <div class="content">
      <router-view />
      <app-footer />
    </div>

  </div>
</template>

<style lang="scss">
  @import "../scss/main.scss";

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --color-text: #444;
    --color-main: #469eec;
    --color-accent: #00cc80;
    --color-background: #ebfff8;

    --middle-fontsize: 0.8rem;
    --media-desktop: 800px;
  }

  header {
    grid-area: header;

    .title {
      background-color: var(--color-accent);
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
      'navigation': Navigation,
      'app-footer': Footer,
    },
    data() {
      return {
        title: 'Imgmeer',
      };
    },
  };
</script>