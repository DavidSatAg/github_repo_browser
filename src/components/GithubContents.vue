<template>
    <div>
      <v-row>
        <v-col cols="12">
          <div style="color: #CDD9E5; padding-bottom: 16px"><v-icon left small style="color: #CDD9E5">mdi-monitor</v-icon>{{ path }}</div>
          <v-simple-table style="background-color: #22272E; border: 1px solid #444C56; border-radius: 10px;">
            <template v-slot:default>
              <thead style="background-color: #2D333B;">
                <tr>
                  <th style="color: #CDD9E5; border-radius: 10px" class="text-left"> Tipo </th>
                  <th style="color: #CDD9E5" class="text-left"> Nome </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="conteudo in conteudos" :key="conteudo.name">
                  <td style="color: #CDD9E5; border-bottom: 1px solid #444C56" v-if="conteudo.type == 'dir'">
                    <v-icon left small style="color: #CDD9E5">mdi-folder</v-icon>
                  </td>
                  <td style="color: #CDD9E5; border-bottom: 1px solid #444C56" v-else>
                    <v-icon left small style="color: #CDD9E5">mdi-file</v-icon>
                  </td>
                  <td style="color: #CDD9E5; border-bottom: 1px solid #444C56" v-if="conteudo.type == 'dir'"><p class="dir" @click="acessaDiretorio(conteudo.path)">{{ conteudo.name }}</p></td>
                  <td style="color: #CDD9E5; border-bottom: 1px solid #444C56" v-else>{{ conteudo.name }}</td>
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
        conteudos: [],
        repoPath: [],
        path: null,
      }),
      methods: {
        async listaConteudo(caminho) {
            this.loading = true
            const maisconteudo = await api.listaConteudoRepo(this.repo.owner.login, this.repo.name, caminho)
            this.conteudos = maisconteudo
            this.loading = false
        },
        async acessaDiretorio(caminho) {
          if (this.repoPath.length > 2) {
            this.repoPath.pop()
          }
          this.repoPath.push(caminho)
          this.path = this.repoPath.join('/')
          this.listaConteudo(caminho)
        },
      },
      watch: {
        user() {
          this.repoPath = []
          if(this.user) {
            this.repoPath.push(this.user)
            this.path = this.repoPath.join('/')
          }
        },
        repo() {
          this.conteudos = []
          this.repoPath = [this.repoPath[0]]
          if (this.repo) {
            this.repoPath.push(this.repo.name)
            this.path = this.repoPath.join('/')
            this.listaConteudo()
          } else {
            this.conteudos =  []
          }
        }
      },
    }
  </script>

<style>
.dir:hover {
  text-decoration: underline ;
  cursor: pointer;
  color: #22272E;
}
</style>