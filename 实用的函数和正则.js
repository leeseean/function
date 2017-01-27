//序列化a=3&b=4;
 function serializeObj(obj) {
        var result = [];
        for (var property in obj)
          result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
 };
//验证是否数字
function isNumber(n){
  return !isNaN(parseFloat(n))&&isFinite(n);
};
//angualr兼容input type为date等时间类型不报错方式
<input type="date" ng-model="dateFromDatabase" /> //报错
//We need to set input type from Controller as:
$scope.dateType = "date";
<input type="{{dateType}}" ng-model="dateFromDatabase" />
//判断是不是数组
function isArrayFn (o) {
 return Object.prototype.toString.call(o) === '[object Array]';
}
//上传图片
http://localhost:8888/yabo/lotteryCenter/getAllGameTypeNewResultList?code=CQSSC&date=2016-08-23