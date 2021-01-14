<template>
	<section>
		<div class="file has-name is-boxed expanded">
			<label class="file-label">
				<input class="file-input" type="file" name="avatar" @change="notify($event)">
				<span class="file-cta">
					<span class="file-label">
						Uploader un avatar
					</span>
				</span>
				<span class="file-name">
					{{name}}
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
			notify: function(e) {
				const file = e.target.files[0];
				this.$emit('notify', file);
			}
		}
	}
</script>