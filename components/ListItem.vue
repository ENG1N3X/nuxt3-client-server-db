<script lang="ts" setup>
type AddressType = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export type ItemType = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: AddressType[];
};

defineProps<{
	data: ItemType;
}>();
</script>
<template>
	<div class="relative border border-black/50 p-5">
		<span class="absolute top-1 right-1 w-5 h-5 flex justify-center items-center text-white bg-red-500 rounded-full">{{ data.id }}</span>
		<div class="grid grid-cols-1 gap-2">
			<span class="block">{{ data.name }}</span>
			<span v-if="data?.username" class="block">{{ data.username }}</span>
			<span v-if="data?.email" class="block">{{ data.email }}</span>
		</div>
	</div>
</template>
