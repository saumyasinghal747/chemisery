<template>
  <div class="home">
    <v-container>
      <h1>Home</h1>
      <v-card class="my-5">
        <v-card-title>Gas Laws</v-card-title>
        <v-card-text>PV/nT and Graham's Law</v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/gas-laws">
            open
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
