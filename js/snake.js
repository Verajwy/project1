const Direction={
	LEFT:Symbol(),
	RIGHT:Symbol(),
	UP:Symbol(),
	DOWN:Symbol()
};

class Snake{
	constructor({bodies=[],width=20,height=20,direction=Direction.RIGHT}={}){
			this.bodies=bodies;
			this.width=width;
			this.height=height;
			this.direction=direction;
			this.map=null;
			this.init();
	}
		
	init(){
		if(this.bodies.length===0){
			this.bodies=[
				{x:2,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:3,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:4,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:5,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:6,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:7,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:8,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:9,y:2,dom:null,bgColor:Tools.randomColor()},
				{x:10,y:2,dom:null,bgColor:"#f00"}
			];
		}
	}
	
	createDom(){
		this.bodies.forEach((body)=>{
			if(body.dom===null){
				body.dom=document.createElement("div");
				Tools.css(body.dom,{
					width:this.width+"px",
					height:this.height+"px",
					position:"absolute",
					background:body.bgColor
				});
				this.map.addRole(body);
			}
			Tools.css(body.dom,{
				left:body.x * this.width+"px",
				top:body.y * this.height+"px",
			});
		});
	}
	setDirection(code){
		if(code===37&&this.direction!==Direction.RIGHT)
			this.direction=Direction.LEFT;
		else if(code===38&&this.direction!==Direction.DOWN)
			this.direction=Direction.UP;
		else if(code===39&&this.direction!==Direction.LEFT)
			this.direction=Direction.RIGHT;
		else if(code===40&&this.direction!==Direction.UP)
			this.direction=Direction.DOWN;
	}
	move(){
		let len=this.bodies.length;
		for(let i=0;i<len-1;i++){
			this.bodies[i].x=this.bodies[i+1].x;
			this.bodies[i].y=this.bodies[i+1].y;
		}
		if(this.direction===Direction.LEFT)
			this.bodies[len-1].x--;
		else if(this.direction===Direction.RIGHT)
			this.bodies[len-1].x++;
		else if(this.direction===Direction.UP)
			this.bodies[len-1].y--;
		else if(this.direction===Direction.DOWN)
			this.bodies[len-1].y++;
		this.createDom();
	}
	
	eat(food) {
		const len=this.bodies.length;
		const head=this.bodies[len-1];
		if(head.x===food.x&&head.y===food.y){
			this.bodies.unshift({x:0,y:0,dom:null,bgColor:Tools.randomColor()});
			food.changePosition(this);
		}
	}
}
