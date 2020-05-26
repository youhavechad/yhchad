export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecc77d7f5ea88566ed60dcf',
                  title: 'Sanity Studio',
                  name: 'yhchad-studio',
                  apiId: '7c30033b-c47b-4e79-a62b-0adccc1e98a3'
                },
                {
                  buildHookId: '5ecc77d7c94566e6995a1e12',
                  title: 'Blog Website',
                  name: 'yhchad',
                  apiId: '31dc8b95-dc2b-4eab-93d4-3e4710910bfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/youhavechad/yhchad',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://yhchad.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
