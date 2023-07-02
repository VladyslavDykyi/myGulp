const buildFolder =  './dist';
const sourceFolder =  './source';
export const path = {
	build: {
		files: `${buildFolder}/files/`,
	},
	source: {
		files: `${sourceFolder}/files/**/*.*`,
	},
	watch: {},
	clean: buildFolder,
	buildFolder: buildFolder,
	sourceFolder: sourceFolder,
};