const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
	const output = getConfig().output || {};

	actions.setWebpackConfig({
		output,
		resolve: {
			alias: {
				components: path.resolve(__dirname, "src/components"),
				utils: path.resolve(__dirname, "src/utils"),
				hooks: path.resolve(__dirname, "src/hooks"),
				types: path.resolve(__dirname, "src/types"),
			},
		},
	});
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	const fileAbsolutePath = String(node.fileAbsolutePath);

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode });
		const dir = fileAbsolutePath.includes("/projects/") ? "project" : "post";

		createNodeField({ node, name: "slug", value: slug });
		createNodeField({ node, name: "dir", value: dir });
	}
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	// Get All Markdown File For Paging
	const queryAllMarkdownData = await graphql(
		`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								dir
								slug
							}
						}
					}
				}
			}
		`,
	);

	// Import Post Template Component
	const templatePath = dir => `src/templates/${dir}_template.tsx`;

	const TemplateComponent = dir => path.resolve(__dirname, templatePath(dir));

	// Page Generating Function
	const generatePostPage = ({
		node: {
			fields: { dir, slug },
		},
	}) => {
		const pageOptions = {
			path: slug,
			component: TemplateComponent(dir),
			context: { slug },
		};

		createPage(pageOptions);
	};

	// Generate Project Page And Passing Slug Props for Query
	queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
};
