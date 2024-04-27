export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);

	const query = getQuery(event);

	const LIMIT = query?.limit ? query.limit : 20;

	try {
		const response = await $fetch(`${config.jsonPlaceholderUrl}users?_limit=${LIMIT}`);

		return response;
	} catch (error) {
		console.error(error);

		return error;
	}
});
