<template>
	<section>
		<div class="file is-boxed expanded">
			<label class="file-label">
				<input class="file-input" type="file" name="avatar" @change="notify($event)">
				<span class="file-cta">
					<span class="file-label">
						Changer un avatar
					</span>
				</span>
			</label>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Upload',
		props: ['api_url'],
		data() {
			return {
				name: ''
			}
		},
		methods: {
			/**
			 * send back to parent an event with files param
			 */
			notify: function(e) {
				const file = e.target.files[0];
				this.$emit('notify', file);
			}
		}
	}
</script>

<style scoped>
	.file.is-boxed .file-label {
		width: 100%;
		text-align: center;
	}
</style>