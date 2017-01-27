demo.directive('menu', function(){

    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
            scope.displayMenu = false;

            scope.showMenu = function(e) {
                scope.displayMenu = true;
                e.stopPropagation();
            };

            scope.clickInner = function(e) {
                e.stopPropagation();
            };

            document.addEventListener('click', function(){
                scope.displayMenu = false;
                scope.$apply();
            }, false);

        },
        template: '<button class="showBtn" ng-click="showMenu($event)">显示菜单</button>' +
                  '<div class="menu" ng-class="{show: displayMenu}" ng-click="clickInner($event)">' +
                       '<ul>' +
                            '<li>菜单一</li>' +
                            '<li>菜单二</li>' +
                            '<li>菜单三</li>' +
                      '</ul>' +
                  '</div>'
    };
});
template:'<span>{{hhh}}</span>'