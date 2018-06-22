const Tools={
	css:function(element,options){
		for(let attr in options){
			element.style[attr]=options[attr];
		}
	},
	randomColor:function(){
		const r=Math.floor(Math.random()*256);
		const g=Math.floor(Math.random()*256);
		const b=Math.floor(Math.random()*256);
		return `rgb(${r},${g},${b})`;
	}
}
