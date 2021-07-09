<template>
  <v-app >
    <v-app-bar clipped-left
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-title ><router-link tag="div" style="cursor: pointer" class="text--white" to="/">Chemisery</router-link></v-app-bar-title>
      </div>

    </v-app-bar>

    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-app-bar-title__placeholder, .v-app-bar-title__content {
  overflow: visible !important;
   text-overflow: initial !important;
  white-space: nowrap;
}
</style>
