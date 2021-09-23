export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '614c67d65582a8aaacd4849c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-15w2p57e',
                  apiId: '90dffce5-9207-43d1-9205-ea08308f986d'
                },
                {
                  buildHookId: '614c67d65582a8b21dd47ea2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ybripa9m',
                  apiId: '5fe5e7dc-e4ca-41f7-a9f3-ae32dc6817d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcastany/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ybripa9m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
