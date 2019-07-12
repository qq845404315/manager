const api = {
	//测试开发环境上传音频文件
	uploadVoiceFileupload: '/upload/uploadVoiceFile',

	uploadUrl: '/upload/uploadPicFileByEditSingleOilBaseInf',
	//上传视频文件
	uploadVideoFileupload: '/upload/uploadVideoFile',
	//单方（复方）精油关联身体系统
	queryAllOilBodySystemByOilId: '/oilBodySystem/queryAllOilBodySystemByOilId',
	queryAllBodySystemByAddOilBodySystem: '/bodySystem/queryAllBodySystemByAddOilBodySystem',
	addOilBodySystem: '/oilBodySystem/addOilBodySystem',
	cancelOilBodySystem: '/oilBodySystem/cancelOilBodySystem',
	editOilBodySystem: '/oilBodySystem/editOilBodySystem',
	//单方（复方）精油关联安全提示
	queryAllOilSafetyWarningByOilId: '/oilSafetyWarning/queryAllOilSafetyWarningByOilId',
	queryAllSafetyWarningByAddOilSafetyWarning: '/safetyWarning/queryAllSafetyWarningByAddOilSafetyWarning',
	addOilSafetyWarning: '/oilSafetyWarning/addOilSafetyWarning',
	cancelOilSafetyWarningByOilIdAndSafetyWarningId: '/oilSafetyWarning/cancelOilSafetyWarningByOilIdAndSafetyWarningId',
	editOilSafetyWarning: '/oilSafetyWarning/editOilSafetyWarning',
	//单方（复方）精油关联疗愈属性
	queryAllOilHealingAttributeByOilId: '/oilHealingAttribute/queryAllOilHealingAttributeByOilId',
	queryAllHealingAttributeByAddOilHealingAttribute: '/healingAttribute/queryAllHealingAttributeByAddOilHealingAttribute',
	addOilHealingAttribute: '/oilHealingAttribute/addOilHealingAttribute',
	editOilHealingAttribute: '/oilHealingAttribute/editOilHealingAttribute',
	cancelOilHealingAttributeByOilIdAndHealingAttributeId: '/oilHealingAttribute/cancelOilHealingAttributeByOilIdAndHealingAttributeId',
	//化学成分Master
	queryAllConstituentByclassifyUrl: '/constituent/queryAllConstituentByclassify',
	queryAllConstituentUrl: '/constituent/queryAllConstituent',
	queryAllConstituentClassUrl: '/constituent/queryAllConstituentClass',
	queryOneConstituentEditByIdUrl: '/constituent/queryOneConstituentEditById',
	cancelConstituentByIdUrl: '/constituent/cancelConstituentById',
	editConstituentByIdUrl: '/constituent/editConstituentById',
	addConstituentByIdUrl: '/constituent/addConstituent',
	//单方精油
	queryAllSingleOilBaseInfPage: '/singleOilBaseInf/queryAllSingleOilBaseInfPage',
	cancelSingleOilBaseInfById: '/singleOilBaseInf/cancelSingleOilBaseInfById',
	querySingleOilBaseInfEditById: '/singleOilBaseInf/querySingleOilBaseInfEditById',
	queryAllPlantFamilyByEditSingleOilBaseInf: '/plantFamily/queryAllPlantFamilyByEditSingleOilBaseInf',
	editSingleOilBaseInfById: '/singleOilBaseInf/editSingleOilBaseInfById',
	addSingleOilBaseInf: '/singleOilBaseInf/addSingleOilBaseInf',
	querySingleOilBasePublicByAddSingleOilBaseInf: '/singleOilBaseInf/querySingleOilBasePublicByAddSingleOilBaseInf',
	uploadPicFileByEditSingleOilBaseInf: '/upload/uploadPicFileByEditSingleOilBaseInf',
	//单方精油关联化学成分
	queryAllOilConstituent: '/oilConstituent/queryAllOilConstituent',
	cancelOilConstituentByOilIdAndConstituentId: '/oilConstituent/cancelOilConstituentByOilIdAndConstituentId',
	queryOilConstituentEditByOilIdAndConstituentId: '/oilConstituent/queryOilConstituentEditByOilIdAndConstituentId',
	editOilConstituentByOilIdAndConstituentId: '/oilConstituent/editOilConstituentByOilIdAndConstituentId',
	addOilConstituent: '/oilConstituent/addOilConstituent',
	//用途Master
	searchAllScreeningInf: '/healthCondition/searchAllScreeningInf',
	queryTypeOrganByParentId: '/healthCondition/queryTypeOrganByParentId',
	queryAllHealthCondition: '/healthCondition/queryAllHealthCondition',
	queryHealthConditionById: '/healthCondition/queryHealthConditionById',
	addHealthCondition: '/healthCondition/addHealthCondition',
	editHealthConditionById: '/healthCondition/editHealthConditionById',
	cancelHealthConditionById: '/healthCondition/cancelHealthConditionById',
	//用途关联精油列表-根据用途id，得到关联的所有精油信息
	relevanceOiloilHealthCondition: '/oilHealthCondition/relevanceOil',

	//单方（复方）精油关联用途
	queryAllOilHealthCondition: '/oilHealthCondition/queryAllOilHealthCondition',
	addOilHealthCondition: '/oilHealthCondition/addOilHealthCondition',
	editOilHealthCondition: '/oilHealthCondition/editOilHealthCondition',
	cancelOilHealthConditionByOilIdAndConditionId: '/oilHealthCondition/cancelOilHealthConditionByOilIdAndConditionId',
	//实验研究论文
	queryAllViewKeywordMasterClass: '/viewKeywordMaster/queryAllViewKeywordMasterClass',
	addEmpiricalResearchInf: '/empiricalResearchInf/addEmpiricalResearchInf',
	editEmpiricalResearchInfById: '/empiricalResearchInf/editEmpiricalResearchInfById',
	queryEmpiricalResearchInfById: '/empiricalResearchInf/queryEmpiricalResearchInfById',
	cancelEmpiricalResearchInfById: '/empiricalResearchInf/cancelEmpiricalResearchInfById',
	queryAllEmpiricalResearchInfPage: '/empiricalResearchInf/queryAllEmpiricalResearchInfPage',
	queryAllViewKeywordMasterByKeywordType: '/viewKeywordMaster/queryAllViewKeywordMasterByKeywordType',
	//疗愈属性一览
	queryAllHealingAttribute: '/healingAttribute/queryAllHealingAttribute',
	addHealingAttribute: '/healingAttribute/addHealingAttribute',
	queryHealingAttributeById: '/healingAttribute/queryHealingAttributeById',
	editHealingAttributeById: '/healingAttribute/editHealingAttributeById',
	deleteHealingAttributeById: '/healingAttribute/deleteHealingAttributeById',
	//复方精油
	queryAllBlendOilBaseInfPage: '/blendOilBaseInf/queryAllBlendOilBaseInfPage',
	queryBlendOilBaseInfEditById: '/blendOilBaseInf/queryBlendOilBaseInfEditById',
	editBlendOilBaseInf: '/blendOilBaseInf/editBlendOilBaseInf',
	queryBlendOilBaseInfPublicByAddBlendOilBaseInf: '/blendOilBaseInf/queryBlendOilBaseInfPublicByAddBlendOilBaseInf',
	addBlendOilBaseInf: '/blendOilBaseInf/addBlendOilBaseInf',
	deleteBlendOilBaseInfById: '/blendOilBaseInf/deleteBlendOilBaseInfById',
	//管理员登录
	loginmanager: '/manager/login',
	logoutmanager: '/manager/logout',
	//复方精油关联单方精油
	queryAllBlendSingleOilByBlendOilId: '/blendSingleOil/queryAllBlendSingleOilByBlendOilId',
	addBlendSingleOil: '/blendSingleOil/addBlendSingleOil',
	editBlendSingleOil: '/blendSingleOil/editBlendSingleOil',
	deleteBlendSingleOil: '/blendSingleOil/deleteBlendSingleOil',
	//其他关键词
	queryAllPage: '/otherKeyword/queryAllPage',
	add: '/otherKeyword/add',
	queryOneById: '/otherKeyword/queryOneById',
	editById: '/otherKeyword/editById',
	delById: '/otherKeyword/delById',
	//关键字搜索新增编辑页面中文名和英文名搜索
	addKeywordSearchotherKeyword: '/otherKeyword/addKeywordSearch',
	//微信公众号文章
	queryAllRelevanceClass: '/articlesList/queryAllRelevanceClass',
	queryallpage: '/articlesList/queryAllPage',
	addwxarticle: '/articlesList/add',
	editwxarticle: '/articlesList/edit',
	queryOneByIdwxarticle: '/articlesList/queryOneById',
	delByIdwxarticle: '/articlesList/delById',

	//精油关联疗愈属性和用途新增星级
	queryAllByIdpublic: '/publicMaster/queryAllById',

	//家庭关系Master
	queryrelationship: '/relationship/queryAll',
	addrelationship: '/relationship/add',
	delByIdrelationship: '/relationship/delById',
	//关系图片
	queryAllByRelationshipId: '/relationshipCartoon/queryAllByRelationshipId',
	addrelationshipCartoon: '/relationshipCartoon/add',
	ceilingNumber: '/relationshipCartoon/ceilingNumber',
	delByIdrelationshipCartoon: '/relationshipCartoon/delById',
	defaultFlgrelationshipCartoon: '/relationshipCartoon/defaultFlg',
	//编辑-保存修改后的卡通图，
	editrelationshipCartoon: '/relationshipCartoon/edit',

	//系统设置常量信息
	queryAllsystemSeting: '/systemSeting/queryAll',
	addsystemSeting: '/systemSeting/add',
	editsystemSeting: '/systemSeting/edit',
	delsystemSeting: '/systemSeting/del',
	//管理员列表管理
	queryAllPagemanager: '/manager/queryAllPage',
	addmanager: '/manager/add',
	editmanager: '/manager/edit',
	queryOneByIdmanager: '/manager/queryOneById',
	delmanager: '/manager/del',
	restPswmanager: '/manager/restPsw',

	//角色管理
	queryAllrole: '/role/queryAll',
	queryOneByIdrole: '/role/queryOneById',
	addrole: '/role/add',
	editrole: '/role/edit',
	delrole: '/role/del',
	//角色关联权限
	queryAllAclByIdrole: '/role/queryAllAclById',
	addRoleAclrole: '/role/addRoleAcl',
	//角色关联管理员
	queryAllManagerByIdrole: '/role/queryAllManagerById',
	addRoleManagerrole: '/role/addRoleManager',

	//权限菜单管理
	queryAllMenu2Treeacl: '/acl/queryAllMenu2Tree',
	queryOneByIdacl: '/acl/queryOneById',
	editacl: '/acl/edit',
	addacl: '/acl/add',
	delacl: '/acl/del',

	//权限按钮管理
	queryAllByMenuIdacl: '/acl/queryAllByMenuId',

	//home页面菜单项获取
	menumanager: '/manager/menu',
	//home当前管理员信息
	detailmanager: '/manager/detail',
	//得到图片尺寸类型-根据类目ID中的详细项目ID
	queryPictureSizeTypeBySubIdpublicMaster: '/publicMaster/queryPictureSizeTypeBySubId',

	//图标上传接口
	//得到列表
	queryAllpictureManager: '/pictureManager/queryAll',

	//根据共通master类目ID(英文字符串)，得到所有图片类型数据
	queryAllByIdpublicMaster: '/publicMaster/queryAllById',

	//图标上传
	uploadpictureManager: '/pictureManager/upload',
	//新增-保存新增的图标
	addpictureManager: '/pictureManager/add',
	//编辑-保存修改后的图标信息
	editpictureManager: '/pictureManager/edit',
	//删除-根据图表信息id，删除指定信息
	delpictureManager: '/pictureManager/del',

	//植物有列表 列表分页显示
	queryAllPagevegetableOilBaseInf: '/vegetableOilBaseInf/queryAllPage',

	//植物油编辑-查看
	queryOneByIdvegetableOilBaseInf: '/vegetableOilBaseInf/queryOneById',
	//新增植物油-获取萃取方式,萃取植物部位,干性类型列表
	queryPublicvegetableOilBaseInf: '/vegetableOilBaseInf/queryPublic',

	//新增植物油-保存新添加的植物油信息
	addvegetableOilBaseInf: '/vegetableOilBaseInf/add',
	//编辑植物油-保存编辑后的植物油信息，根据植物油id
	editByIdvegetableOilBaseInf: '/vegetableOilBaseInf/editById',
	//删除植物油-根据植物油id，删除植物油信息
	cancelByIdvegetableOilBaseInf: '/vegetableOilBaseInf/cancelById',

	//根据精油id获取精油关联关键词列表
	queryAllByOilIdoilKeyword: '/oilKeyword/queryAllByOilId',
	//根据精油(单方精油，复方精油，植物油)id，设置关键词信息
	editByOilIdoilKeyword: '/oilKeyword/editByOilId',

	//列表-得到所有内部富文本信息，可关键字搜索，分页显示
	queryAllinsideRichText: '/insideRichText/queryAll',
	//编辑-根据内部富文本id，得到详情信息
	queryOneByIdinsideRichText: '/insideRichText/queryOneById',
	//编辑-保存编辑后的信息
	editinsideRichText: '/insideRichText/edit',
	//新增-保存新增的信息
	addinsideRichText: '/insideRichText/add',
	//删除-根据内部富文本id，删除对应信息
	delByIdinsideRichText: '/insideRichText/delById',

	//列表-得到所有用法，不分页，关键字搜索
	queryAllusage: '/usage/queryAll',
	//列表(新增)-得到用法分类和标准剂量单位所有信息(初始化)
	usagePublicusage: '/usage/usagePublic',
	//编辑-根据用法id，得到详情信息
	queryByIdusage: '/usage/queryById',
	//新增-保存新增的用法信息
	addusage: '/usage/add',
	//编辑-根据用法id，保存编辑后的用法信息
	editusage: '/usage/edit',
	//删除-根据用法id，删除指定信息
	delByIdusage: '/usage/delById',

	//列表-得到所有手法，可根据手法id或关键字查找(二传一)，不分页
	queryAlltechnique: '/technique/queryAll',
	//编辑-根据手法id，得到详情信息
	queryByIdtechnique: '/technique/queryById',
	//新增-保存新增的手法信息
	addtechnique: '/technique/add',
	//编辑-保存编辑后的手法信息,根据手法id
	edittechnique: '/technique/edit',
	//删除-根据手法id，删除指定手法信息
	delByIdtechnique: '/technique/delById',
	//列表-得到已关联适用对象的用途信息，分页显示，可关键字搜索
	relevanceRecipeApplicableObjecthealthCondition: '/healthCondition/relevanceRecipeApplicableObject',
	//列表-根据用途id，得到已添加的适用对象
	queryAllByConditionIdrecipeApplicableObject: '/recipeApplicableObject/queryAllByConditionId',
	//公共-适用对象关联的公共mster(年龄层对象类型集合，其他对象类型集合)
	publicApplicableObjectrecipeApplicableObject: '/recipeApplicableObject/publicApplicableObject',
	//删除-根据适用对象id，删除数据
	delByIdrecipeApplicableObject: '/recipeApplicableObject/delById',
	//新增-保存新增的适用对象
	addrecipeApplicableObject: '/recipeApplicableObject/add',
	//编辑-保存修改后的适用对象
	editrecipeApplicableObject: '/recipeApplicableObject/edit',

	//列表-根据适用对象id，得到调理阶段信息
	queryAllByObjectIdrecipeConditioningStage: '/recipeConditioningStage/queryAllByObjectId',
	//排序-根据调理阶段id，下降
	downrecipeConditioningStage: '/recipeConditioningStage/down',
	//排序-根据调理阶段id，上升
	uprecipeConditioningStage: '/recipeConditioningStage/up',
	//删除-根据调理阶段id，删除指定信息
	delByIdrecipeConditioningStage: '/recipeConditioningStage/delById',
	//新增-保存新增的调理阶段信息
	addrecipeConditioningStage: '/recipeConditioningStage/add',
	//编辑-保存修改后的调理阶段信息
	editrecipeConditioningStage: '/recipeConditioningStage/edit',

	//列表-根据调养阶段id，得到所有配方组信息
	queryAllByStageIdrecipeGroup: '/recipeGroup/queryAllByStageId',
	//排序-根据配方组id，下降
	downrecipeGroup: '/recipeGroup/down',
	//排序-根据配方组id，上升
	uprecipeGroup: '/recipeGroup/up',
	//删除-根据配方组id，删除指定信息
	delByIdrecipeGroup: '/recipeGroup/delById',
	//新增-保存新增的配方组信息
	addrecipeGroup: '/recipeGroup/add',
	//编辑-保存修改后的配方组信息
	editrecipeGroup: '/recipeGroup/edit',
	//v根据配方组id，解除关联配方
	relieveRecipeInfByIdrecipeGroup: '/recipeGroup/relieveRecipeInfById',

	//列表-得到所有单一配方信息，不分页，关键字搜索	(单一配方Master)
	queryAllrecipeInf: '/recipeInf/queryAll',
	//编辑-根据单一配方id，得到详情信息
	queryByIdrecipeInf: '/recipeInf/queryById',
	//编辑-保存修改后的单一配方信息
	editrecipeInf: '/recipeInf/edit',
	//新增-得到每次使用剂量集合，使用频次集合，稀释比例集合
	recipeInfPublicrecipeInf: '/recipeInf/recipeInfPublic',
	//新增-保存新增的单一配方信息
	addrecipeInf: '/recipeInf/add',
	//删除-根据单一配方id，删除指定信息
	delByIdrecipeInf: '/recipeInf/delById',

	//列表-根据单一配方信息id，得到关联的所有剂量明细
	queryAllByRecipeIdrecipeDoseDetail: '/recipeDoseDetail/queryAllByRecipeId',
	//排序-根据单一配方id和混合物id，下降
	downrecipeDoseDetail: '/recipeDoseDetail/down',
	//排序-根据单一配方id和混合物id，上升
	uprecipeDoseDetail: '/recipeDoseDetail/up',
	//删除-根据配方id和混合物id，删除指定信息
	delrecipeDoseDetail: '/recipeDoseDetail/del',
	//根据配方组id和单一配方信息id，关联配方
	relevanceRecipeInfByIdrecipeGroup: '/recipeGroup/relevanceRecipeInfById',
	//编辑-保存修改后的剂量明细信息
	editrecipeDoseDetail: '/recipeDoseDetail/edit',
	//新增-保存新增的剂量明细信息
	addrecipeDoseDetail: '/recipeDoseDetail/add',

	//营养素等其他材料列表-得到所有营养素等其他材料,可关键字搜索，列表分页显示
	queryAllsupplementBaseInf: '/supplementBaseInf/queryAll',
	//编辑-根据补充物id，得到详细信息
	queryByIdsupplementBaseInf: '/supplementBaseInf/queryById',
	//新增-保存新增的信息
	addsupplementBaseInf: '/supplementBaseInf/add',
	//编辑-保存修改后的信息
	editsupplementBaseInf: '/supplementBaseInf/edit',
	//删除-根据补充物id，删除指定信息
	delByIdsupplementBaseInf: '/supplementBaseInf/delById',
	//根据单一配方信息id，得到关联的配方组信息
	queryRecipeGroupByIdrecipeInf: '/recipeInf/queryRecipeGroupById',

	//列表-得到所有海报信息，不分页
	queryAllposterManage: '/posterManage/queryAll',
	//编辑-根据海报id，得到详情信息
	queryByIdposterManage: '/posterManage/queryById',
	//新增-保存新增的信息海报
	addposterManage: '/posterManage/add',
	//编辑-保存修改后的信息海报
	editposterManage: '/posterManage/edit',
	//删除-根据海报id，删除指定信息
	delByIdposterManage: '/posterManage/delById',

	//列表-得到所有热词，不分页，可关键字搜索
	queryAllrecommendKeywordRecord: '/recommendKeywordRecord/queryAll',
	//新增-保存新增的热词
	addrecommendKeywordRecord: '/recommendKeywordRecord/add',
	//编辑-保存修改后的热词
	editrecommendKeywordRecord: '/recommendKeywordRecord/edit',
	//删除-根据热词id，删除数据
	delByIdrecommendKeywordRecord: '/recommendKeywordRecord/delById',
	//配方树-得到配方信息
	recipeTreehealthCondition: '/healthCondition/recipeTree',

	//列表-得到所有用户信息，分页，可筛选
	queryAllcustomerInf: '/customerInf/queryAll',
	//列表-得到所有职业
	queryAllprofession: '/profession/queryAll',
	//详情-根据用户id，得到详情信息
	detailcustomerInf: '/customerInf/detail',
	//详情-根据用户id，得到搜索的所有关键词，分页显示
	searchKeywordetailcustomerInf: '/customerInf/detail/searchKeyword',
	//详情-根据用户id和关键词得到关键词详情信息
	searchKeywordDetaildetailcustomerInf: '/customerInf/detail/searchKeywordDetail',

	//列表-得到所有精油安全用量信息,可条件筛选
	queryAlloilSafetyUsingAmount: '/oilSafetyUsingAmount/queryAll',
	//通用-得到筛选条件
	publicMasteroilSafetyUsingAmount: '/oilSafetyUsingAmount/publicMaster',
	//编辑-保存修改后的精油安全用量信息
	editoilSafetyUsingAmount: '/oilSafetyUsingAmount/edit',
	//删除-删除指定的精油安全用量信息
	deloilSafetyUsingAmount: '/oilSafetyUsingAmount/del',
	//新增-保存新增的精油安全用量信息
	addoilSafetyUsingAmount: '/oilSafetyUsingAmount/add',

	//列表-关键词信息，分页，可根据分类查询
	allquerysearchKeywordRecord: '/searchKeywordRecord/0/query',
	dayquerysearchKeywordRecord: '/searchKeywordRecord/1/query',
	weekquerysearchKeywordRecord: '/searchKeywordRecord/2/query',
	monthquerysearchKeywordRecord: '/searchKeywordRecord/3/query',

	//列表-得到所有id
	allIdpublicMaster: '/publicMaster/allId',
	//列表-得到所有共通信息
	queryAllpublicMaster: '/publicMaster/queryAll',
	//新增-保存添加的共通信息
	addpublicMaster: '/publicMaster/add',
	//删除-删除指定的共通信息，根据id
	delpublicMaster: '/publicMaster/del',
	//v编辑-保存修改后的共通信息
	editpublicMaster: '/publicMaster/edit',
	//排序-根据id和subId，上升
	uppublicMaster: '/publicMaster/up',
	//排序-根据id和subId，下降
	downpublicMaster: '/publicMaster/down',

	//列表-得到所有主键最大值记录信息
	queryAlltableIdAuto: '/tableIdAuto/queryAll',
	//新增-保存新添加的主键最大值记录
	addtableIdAuto: '/tableIdAuto/add',
	//编辑-保存修改后的主键最大值记录
	edittableIdAuto: '/tableIdAuto/edit',
	//删除-删除指定信息，根据表名(id)和首字母(initial)
	deltableIdAuto: '/tableIdAuto/del',

	//通用-得到所有适用对象
	objectApplicationrecommendOil: '/recommendOil/objectApplication',
	//列表-得到所有推介精油信息
	queryAllrecommendOil: '/recommendOil/queryAll',
	//新增-保存新增的推介精油
	addrecommendOil: '/recommendOil/add',
	//删除-删除指定推介精油信息，根据特殊人群id和精油id
	delrecommendOil: '/recommendOil/del',

	//列表-得到所有定时任务信息
	queryAllsystemScheduler: '/systemScheduler/queryAll',
	//新增-保存新增的定时任务
	addsystemScheduler: '/systemScheduler/add',
	//编辑-保存修改后的定时任务信息
	editsystemScheduler: '/systemScheduler/edit',
	//删除-根据任务id，删除指定定时任务信息del
	delsystemScheduler: '/systemScheduler/del',
	//执行-根据定时任务id，立即执行指定定时任务(执行一次)
	immediatelyStartsystemScheduler: '/systemScheduler/immediatelyStart',

	//列表-根据化学成分id，得到关联的所有疗愈属性
	queryAllchemHealingAttribute: '/chemHealingAttribute/queryAll',
	//新增-保存新关联的疗愈属性
	addchemHealingAttribute: '/chemHealingAttribute/add',
	//编辑-保存修改后关联的疗愈属性edit
	editchemHealingAttribute: '/chemHealingAttribute/edit',
	//删除-根据化学成分id和疗愈属性id，删除指定关联信息
	delchemHealingAttribute: '/chemHealingAttribute/del',

	//列表-根据化学成分id，得到关联的所有安全提示
	queryAllchemSafetyWarning: '/chemSafetyWarning/queryAll',
	//新增-保存新关联的安全提示
	addchemSafetyWarning: '/chemSafetyWarning/add',
	//编辑-保存修改后关联的安全提示
	editchemSafetyWarning: '/chemSafetyWarning/edit',
	//删除-根据化学成分id和安全提示id，删除指定关联信息
	delchemSafetyWarning: '/chemSafetyWarning/del',

	//列表-得到所有付费服务信息
	queryAllpaidService: '/paidService/queryAll',
	//新增-保存新增的付费服务信息
	addpaidService: '/paidService/add',
	//编辑-保存修改后的付费服务信息
	editpaidService: '/paidService/edit',
	//删除-根据付费服务id，删除指定信息
	delpaidService: '/paidService/del',

	//化学成分关联精油的列表-根据化学成分id，得到关联的所有精油信息，不分页
	queryAllByConstituentIdoilConstituent: '/oilConstituent/queryAllByConstituentId',

	//列表-根据用户id，得到所有付费服务订单
	queryAllByCustomerIdcustomerPaidServiceOrder: '/customerPaidServiceOrder/queryAllByCustomerId',
	//列表-查询所有付费服务订单，分页，可条件筛选
	queryAllcustomerPaidServiceOrder: '/customerPaidServiceOrder/queryAll',
	//详情-根据付费服务id，得到详情信息
	detailpaidService: '/paidService/detail',
	//详情-根据订单号，得到订单详情信息
	detailcustomerPaidServiceOrder: '/customerPaidServiceOrder/detail',
	//列表-得到所有专题页分组信息
	queryAllsubjectPageLayout: '/subjectPageLayout/queryAll',
	//详情-根据付费服务类型ID，得到最新(生效开始日)的付费服务信息
	queryByPaidServiceTypepaidService: '/paidService/queryByPaidServiceType',
	//排序-上升
	upsubjectPageLayout: '/subjectPageLayout/up',
	//排序-下降
	downsubjectPageLayout: '/subjectPageLayout/down',
	//删除-根据专题组id，删除信息
	delsubjectPageLayout: '/subjectPageLayout/del',
	//详情-根据专题组id，得到详情信息
	detailsubjectPageLayout: '/subjectPageLayout/detail',
	//新增-保存新增的文章详细信息
	addsubjectPageDetail: '/subjectPageDetail/add',
	//新增-保存新增的专题组
	addsubjectPageLayout: '/subjectPageLayout/add',
	//编辑-保存修改后的专题组
	editsubjectPageLayout: '/subjectPageLayout/edit',
	//删除-根据id，删除指定专题文章信息，
	delsubjectPageDetail: '/subjectPageDetail/del',
	//排序-上升详情
	upsubjectPageDetail: '/subjectPageDetail/up',
	//排序-下降详情
	downsubjectPageDetail: '/subjectPageDetail/down',
	//编辑-保存修改后的文章详细信息，只能修改图片
	editsubjectPageDetail: '/subjectPageDetail/edit',

	//列表-根据家庭成员id，得到所有健康档案
	allcustomerHealthRecord: '/customerHealthRecord/all',

	//列表-得到所有植物科属列表(植物科或植物属)，可关键字搜索
	allplantFamily: '/plantFamily/all',
	//	新增-保存新增的植物科属信息,
	addplantFamily: '/plantFamily/add',
	//编辑-保存修改后的植物科属信息
	editplantFamily: '/plantFamily/edit',
	//	删除-根据科属id，删除信息
	delplantFamily: '/plantFamily/del',
	//列表-得到所有萃取方式，可关键字搜索
	allextractionMethod: '/extractionMethod/all',
	//新增-保存新增的萃取方式信息
	addextractionMethod: '/extractionMethod/add',
	//编辑-保存修改后的萃取方式信息
	editextractionMethod: '/extractionMethod/edit',
	//删除-根据萃取方式id，删除指定信息
	delextractionMethod: '/extractionMethod/del',

	//列表-得到所有植物萃取部位信息
	allplantPart: '/plantPart/all',
	//新增-保存新增的植物萃取部位
	addplantPart: '/plantPart/add',
	//删除-根据植物萃取部位ID，删除信息
	delplantPart: '/plantPart/del',
	//编辑-保存修改后的植物萃取部位
	editplantPart: '/plantPart/edit',

	//列表-得到所有职业
	queryAllprofession: '/profession/queryAll',
	//新增-保存新增的职业信息
	addprofession: '/profession/add',
	//编辑-保存修改后的职业信息
	editprofession: '/profession/edit',
	//删除-根据职业id，删除信息
	delprofession: '/profession/del',
	//排序-下降
	downprofession: '/profession/down',
	//排序-上升
	upprofession: '/profession/up',

	//列表-得到所有适用对象信息
	allapplicableObject: '/applicableObject/all',
	//新增-保存新增的适用对象信息
	addapplicableObject: '/applicableObject/add',
	//编辑-保存修改后的适用对象信息
	editapplicableObject: '/applicableObject/edit',
	//删除-根据适用对象id，删除信息
	delapplicableObject: '/applicableObject/del',
	//排序-下降
	downapplicableObject: '/applicableObject/down',
	//排序-上升
	upapplicableObject: '/applicableObject/up',

	//列表-得到所有身体器官信息
	allbodyOrgan: '/bodyOrgan/all',
	//新增-保存新增的身体器官信息
	addbodyOrgan: '/bodyOrgan/add',
	//编辑-保存修改后的身体器官信息
	editbodyOrgan: '/bodyOrgan/edit',
	//删除-根据身体器官id，删除信息
	delbodyOrgan: '/bodyOrgan/del',

	//列表-得到所有用途基本种类信息all
	allbaseKind: '/baseKind/all',
	//新增-保存新增的用途基本种类信息
	addbaseKind: '/baseKind/add',
	// 编辑-保存修改后的用途基本种类信息
	editbaseKind: '/baseKind/edit',
	//删除-根据基本种类id，删除信息
	delbaseKind: '/baseKind/del',

	//列表-得到所有安全提示信息
	allsafetyWarning: '/safetyWarning/all',
	//新增-保存新增的安全提示信息
	addsafetyWarning: '/safetyWarning/add',
	//编辑-保存修改后的安全提示信息
	editsafetyWarning: '/safetyWarning/edit',
	//删除-根据安全提示id，删除信息
	delsafetyWarning: '/safetyWarning/del',

	//列表-得到所有信息模板
	allmessageTemplate: '/messageTemplate/all',
	//新增-保存新增的信息模板
	addmessageTemplate: '/messageTemplate/add',
	//编辑-保存修改后的信息模板
	editmessageTemplate: '/messageTemplate/edit',
	//删除-根据信息模板id，删除信息模板
	delmessageTemplate: '/messageTemplate/del',
	//列表-得到所有推动信息，分页显示
	allpushMessageList: '/pushMessageList/all',
	//新增-保存新增的推送信息
	addpushMessageList: '/pushMessageList/add',
	//编辑-保存修改后的推送信息
	editpushMessageList: '/pushMessageList/edit',
	//删除-根据推送信息id和删除类型删除指定信息
	delpushMessageList: '/pushMessageList/del',

	//列表-得到所有营养成分信息,可关键字搜索，列表分页显示
	queryAllPagenutrientsBaseInf: '/nutrientsBaseInf/queryAllPage',
	//新增-保存新增的营养成分信息
	addnutrientsBaseInf: '/nutrientsBaseInf/add',
	//编辑-保存修改后的营养成分信息
	editnutrientsBaseInf: '/nutrientsBaseInf/edit',
	//删除-根据营养成分id，删除信息
	delnutrientsBaseInf: '/nutrientsBaseInf/del',
	//编辑营养成分-根据营养成分id，得到营养成分详情
	queryByIdnutrientsBaseInf: '/nutrientsBaseInf/queryById',

	//联动列表-根据父基本种类id，得到基本种类信息，默认展示所有顶级基本种类信息
	allByParentIdbaseKind: '/baseKind/allByParentId',
	//列表-多条件筛选用户，分页
	allcustomerInf: '/customerInf/all',

	//删除用户关联的信息
	delcustomerInf: '/customerInf/del',
	//列表-得到所有消息推送转换用字符串定义
	allconvertStringDefine: '/convertStringDefine/all',
	//新增-保存推送信息给用户
	addcustomerPushMessage: '/customerPushMessage/add',
	//疗愈属性关联精油列表-根据疗愈属性id，得到关联的所有精油信息relevanceOil
	relevanceOiloilHealingAttribute: '/oilHealingAttribute/relevanceOil',
	//安全提示关联精油列表-根据安全提示id，得到关联的所有精油信息
	relevanceOiloilSafetyWarning: '/oilSafetyWarning/relevanceOil',

	//列表-得到所有油分项目
	allpointItem: '/pointItem/all',
	//新增-保存新增的油分项目
	addpointItem: '/pointItem/add',
	//排序-下降
	downpointItem: '/pointItem/down',
	//排序-上升
	uppointItem: '/pointItem/up',
	//编辑-保存修改后的油分项目
	editpointItem: '/pointItem/edit',
	//删除-根据油分项目id，删除信息
	delpointItem: '/pointItem/del',

	//列表-得到所有禁用字符集
	allsearchTabooCharset: '/searchTabooCharset/all',
	//新增-保存新增的禁则字符集
	addsearchTabooCharset: '/searchTabooCharset/add',
	//编辑-保存修改后的禁则字符集
	editsearchTabooCharset: '/searchTabooCharset/edit',
	//删除-根据禁则字符集id，删除对应信息
	delsearchTabooCharset: '/searchTabooCharset/del',
	//列表-根据精油id得到关联的所有补充物信息
	allByComponentIdsupplementComponent: '/supplementComponent/allByComponentId',
	//新增-保存新添加的补充物关联精油
	addsupplementComponent: '/supplementComponent/add',
	//删除-删除指定的关联信息，根据补充物id和精油id
	delsupplementComponent: '/supplementComponent/del',
	//编辑-保存修改后的补充物关联精油信息
	editsupplementComponent: '/supplementComponent/edit',
	//排序-上升up精油关联补充物and反关联
	upsupplementComponent: '/supplementComponent/up',
	//排序-下降
	downsupplementComponent: '/supplementComponent/down',
	//列表-根据补充物id得到关联的所有精油或其他提取物
	allBySupplementIdsupplementComponent: '/supplementComponent/allBySupplementId',

	//列表-根据精油成分(单方精油,植物油,营养成分)id，得到所有关联的复方精油信息
	queryAllBlendSingleOilBySingleOilIdblendSingleOil: '/blendSingleOil/queryAllBlendSingleOilBySingleOilId',
	//根据id，得到专题页文章轮动图标题设置信息
	detailsubjectPageTitleSet: '/subjectPageTitleSet/detail',
	//新增-保存专题页文章轮动图标题设置
	addsubjectPageTitleSet: '/subjectPageTitleSet/add',
	//编辑-保存修改后的专题页文章轮动图标题设置
	editsubjectPageTitleSet: '/subjectPageTitleSet/edit',
	//删除-根据id，删除专题页文章轮动图标题设置
	delsubjectPageTitleSet: '/subjectPageTitleSet/del',

	//列表-根据精油(单方，复方，植物油)id，得到关联的常用方法及简易配方
	allByOilIdoilSimpleRecipe: '/oilSimpleRecipe/allByOilId',
	//新增-保存新增后的精油常用方法及简易配方
	addoilSimpleRecipe: '/oilSimpleRecipe/add',
	//编辑-保存修改后的精油常用方法及简易配方
	editoilSimpleRecipe: '/oilSimpleRecipe/edit',
	//删除-根据简易配方ID，删除信息
	deloilSimpleRecipe: '/oilSimpleRecipe/del',
	//排序-下降
	downoilSimpleRecipe: '/oilSimpleRecipe/down',
	//排序-上升
	upoilSimpleRecipe: '/oilSimpleRecipe/up',

	//列表-得到所有精油(单方，复方，植物油)，分页显示
	allOilsingleOilBaseInf: '/singleOilBaseInf/allOil',

	//列表-得到所有手法图示信息，分页
	allPagetechniqueImgDetail: '/techniqueImgDetail/allPage',
	//新增-保存新增后的手法图示信息
	addtechniqueImgDetail: '/techniqueImgDetail/add',
	//编辑-保存修改后的手法图示信息
	edittechniqueImgDetail: '/techniqueImgDetail/edit',
	//删除-根据id，删除指定的手法图示信息
	deltechniqueImgDetail: '/techniqueImgDetail/del',
	//列表-得到所有手法视频信息，分页
	allPagetechniqueVideo: '/techniqueVideo/allPage',
	//新增-保存新增的手法视频信息
	addtechniqueVideo: '/techniqueVideo/add',
	//删除-根据手法视频id，删除信息
	deltechniqueVideo: '/techniqueVideo/del',
	//编辑-保存修改后的手法视频信息
	edittechniqueVideo: '/techniqueVideo/edit',
	//列表-得到所有手法图示信息，根据手法图示id分组
	allByGroupIdtechniqueImgDetail: '/techniqueImgDetail/allByGroupId',

	//列表-根据手法图示id，得到所有手法图示信息
	allByTechniqueImgIdtechniqueImgDetail: '/techniqueImgDetail/allByTechniqueImgId',
	//详情-根据手法视频id，得到详情信息
	detailByEechniqueVideoIdtechniqueVideo: '/techniqueVideo/detailByEechniqueVideoId',

	//小程序列表-得到所有角色
	queryAllroleWx: '/roleWx/queryAll',
	//编辑-根据角色id，得到角色详情信息
	queryOneByIdroleWx: '/roleWx/queryOneById',
	//新增-保存新增的角色信息
	addroleWx: '/roleWx/add',
	//编辑-根据角色id，保存修改后的角色信息
	editroleWx: '/roleWx/edit',
	//得到所有权限信息，根据角色id，默认选中权限点
	queryAllAclByIdroleWx: '/roleWx/queryAllAclById',
	//删除-根据角色id，删除指定角色信息
	delroleWx: '/roleWx/del',
	//角色关联权限-保存角色关联权限信息
	addRoleAclroleWx: '/roleWx/addRoleAcl',

	//微信小程序列表-得到所有菜单权限点，树形结构，不分页
	queryAllMenu2TreeaclWx: '/aclWx/queryAllMenu2Tree',
	//编辑-根据权限点id，得到详情信息
	queryOneByIdaclWx: '/aclWx/queryOneById',
	//列表-根据菜单权限点id，得到底层权限点
	queryAllByMenuIdaclWx: '/aclWx/queryAllByMenuId',
	//新增-保存新增的权限点信息
	addaclWx: '/aclWx/add',
	//编辑-根据权限点id，保存修改后的权限点信息
	editaclWx: '/aclWx/edit',
	//删除-根据权限点id，删除指定数据
	delaclWx: '/aclWx/del',
	//角色关联用户-保存角色关联用户信息
	addRoleCustomerRoleWx: '/roleWx/addRoleCustomer',
	//编辑-修改用户标识(禁用还是有效)
	editDisabledFlagcustomerInf: '/customerInf/editDisabledFlag',

	//列表-得到所有分享海报
	allpointSharePosterList: '/pointSharePosterList/all',
	//新增-保存新增的分享海报信息
	addpointSharePosterList: '/pointSharePosterList/add',
	//编辑-保存修改后的分享海报信息
	editpointSharePosterList: '/pointSharePosterList/edit',
	//删除-根据分享海报id，删除信息
	delpointSharePosterList: '/pointSharePosterList/del',

	//列表-得到所有解释性文本信息
	allexplanatoryText: '/explanatoryText/all',
	//新增-保存新增的解释性文本信息
	addexplanatoryText: '/explanatoryText/add',
	//编辑-保存修改后的解释性文本信息
	editexplanatoryText: '/explanatoryText/edit',
	//删除-根据信息id，删除数据
	delexplanatoryText: '/explanatoryText/del',
	//排序-下降
	downexplanatoryText: '/explanatoryText/down',
	//排序-上升
	upexplanatoryText: '/explanatoryText/up',
	//列表-根据关键词id和类型，查询已关联的信息(精油(单方，复方，植物油，补充物)，文章(科学实证，公众号文章，专题文章))
	allByKeyword: '/keyword/allByKeyword',
	//删除-根据关联信息id，关键词id，关键词类别，关联信息类型删除关联信息
	delByKeyword: '/keyword/delByKeyword',
	//详情-根据用户id，得到当前用户统计数据详情
	queryByCustomerId: '/customerShareTotal/queryByCustomerId',
	//删除redis中所有类型信息'/类型/'+delCache
	delCache: 'delCache',
	//根据适用对象id,删除redis中当前配方信息
	delCacheByObjectId: '/recipeApplicableObject/delCacheByObjectId',
	//分词
	wordSegmenterSystemSeting: '/systemSeting/wordSegmenter',

	//根据手机系统类型，得到系统版本
	getOscustomerInf: '/customerInf/getOs',

	//列表-得到所有植物萃取部位类别	all
	allplantPartClass: '/plantPartClass/all',
	//新增-保存新增的植物萃取部位类别
	addplantPartClass: '/plantPartClass/add',
	//编辑-保存修改后的植物萃取部位类别
	editplantPartClass: '/plantPartClass/edit',
	//删除-根据植物萃取部位类别id，删除信息
	delplantPartClass: '/plantPartClass/del',
	//列表-根据植物萃取部位类别id，得到同类所有精油
	similarOilplantPartClass: '/plantPartClass/similarOil',

	//列表-得到所有卡券信息
	allcoupon: '/coupon/all',
	//新增-保存新增的卡券信息
	addcoupon: '/coupon/add',
	//编辑-保存修改后的卡券信息
	editcoupon: '/coupon/edit',
	//删除-根据卡券id，删除卡券信息
	delcoupon: '/coupon/del',
	//赠送-赠送卡券给指定用户
	givecoupon: '/coupon/give',
	//详情-根据卡券id，得到卡券详情信息
	detailcoupon: '/coupon/detail',
	///赠送-赠送油分给指定用户
	givepointItem: '/pointItem/give',

	//列表-根据配方id和精油id，得到可替换的精油列表
	allReplaceOilrecipeDoseDetailReplace: '/recipeDoseDetailReplace/allReplaceOil',
	//新增-保存新增的替换精油
	addrecipeDoseDetailReplace: '/recipeDoseDetailReplace/add',
	//编辑-保存修改后的替换精油
	editrecipeDoseDetailReplace: '/recipeDoseDetailReplace/edit',
	//删除-删除替换精油信息del
	delrecipeDoseDetailReplace: '/recipeDoseDetailReplace/del',
};
export default api
