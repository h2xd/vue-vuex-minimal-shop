<template>
  <nav>
    <ul>
      <li v-for="item in navigation">
        <RouterLink class="link" :to="{ name: item.name }">
          <span class="icon" v-html="item.icon"></span>
          <span class="title">{{ item.title }}</span>
          <span class="count" v-bind:class="[amount > 0 ? 'has-items' : '']" v-if="item.name === 'Cart'">
            {{amount}}
          </span>

        </RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss">
  @import "../scss/main.scss";

  nav {
    grid-area: navigation;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 50;
    background-color: var(--color-background-accent);
    box-shadow: 0 -6px 12px -1px rgba(0, 0, 0, 0.2);

    @include for-medium-screens {
      padding: 0;
      position: relative;
      box-shadow: none;
    }

    > ul {
      list-style: none;
      display: grid;
      height: 100%;
      grid-template-columns: repeat(3, 1fr);

      > li {
        grid-row: 1;
      }
    }
  }

  .link {
    display: grid;
    grid-template-areas: "icon" "title";
    text-align: center;
    text-decoration: none;
    padding: 8px;

    color: var(--color-text);

    transition: all 0.2s ease-in-out;
    position: relative;

    &.is-active {
      color: var(--color-accent);
    }
  }

  .count {
    position: absolute;
    top: 17px;
    right: 30px;
    border-radius: 20px;
    background-color: var(--color-accent);
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
    transform: scale(0);
    width: 18px;
    height: 15px;
    line-height: 15px;
    transition: all 0.1s ease-in-out;

    &.has-items {
      transform: scale(1);
      background-color: var(--color-signal);
    }
  }

  .icon {
    > svg {
      width: 20px;
      height: 20px;
    }

    grid-area: icon;

  }

  .title {
    grid-area: title;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: bold;
  }


</style>

<script>
  import ImagesIcon from '../../static/assets/images.svg';
  import SearchIcon from '../../static/assets/search.svg';
  import CartIcon from '../../static/assets/cart.svg';

  export default {
    name: 'Navigation',
    computed: {
      amount() {
        return this.$store.getters.getCartAmount.toString()
      }
    },
    data() {
      return {
        navigation: [
          {
            title: 'Home',
            name: 'Home',
            icon: ImagesIcon,
          },
          {
            title: 'Search',
            name: 'Search',
            icon: SearchIcon,
          },
          {
            title: 'Cart',
            name: 'Cart',
            icon: CartIcon,
          }
        ]
      };
    },
  };
</script>