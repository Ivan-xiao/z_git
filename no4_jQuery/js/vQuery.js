function bindEvent(obj,events,fn){
    if(obj.addEventListener){
        obj.addEventListener(events,fn,false);
    }else{
        obj.attachEvent('on'+events,fn);
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

function Vquery(vArg){
    this.elements=[];

   // vArg : function

    switch(typeof vArg){
        case 'function':
            //window.onload=vArg;
            bindEvent(window,'load',vArg);
            break;

        case 'string':
            switch (vArg.charAt(0)){
                case '#':
                    this.elements.push(document.getElementById(vArg.substring(1)));
                    break;
                case '.':
                    this.elements=getByClass(document,vArg.substring(1));
                    break;
                default :
                    this.elements=toArray(document.getElementsByName(vArg));
                    break;

            }
            break;

        case 'object':
            this.elements.push(vArg);
            break;

    }
}

Vquery.prototype.css=function(){};

Vquery.prototype.html=function(str){

    for(var i=0; i<this.elements.length; i++){
        this.elements[i].innerHTML=str;
    }

};

function $(vArg){
    return new Vquery(vArg);
}