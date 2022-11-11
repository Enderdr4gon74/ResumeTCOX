<template>
  <div class="bg-light-grey rounded-3 p-2 w-100">
    <h4>{{job.JobTitle}}</h4>
    <h5>{{job.Company}} - {{job.Location}}</h5>
    <p>{{job.From}} - {{job.To}}</p>
    <ul>
      <li v-for="r in job.Requirements">{{r.Name}}</li>
    </ul>
  </div>
</template>


<script>
import { Job } from '../models/Job.js';

export default {
  props: {
    job: { type: Job, required: true},
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