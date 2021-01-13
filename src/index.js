export default (scriptSrc, callback) => {
	console.log("called");
	console.log("Callback: ", callback);

	const hash = scriptSrc => {
		let hash = 0,
			i,
			chr;
		for (i = 0; i < scriptSrc.length; i++) {
			chr = scriptSrc.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0;
		}
		return hash;
	};

	const hashedId = hash(scriptSrc);

	console.log("Hashed id: ", hashedId);

	const checkScript = document.getElementById(hashedId);

	if (!checkScript) {
		const script = document.createElement("script");
		script.src = scriptSrc;
		script.id = hashedId;
		document.body.appendChild(script);

		if (callback) {
			console.log("Going to callback");
			script.onload = () => {
				callback();
				console.log("callback");
			};
		}
	}
	if (checkScript && callback) {
		callback();
	}
};
