<!--渲染模板-->
$(function(){
    var source = '<ul>'
        +    '{{each result as value i}}'
        +        '<li>索引 {{i + 1}} ：{{value.title}}</li>'
        +    '{{/each}}'
        + '</ul>';

    var render = template.compile(source);

   /* $.getJSON("data/data1.json",{
        pageNo:1,pageSize:4,status:1
    } , function(json){
        // alert(JSON.stringify(json.data));
        var xHtml = render(json.data);
        document.getElementById('content').innerHTML = xHtml;
    });
*/
    $.ajax({
        'url':'./data/data1.json',
        'data':{pageNo:1,pageSize:4,status:1},
        'success':function(json){
            var xHtml = render(json.data);
            document.getElementById('content').innerHTML = xHtml;
        }
    })
});



