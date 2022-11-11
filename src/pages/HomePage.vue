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
            <h4>Name: Tristan Cox</h4>
            <button v-if="account.id != null" data-bs-toggle="modal" data-bs-target="#ContactModal" class="btn btn-outline-dark"> Contact Me </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 px-3">
      <div class="bg-grey p-3 rounded-3 mb-3">
        <div class="ps-2">
          <h3>Education</h3>
          <div class="columns pt-2">
            <div v-for="e in education" class="mb-3">
              <EducationComp :education="e" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-grey p-3 rounded-3 mb-3">
        <div class="ps-2">
          <h3>Achievements</h3>
          <div class="columns pt-2">
            <div v-for="a in achievements" class="mb-3">
              <AchievementCard :achievement="a" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-grey p-3 rounded-3">
        <div class="ps-2">
          <h3>Work Experience</h3>
          <div class="columns pt-2">
            <div v-for="j in jobs" class="mb-3">
              <JobCard :job="j" />
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
import AchievementCard from '../components/AchievementCard.vue';
import EducationComp from '../components/EducationComp.vue';
import JobCard from '../components/JobCard.vue';
import SkillCard from '../components/SkillCard.vue';

export default {
  setup() {
    return {
      education: computed(() => AppState.education),
      skills: computed(() => AppState.skills),
      jobs: computed(() => AppState.workExperience),
      achievements: computed(() => AppState.achievements),
      account: computed(() => AppState.user)
    };
  },
  components: { SkillCard, EducationComp, AchievementCard, JobCard }
}
</script>

<style scoped lang="scss">
.columns {
  columns: 2;
}
</style>
