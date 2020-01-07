
//封装原生ajax
function ajax(options) {
    var xhr = null;
    //获取参数
    var params = formsParams(options.data);
    //console.log("封装ajax传到服务器的数据params为："+params);
    //创建对象
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //连接类型(之后调用ajax函数时，大小写get/post都无所谓)
    if(options.type.toLowerCase() == "get"){
        xhr.open(options.type, options.url + "?" + params, options.async);
        xhr.send();
    } else if(options.type.toLowerCase() == "post"){
        xhr.open(options.type, options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    //监听事件
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            options.success(JSON.parse(xhr.responseText));
        }
    }

    //(传参)参数的函数
    function formsParams(data) {
        var arr = [];
        for(var prop in data) {
            arr.push(prop + "=" + data[prop]);
        }
        return arr.join("&");
    }
}



////调用函数ajax
//ajax({
//    url:"./user/list",
//    type:"GET",
//    async:true,
//    data: {
//        name:"张三",
//        age:18
//    },
//    success: function(data) {
//        console.log(data);
//    }
//})




































