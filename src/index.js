/**
 * @param {string} scriptSrc
 * @returns {Promise<HTMLScriptElement>}
 */
export default scriptSrc => {
	return new Promise(resolve => {
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

		if (!document.getElementById(hashedId)) {
			const script = document.createElement("script");
			script.src = scriptSrc;
			script.id = hashedId;
			document.body.append(script);

			script.onload = () => {
				resolve(script);
			};
		} 
		resolve(document.getElementById(hashedId));
	});
};
