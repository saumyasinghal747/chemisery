<template>
  <div>
    <v-container>
      <h1>Phase Change</h1>
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-card-text>
              The energy required to move...
              <br/>
              <span class="mt-5 d-block">
               <v-text-field class="d-inline-block" v-model="mass" dense filled/> kg  from <v-text-field class="d-inline-block" v-model="startTemp" dense filled/> °C to <v-text-field class="d-inline-block" v-model="endTemp" dense filled/> °C is <v-text-field class="d-inline-block" :value="tempChangeEnthalpy(startTemp, endTemp, mass, properties)" dense filled readonly /> kJ.
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card >
            <v-card-title>Properties</v-card-title>
            <v-card-text>
              <h3 class="my-2">Phase Changes</h3>
              <v-text-field dense  persistent-hint hint="Melting Point" filled v-model="properties.meltingPoint"></v-text-field>
              <v-text-field dense persistent-hint hint="Boiling Point" filled v-model="properties.boilingPoint"></v-text-field>

              <h3 class="my-2">Specific Heat</h3>
              <v-text-field dense persistent-hint hint="Solid" filled v-model="properties.solidSpecificHeat"></v-text-field>
              <v-text-field dense persistent-hint hint="Liquid" filled v-model="properties.liquidSpecificHeat"></v-text-field>
              <v-text-field dense persistent-hint hint="Gas" filled v-model="properties.gasSpecificHeat"></v-text-field>

              <h3 class="my-2">Molar Enthalpy</h3>
              <v-text-field dense persistent-hint hint="Fusion" filled v-model="properties.fusionEnthalpy"></v-text-field>
              <v-text-field dense persistent-hint hint="Vaporization" filled v-model="properties.vaporEnthalpy"></v-text-field>

              <h3 class="my-2">Other</h3>
              <v-text-field dense persistent-hint hint="Molar Mass" filled v-model="properties.molarMass"></v-text-field>
            </v-card-text>


          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { tempChangeEnthalpy } from '@/plugins/chemistry'
export default {
  name: "PhaseChange",
  data:()=>({
    properties:{ gasSpecificHeat: 1.84, liquidSpecificHeat: 4.18, solidSpecificHeat: 2.09,
      fusionEnthalpy: 6.01, vaporEnthalpy: 4.07, molarMass: 18.02,
      boilingPoint:100, meltingPoint:0
    },
    mass:10,
    startTemp:-50,
    endTemp: 150
  }),

  methods:{
    tempChangeEnthalpy:tempChangeEnthalpy
  }
}
</script>

<style scoped>

</style>
