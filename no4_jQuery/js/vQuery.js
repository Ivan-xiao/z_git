function bindEvent(obj,events,fn){
    if(obj.addEventListener){
        obj.addEventListener(events,fn,false);
    }else{
        obj.attachEvent('on'+events,fn);  // ie低版本；
    }
}

function getByClass(oParent,sClass){
    var arr=[];
    var elems=oParent.getElementsByTagName('*');

    for(var i=0; i<elems.length; i++){
        if(elems[i].className==sClass){
            arr.push(elems[i]);
        }
    }
    return arr;
}

function toArray(elems){
    var arr=[];
    for(var i=0; i<elems.length; i++){
        arr.push(elems[i]);
    }
    return arr;
}



function Vquery(vArg){   //构造函数****************
    this.elements=[];    // 全局变量；；*****

    // vArg : function
    switch(typeof vArg){
        case 'function':
            //window.onload=vArg;  //***********
            bindEvent(window,'load',vArg); ///
            break;

        case 'string':
            switch (vArg.charAt(0)){  //vArg:#div1
                case '#':
                    this.elements.push(document.getElementById(vArg.substring(1)));
                    break;
                case '.':
                    this.elements=getByClass(document,vArg.substring(1)); //1 this******
                    break;
                default :
                    this.elements=toArray(document.getElementsByName(vArg));//****
                    break;
            }
            break;

        case 'object':  // 对象；
            this.elements.push(vArg);
            break;

    }
}

Vquery.prototype.css=function(){};   //方法写在原型下；********

Vquery.prototype.html=function(str){  //str bbbb

    for(var i=0; i<this.elements.length; i++){
        this.elements[i].innerHTML=str;  // 1 this******
    }

};

function $(vArg){
    return new Vquery(vArg);   //new构造函数； 创建出来一个对象（返回对象）；***********
}