<template>
  <div>
    <v-navigation-drawer clipped app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Enthalpy
          </v-list-item-title>
          <v-list-item-subtitle>
            Phase Change and Specific Heat
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list
          dense
          nav
      >

        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="'/enthalpy/'+item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Enthalpy",
  data: () => ({
    items: [
      {
        icon:'mdi-pot-steam',
        title:'Phase Change',
        to:'phase-change'
      }
    ]
  })
}
</script>

<style scoped>

</style>
