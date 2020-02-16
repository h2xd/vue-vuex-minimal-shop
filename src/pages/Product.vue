<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ $route.params.id }}
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    data() {
      return {
        title: 'Product',
      };
    },
  };
</script>