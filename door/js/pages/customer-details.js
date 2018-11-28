$(function () {
    getData();


});

//获取参数
function getParam() {

    var param = window.location.search;
    var id = param.split("=")[1];
    return id;
}

//获取数据并渲染到页面上
function getData() {
    var id = getParam();
    $.get("data/customer-data" + id + ".json",{},function (data) {
        console.log(data);
        // var oHtml = $("#clearfix").html();
        var oHtml = $("#clearfix").html().replace("$title$",data.title)
            .replace("$admin$",data.other.author)
            .replace("$发布时间$",data.other.releaseTime)
            .replace("$浏览$",data.other.browse)
            .replace("$正文$",data.context)
            .replace("$preUrl$","customer-details.html?id=" + data.prev.id)
            .replace("$上一篇$",data.prev.title)
            .replace("$nexUrl$","customer-details.html?id=" + data.next.id)
            .replace("$下一篇$",data.next.title);

        $("#newClearfix").append(oHtml);

        if(data.prev.id == ""){
            $(".prev").remove();
        }
        if(data.next.id == ""){
            $(".next").remove();
        }
    })
}