<template>
  <div class="app">
    <header>
      <h1 class="title">
        {{ title }}
      </h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Search' }">
              Search
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Welcome to my starter !',
    };
  },
};
</script>