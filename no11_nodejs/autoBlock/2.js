/**
 * Created by leafe20 on 2016/6/9.
 */
var fs=require('fs');
var filedir='./source';

fs.watch(filedir, function(ev,file){
    //console.log(ev +'/'+file);
    fs.readdir(filedir, function(err,dataList){
        var arr=[];

        dataList.forEach(function(f){
            var info = fs.statSync(filedir+'/'+ f);
            console.log(info);
        })
    });
});