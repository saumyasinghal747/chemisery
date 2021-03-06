<template>
  <v-app >
    <v-app-bar clipped-left
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-title>Chemisery</v-app-bar-title>
      </div>

    </v-app-bar>

    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
