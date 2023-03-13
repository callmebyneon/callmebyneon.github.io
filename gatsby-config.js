module.exports = {
  siteMetadata: {
    title: `Dev Log of Neon`,
    description: `Dev Log and Archiving Note of Neon(@callmebyneon)`,
    author: `@callmebyneon`,
    siteUrl: `https://callmebyneon.github.io`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`]
            }
          },

          // {
          //   resolve: 'gatsby-remark-prismjs',
          //   options: {
          //     classPrefix: 'language-',
          //     showLineNumbers: true,
          //   },
          // },

          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Dark+ (default dark)',
                parentSelector: {
                  // Any CSS selector will work!
                  'html[data-theme=dark]': 'Abyss',
                }
              },
              inlineCode: {
                theme: 'Dark+ (default dark)'
              }
            }
          },

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'http://callmebyneon.github.io',
        stripQueryString: true,
      }
    },
    'gatsby-plugin-sitemap',
  ],
};
