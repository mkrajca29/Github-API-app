<template>
  <ul>
    <li class="data-list">
      <img class="icon" src="../assets/commit_icon.png" alt="Commit icon" />
      {{ this.reposData[this.index].commit[this.commitIndex].author.name }}:
      {{ this.reposData[this.index].commit[this.commitIndex].message }}
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["reposData"])
  },

  props: {
    index: {
      type: Number
    },
    commitIndex: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/main";
</style>
