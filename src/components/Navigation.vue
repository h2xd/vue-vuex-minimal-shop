<template>
  <nav>
    <ul>
      <li v-for="item in navigation">
        <router-link class="link" :to="{ name: item.name }">
          <span class="icon" v-html="item.icon"></span>
          <span class="title">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss">
  nav {
    grid-area: navigation;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: var(--color-background);

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
    color: var(--color-accent);
    text-decoration: none;
    padding: 5px;
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
    font-size: 0.8em;
  }
</style>

<script>
  import ImagesIcon from '../../static/assets/images.svg';
  import SearchIcon from '../../static/assets/search.svg';
  import CartIcon from '../../static/assets/cart.svg';

  export default {
    name: 'Navigation',
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