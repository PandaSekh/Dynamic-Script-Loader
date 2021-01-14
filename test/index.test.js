import loader from "../dist/index";
import "@babel/polyfill";

describe("dynamic script loader", () => {
	expect.assertions(1);

	it("should load script", () => {
		return loader("./logger.js").then(s =>
			expect(s.src).toBe("http://localhost/logger.js")
		);
	});
});
