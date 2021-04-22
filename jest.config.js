module.exports = {
	testMatch: [
		"**/test/*.spec.[jt]s?(x)",
	],
	moduleFileExtensions: [
		"ts", "tsx", "mjs", "js", "jsx", "node",
	],
	preset: "ts-jest",
	testEnvironment: "node",
	clearMocks: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
};