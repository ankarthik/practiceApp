
(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexCtrl', Index);

    function Index($scope) {
        $scope.modspaceNumber = '';

        ionic.Platform.ready(function(){
            $ionicLoading.show();
            activate();
            getAllData();
        });

        $scope.menuShow = function () {
            angular.element('.menu').addClass('swipe');
        };

        $scope.menuHide = function () {
            angular.element('.menu').removeClass('swipe');
        };

        $scope.menuToggle = function () {
            angular.element('.menu').toggleClass('swipe');
        };
    }

})();
