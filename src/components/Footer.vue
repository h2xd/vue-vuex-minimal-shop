<template>
  <footer class="footer-details">
    <button class="theme-button" v-if="theme === 'dark'" @click="setTheme('light')">Light Mode</button>
    <button class="theme-button" v-if="theme === 'light'" @click="setTheme('dark')">Dark Mode</button>

    <table>
      <tbody>
        <tr>
          <td>Telephone</td>
          <td>(088) 252-5126 x7962</td>
        </tr>
        <tr>
          <td>eMail</td>
          <td>info@imgmeer.com</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            Block Run 21<br>
            52450 South Mckayla<br>
            Borders
          </td>
        </tr>
      </tbody>
    </table>
  </footer>
</template>

<style lang="scss">
  @import "../scss/main.scss";
  @import "../scss/components/button";

  .theme-button {
    @include button {
      margin-bottom: 1rem;
    }
  }

  .footer-details {
    width: calc(100% + 2rem);
    color: var(--color-text);
    vertical-align: top;
    background-color: var(--color-background-accent);
    padding: 1rem;
    margin: 3rem -1rem 0;

    table {
      width: 100%;
    }

    @include for-medium-screens {
      margin: 3rem 0 0; 
      width: 100%;
    }

    td {
      padding: 0 0 5px;
    }

  }
</style>

<script>
  export default {
    computed: {
      theme() {
        return this.$store.getters.getTheme
      },
    },
    methods: {
      setTheme(theme) {
        this.$store.commit('setTheme', {
          theme
        });
      }
    }
  }
</script>