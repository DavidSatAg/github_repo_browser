<template>
    <div>
      <v-row>
        <v-col cols="12">
          <div><v-icon left small>mdi-xml</v-icon>{{ path }}</div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"> Tipo </th>
                  <th class="text-left"> Nome </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="conteudo in conteudos" :key="conteudo.name">
                  <td v-if="conteudo.type == 'dir'">
                    <v-icon left small>mdi-folder</v-icon>
                  </td>
                  <td v-else>
                    <v-icon left small>mdi-file</v-icon>
                  </td>
                  <td class="alo" v-if="conteudo.type == 'dir'"><p class="dir" @click="pudim(conteudo.path)">{{ conteudo.name }}</p></td>
                  <td v-else>{{ conteudo.name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo', 'user'],
      data: () => ({
        loading: false,
        currentPage: 1,
        conteudos: [],
        repoPath: [],
        archivePath: [],
        path: null,
      }),
      methods: {
        async listaConteudo(caminho) {
            this.loading = true
            const maisconteudo = await api.listaConteudoRepo(this.repo.owner.login, this.repo.name, caminho)
            this.conteudos = maisconteudo
            this.loading = false
        },
        async listaConteudo2(caminho) {
          const maisconteudo = await api.listaConteudoRepo2(this.repo.owner.login, this.repo.name, caminho)
          this.conteudos = maisconteudo
        },
        async pudim(caminho) {
          if (this.repoPath.length > 2) {
            this.repoPath.pop()
          }
          this.repoPath.push(caminho)
          this.archivePath.push(caminho)
          this.path = this.repoPath.join('/')
          console.log(this.archivePath)
          console.log(caminho)
          this.listaConteudo2(caminho)
          console.log(this.listaConteudo2(caminho))
        }
      },
      watch: {
        user() {
          this.repoPath = []
          if(this.user) {
            console.log(this.user)
            this.repoPath.push(this.user)
            this.path = this.repoPath.join('/')
          }
        },
        repo() {
          this.conteudos = []
          this.repoPath = [this.repoPath[0]]
          if (this.repo) {
            console.log(this.repo.name)
            this.repoPath.push(this.repo.name)
            this.path = this.repoPath.join('/')
            this.listaConteudo()
          } else {
            this.conteudos =  []
          }
        },
        repoPath() {
          console.log('repo mudou', this.repoPath)
        }
      },
    }
  </script>

<style>
.dir:hover {
  text-decoration: underline ;
  cursor: pointer
}
</style>