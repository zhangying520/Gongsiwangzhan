$(function () {

    init();

});
function init() {
    tabInit();
    changeStyle();
    showClick();
}

//选项卡初始化
function tabInit() {
    var oLi = $(".tab-ul>li");
    oLi.hide();
    oLi.eq(0).show();
}

//改变选中项的样式
function changeStyle() {
    var oA = $(".cebian-list").find("a");
    oA.click(function () {
        oA.removeClass("table-active");
        $(this).addClass("table-active");
    })
}

//显示选中项对应的内容
function showClick() {
    $(".cebian-list").find("li").click(function () {

        var oLi = $(".tab-ul>li");
        console.log(oLi);
        var idx = $(this).index();
        oLi.hide();
        oLi.eq(idx).show();
    })
}



