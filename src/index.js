/**
 * @param {string} scriptSrc
 * @param {function} callback
 */
export default function (scriptSrc, callback) {
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

	const checkScript = document.getElementById(hashedId);

	if (!checkScript) {
		const script = document.createElement("script");
		script.src = scriptSrc;
		script.id = hashedId;
		document.body.appendChild(script);

		if (callback) {
			script.onload = () => {
				callback();
			};
		}
	}
	if (checkScript && callback) {
		callback();
	}
}
