<template>
  <div>
    <v-row class="text-center">
      <v-col cols="6">
        <v-autocomplete
            v-model="user"
            label="Encontre o seu usuário"
            placeholder="Digite o nome do usuário"
            :items="userlist"
            :loading="userloading"
            :search-input.sync="usersearch"
            item-text="login"
            style="background-color: #CDD9E5;
              border-radius: 10px;"
        />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="repo"
          :items="repolist"
          :loading="repoloading"
          item-text="name"
          label="Selecione o repositório"
          return-object
          single-line
          style="background-color: #CDD9E5;
              border-radius: 10px;"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import {debouncerdecorator} from '@/helpers/debouncer.js'
  import {api} from '~api'

  export default {
    data: () => ({
      user: null,
      repo: null,
      usersearch: null,
      userlist: [],
      repolist: [],
      userloading: false,
      repoloading: false,
      path: [],
      joinedPath: null
    }),
    methods: {
      procuraUsuariosGithub: debouncerdecorator(async function() { // atenção: não use () => {} aqui. vai quebrar o decorator
        this.userloading = true
        const data = await api.search_users(this.usersearch)
        this.userlist = data.items
        this.userloading = false
      }, 500),
      async listarepositorios() {
        this.repoloading = true
        const data = await api.lista_repos(this.user)
        this.repolist = data
        this.repoloading = false
      },
      // juntapath() {
      //   this.joinedPath = this.path.join('/')
      // }
    },
    watch: {
      usersearch() {
        this.procuraUsuariosGithub()
      },
      user() {
        if(this.user) {
          this.listarepositorios()
          this.$emit('userselected', this.user)
          // this.path.push(this.user)
          // this.juntapath()
        }
      },
      repo () {
        this.$emit('reposelected', this.repo)
        if (this.repo) {
          // this.path.push(this.repo.name)
          // this.juntapath()
        }
        // this.$emit('pathselected', this.path)
      }
    }
  }
</script>

<style>
.e-ddl.e-input-group input.e-input::placeholder {
    color: red;
}</style>