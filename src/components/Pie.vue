<template>
	<div class="pie">
		<div class="circle" style="width: 100%;height: 100%;">
			<div class="circle" style="width: 70%;height: 70%;
			--color1: white;--color2: white;">
				<div class="font">
					<p>{{content}}</p>
					<h1>{{percentNum}}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Pie',
	props: {
		content: {
			type: String,
			required: true
		},
		percent: {
			type: Number,
			required:true
		},
		colorType: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			context: this.content,
			color: this.colorType
		}
	},
	computed: {
		percentNum() {
			return this.$props.percent + "%";
		}
	}
}
</script>

<style scoped>
	* {
		--color2: #F0F0F2;
		margin: 0;
		padding: 0;
	}
	.pie {
		margin: 25px;
		position: relative;
		width: 120px;
		height: 120px;
		display: inline-block;
	}
	.circle ,
	.font {
		position: absolute;
		top: 0px;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.circle {
		border-radius: 50%;
		background-color: var(--color);
		background: conic-gradient(
		var(--color1) 0,
		var(--color1) var(--percent),
		var(--color2) var(--percent),
		var(--color2) 99.5%,
		white 99.5%,
		white 100%
		);
	}
	.font {
		top: 12px;
		line-height: 30px;
		text-align: center;
	}
</style>
