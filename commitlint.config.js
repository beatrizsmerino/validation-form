export default {
	extends: [
		"@commitlint/config-conventional",
	],
	rules: {
		'body-max-line-length': [
			2,
			'always',
			800
		],
		"footer-leading-blank": [
			0,
			"always",
		],
	}
};
