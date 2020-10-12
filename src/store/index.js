import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    repoNames: [],
    reposData: [],
    errored: false
  },
  mutations: {
    SET_REPOS_NAMES(state, posts) {
      state.repoNames = posts;
    }
  },
  actions: {
    async getReposNames({ commit }) {
      await axios
        .get(`https://api.github.com/users/Inza/repos`)
        .then(response => {
          let repoNames = response.data.map(data => data.name);
          commit("SET_REPOS_NAMES", repoNames);
        })
        .catch(error => {
          console.log(error);
          this.state.errored = true;
        });

      for (let index in this.state.repoNames) {
        let one = `https://api.github.com/repos/Inza/${this.state.repoNames[index]}/branches`;
        let two = `https://api.github.com/repos/Inza/${this.state.repoNames[index]}/commits?per_page=10`;

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        axios
          .all([requestOne, requestTwo])
          .then(
            axios.spread((...responses) => {
              const responseOne = responses[0];
              const responseTwo = responses[1];

              let branches = responseOne.data.map(data => data.name);
              let commits = responseTwo.data.map(data => data.commit);

              this.state.reposData[index] = {
                /* name: this.state.repoNames[index], */
                branch: branches,
                commit: commits
              };
            })
          )
          .catch(error => {
            console.log(error);
            this.errored = true;
          });
      }
    }
  },
  getters: {},
  modules: {}
});
