(function(){"use strict";var t={140:function(t,e,o){var r=o(144),s=o(1096),i=o(2349),n=o(4202),a=o(5057),l=o(3551),u=o(5234),c=function(){var t=this,e=t._self._c;return e(s.Z,[e(i.Z,{attrs:{app:"",color:"#2D333B",dark:""}},[e("div",{staticClass:"d-flex align-center h1"},[t._v(" "+t._s(t.title)+" ")]),e(u.Z),e(n.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,{staticStyle:{"background-color":"#22272E"}},[e("GithubRepoBrowser")],1)],1)},p=[],h=o(6035),d=function(){var t=this,e=t._self._c;return e(h.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected,userselected:t.onUserSelected}}),e("GithubContents",{attrs:{repo:t.repo,user:t.user}})],1)},f=[],b=o(4177),m=o(4437),g=o(5294),v=o(6069),y=function(){var t=this,e=t._self._c;return e("div",[e(g.Z,{staticClass:"text-center"},[e(m.Z,{attrs:{cols:"6"}},[e(b.Z,{staticStyle:{"background-color":"#CDD9E5","border-radius":"10px"},attrs:{label:"Encontre o seu usuário",placeholder:"Digite o nome do usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(m.Z,{attrs:{cols:"6"}},[e(v.Z,{staticStyle:{"background-color":"#CDD9E5","border-radius":"10px"},attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositório","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},_=[];function C(t,e){let o=null;function r(){o&&clearTimeout(o);const r=this,s=arguments;o=setTimeout((()=>{t.apply(r,s),o=null}),e)}return r}async function w(t){let e=!0,o=[],r=1;while(e){const s=await fetch(`${t}?page=${r}`),i=await s.json();i.length>0?(o=o.concat(i),r++):e=!1}return o}const Z={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,o=await fetch(e);return await o.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,o=await w(e);return await o},async listaConteudoRepo(t,e,o=""){const r=`https://api.github.com/repos/${t}/${e}/contents/${o}`,s=await fetch(r);return await s.json()}};var D={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1,path:[],joinedPath:null}),methods:{procuraUsuariosGithub:C((async function(){this.userloading=!0;const t=await Z.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listarepositorios(){this.repoloading=!0;const t=await Z.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&(this.listarepositorios(),this.$emit("userselected",this.user))},repo(){this.$emit("reposelected",this.repo)}}},x=D,S=o(1001),P=(0,S.Z)(x,y,_,!1,null,null,null),j=P.exports,k=o(6275),E=o(4397),O=function(){var t=this,e=t._self._c;return e("div",[e(g.Z,[e(m.Z,{attrs:{cols:"12"}},[e("div",{staticStyle:{color:"#CDD9E5","padding-bottom":"16px"}},[e(a.Z,{staticStyle:{color:"#CDD9E5"},attrs:{left:"",small:""}},[t._v("mdi-monitor")]),t._v(t._s(t.path))],1),e(E.Z,{staticStyle:{"background-color":"#22272E",border:"1px solid #444C56","border-radius":"10px"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",{staticStyle:{"background-color":"#2D333B"}},[e("tr",[e("th",{staticClass:"text-left",staticStyle:{color:"#CDD9E5","border-radius":"10px"}},[t._v(" Tipo ")]),e("th",{staticClass:"text-left",staticStyle:{color:"#CDD9E5"}},[t._v(" Nome ")])])]),e("tbody",t._l(t.conteudos,(function(o){return e("tr",{key:o.name},["dir"==o.type?e("td",{staticStyle:{color:"#CDD9E5","border-bottom":"1px solid #444C56"}},[e(a.Z,{staticStyle:{color:"#CDD9E5"},attrs:{left:"",small:""}},[t._v("mdi-folder")])],1):e("td",{staticStyle:{color:"#CDD9E5","border-bottom":"1px solid #444C56"}},[e(a.Z,{staticStyle:{color:"#CDD9E5"},attrs:{left:"",small:""}},[t._v("mdi-file")])],1),"dir"==o.type?e("td",{staticStyle:{color:"#CDD9E5","border-bottom":"1px solid #444C56"}},[e("p",{staticClass:"dir",on:{click:function(e){return t.acessaDiretorio(o.path)}}},[t._v(t._s(o.name))])]):e("td",{staticStyle:{color:"#CDD9E5","border-bottom":"1px solid #444C56"}},[t._v(t._s(o.name))])])})),0)]},proxy:!0}])})],1)],1),e(g.Z,[e(m.Z,[t.loading?e(k.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)],1)},R=[],$=(o(7658),{props:["repo","user"],data:()=>({loading:!1,conteudos:[],repoPath:[],path:null}),methods:{async listaConteudo(t){this.loading=!0;const e=await Z.listaConteudoRepo(this.repo.owner.login,this.repo.name,t);this.conteudos=e,this.loading=!1},async acessaDiretorio(t){this.repoPath.length>2&&this.repoPath.pop(),this.repoPath.push(t),this.path=this.repoPath.join("/"),this.listaConteudo(t)}},watch:{user(){this.repoPath=[],this.user&&(this.repoPath.push(this.user),this.path=this.repoPath.join("/"))},repo(){this.conteudos=[],this.repoPath=[this.repoPath[0]],this.repo?(this.repoPath.push(this.repo.name),this.path=this.repoPath.join("/"),this.listaConteudo()):this.conteudos=[]}}}),G=$,T=(0,S.Z)(G,O,R,!1,null,null,null),B=T.exports,U={components:{GithubRepo:j,GithubContents:B},data:()=>({repo:null,path:null,user:null}),methods:{onRepoSelected(t){this.repo=t},onUserSelected(t){this.user=t}}},M=U,q=(0,S.Z)(M,d,f,!1,null,null,null),A=q.exports,F={name:"App",components:{GithubRepoBrowser:A},data:()=>({title:"Github Repo Browser"})},I=F,L=(0,S.Z)(I,c,p,!1,null,null,null),N=L.exports,z=o(2250);r.ZP.use(z.Z);var H=new z.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:H,render:t=>t(N)}).$mount("#app")}},e={};function o(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,r,s,i){if(!r){var n=1/0;for(c=0;c<t.length;c++){r=t[c][0],s=t[c][1],i=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<n&&(n=i));if(a){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,s,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,n=r[0],a=r[1],l=r[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var c=l(o)}for(e&&e(r);u<n.length;u++)i=n[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},r=self["webpackChunkgithub_repo_browser"]=self["webpackChunkgithub_repo_browser"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(140)}));r=o.O(r)})();
//# sourceMappingURL=app.aeecd7f2.js.map