angular.module('myReverseFilterApp', [])
.filter('reverse', function () {
    return function (input, uppercase) {
        input = input || '';
        let out = '';
        for(let i = 0; i < input.length; i ++) {
            out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if(uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
})
.controller('MyController', ['$scope', 'reverseFilter', function ($scope, reverseFilter) {
    $scope.greeting = 'Hello';
    $scope.filteredGreeting = reverseFilter($scope.greeting);
}]);
