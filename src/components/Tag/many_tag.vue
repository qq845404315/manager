<template>
	<span>
		<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
		<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
		 @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
		<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 请输入{{name}}</el-button>
	</span>
</template>

<script>
	export default {
		name:'my-manay-tag',
		props: {
			dynamicTags: Array,
			name: String,
		},
		data() {
			return {
				inputVisible: false,
				inputValue: '',
			}
		},
		methods: {
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				let inputValue = this.inputValue;
				var _self = this;
				if (inputValue) {
					_self.dynamicTags.push(inputValue);
				}
				_self.inputVisible = false;
				_self.inputValue = '';
				_self.$emit('childvalue', _self.dynamicTags);
			}
		}
	}
</script>

<style>
</style>
