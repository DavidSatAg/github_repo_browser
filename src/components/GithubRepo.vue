<template>
  <div>
    <v-autocomplete
        v-model="user"
        :items="userlist"
        :loading="userloading"
        :search-input.sync="usersearch"
        label="Usuários do Github"
        placeholder="Digite o nome de um usuário do Github"
        item-text="login"
        >
        
    </v-autocomplete>
  </div>
</template>
    
<script>

  import {debouncerdecorator} from '@/helpers/debouncer.js'
  import {api} from '@/api/api.js'

  export default {
    data: () => ({
      user: null,
      userlist: [],
      userloading: false,
      usersearch: null,
    }),
    methods: {
      procuraUsuariosGithub: debouncerdecorator(function () {
        this.userloading = true
        api.search_users(this.usersearch).then(data => {
          this.userlist = data.items
          this.userloading = false
        })
      }, 500),
    },
    watch: {
      usersearch() {
        this.procuraUsuariosGithub()
      }
    }
  }
</script>
    