<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected" @userselected="onUserSelected"/>
    <GithubContents :repo="repo" :user="user"></GithubContents>
  </v-container>
</template>

<script>
  import GithubRepo from './GithubRepo';
  import GithubContents from './GithubContents';
  export default {
    components: {
      GithubRepo,
      GithubContents,
    },
    data: () => ({
      repo: null,
      path: null,
      user: null
    }),
    methods: {
      onRepoSelected(repo) {
        this.repo = repo
      },
      onUserSelected(user) {
        this.user = user
      }
    }
  }
</script>
  