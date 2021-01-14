import loader from "../dist/index";
import "@babel/polyfill";

describe("dynamic script loader", () => {
	expect.assertions(1);

	it("should load script", async () => {
		const script = await loader(
			"https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
		);
		expect(script.src).toBe(
			"https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
		);
	});
});
