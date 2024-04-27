export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);

	const body = await readBody(event);

	try {
		const response = await $fetch(`${config.jsonPlaceholderUrl}users`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});

		return response;
	} catch (error) {
		console.error(error);

		return error;
	}
});
