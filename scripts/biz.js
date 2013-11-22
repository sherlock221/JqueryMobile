function test(){
       alert("test....");
}

$(document).bind("mobileinit",function(){
    $.extend( $.mobile,{test:test });
});