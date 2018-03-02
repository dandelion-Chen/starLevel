### 一、starlevel介绍
- 基于canvas绘画出五星等级；
- 可修改参数修改星星的颜色、形状、大小以及星星间距；
- 可兼容移动端、谷歌、火狐以及IE9以上浏览器。

### 二、 starlevel 初始化

    
      new starLevel(dom,level,opition)；
    
 
- dom可通过document.getElementById、document.getElementsByClassName("className")[]来获取；
- level是星级数值，为数字。例如：4；
- opition是个对象，传入关于星星的控制，此选项可不填写。对应传入字段如下：
	
  >-bigR :  对应星星大小；  
  >-smallR :   与bigr联用，控制星星的形状，smallr/bigr 越小星星越尖；  
	>-width :  控制画布的宽度 ，默认为：100；  
  >-height :  控制画布的高度，默认为：bigr*2；  
  >-bordercolor : 星星描边的颜色，默认为：#ffc654；  
  >-fillcolor :  星星内部填充颜色，默认为：：#ffc654；  
  >-space : 星星间的间隔，默认为5；  
  >-lineWidth :  星星描边大小。

### 三、使用例子

```javascript
	var star1 = document.getElementById('star1');
	var star2 = document.getElementById('star2');
	var star3 = document.getElementById('star3');
	// 默认模式下
	new starLevel(star1,3);
	//修改颜色
	new starLevel(star2,4,{
		borderColor:"#90cef3", //边框颜色
		fillColor:"#90cef3" //填充颜色
	})
	//放大星星，扩大间距
	new starLevel(star3,2,{
		borderColor:"#90cef3", //边框颜色
		fillColor:"#90cef3", //填充颜色
		bigR:20,  //bigR和smallR控制星星大小及形状，smallR/bigR 越小星星越尖。
		smallR:12,
		space:10 //星星之间的间距，默认 为5
	})
```
### 四、展示效果
![](https://github.com/dandelion-Chen/starLevel/raw/master/images/example.png)  
