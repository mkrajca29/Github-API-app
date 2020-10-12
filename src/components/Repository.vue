<template>
  <ul>
    <article
      class=" card mb-2 p-2"
      style="max-width: 538px;"
      @click="clicked = clicked ? false : true"
    >
      {{ repoName }}
    </article>
    <div class="repoData">
      <ul class="dataContainer" v-if="clicked">
        <p>BRANCHES</p>
        <li v-for="item in this.reposData[index].branch" :key="item.id">
          {{ item }}
        </li>
      </ul>
      <ul v-if="clicked">
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
article {
  margin: auto;
  padding: 5x;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
  font: {
    size: 16px;
  }
}
li {
  list-style-type: none;
}
.repoData {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 500px;

  li {
    margin: 10px;
    background-color: #fff;
  }

  .dataContainer {
    background-color: rgb(161, 153, 153);
    margin: 20px;
    padding: 20px;
  }
}
.message {
  color: red;
}
</style>
