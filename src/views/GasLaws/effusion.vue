<template>
<v-container>
  <h1>Effusion</h1>
  <v-card class="pa-5 my-5">
    <h3>Molar Masses of Gases</h3>
    <v-row class="pt-5 px-5 my-5">
      <v-text-field v-model="sgasa" filled hint="1 g" class="mx-10" label="Gas A"></v-text-field>
      <v-text-field v-model="sgasb" filled hint="1 g" class="mx-10" label="Gas B"></v-text-field>
      <v-text-field v-model="srate" filled hint="1" class="mx-10" label="Rate"></v-text-field>
    </v-row>
  </v-card>
  <v-card class="pa-5 my-5">
    <h3>Calculate the . . .</h3>
    <v-radio-group v-model="calculating">
      <v-radio
          label="Rate"
          value="rate"
      ></v-radio>
      <v-radio
          label="Gas A"
          value="gasa"
      ></v-radio>
      <v-radio
        label="Gas B"
        value="gasb"
    ></v-radio>
    </v-radio-group>
    <span><b>Answer:  </b>{{units[calculating][0]}} <span class="primary--text">{{response}}</span> {{units[calculating][1]}}</span>
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
    srate:1,
    units:{
      rate:['Gas A effuses','times as fast as Gas B'],
      gasa:['The molar mass of Gas A is'],
      gasb:['The molar mass of Gas B is']
    }
  }),
  computed: {
  response(){
    return this[this.calculating];
  },
    rate() {
      const {sgasb, sgasa} = this;
      if (!(sgasb && sgasa)) {
        this.srate = 1;
        return 1
      }
      const t = Math.sqrt(sgasb/sgasa)
      this.srate = t;
      return t;
    },
    gasa() {
      const {sgasb, srate} = this;
      if (!(sgasb && srate)) {
        this.sgasa = 1;
        return 1
      }
      const t = (sgasb / Math.pow(srate, 2))
      this.sgasa = t;
      return t;

    },
    gasb(){
      const {sgasa, srate} = this;
      if (!(sgasa&&srate)){
        this.sgasb = 1;
        return 1
      }
      const t = (Math.pow(srate,2)/sgasa)
      this.sgasb = t; return t;

    }
  }
}
</script>

<style scoped>

</style>
