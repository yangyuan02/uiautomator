<template>
	<div class="hello">{{ title }} - 你是谁?</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "Index",
})
export default class Index extends Vue {
	title = "hello vue";
}
</script>

<style lang="scss" scoped>
.hello {
	background: rgba($color: #000000, $alpha: 0.8);
	color: #fff;
}
</style>
