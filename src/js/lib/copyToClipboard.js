export const copyToClipboard = async element => {
	const textToCopy = element.innerText;

	try {
		await navigator.clipboard.writeText(textToCopy);
		return textToCopy;
	} catch (err) {
		console.error("Unable to copy text to clipboard", err);
	}
};
