export type ProjectFrontmatterType = {
	title: string;
	summary: string;
	start: string;
	end: string;
	type: string;
	skills: string[];
	thumbnail: string;
	emoji: string;
	links: { name: string; href: string }[];
};

export type ProjectListItemType = {
	node: {
		id: string;
		fields: {
			slug: string;
		};
		frontmatter: ProjectFrontmatterType;
	};
};

export type ProjectPageItemType = {
	node: {
		html: string;
		frontmatter: ProjectFrontmatterType;
	};
};

export type ProjectThumbnailFileType = {
	node: {
		name: string;
		publicURL: string;
	};
};
