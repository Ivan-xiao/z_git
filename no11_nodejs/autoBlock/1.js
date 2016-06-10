/**
 * Created by leafe20 on 2016/6/9.
 */

var projectData={

    'name':'miaov',
    'fileData':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },
        {
            'name':'images',
            'type':'dir'
        },
        {
            'name':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t<title>title</title>\n\t</head>\n\t<body>\n\t<h1>hello</h1>\n\t</body></html>'
        }

    ]
};


var fs=require('fs');
if(projectData.name){
    fs.mkdirSync(projectData.name);

    var fileData=projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f){
            f.path=projectData.name + '/' + f.name;
            f.content= f.content || '';
            switch(f.type){
                case 'dir':
                    fs.mkdir(f.path);
                    break;
                case'file':
                    fs.writeFileSync(f.path, f.content);
                    break;
                default :
                    break;
            }

        });
    }
}













