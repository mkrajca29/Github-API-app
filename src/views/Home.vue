<template>
  <div class="home mx-auto shadow">
    <article class="d-flex justify-content-center">
      <div class="card mb-3 border" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="this.avatar" class="card-img" alt="Avatar" />
          </div>
          <div class="col-md-8 align-self-center">
            <div class="card-body">
              <h5 class="card-title">{{ this.fullName }} ({{ user }})</h5>
              <p class="card-text">
                Number of public repositories: {{ repoNames.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
    <h1 class="mb-2">Repositories</h1>
    <Repository
      v-for="(repoName, index) in repoNames"
      :key="index"
      :index="index"
      :repoName="repoName"
      :reposData="reposData"
    />

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Repository from "@/components/Repository.vue";
export default {
  components: {
    Repository
  },
  data() {
    return {
      fullName: "Tomas Jukin",
      avatar: "https://avatars0.githubusercontent.com/u/103046?v=4"
    };
  },

  mounted() {
    this.$store.dispatch("getReposNames");
  },
  computed: {
    ...mapState(["repoNames"]),
    ...mapState(["branches"]),
    ...mapState(["reposData"]),
    ...mapState(["errored"]),
    ...mapState(["user"])
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  max-width: 600px;
}
</style>
