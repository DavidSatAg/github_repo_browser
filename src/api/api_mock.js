function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000)
    })
}



export const api = {
    async search_users(searchstring){
        const result = {
            items: [
                {
                    "login": "davidsat",
                    "id": 16678023,
                    "node_id": "MDQ6VXNlcjE2Njc4MDIz",
                    "avatar_url": "https://avatars.githubusercontent.com/u/16678023?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/davidsat",
                    "html_url": "https://github.com/davidsat",
                    "followers_url": "https://api.github.com/users/davidsat/followers",
                    "following_url": "https://api.github.com/users/davidsat/following{/other_user}",
                    "gists_url": "https://api.github.com/users/davidsat/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/davidsat/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/davidsat/subscriptions",
                    "organizations_url": "https://api.github.com/users/davidsat/orgs",
                    "repos_url": "https://api.github.com/users/davidsat/repos",
                    "events_url": "https://api.github.com/users/davidsat/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/davidsat/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                  },
                  {
                    "login": "DavidSatAg",
                    "id": 104369965,
                    "node_id": "U_kgDOBjiPLQ",
                    "avatar_url": "https://avatars.githubusercontent.com/u/104369965?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/DavidSatAg",
                    "html_url": "https://github.com/DavidSatAg",
                    "followers_url": "https://api.github.com/users/DavidSatAg/followers",
                    "following_url": "https://api.github.com/users/DavidSatAg/following{/other_user}",
                    "gists_url": "https://api.github.com/users/DavidSatAg/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/DavidSatAg/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/DavidSatAg/subscriptions",
                    "organizations_url": "https://api.github.com/users/DavidSatAg/orgs",
                    "repos_url": "https://api.github.com/users/DavidSatAg/repos",
                    "events_url": "https://api.github.com/users/DavidSatAg/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/DavidSatAg/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                  },
            ]
        }
        return later(result)
    },
    async lista_repos(username){
        const result = [
            {
                "id": 580408094,
                "node_id": "R_kgDOIphTHg",
                "name": "Tarefa01",
                "full_name": "DavidSatAg/Tarefa01",
                "private": false,
                "owner": {
                  "login": "DavidSatAg",
                  "id": 104369965,
                  "node_id": "U_kgDOBjiPLQ",
                  "avatar_url": "https://avatars.githubusercontent.com/u/104369965?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/DavidSatAg",
                  "html_url": "https://github.com/DavidSatAg",
                  "followers_url": "https://api.github.com/users/DavidSatAg/followers",
                  "following_url": "https://api.github.com/users/DavidSatAg/following{/other_user}",
                  "gists_url": "https://api.github.com/users/DavidSatAg/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/DavidSatAg/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/DavidSatAg/subscriptions",
                  "organizations_url": "https://api.github.com/users/DavidSatAg/orgs",
                  "repos_url": "https://api.github.com/users/DavidSatAg/repos",
                  "events_url": "https://api.github.com/users/DavidSatAg/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/DavidSatAg/received_events",
                  "type": "User",
                  "site_admin": false
                },
                "html_url": "https://github.com/DavidSatAg/Tarefa01",
                "description": null,
                "fork": false,
                "url": "https://api.github.com/repos/DavidSatAg/Tarefa01",
                "forks_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/forks",
                "keys_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/teams",
                "hooks_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/hooks",
                "issue_events_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/issues/events{/number}",
                "events_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/events",
                "assignees_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/assignees{/user}",
                "branches_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/branches{/branch}",
                "tags_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/tags",
                "blobs_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/languages",
                "stargazers_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/stargazers",
                "contributors_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contributors",
                "subscribers_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/subscribers",
                "subscription_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/subscription",
                "commits_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/{+path}",
                "compare_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/merges",
                "archive_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/downloads",
                "issues_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/issues{/number}",
                "pulls_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/labels{/name}",
                "releases_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/releases{/id}",
                "deployments_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/deployments",
                "created_at": "2022-12-20T13:42:48Z",
                "updated_at": "2022-12-20T13:51:18Z",
                "pushed_at": "2022-12-20T14:03:32Z",
                "git_url": "git://github.com/DavidSatAg/Tarefa01.git",
                "ssh_url": "git@github.com:DavidSatAg/Tarefa01.git",
                "clone_url": "https://github.com/DavidSatAg/Tarefa01.git",
                "svn_url": "https://github.com/DavidSatAg/Tarefa01",
                "homepage": null,
                "size": 498,
                "stargazers_count": 0,
                "watchers_count": 0,
                "language": null,
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": true,
                "has_discussions": false,
                "forks_count": 0,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 0,
                "license": null,
                "allow_forking": true,
                "is_template": false,
                "web_commit_signoff_required": false,
                "topics": [
            
                ],
                "visibility": "public",
                "forks": 0,
                "open_issues": 0,
                "watchers": 0,
                "default_branch": "main"
              }
        ]
        return later(result)
    },
    async listaConteudoRepo(owner, name) {
        const result = [
            {
              "name": ".github",
              "path": ".github",
              "sha": "6263c296147ce35afdd09ab71a5d606fac2cd5a7",
              "size": 0,
              "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.github?ref=main",
              "html_url": "https://github.com/DavidSatAg/Tarefa01/tree/main/.github",
              "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/6263c296147ce35afdd09ab71a5d606fac2cd5a7",
              "download_url": null,
              "type": "dir",
              "_links": {
                "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.github?ref=main",
                "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/6263c296147ce35afdd09ab71a5d606fac2cd5a7",
                "html": "https://github.com/DavidSatAg/Tarefa01/tree/main/.github"
              }
            },
            {
              "name": ".gitignore",
              "path": ".gitignore",
              "sha": "b6e47617de110dea7ca47e087ff1347cc2646eda",
              "size": 1799,
              "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.gitignore?ref=main",
              "html_url": "https://github.com/DavidSatAg/Tarefa01/blob/main/.gitignore",
              "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/b6e47617de110dea7ca47e087ff1347cc2646eda",
              "download_url": "https://raw.githubusercontent.com/DavidSatAg/Tarefa01/main/.gitignore",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.gitignore?ref=main",
                "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/b6e47617de110dea7ca47e087ff1347cc2646eda",
                "html": "https://github.com/DavidSatAg/Tarefa01/blob/main/.gitignore"
              }
            },
            {
              "name": "README.md",
              "path": "README.md",
              "sha": "9a33f0d3a8c2d51af23d958d7bd3fba68fce0d19",
              "size": 10,
              "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/README.md?ref=main",
              "html_url": "https://github.com/DavidSatAg/Tarefa01/blob/main/README.md",
              "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/9a33f0d3a8c2d51af23d958d7bd3fba68fce0d19",
              "download_url": "https://raw.githubusercontent.com/DavidSatAg/Tarefa01/main/README.md",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/README.md?ref=main",
                "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/9a33f0d3a8c2d51af23d958d7bd3fba68fce0d19",
                "html": "https://github.com/DavidSatAg/Tarefa01/blob/main/README.md"
              }
            },
            {
              "name": "docs",
              "path": "docs",
              "sha": "aca266c53553ceeb96db9f4c0eb5d3c4c548fc0f",
              "size": 0,
              "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/docs?ref=main",
              "html_url": "https://github.com/DavidSatAg/Tarefa01/tree/main/docs",
              "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/aca266c53553ceeb96db9f4c0eb5d3c4c548fc0f",
              "download_url": null,
              "type": "dir",
              "_links": {
                "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/docs?ref=main",
                "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/aca266c53553ceeb96db9f4c0eb5d3c4c548fc0f",
                "html": "https://github.com/DavidSatAg/Tarefa01/tree/main/docs"
              }
            },
            {
              "name": "mkdocs.yml",
              "path": "mkdocs.yml",
              "sha": "43777d4199f049a8b3be2f6465dbde9f3c52f3dc",
              "size": 99,
              "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/mkdocs.yml?ref=main",
              "html_url": "https://github.com/DavidSatAg/Tarefa01/blob/main/mkdocs.yml",
              "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/43777d4199f049a8b3be2f6465dbde9f3c52f3dc",
              "download_url": "https://raw.githubusercontent.com/DavidSatAg/Tarefa01/main/mkdocs.yml",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/mkdocs.yml?ref=main",
                "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/blobs/43777d4199f049a8b3be2f6465dbde9f3c52f3dc",
                "html": "https://github.com/DavidSatAg/Tarefa01/blob/main/mkdocs.yml"
              }
            }
          ]
        return later(result)
    },
    async listaConteudoRepo2(owner, name, path) {
      const result = [
        {
          "name": "workflows",
          "path": ".github/workflows",
          "sha": "a868a51feb4d0cd7dfe7b73157aded90ce29cfd3",
          "size": 0,
          "url": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.github/workflows?ref=main",
          "html_url": "https://github.com/DavidSatAg/Tarefa01/tree/main/.github/workflows",
          "git_url": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/a868a51feb4d0cd7dfe7b73157aded90ce29cfd3",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/DavidSatAg/Tarefa01/contents/.github/workflows?ref=main",
            "git": "https://api.github.com/repos/DavidSatAg/Tarefa01/git/trees/a868a51feb4d0cd7dfe7b73157aded90ce29cfd3",
            "html": "https://github.com/DavidSatAg/Tarefa01/tree/main/.github/workflows"
          }
        }
      ]
      return later(result)
    }
}