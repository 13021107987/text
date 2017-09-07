//封装获取方式
function Class(ClassName){
	return document.getElementsByClassName(ClassName);
}
function Tag(TagName){
	return document.getElementsByTagName(TagName);
}
function IdName(IdName){
	return document.getElementById(IdName);
}
function Name(Name){
	return document.getElementsByName(Name);
}

//图片切换
function Prve(a, b) {
	//a是图片  b是鼠标点击次数
	//封装算局部变量还是函数
	//封装里面不能储存值  想做递减是不能的
	for(var i = 0; i < a.length; i++) {
		a[i].style.display = 'none';
	}
	a[b].style.display = 'block';
}

//隔行换色
function Lii(a, w, h, bgcolor, bgcolor1) {
	for(var i = 0; i < a.length; i++) {
		a[i].style.width = w;
		a[i].style.height = h;
		if(i % 2 == 0) {
			a[i].style.backgroundColor = bgcolor;
		} else {
			a[i].style.backgroundColor = bgcolor1;
		}
	}
}

//鼠标键位的获取
//封装 判断是否为IE   把IE转换为非IE
function Mouse(ev) {
	var oEv = ev || event; //ev是非IE浏览器
	var a = oEv.button;

	if(ev) {
		return a;
	} else {
		switch(a) {
			case 1:
				return a = 0;
				break;
			case 4:
				return a = 1;
		}
	}
}

//绑定事件 兼容IE的写法
//target 元素   type 事件  fn执行的函数
function addEventHandler(target, type, fn) { 
	if(target.addEventListener) { 
		target.addEventListener(type, fn); 
	} else { 
		target.attachEvent("on" + type, fn); 
	}
}

/*纯js轮播*/
//Num是终点   offsetLeft是起点    终点-起点如果是正值就正着走   终点-起点如果是负值就负着走
//			 步数       盒子      距离     	节流阀
function Run(step,Box,Num,Speed){						
					clearInterval(Box.Otime);
					//判断向左还是向右

					step=Num>Box.offsetLeft? step:-step;
					 Box.Otime=setInterval(function(){
						console.log(Box.offsetLeft);
						if(Math.abs(Num-Box.offsetLeft)>Math.abs(step)){
							Box.style.left=Box.offsetLeft+step+'px';
						}else{
							Box.style.left=Num+'px';
							clearInterval(Box.Otime);
						}																
					},1);
					 //节流阀
					setTimeout(function(){flag=true;},Speed);
			}
//缓动js轮播	
				// 回调函数  动画执行完成之后再去执行的方法  
				
function oRun(Box,Num,fn){						
				 clearInterval(Box.Otime);
				 Box.Otime=setInterval(function(){
           		 var speed = (Num-Box.offsetLeft)/10;
            	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
           		 Box.style.left=Box.offsetLeft+speed+"px";
           		 //console.log(Box.offsetLeft)
            	 if(Box.offsetLeft===Num){
                 clearInterval(Box.Otime);
                 if(fn){//回调函数   动画执行完成之后再去执行的方法     调用函数时直接写函数
                 	fn()
                 	   }
           		}
       			},10)
				}
//倒计时  用的时候创建一个计时器把函数放里面   参数1当前时间  参数2认为设置的事件 参数3返回的盒子
function Count(DATE,NEWDATE,Box){				
				var myDate=DATE;//当前时间
			    var lastDate=NEWDATE;//你要比对的时间
			     var Value=parseInt((lastDate-myDate)/1000);//返回值是毫秒 变成秒
			     if(Value<0){
			     	Value=0;//等倒计时完成后强制等于0
			     }
			     Day=parseInt(Value/3600/24); //天数
			     Min=parseInt(Value/60) ;//分种
			     Hou=parseInt(Value/60/60);//小时
			     Mon=parseInt(Value/3600/24/30);//月
			  return  Box.innerHTML=Mon+'月'+Day+'日'+Hou+'小时'+Min+'分'+Value+'秒';		
			}

//轮播图下面索引封装   obj是li  count是次数
function LII(obj,count,On){
				for(var i=0;i<obj.length;i++){
					obj[i].className='';
				}
					obj[count].className=On;
			}
//圆点移入事件   
//参数1是圆点 参数2是图片大盒子 参数3是单张照片宽度
function OnMouse(Li,Obj,Wi){
	for(var i=0;i<Li.length;i++){
				Li[i].index=i;
				Li[i].onmouseover=function(){	
					for(var j=0;j<Li.length;j++){
						Obj.style.transition='all .5s';
						Li[j].style.backgroundColor='white';
					}
					Obj.style.left=(this.index+1)*Wi+'px';
					Li[this.index].style.backgroundColor='red';
					
				}
			}
}
//选项卡 display版;参数1 鼠标移入的元素 参数2选项卡的内容
function Options(obj1,obj2){
	for(var i=0;i<obj1.length;i++){
				obj1[i].index=i;
				obj1[i].onmouseover=function(){
					for(var j=0;j<obj2.length;j++){
						obj2[j].style.display='none';
					}
					obj2[this.index].style.display='block';
				}
			}
}
//选项卡透明度版;参数1 鼠标移入的元素 	参数2 选项卡的内容
function OpacityOptions(obj1,obj2){
	for(var i=0;i<obj1.length;i++){
				obj1[i].index=i;
				obj1[i].onmouseover=function(){
					for(var j=0;j<obj2.length;j++){
						obj2[j].style.opacity='0';
						obj2[j].style.transition='all .5s';
					}
					obj2[this.index].style.opacity='1';
					obj2[this.index].style.transition='all .5s';
				}
			}
}
//下拉菜单  参数 鼠标移入的元素  参数1鼠标移入的元素
function dropDown(obj){
	for(var i=0;i<Li.length;i++){
				obj[i].onmouseover=function(){
					if(this.children.length>1){
						this.lastElementChild.style.display='block';
					}
				}
				obj[i].onmouseout=function(){
					if(this.children.length>1){
						this.lastElementChild.style.display='none';
					}
				}
			}

}

