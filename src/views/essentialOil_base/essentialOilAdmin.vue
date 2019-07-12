<template>
	<el-row v-loading="loading">
		<el-col class="toolbar">
			<el-form :inline="true" @submit.native.prevent>
				<el-form-item>
					<el-tooltip class="item" effect="dark" content="输入精油ID或精油名称(精油中文名称、中文别名、英文名称、英文别名、植物名称-拉丁文、植物名称-拉丁别名)进行模糊查询">
						<el-input placeholder="查询条件输入框" @keyup.enter.native="query(pageIndex=1)" v-model="keyword"></el-input>
					</el-tooltip>
				</el-form-item>
				<el-form-item>
					<el-select placeholder="请选择" filterable v-model="fullStatus" clearable>
						<el-option v-for="item in fullStatuslist" v-model="item.id" :key="item.id" :label="item.label" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="query(pageIndex=1)">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="add()">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="24" fixed>
			<!--列表-->
			<el-table style="width: 100%" append-to-body border :data="dataTableSource" :default-sort="{prop: 'date', order: 'descending'}"
			 :header-cell-style="{background:'#eceff5'}">
				<el-table-column type="index" fixed style="width: 5%;" sortable label="序号"></el-table-column>
				<el-table-column prop="oilId" label="精油ID" sortable></el-table-column>
				<el-table-column prop="oilChineseName" label="中文名" sortable></el-table-column>
				<el-table-column prop="oilChineseOtherName" label="中文别名"></el-table-column>
				<el-table-column prop="oilEnglishName" label="英文名" sortable></el-table-column>
				<el-table-column prop="oilEnglishOtherName" label="英文别名"></el-table-column>
				<el-table-column prop="oilBotanicalName" label="拉丁名"></el-table-column>
				<el-table-column prop="oilBotanicalOtherName" label="拉丁别名"></el-table-column>
				<el-table-column prop="fullStatus" label="信息完成度" :formatter="formatRole" sortable></el-table-column>
				<el-table-column prop="constituentShowStyle" label="化学成分显示样式" :formatter="function(row,col,cellvalue){return cellvalue===1?'仅显示最高值':'显示区间值'}"
				 sortable></el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button size="small" @click="getEdit(scope.$index,scope.row)">编辑</el-button>
						<el-button type="danger" size="small" style="margin-left: 0;margin-top: 10px" @click="handleDel(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
				<el-table-column label="其他信息更新" width="480">
					<template slot-scope="scope" class="back">
						<!-- <el-button size="small" type="primary" plain @click="chemicalMaster(scope.row)" style="margin: 10px 0">化学成分</el-button>
							<el-button size="small" type="primary" plain @click="bodyOil(scope.row)" style="margin:10px;">身体系统</el-button>
							<el-button size="small" type="primary" plain @click="SecurityHints(scope.row)" style="margin-left:0;">安全提示</el-button>
							<el-button size="small" type="primary" style="margin-left:0;" @click="therapeuticAttributes(scope.row)" plain>疗愈属性</el-button>
							<el-button size="small" type="primary" style="margin-left:10px;" plain @click="healing_attribute_oil(scope.row)">用途</el-button>
							<el-button size="small" type="primary" style="margin-left:10px;" plain @click="otherKeyOil(scope.row)">关键词</el-button>
							<el-button size="small" type="primary" style="margin-left:10px;" plain @click="$refs.myoil_supplement_component.initData(scope.row.oilId,'关联的补充物',true)">补充物</el-button>
							<el-button size="small" type="primary" style="margin-left:10px;" plain @click="$refs.blend_single_oil.initData(scope.row.oilId,'关联的复方精油',true)">复方精油</el-button>
							<el-button size="small" type="primary" style="margin-left:10px;" plain @click="$refs.my_oil_simple_recipe_component.query(scope.row.oilId)">简易配方</el-button> -->
					</template>
				</el-table-column>
			</el-table>
			<el-pagination background style="float:right;" layout="total,prev, pager, next" @current-change="handleCurrentChange"
			 :current-page="pageIndex" :total="totalNumber">
			</el-pagination>
		</el-col>

		<el-dialog :title="statusName" :visible.sync="getEditVisible" append-to-body :close-on-click-modal="false" width="70%"
		 @close="callOff">
			<el-form :model="editForm" label-width="160px" :rules="editFormRules" ref="editForm">
				<el-form-item label="精油ID" prop="oilId" v-if="statusName=='编辑'">
					<el-input v-model="editForm.oilId" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item label="精油中文名称" prop="oilChineseName">
					<el-input v-model="editForm.oilChineseName"></el-input>
				</el-form-item>
				<el-form-item label="中文别名" prop="oilChineseOtherName">
					<!-- 
					*组件 =》my-manay-tag
					*  -->
					<my-manay-tag name="中文别名" :dynamicTags="editForm.oilChineseOtherName"></my-manay-tag>
				</el-form-item>
				<el-form-item label="英文名称" prop="oilEnglishName">
					<el-input v-model="editForm.oilEnglishName"></el-input>
				</el-form-item>
				<el-form-item label="英文别名" prop="oilEnglishOtherName">
					<my-manay-tag name="英文别名" :dynamicTags="editForm.oilEnglishOtherName"></my-manay-tag>
				</el-form-item>
				<el-form-item label="植物名称-拉丁文" prop="oilBotanicalName">
					<el-input v-model="editForm.oilBotanicalName"></el-input>
				</el-form-item>
				<el-form-item label="植物名称-拉丁别名" prop="oilBotanicalOtherName">
					<my-manay-tag name="拉丁别名" :dynamicTags="editForm.oilBotanicalOtherName"></my-manay-tag>
				</el-form-item>
				<el-form-item label="植物科别" prop="plantFamilyId">
					<el-select placeholder="请选择" filterable v-model="editForm.plantFamilyId" @change="PlantListChange" clearable>
						<el-option v-for="item in plantFamilyList" :key="item.id" :value="item.id" :label="item.chineseName"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="植物属别" prop="plantGenusId">
					<el-select v-model="editForm.plantGenusId" filterable placeholder="请选择" clearable>
						<el-option v-for="items in plantGenusList" :key="items.id" :value="items.id" :label="items.chineseName"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="萃取植物的部位" prop="plantPartId">
					<el-select v-model="editForm.plantPartId" filterable placeholder="请选择" clearable>
						<el-option v-for="items in editForm.singleOilBaseInfPublic.plantPartList" :key="items.id" :value="items.id" :label="items.chineseName">
							{{items.chineseName + '|' + items.englishName}}
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="萃取方式" prop="extractionMethodId">
					<el-select v-model="editForm.extractionMethodId" placeholder="请选择" clearable>
						<el-option v-for="items in editForm.singleOilBaseInfPublic.extractionMethodList" :key="items.id" :value="items.id" :label="items.chineseName">
							{{items.chineseName + '|' + items.englishName }}
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="可否用于香薰" prop="aromatically">
					<el-switch v-model="editForm.aromatically" active-color="#13ce66" active-value="1" inactive-value="0"
					 inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
				<el-form-item label="可否用于局部涂抹" prop="topically">
					<el-switch v-model="editForm.topically" active-color="#13ce66" active-value="1" inactive-value="0" inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
				<el-form-item label="可否用于内服" prop="internally">
					<el-switch v-model="editForm.internally" active-color="#13ce66" active-value="1" inactive-value="0" inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
				<el-form-item label="致敏性" prop="dilutionLevel">
					<el-select v-model="editForm.dilutionLevel" placeholder="请选择" clearable>
						<el-option v-for="items in editForm.singleOilBaseInfPublic.dilutionLevelList" :key="items.subId" :value="items.subId" :label="items.subName">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="光敏性" prop="avoidSunlightLevel">
					<el-select v-model="editForm.avoidSunlightLevel" placeholder="请选择" clearable>
						<el-option v-for="items in editForm.singleOilBaseInfPublic.avoidSunlightLevelList" :key="items.subId" :value="items.subId" :label="items.subName">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="精油的气味描述" prop="aromaticDescription">
					<my-manay-tag name="精油的气味描述" :dynamicTags="editForm.aromaticDescription"></my-manay-tag>
				</el-form-item>
				<el-form-item label="香气音调" prop="aromaticToneId">
					<el-select v-model="editForm.aromaticToneId" placeholder="请选择" clearable>
						<el-option v-for="items in editForm.singleOilBaseInfPublic.aromaticToneList" :key="items.subId" :value="items.subId" :label="items.subName"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="气味强度" prop="aromaticStrengthLevel">
					<el-input-number v-model="editForm.aromaticStrengthLevel" :min="0" :max="5"></el-input-number>
				</el-form-item>
				<el-form-item label="粘稠度" prop="consistencyLevel">
					<el-input-number v-model="editForm.consistencyLevel" :min="0" :max="3"></el-input-number>
				</el-form-item>
				<el-form-item label="精油颜色描述" prop="colorDescription">
					<el-input v-model="editForm.colorDescription"></el-input>
				</el-form-item>
				<el-form-item label="美国FDA认证标志" prop="fda">
					<el-select v-model="editForm.fda" multiple placeholder="请选择" clearable>
						<el-option v-for="item in editForm.singleOilBaseInfPublic.pdaList" :key="item.subId" :value="item.subId" :label="item.subName"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="主要产地" prop="origin">
					<my-manay-tag name="主要产地" :dynamicTags="editForm.origin"></my-manay-tag>
				</el-form-item>
				<el-form-item label="植物形态" prop="plantForm">
					<el-input autosize v-model="editForm.plantForm" type="textarea"></el-input>
				</el-form-item>
				<el-form-item label="历史" prop="history">
					<el-input autosize v-model="editForm.history" type="textarea"></el-input>
				</el-form-item>
				<el-form-item label="特点描述" prop="description">
					<el-input autosize v-model="editForm.description" type="textarea"></el-input>
				</el-form-item>
				<el-form-item label="信息完成度" prop="fullStatus">
					<el-radio-group v-model="editForm.fullStatus" size="medium">
						<el-radio-button :label="0">未完成</el-radio-button>
						<el-radio-button :label="2">信息准完成</el-radio-button>
						<el-radio-button :label="1">信息已完成</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="化学成分显示样式" prop="constituentShowStyle">
					<el-radio-group v-model="editForm.constituentShowStyle" size="medium">
						<el-radio-button :label="2">显示区间值</el-radio-button>
						<el-radio-button :label="1">仅显示最高值</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="创建时间" prop="gmtCreate" v-if="statusName=='编辑'">
					<el-input v-model="editForm.gmtCreate" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item label="修改时间" prop="gmtModified" v-if="statusName=='编辑'">
					<el-input v-model="editForm.gmtModified" :disabled="true"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="callOff">取消</el-button>
				<el-button type="primary" @click="submit()">提交</el-button>
			</div>
		</el-dialog>
	</el-row>
</template>

<script>
	import {
		getList,
		getAddInfo,
		delteList,
		addSumbit,
		getEditInfo
	} from '@/api/essentialOilAdmin'
	import {
		getplantFamilyInFo
	} from '@/api/plantFamily'
	import {
		duration
	} from '@/utils/publicSec'
	import {
		Message,
		MessageBox
	} from 'element-ui'
	import MyManayTag from '@/components/Tag/many_tag'
	export default {
		components: {
			MyManayTag
		},
		data() {
			return {
				keyword: null,
				loading: false,
				dataTableSource: [],
				totalNumber: 0,
				pageIndex: 1,
				fullStatuslist: [{
					id: 0,
					label: '未完成'
				}, {
					id: 1,
					label: '已完成'
				}, {
					id: 2,
					label: '准完成'
				}],
				fullStatus: null,
				//新增编辑框
				statusName: '新增',
				getEditVisible: false,
				editForm: {
					oilId: '',
					oilChineseName: '',
					oilChineseOtherName: [],
					oilEnglishName: '',
					oilEnglishOtherName: [],
					oilBotanicalName: '',
					oilBotanicalOtherName: [],
					plantFamilyId: '',
					plantGenusId: '',
					plantPartId: '',
					extractionMethodId: '',
					dilutionLevel: '',
					avoidSunlightLevel: '',
					aromaticDescription: [],
					aromaticToneId: '',
					aromaticStrengthLevel: '',
					consistencyLevel: '',
					colorDescription: '',
					fda: [],
					aromatically: '',
					topically: '',
					internally: '',
					origin: [],
					plantForm: '',
					history: '',
					description: '',
					plantPictureUrl: '',
					plantPictureZipUrl: '',
					gmtCreate: '',
					gmtModified: '',
					fullStatus:null,
					constituentShowStyle:null,
					singleOilBaseInfPublic:{
						extractionMethodList: [],
						plantPartList: [],
						dilutionLevelList: [],
						avoidSunlightLevelList: [],
						aromaticToneList: [],
						pdaList: []
					}
				},
				editFormRules: {
					oilChineseName: [{
							required: true,
							message: '请输入精油中文名称',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 45,
							message: '长度在 1 到 45 个字符',
							trigger: 'blur'
						}],
					oilBotanicalName: [{
							required: true,
							message: '请输入植物名称拉丁文',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 100,
							message: '长度在 1 到 100 个字符',
							trigger: 'blur'
						}],
					colorDescription: [{
						min: 1,
						max: 45,
						message: '长度在 1 到 45 个字符',
						trigger: 'blur'
					}],
					origin: [{
						type: 'array',
						message: '长度在 1 到 100 个字符',
						trigger: 'change'
					}],
					plantForm: [{
						min: 1,
						max: 1024,
						required: true,
						message: '长度在 1 到 1024 个字符',
						trigger: 'blur'
					}],
					history: [{
						min: 1,
						max: 2048,
						required: true,
						message: '长度在 1 到 2048 个字符',
						trigger: 'blur'
					}],
					description: [{
						min: 1,
						max: 2048,
						required: true,
						message: '长度在 1 到 2048 个字符',
						trigger: 'blur'
					}],
					fullStatus: [{
							required: true,
							message: '请选择信息完整度',
							trigger: 'blur'
						}],
					constituentShowStyle: [{
							required: true,
							message: '请选择化学成分显示样式',
							trigger: 'blur'
						}]
				},
				plantFamilyList: [], //植物科别list
				plantGenusList: [] //植物属别list

			}
		},
		created() {
			this.query()
		},
		methods: {
			formatRole(row, column) {
				return row.fullStatus == '0' ? "未完成" : row.fullStatus == '1' ? "信息完整" : "信息准完整"
			},
			//或者点击的页码进行查询
			handleCurrentChange(val) {
				this.pageIndex = val
				this.query()
			},
			//查询功能，根据页码和关键字进行查询
			query() {
				var _self = this;
				_self.loading = true;
				let params = {
					pageNum: _self.pageIndex,
					keyword: _self.keyword,
					fullStatus: _self.fullStatus
				}
				getList(params)
					.then(data => {
						_self.totalNumber = data.totalNumber;
						_self.dataTableSource = data.dataList;
						_self.loading = false;
						_self.pageIndex = data.pageIndex;
						console.log(duration);
					})
					.catch(error => {
						_self.loading = false;
						console.log(error);
					})
			},
			//删除功能，根据精油id进行删除
			handleDel(index, row) {
				const _this = this;
				MessageBox.confirm('确认删除该记录吗？', '提示', {
					type: 'warning'
				}).then(_ => {
					let params = {
						oilId: row.oilId
					}
					delteList(params)
						.then(_ => {
							_this.dataTableSource.splice(index, 1);
							Message({
								type: 'success',
								message: '删除成功！',
								duration: duration - 2000
							});
						})
						.catch(error => {
							console.log(error);
						})
				}).catch(_ => {
					Message({
						type: 'info',
						message: '已取消删除',
						duration: duration
					});
				});
			},
			add() {
				const _this = this;
				_this.statusName = '新增';
				_this.getEditVisible = true;
				getAddInfo()
					.then(res => {
						_this.editForm.singleOilBaseInfPublic = res.data;
						// _this.editForm.oilChineseOtherName=[];
						// _this.editForm.oilEnglishOtherName=[];
						// _this.editForm.oilBotanicalOtherName=[];
						// _this.editForm.aromaticDescription=[];
						// _this.editForm.fda=[];
						// _this.editForm.origin=[];
						// _this.$refs.editForm.resetFields();
					})
				getplantFamilyInFo({
					parentId: 0
				}).then(res => {
					_this.plantFamilyList = res.data;
				})
			},
			PlantListChange(id) {
				this.editForm.plantGenusId = "";
				const _this = this;
				if (id) {
					getplantFamilyInFo({
						parentId: id
					}).then(res => {
						_this.plantGenusList = res.data;
					}).catch(_ => {
						console.log(_)
					})
				} else {
					_this.plantGenusList = []
				}
			},
			getEdit(index, row) {
				const _this = this;
				_this.statusName = '编辑';
				_this.getEditVisible = true;
				let id = {
					oilId: row.oilId
				}
				getEditInfo(id).then(res => {
					_this.editForm = res.data;
					_this.editForm.oilChineseOtherName = _this.editForm.oilChineseName ? _this.editForm.oilChineseName.split(';') : []
					_this.editForm.oilEnglishOtherName = _this.editForm.oilEnglishOtherName ? _this.editForm.oilEnglishOtherName.split(
						';') : []
					_this.editForm.oilBotanicalOtherName = _this.editForm.oilBotanicalOtherName ? _this.editForm.oilBotanicalOtherName
						.split(';') : []
					_this.editForm.aromaticDescription = _this.editForm.aromaticDescription ? _this.editForm.aromaticDescription.split(
						';') : []
					_this.editForm.fda = _this.editForm.fda ? _this.editForm.fda.split(';') : []
					_this.editForm.origin = _this.editForm.origin ? _this.editForm.origin.split(';') : []
					getplantFamilyInFo({
						parentId: 0
					}).then(res2 => {
						_this.plantFamilyList = res2.data;
						getplantFamilyInFo({
							parentId: _this.editForm.plantFamilyId
						}).then(res3 => {
							_this.plantGenusList = res3.data;

						})
					})
					console.log(res.data)
				})

			},
			formaEditForm() {
				const data = {
					oilId: this.editForm.oilId,
					oilChineseName: this.editForm.oilChineseName,
					oilChineseOtherName: this.editForm.oilChineseOtherName.join(";"),
					oilEnglishName: this.editForm.oilEnglishName,
					oilEnglishOtherName: this.editForm.oilEnglishOtherName.join(";"),
					oilBotanicalName: this.editForm.oilBotanicalName,
					oilBotanicalOtherName: this.editForm.oilBotanicalOtherName.join(";"),
					plantFamilyId: this.editForm.plantFamilyId,
					plantGenusId: this.editForm.plantGenusId,
					plantPartId: this.editForm.plantPartId,
					extractionMethodId: this.editForm.extractionMethodId,
					dilutionLevel: this.editForm.dilutionLevel,
					avoidSunlightLevel: this.editForm.avoidSunlightLevel,
					aromaticDescription: this.editForm.aromaticDescription.join(";"),
					aromaticToneId: this.editForm.aromaticToneId,
					aromaticStrengthLevel: this.editForm.aromaticStrengthLevel,
					consistencyLevel: this.editForm.consistencyLevel,
					colorDescription: this.editForm.colorDescription,
					fda: this.editForm.fda.join(";"),
					origin: this.editForm.origin.join(";"),
					plantForm: this.editForm.plantForm,
					history: this.editForm.history,
					description: this.editForm.description,
					plantPictureUrl: this.editForm.plantPictureUrl,
					plantPictureZipUrl: this.editForm.plantPictureZipUrl,
					aromatically: this.editForm.aromatically,
					topically: this.editForm.topically,
					internally: this.editForm.internally,
					fullStatus: this.editForm.fullStatus,
					constituentShowStyle: this.editForm.constituentShowStyle
				}
				return data;
			},
			callOff() {
				this.getEditVisible = false;
				this.$refs.editForm.resetFields();
				console.log(this.editForm)
			},
			submit() {
				const _this = this;
				this.$confirm('确认提交该记录吗？', '提示', {
					type: 'warning'
				}).then(_ => {
					_this.$refs.editForm.validate(valid => {
						if (valid) {
							if (_this.statusName === '新增') {
								addSumbit(_this.formaEditForm())
									.then(res => {
										if (res.code === "200") {
											_this.callOff();
											Message({
												type: 'success',
												message: '新增成功',
												duration: duration
											});
										}

									})
							} else if (_this.statusName === '编辑') {
								editSumbit(_this.formaEditForm())
									.then(res => {
										if(res.code==="200"){
											_this.callOff();
											Message({
												type: 'success',
												message: '编辑成功',
												duration: duration
											});
										}
									})
							}
						}
					})
				}).catch(_ => {
					console.log(_)
				})
			}
		}
	}
</script>

<style>
	.itempic {
		overflow: hidden;
		background-color: #fff;
		border: 1px solid #c0ccda;
		border-radius: 6px;
		box-sizing: border-box;
		width: 170px;
		height: 200px;
		margin: 0 8px 8px 0;
		display: inline-block;
	}

	.imgpic {
		position: absolute;
		width: 170px;
		height: 200px;
		left: 0;
		top: 0;
		cursor: default;
		text-align: center;
		color: #fff;
		opacity: 0;
		font-size: 20px;
		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity .3s;
	}

	.iconclass {
		line-height: 178px !important;
		font-size: 28px;
		color: #8c939d;
		text-align: center;
	}

	.imgpic:hover {
		opacity: 1;
		cursor: pointer;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>
