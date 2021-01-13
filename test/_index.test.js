const scriptLoader = require("../dist/index");

test("Load script", () => {
	expect(axios).toBeUndefined();
	scriptLoader(
		"https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js",
		() => {
			expect(axios).toBeDefined();
		}
	);
});
