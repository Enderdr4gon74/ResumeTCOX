<template>
  <div class="bg-light-grey rounded-3 p-2 w-100">
    <a :href="education.Link" target="_blank">
      <img :src="education.Picture" :alt="education.Name" class="img-fluid w-100 rounded-2">
    </a>
    <h4>{{education.Name}}</h4>
    <p>Graduated {{education.Class}}</p>
  </div>
</template>


<script>
import { School } from '../models/School.js';

export default {
  props: {
    education: { type: School, required: true},
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.bg-light-grey {
  background-color: #dfdede;
}
</style>