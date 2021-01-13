const scriptLoader = require("../dist/index");

test("Load script", () => {
	scriptLoader("./sampleScript", () => console.log("Callback"));
});
