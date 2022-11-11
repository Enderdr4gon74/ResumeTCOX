<template>
  <div class="bg-light-grey rounded-3 p-2 w-100">
    <h5>{{achievement.Name}}</h5>
    <p class="m-0">Achieved: {{achievement.Date}}</p>
  </div>
</template>


<script>
import { Achievement } from '../models/Achievement.js';

export default {
  props: {
    achievement: { type: Achievement, required: true},
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