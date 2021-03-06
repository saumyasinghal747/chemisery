<template>
<v-container>
  <h1>Effusion</h1>
  <v-card class="pa-5 my-5">
    <h3>Molar Masses of Gases</h3>
    <v-row class="pt-5 px-5 my-5">
      <v-text-field v-model="sgasa" filled hint="1 g" class="mx-10" label="Gas A"></v-text-field>
      <v-text-field v-model="sgasb" filled hint="1 g" class="mx-10" label="Gas B"></v-text-field>
    </v-row>
    <div class="pa-5">
      <h3>Gas A effuses {{rate}} times as fast as Gas B.</h3>
    </div>

  </v-card>
</v-container>
</template>

<script>
export default {
name: "effusion",
  data:()=>({
    calculating:'rate',
    sgasa:1,
    sgasb:1,
    srate:1
  }),
  computed:{
  rate(){
    return Math.sqrt(this.sgasb/this.sgasa)
  }
  }
}
</script>

<style scoped>

</style>
