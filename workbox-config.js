module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{svg,css,js,ttf,html}'
	],
	swDest: 'docs/sw.js',
	swSrc:'src/service-worker.js',
	maximumFileSizeToCacheInBytes: 3000000
};