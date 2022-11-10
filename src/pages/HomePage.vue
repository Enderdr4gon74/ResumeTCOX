<template>
  <section class="row py-3">
    <div class="col-10 px-3 mb-3">
      <div class="bg-grey p-3 rounded-3">
        <div class="row">
          <div class="col-4">
            <img src="../assets/img/tcoxjpg.jpg" alt="Me" class="img-fluid w-100 rounded-3">
          </div>
          <div class="col-8">
            <h1>About Me</h1>
            
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 px-3">
      <div class="bg-grey p-3 rounded-3">
        <div class="ps-2">
          <h3>Education</h3>
          <div class="columns pt-2">
            <div v-for="e in education" class="mb-3">
              <EducationComp :education="e" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 px-3">
      <div class="bg-grey p-3 rounded-3">
        <div class="ps-2">
          <h3>Skills</h3>
          <div class="columns pt-2">
            <div v-for="s in skills" class="mb-3">
              <SkillCard :skill="s" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import EducationComp from '../components/EducationComp.vue';
import SkillCard from '../components/SkillCard.vue';

export default {
  setup() {
    return {
      education: computed(() => AppState.education),
      skills: computed(() => AppState.skills),
    };
  },
  components: { SkillCard, EducationComp }
}
</script>

<style scoped lang="scss">
.columns {
  columns: 2;
}
</style>
