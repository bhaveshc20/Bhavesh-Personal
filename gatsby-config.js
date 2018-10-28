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
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/
				}
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
		},
		'gatsby-plugin-netlify',
	]
}
