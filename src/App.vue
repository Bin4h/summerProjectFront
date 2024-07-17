
<template>
  <div id="app">
    <RouterView />
    <LogoutButton v-if="showLogoutButton" />
  </div>
</template>

<script>

import LogoutButton from './components/LogoutButton.vue';

export default {
  components: {
    LogoutButton
  },
  computed: {
    showLogoutButton() {
      return this.$route.path !== '/login';
    }
  }
};

</script>

<style>
</style>
