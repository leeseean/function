var arry = [21, 23, 0, 0, 0, 0, 21, 255, 43, 154, 87, 32, 4, 13, 64, 7, 86, 52, 1, 23, 16, 57, 73, 1];
var str = base64Encode(arry); //转换字符串
console.log(str);
var arry2 = base64Decode(str).split(',');
console.log(arry2); //转回数组

function base64Encode(input) {
    var rv;
    rv = encodeURIComponent(input);
    rv = unescape(rv);
    rv = window.btoa(rv);
    return rv;
}

function base64Decode(input) {
    rv = window.atob(input);
    rv = escape(rv);
    rv = decodeURIComponent(rv);
    return rv;
}