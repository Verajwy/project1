function Map({width=600,height=600,bgColor='#ccc'}={}){
	this.width=width;
	this.height=height;
	this.dom=null;
	this.bgColor=bgColor;
	this.createDom();
}

Map.prototype={
	constructor:Map,
	createDom:function(){
		this.dom=document.createElement("div");
		this.dom.id="maps";
		Tools.css(this.dom,{
			width:this.width+"px",
			height:this.height+"px",
			background:this.bgColor,
			position:"relative",
			margin:"0px auto"
		});
		document.body.appendChild(this.dom);
	},
	addRole:function(role){
		this.dom.appendChild(role.dom);
	}
};
