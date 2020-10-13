<template>
  <ul>
    <article
      class=" card mb-2 p-2 border zoomIn"
      style="max-width: 540px;"
      @click="clicked = clicked ? false : true"
    >
      <p class="m-0 p-0">{{ repoName }}</p>
    </article>
    <div class="repoData d-flex flex-column justify-content-center mx-auto">
      <ul class="dataContainer m-3 p-3 pulse zoomIn shadow" v-if="clicked">
        <h6>BRANCHES ({{ this.reposData[index].branch.length }}):</h6>
        <li
          class="data-list"
          v-for="item in this.reposData[index].branch"
          :key="item.id"
        >
          <img class="icon" src="../assets/branch_icon.png" alt="Branch icon" />
          {{ item }}
        </li>
      </ul>
      <ul class="dataContainer m-3 p-3 zoomIn shadow" v-if="clicked">
        <h6>COMMITS ({{ this.reposData[index].commit.length }}):</h6>
        <RepoCommits
          v-for="(oneCommit, commitIndex) in this.reposData[index].commit"
          :key="commitIndex"
          :commitIndex="commitIndex"
          :index="index"
        />
      </ul>
    </div>
  </ul>
</template>

<script>
import RepoCommits from "@/components/RepoCommits.vue";
export default {
  components: {
    RepoCommits
  },
  data() {
    return {
      clicked: false
    };
  },
  props: {
    repoName: {
      type: String
    },
    reposData: {
      type: Array
    },
    index: {
      type: Number
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/custom-variables";
@import "../assets/scss/main";
article {
  margin: auto;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: lighten($custom-blue-middle, 10%);
  }
}
.repoData {
  max-width: $max-width-value;

  .dataContainer {
    background-color: $custom-blue-dark;
    max-width: $max-width-value;
  }
}
</style>
