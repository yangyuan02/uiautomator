<template>
	<div>
		<button @click="add">{{ count }}计数器</button>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "Content",
})
export default class Content extends Vue {
	public count = 0;

	public add() {
		this.count++;
	}
}
</script>
