
// 1-$ || ready
function $(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded', fn, false);
	}else{
		document.onreadystatechange=function(){
			if(document.readyState == 'complete'){
				fn();
			}	
		}
	}	
}

// 2-addWheel
/*function addWheel(obj, fn){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
		obj.addEventListener('DOMMouseScroll', _wheel, false);
	}else{
		obj.onmousewheel=_wheel;
	}
	
	function _wheel(ev){
		var oEvent=ev || event;
		var down=true;
		
		if(oEvent.wheelDelta){
			down=oEvent.wheelDelta>0 ? false : true;
		}else{
			down=oEvent.detail>0 ? true : false;
		}
		fn(down);
		
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}	
}*/

function addWheel(obj, fn){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
		obj.addEventListener('DOMMouseScroll', function(ev){
			var oEvent=ev || event;
			var down=oEvent.detail>0 ? true : false;
			fn(down);
			
			oEvent.preventDefault && oEvent.preventDefault();
			return false;	
		}, false);
	}else{
		obj.onmousewheel=function(ev){
			var oEvent=ev || event;
			var down=oEvent.wheelDelta>0 ? false : true;
			fn(down);
			
			return false;	
		};
	}
}




// 3- getStyle
function getStyle(obj, sName){
	return (obj.currentStyle || getComputedStyle(obj, sName))[sName];	
}

// 4-move
function move(obj, json, options){
	options=options || {};
	var duration=options.duration || 1000;
	var easing=options.easing || 'linear';
	var start={};
	var dis={};
	var count=Math.floor(duration/30);
	var n=0;
	
	for(var name in json){
		start[name]=parseFloat(getStyle(obj, name));
		dis[name]=json[name]-start[name];
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			switch(easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break; 
			}
			
			if(name == 'opacity'){
				obj.style[name]=cur;
			}else{
				obj.style[name]=cur+'px';	
			}
		}
		
		if(n == count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}	
	}, 30);		
}


// 5-toDub
function toDub(n){
	return n<10 ? '0'+n : ''+n;	
}

// <---------------------------------------------------------------------->

(function(){
	arr.sort(function(){
		return Math.random()-0.5; // 数组里数据的下标数随机
	});
	
	arr.sort(function(m, n){
		return m-n;	        // 数组里的数字从小到大排列
	})
	
})()
















