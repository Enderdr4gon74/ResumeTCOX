<template>
  <div class="bg-light-grey rounded-3 p-2 w-100">
    <div class="d-flex justify-content-between align-items-center">
      <h4>{{skill.Name}}</h4>
    </div>
    <p>{{skill.Description}}</p>
    <div class="row">
      <div v-for="i in skill.Icons" class="col-3">
        <div v-if="i.Link">
          <a :href="i.Link" target="_blank">
            <img :src="i.Img" alt="Icon" class="img-fluid w-100">
          </a>
        </div>
        <div v-else>
          <img :src="i.Img" alt="Icon" class="img-fluid w-100">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Skill } from '../models/Skill.js';

export default {
  props: {
    skill: { type: Skill, required: true},
  },
  setup(){
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-light-grey {
  background-color: #dfdede;
}
</style>