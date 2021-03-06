<template>
<div >
  <v-navigation-drawer clipped app permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Gas Laws
        </v-list-item-title>
        <v-list-item-subtitle>
          PV/nT and Graham's Law
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
          :to="'/gas-laws/'+item.to"
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
name: "GasLaws",
  data:()=>({
    items:[
      {
        icon:'mdi-balloon',
        title:'Pressure',
        to:'pv-nt'
      },
      {
        icon:'mdi-pot-steam',
        title:'Effusion',
        to:'effusion'
      },
      {
        icon:'mdi-chart-pie',
        title:'Partial Pressure',
        to:'partial-pressure'
      }
    ]
  })
}
</script>

<style scoped>

</style>
