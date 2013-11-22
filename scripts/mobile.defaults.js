function test(){
       alert("test....");
}

$(document).bind("mobileinit",function(){
    $.extend( $.mobile,{
        //Ajax加载发生错误
        pageLoadErrorMessage : "服务器出现异常!",
        //Ajax加载发生错误样式
        pageLoadErrorMessageTheme : "e",
        //设置页面最小滚动距离
        minScrollBack             : 250,
        //设置ajax方式跳转页面的默认过场
        defaultPageTransition     :  "fade",
        //设置ajax方式对话框默认过场
        defaultDialogTransition   :  "pop",
        ignoreContentEnabled      : "true"

    });

});