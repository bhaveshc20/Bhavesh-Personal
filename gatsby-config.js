const path = require(`path`)

module.exports = {
	pathPrefix: `/`,
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-transformer-yaml',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `./src/sites/`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
		},
		'gatsby-plugin-netlify',
	]
}
