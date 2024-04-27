<script lang="ts" setup>
import ListItem, { type ItemType } from "~/components/ListItem.vue";

const itemsData = ref<ItemType[]>([]);

const {
	data: listData,
	error: listError,
	pending: listPending,
} = await useFetch<ItemType[]>("/api/list/", {
	params: {
		limit: 2,
	},
});

if (listData.value) {
	itemsData.value.push(...listData.value);
}

const input = ref<string>("");

const onSubmit = async (): Promise<void> => {
	const { data: responseData, error: errorData } = await useFetch("/api/list/", {
		method: "post",
		body: JSON.stringify({
			name: input.value,
		}),
	});

	if (errorData.value) {
		console.error("Error", errorData.value);

		return;
	}

	itemsData.value.push(responseData.value);

	input.value = "";
};
</script>
<template>
	<section class="py-8">
		<div class="py-5">
			<form @submit.prevent="onSubmit" class="w-48">
				<input type="text" v-model="input" placeholder="Name" class="border-b border-black px-3 py-1.5 mb-4" />

				<button type="submit" class="px-3 py-1.5 border border-black rounded-md">Add New</button>
			</form>
		</div>

		<div v-if="listError">
			{{ listError }}
		</div>

		<div v-if="itemsData?.length" class="grid grid-cols-4 gap-4">
			<ListItem v-for="item in itemsData" :key="item.id" :data="item"></ListItem>
		</div>

		<div v-if="listPending">pending - {{ listPending }}</div>
	</section>
</template>
