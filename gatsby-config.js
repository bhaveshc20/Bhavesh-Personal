const path = require(`path`)

module.exports = {
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
	]
}
