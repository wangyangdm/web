(function(window,Object,undefined){
	"use strict";
	
	Dms.layernameConfig = {
		"ACCESSPOINT":"网络资源点",
		"NE":"网元",
		"TRANS_ELEMENT":"传输网元",
		"AN_OLT":"OLT网元",
		"AN_POS":"分光器",
		"AN_ONU":"ONU网元",
		"AN_ONU_LABEL":"ONU网元标注",
		"FIBER_CAB":"光交接箱",
		"FIBER_CAB_LABEL":"光交接箱标注",
		"FIBER_DP":"光分纤箱",
		"FIBER_DP_LABEL":"光分纤箱标注",
		"FIBER_JOINT_BOX":"光接头盒",
		"FIBER_JOINT_BOX_LABEL":"光接头盒标注",
		"INFLEXION":"拐点",
		"INFLEXION_LABEL":"拐点标注",
		"MANHLE":"人手井",
		"MANHLE_LABEL":"人手井标注",
		"POLE":"电杆",
		"POLE_LABEL":"电杆标注",
		"FIBER_JOINT_BOX":"光终端盒",
		"FIBER_JOINT_BOX_LABEL":"光终端盒标注",
		"PRESET_POINT":"预置点",
		"PRESET_POINT_LABEL":"预置点标注",
		"SITE_1":"本地网站点",
		"SITE_1_LABEL":"本地网站点标注",
		"SITE":"站点",
		"SITE_LABEL":"站点标注",
		"STONE":"标石",
		"STONE_LABEL":"标石标注",
		"DUCT_SEG":"管道段",
		"HANG_WALL_SEG":"挂墙段",
		"MICROWAVE_LINE_SEG":"微波段",
		"POLEWAY_SEG":"杆路段",
		"STONEWAY_SEG":"直埋段",
		"UP_LINE_SEG":"引上段",
		"WIRE_SEG":"光缆段",
		"WIREGROUP":"光缆",
		"WIRE_SEG-1":"省际光缆" ,
		"WIRE_SEG-1_2":"省际光缆" ,
		"WIRE_SEG-1-1":"省际规划光缆",
		"WIRE_SEG-1-2":"省际一级设计光缆" ,
		"WIRE_SEG-1-3":"省际设计光缆" ,
		"WIRE_SEG-1-4":"省际在建光缆" ,
		"WIRE_SEG-1-5":"省际竣工光缆" ,
		"WIRE_SEG-1-6":"省际维护光缆" ,
		"WIRE_SEG-1-7":"省际未知/废弃光缆" ,
		"WIRE_SEG-2":"二干光缆" ,
		"WIRE_SEG-2-1":"二干规划光缆" ,
		"WIRE_SEG-2-2":"二干一级设计光缆" ,
		"WIRE_SEG-2-3":"二干设计光缆",
		"WIRE_SEG-2-4":"二干在建光缆" ,
		"WIRE_SEG-2-5":"二干竣工光缆" ,
		"WIRE_SEG-2-6":"二干维护光缆" ,
		"WIRE_SEG-2-7":"二干未知/废弃光缆" ,
		"WIRE_SEG-3":"本地骨干" ,
		"WIRE_SEG-3-1":"骨干规划光缆" ,
		"WIRE_SEG-3-2":"骨干一级设计光缆" ,
		"WIRE_SEG-3-3":"骨干设计光缆" ,
		"WIRE_SEG-3-4":"骨干在建光缆" ,
		"WIRE_SEG-3-5":"骨干竣工光缆" ,
		"WIRE_SEG-3-6":"骨干维护光缆" ,
		"WIRE_SEG-3-7":"骨干未知/废弃光缆" ,
		"WIRE_SEG-04":"本地接入" ,
		"WIRE_SEG-045":"本地接入" ,
		"WIRE_SEG-0_5":"本地接入" , 
		"WIRE_SEG-045-1":"接入规划光缆" ,
		"WIRE_SEG-045-2":"接入一级设计光缆" ,
		"WIRE_SEG-045-3":"接入设计光缆" ,
		"WIRE_SEG-045-4":"接入在建光缆" ,
		"WIRE_SEG-045-5":"接入竣工光缆" ,
		"WIRE_SEG-045-6":"接入维护光缆" ,
		"WIRE_SEG-045-7":"接入未知/废弃光缆",
		"GRID_COMMUNITY":"家客业务区",
		"GSM":"2G",
		"TD-SCDMA":"3G",
		"LTE":"4G",
		"T_COM_RADIO_BSC":"BSC设备",
		"T_COM_RADIO_BTS":"2G基站",
		"T_COM_RADIO_NODEB":"3G基站",
		"T_COM_RADIO_RNC":"RNC设备",
		"T_COM_LOGIC_RADIO_CELL":"2G小区",
		"T_COM_LOGIC_RADIO_UCELL":"3G小区",
		"T_COM_RADIO_ENODEB":"4G基站",
		"T_COM_GSM_DISTRIBUTOR":"室分系统",
		"T_COM_IP_WLAN_AC":"AC设备",
		"T_COM_IP_WLAN_AP":"AP设备",
		"T_COM_IP_WLAN_HOT":"热点",
		"TOPO_LINK":"传输拓扑",		
		"T_COM_DEVICE_POS":"POS设备",
		"T_COM_DEVICE_OLT":"OLT设备",
		"T_COM_DEVICE_ONU":"ONU设备",
	    "STANDARD_ADDRESS":"标准地址",
	    "T_RC_PROPERTY_POINT":"物业点",
		"CUSTOMER":"客户",
		"GRID":"网格",
		"FISHNET":"规则网格",
		"GRID_ACCESS":"业务接入区",
		"GRID_CONSTRUCT":"施工范围",
		"EPI_CENTER":"震中",
		"COMMAND":"指挥部",
		"IN_EMERGENCY_CAR":"省内应急车",
		"OUT_EMERGENCY_CAR":"省外应急车",
		"ISLAND_TOWN":"孤岛乡镇",
		"INTERRUPT_SITE":"中断基站",
		"CABLE_BREAK":"光缆断点",
		"TRANS_EXPORT":"传输出口",
		"NODE_SITE":"节点站",
		"SUPER_SITE":"超级基站",
		"POWER_CUT":"停电"
	};
	//综资ID与图层（右键配置）对应关系
	Dms.cuid2layername = {
		"AN_OLT":"AN_OLT",
		"AN_POS":"AN_POS",
		"AN_ONU":"AN_ONU",
		"_BTS":"T_COM_RADIO_BTS",
		"_ENODEB":"T_COM_RADIO_ENODEB",
		"_NODEB":"T_COM_RADIO_NODEB",
		"_RNC":"T_COM_RADIO_RNC",
		"_CELL":"T_COM_LOGIC_RADIO_CELL",
		"_UCELL":"T_COM_LOGIC_RADIO_UCELL",
		"_OLT":"T_COM_DEVICE_OLT",
		"_POS":"T_COM_DEVICE_POS",
		"_ONU":"T_COM_DEVICE_ONU",
		"_BSC":"T_COM_RADIO_BSC",
		"_AC":"T_COM_IP_WLAN_AC",
		"_AP":"T_COM_IP_WLAN_AP",
		"_HOT":"T_COM_IP_WLAN_HOT",
		"_DISTRIBUTOR":"T_COM_GSM_DISTRIBUTOR",
		"_PROPERTY_POINT":"T_RC_PROPERTY_POINT",
		"CUSTOMER":"CUSTOMER",
		"GRID":"GRID",
		"FISHNET":"FISHNET"
	};
	Dms.layernameFilter = function(className){
		if(!className)
			return className;
		for ( var p in Dms.cuid2layername ){ 
	    	if(className.indexOf(p) > -1)
	    	{
	    		className = Dms.cuid2layername[p];
	    		break;
	    	}
	    }
		return className;
	};
})(this,Object);