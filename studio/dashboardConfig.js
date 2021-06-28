export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60da3e4b9ec56e11e1186162',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7nmbrjcp',
                  apiId: 'c6531f08-6a59-4ee1-a3de-138e74cbaf76'
                },
                {
                  buildHookId: '60da3e4bb2010a13ebeec9ee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-m1rjy92c',
                  apiId: 'ff162edb-3403-48af-bee8-b9fed4fe131f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sean-dtpros/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-m1rjy92c.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
