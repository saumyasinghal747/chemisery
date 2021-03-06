<template>
<v-container>
<h1>Pressure</h1>

  <v-card>
    <v-row class="py-5 my-5">
      <v-col class="mx-10">
        <v-text-field v-model="satm" filled hint="1 atm" label="Pressure"></v-text-field>
        <v-text-field v-model="smoles" filled hint="1 mol" label="Moles"></v-text-field>
      </v-col>
      <v-col class="mx-10">
        <v-text-field v-model="skelvin" filled hint="273 K" label="Temperature"></v-text-field>
        <v-text-field v-model="sliters" filled hint="22.4 L" label="Volume"></v-text-field>
      </v-col>
    </v-row>
  </v-card>
  <v-card class="pa-5 my-5">
    <h3>Calculate the . . .</h3>
    <v-radio-group v-model="calculating">
      <v-radio
        label="Moles"
        value="moles"
      ></v-radio>
      <v-radio
          label="Liters"
          value="liters"
      ></v-radio>
      <v-radio
          label="Kelvin"
          value="Kelvin"
      ></v-radio>
      <v-radio
          label="ATM"
          value="atm"
      ></v-radio>
    </v-radio-group>
    <span><b>Answer:  </b>{{response}} {{calculating}}</span>
  </v-card>
</v-container>
</template>

<script>
export default {
name: "pv-nt",
  data:()=>({
    R:22.4/273,
    smoles:1,
    sliters:22.4,
    skelvin:273,
    satm:1,
    calculating:'moles'

  }),

  computed:{
    Kelvin(){
      const {R, smoles, sliters, satm} = this;
      if (!(R&&smoles&&sliters&&satm)) {
        this.skelvin = 273
        return 273;
      }
      const t = (satm*sliters)/(smoles*R)
      this.skelvin = t;
      return t
    },
    atm(){
      const {R, smoles, sliters, skelvin} = this;
      if (!(R&&smoles&&sliters&&skelvin)) {
        this.satm = 1
        return 1;
      }
      const t = (R*skelvin*smoles)/sliters
      this.satm = t;
      return t
    },
    moles(){
      const {R, sliters, satm, skelvin} = this;
      if (!(R&&sliters&&satm&&skelvin)) {
        this.smoles = 1;
        return 1
      }
      const t = (satm*sliters)/(R*skelvin);
      this.smoles = t;
      return t
    },
    liters(){
      const {R, smoles, satm, skelvin} = this;
      if (!(R&&smoles&&satm&&skelvin)) {
        this.sliters = 22.4
        return 22.4;
      }
      const t = (R*skelvin*smoles)/satm
      this.sliters = t;
      return t
    },
    response(){
      return this[this.calculating]
    }
  }
}
</script>

<style scoped>

</style>
