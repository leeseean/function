angular.module('yourModule').directive('bindIf', function() {
    return {
        restrict: 'A',
        require: 'ngModel',

        link: function(scope, element, attrs, ngModel) {
            function parser(value) {
                var show = scope.$eval(attrs.bindIf);
                return show ? value : '';
            }

            ngModel.$parsers.push(parser);
        }
    };
});
ngModel.$parsers.push(function (value) {
  var numbers = value.replace(/\D/g, '');
  if (numbers !== value) {
    ngModel.$setViewValue(numbers);   // Update the `$viewValue`
    ngModel.$render();                // Update the element's displayed value
  }
  return numbers;
});

function getQueryString(url){
  var queryString = url.substr(url.indexOf('?')+1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  queryString.replace(reg,function(rs,$1,$2){
    val = String($2);
    obj[$1] = val;
  });
  return obj;
};