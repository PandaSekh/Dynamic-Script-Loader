import loader from "../dist/index";
import "@babel/polyfill";

describe("dynamic script loader", () => {
	it("should load script", async () => {
		expect.assertions(1);
		loader("./logger.js").then(script =>
			expect(script.src).toBe("http://localhost/logger.js")
		);
	}, 9999);

	it("should return script even if already present", () => {
		expect.assertions(1);
		return loader("./logger.js").then(s =>
			expect(s.src).toBe("http://localhost/logger.js")
		);
	});
});
