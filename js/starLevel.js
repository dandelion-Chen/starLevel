var starImgArr = [];

var starLevel = function(dom,level,option){
	option = option ||{};
	this.bigR = option.bigR||12;
	this.smallR = option.smallR||5;
	this.width = option.width||100;
	this.height= option.height||this.bigR*2;
	this.borderColor = option.borderColor||"#ffc654";
	this.fillColor = option.fillColor||"#ffc654";
	this.space = option.space||5;
	this.lineWidth = option.lineWidth||1;
	this.initLevel(dom,level);
}
starLevel.prototype = {
	initLevel:function(dom,level){
		var starImg,tpl,levelImg;
		level = parseInt(level);
		levelImg =starImgArr[level];

		if (levelImg == ""||levelImg == undefined) {
			this.drwaCanvs(dom,level);
		}else{
			var img = document.createElement('img');
			img.src = levelImg;
			dom.appendChild(img);
		}
	},
	drwaCanvs:function(dom,level){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		canvas.width=this.width;
		canvas.height=this.height;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		for (var i = 0;i<=level-1;i++) {
			this.drawStar(ctx,{x:this.bigR+this.bigR*2*i+i*this.space,y:this.bigR},true);
		}
		for (var j=level+1;j<=5;j++) {
			this.drawStar(ctx,{x:this.bigR+this.bigR*2*(j-1)+(j-1)*this.space,y:this.bigR},false);
		}
		starImg = canvas.toDataURL("image/png");
		starImgArr[level] = starImg;
		dom.appendChild(canvas);
	},
	drawStar:function(ctx,p,isFill){
		ctx.moveTo(Math.cos(18/180*Math.PI)*this.bigR+p.x,   
	                        -Math.sin(18/180*Math.PI)*this.bigR+p.y); 
		ctx.lineTo(Math.cos(54/180*Math.PI)*this.smallR+p.x,   
	                        -Math.sin(54/180*Math.PI)*this.smallR+p.y); 
		for (var i = 1; i < 5; i++) { 
	        ctx.lineTo(Math.cos((18+i*72)/180*Math.PI)*this.bigR+p.x,   
	                        -Math.sin((18+i*72)/180*Math.PI)*this.bigR+p.y);   
	        ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*this.smallR+p.x,   
	                        -Math.sin((54+i*72)/180*Math.PI)*this.smallR+p.y);   
	    }   
	    ctx.closePath();   
	    //设置边框样式以及填充颜色   
	    ctx.lineWidth=this.lineWidth;   
	    ctx.strokeStyle = this.borderColor;   
	    
	    if (isFill) {
	    	ctx.fillStyle = this.fillColor;   
	    	ctx.fill();   
	    }
	    ctx.closePath();
	    ctx.stroke(); 
	}
}