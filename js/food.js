class Food{
	constructor({width=20,height=20,x=0,y=0,bgColor='#0f0'}={}){
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.bgColor=bgColor;
		this.dom=null;
		this.map=null;
	}
	createDom(){
		this.dom=document.createElement("div");
		Tools.css(this.dom,{
			width:this.width+"px",
			height:this.height+"px",
			position:"absolute",
			left:this.x * this.width+"px",
			top:this.y * this.height+"px",
			backgroundColor:this.bgColor
		});
		this.map.addRole(this);
	}
	changePosition(snake){
		const rows=this.map.height/this.height,
		cols=this.map.width/this.width;
		var x1=Math.floor(Math.random()*cols),y1=Math.floor(Math.random()*rows);
		console.log(x1);
		console.log(y1);
		for(var i=0;i<snake.bodies.length;i++){
			while(x1===snake.bodies[i].x&&y1===snake.bodies[i].y)
			{
				x1=Math.floor(Math.random()*cols),y1=Math.floor(Math.random()*rows);
			}
		}
		this.x=x1;
		this.y=y1;
		Tools.css(this.dom,{
			left:this.x * this.width+"px",
			top:this.y * this.height+"px"
		});
	}
}
