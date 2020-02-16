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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --color-accent: #00cc80;
    --color-background: #fefefe;
  }

  header {
    grid-area: header;

    .title {
      color: var(--color-accent);
      font-size: 1rem;
      text-align: center;
    }
  }

  .app {
    display: grid;
    grid-template-areas: "header" "content" "navigation";
    grid-template-rows: 25px 1fr 50px;
  }

  .content {
    grid-area: content;
    padding: 1rem;
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